import sys
import unittest
from pathlib import Path

from fastapi import HTTPException

SERVER_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(SERVER_DIR))

import auth


class AuthInputTests(unittest.TestCase):
    def test_password_must_meet_minimum_length(self):
        with self.assertRaises(HTTPException):
            auth._check_password("short")
        auth._check_password("a-longer-password")

    def test_password_has_a_reasonable_maximum_length(self):
        with self.assertRaises(HTTPException):
            auth._check_password("x" * (auth.MAX_PASSWORD + 1))

    def test_email_is_normalized(self):
        self.assertEqual(auth._norm_email("  AVNEEL@example.com "), "avneel@example.com")

    def test_malformed_email_is_rejected(self):
        for email in ("not-an-email", "user @example.com", "@example.com", "user@"):
            with self.subTest(email=email):
                with self.assertRaises(HTTPException):
                    auth._norm_email(email)


if __name__ == "__main__":
    unittest.main()