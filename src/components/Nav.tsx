import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link, useRoutePath } from "../lib/router";
import { nav, profile } from "../data/site";

type Theme = "dark" | "light";

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={"Switch to " + nextTheme + " theme"}
      aria-pressed={theme === "light"}
      title={"Switch to " + nextTheme + " theme"}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-(--color-line) text-(--color-ink-soft) transition-colors hover:border-(--color-accent) hover:bg-(--color-canvas-alt) hover:text-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export function Nav() {
  const path = useRoutePath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme still works for the current session when storage is unavailable.
    }

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.content = theme === "dark" ? "#111214" : "#f7f8f5";
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 " +
        (scrolled
          ? "border-(--color-line) bg-(--color-canvas)/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-(--color-canvas)/65 backdrop-blur-sm")
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation">
        <Link to="/" className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-(--color-ink)">
          <span className="grid size-9 place-items-center rounded-xl bg-(--color-accent) font-display text-lg font-semibold text-(--color-canvas)">A</span>
          <span>Avneel Singh<span className="text-(--color-accent)"></span></span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={path === item.to ? "page" : undefined}
              className={
                "relative py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:text-(--color-accent) " +
                (path === item.to ? "text-(--color-accent)" : "text-(--color-ink-soft)")
              }
            >
              {item.label}
              {path === item.to && <span className="absolute inset-x-0 -bottom-1 h-px bg-(--color-accent)" />}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-medium text-(--color-ink-soft) transition-colors hover:text-(--color-accent)"
          >
            Résumé <ArrowUpRight size={14} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-5 py-2.5 text-sm font-medium transition-colors hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-canvas)"
          >
            Let’s talk <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-xl border border-(--color-line) text-(--color-ink) transition-colors hover:border-(--color-accent)"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-(--color-line) bg-(--color-canvas) px-5 py-5 sm:px-8 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={path === item.to ? "page" : undefined}
                className={
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-(--color-canvas-alt) " +
                  (path === item.to ? "text-(--color-accent)" : "text-(--color-ink)")
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-(--color-ink) transition-colors hover:bg-(--color-canvas-alt) hover:text-(--color-accent)"
            >
              View résumé <ArrowUpRight size={15} />
            </a>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-canvas)"
            >
              Let’s talk <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
