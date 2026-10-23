import os
import sys
import tempfile
import unittest
from pathlib import Path

SERVER_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(SERVER_DIR))

import db
import seed


class DemoSeedTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.old_env = {
            key: os.environ.get(key)
            for key in ("APP_DB_PATH", "ENABLE_DEMO_SEED")
        }
        os.environ["APP_DB_PATH"] = str(Path(self.tempdir.name) / "test.db")
        os.environ.pop("ENABLE_DEMO_SEED", None)
        db.init_db()

    def tearDown(self):
        for key, value in self.old_env.items():
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value
        self.tempdir.cleanup()

    def count_users(self):
        with db.db() as conn:
            return conn.execute("SELECT COUNT(*) AS n FROM users").fetchone()["n"]

    def test_demo_seed_is_disabled_by_default(self):
        report = seed.seed()
        self.assertIn("skipped", report)
        self.assertFalse(report["demo_user_created"])
        self.assertEqual(self.count_users(), 0)

    def test_demo_seed_requires_a_strong_configured_password(self):
        os.environ["ENABLE_DEMO_SEED"] = "true"
        previous_password = seed.DEMO_PASSWORD
        try:
            seed.DEMO_PASSWORD = ""
            report = seed.seed()
            self.assertIn("seed_error", report)
            self.assertEqual(self.count_users(), 0)
        finally:
            seed.DEMO_PASSWORD = previous_password

    def test_demo_seed_can_be_enabled_for_local_development(self):
        os.environ["ENABLE_DEMO_SEED"] = "true"
        previous_password = seed.DEMO_PASSWORD
        try:
            seed.DEMO_PASSWORD = "local-test-password-123"
            report = seed.seed()
            self.assertTrue(report["demo_user_created"])
            self.assertEqual(self.count_users(), 1)
        finally:
            seed.DEMO_PASSWORD = previous_password


if __name__ == "__main__":
    unittest.main()