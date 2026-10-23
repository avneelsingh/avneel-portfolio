import { ArrowUpRight } from "lucide-react";
import { Link } from "../lib/router";
import { nav, social, profile } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-(--color-canvas-alt)">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-2xl font-medium tracking-tight">
              Avneel Singh<span className="text-(--color-accent)">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-(--color-ink-soft)">
              M.Tech Computer Science student at IIT Bhubaneswar, exploring software engineering and practical AI/ML.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-ink-soft)">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-ink) transition-colors hover:text-(--color-accent)">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-ink-soft)">Get in touch</p>
            <a href={"mailto:" + profile.email} className="mt-4 inline-block break-all text-sm text-(--color-ink) transition-colors hover:text-(--color-accent)">
              {profile.email}
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-ink) transition-colors hover:text-(--color-accent)">
              View résumé <ArrowUpRight size={13} />
            </a>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-(--color-ink-soft) transition-colors hover:text-(--color-accent)"
                >
                  {item.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-(--color-line) pt-6 text-xs text-(--color-ink-soft) sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Avneel Singh. All rights reserved.</p>
          <p>Designed with care · Built with React and TypeScript</p>
        </div>
      </div>
    </footer>
  );
}