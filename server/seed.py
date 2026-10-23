"""Optional first-start demo seeding.

Demo-account creation is disabled unless ENABLE_DEMO_SEED is explicitly true.
When enabled for a trusted development environment, DEMO_PASSWORD must be set
to a strong, local-only password of at least 12 characters.

If server/seed.json exists, documents are inserted for that demo account:
    {"collections": {"transactions": [{"amount": 250, "note": "Books"}, ...]}}

A collection is seeded only while it is empty for that user, so restarts do not
duplicate rows. Documents without an id get seed-1, seed-2, ...
"""

from __future__ import annotations

import json
import os
from pathlib import Path

from auth import create_user
from db import db, now

SEED_PATH = Path(os.environ.get("APP_SEED_PATH") or Path(__file__).resolve().parent / "seed.json")
DEMO_EMAIL = os.environ.get("DEMO_EMAIL", "demo@example.com")
DEMO_PASSWORD = os.environ.get("DEMO_PASSWORD", "")


def _enabled() -> bool:
    return os.environ.get("ENABLE_DEMO_SEED", "").strip().lower() in {"1", "true", "yes"}


def seed() -> dict:
    report: dict = {"demo_user_created": False, "collections_seeded": []}
    if not _enabled():
        report["skipped"] = "demo seeding disabled; enable only in a trusted development environment"
        return report
    if len(DEMO_PASSWORD) < 12:
        report["seed_error"] = "ENABLE_DEMO_SEED requires DEMO_PASSWORD to contain at least 12 characters"
        return report

    with db() as conn:
        row = conn.execute("SELECT id FROM users WHERE email = ?", (DEMO_EMAIL,)).fetchone()
        if row is not None:
            uid = row["id"]
        elif conn.execute("SELECT 1 FROM users LIMIT 1").fetchone() is None:
            uid = create_user(conn, DEMO_EMAIL, DEMO_PASSWORD)
            report["demo_user_created"] = True
        else:
            return report

        if not SEED_PATH.exists():
            return report
        try:
            data = json.loads(SEED_PATH.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            report["seed_error"] = "seed.json is not valid JSON: " + str(exc)
            return report

        collections = data.get("collections") if isinstance(data, dict) else {}
        for col, docs in (collections or {}).items():
            if not isinstance(docs, list):
                continue
            if conn.execute(
                "SELECT 1 FROM docs WHERE owner = ? AND col = ? LIMIT 1", (uid, col)
            ).fetchone():
                continue
            t = now()
            for i, doc in enumerate(docs, start=1):
                if not isinstance(doc, dict):
                    continue
                doc = dict(doc)
                doc_id = str(doc.pop("id", "") or f"seed-{i}")
                for key in ("_created", "_updated"):
                    doc.pop(key, None)
                ts = t + i / 1000.0
                conn.execute(
                    "INSERT OR IGNORE INTO docs (col, id, owner, body, created, updated) VALUES (?,?,?,?,?,?)",
                    (col, doc_id, uid, json.dumps(doc, default=str), ts, ts),
                )
            report["collections_seeded"].append(col)
    return report