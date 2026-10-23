import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "../lib/router";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">404 · Page not found</p>
        <h1 className="mt-5 font-display text-5xl font-medium leading-tight tracking-tight sm:text-7xl">This page took a wrong turn.</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-(--color-ink-soft)">The address may be outdated or the page may have moved. Head back to the homepage or explore the projects.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-3.5 text-sm font-semibold text-(--color-canvas)">
            <ArrowLeft size={15} /> Back home
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-6 py-3.5 text-sm font-medium hover:border-(--color-accent) hover:text-(--color-accent)">
            View projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}