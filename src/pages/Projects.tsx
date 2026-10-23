import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/site";

const filters = ["All", "Web Development", "AI/ML", "Software Development"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filteredProjects = projects.filter((project) => filter === "All" || project.category === filter);

  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Projects & experiments</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Selected work.
              <br />
              <span className="text-(--color-accent)">Real problems, practical builds.</span>
            </h1>
            <p className="max-w-xl text-sm leading-7 text-(--color-ink-soft) sm:text-base">
              A selection of projects spanning web development and machine learning. Each one is an opportunity to turn concepts into something useful.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-(--color-line) py-4">
          <p className="text-sm text-(--color-ink-soft)">{filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}</p>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={
                  "rounded-full border px-4 py-2 text-xs font-medium transition-colors " +
                  (filter === item
                    ? "border-(--color-accent) bg-(--color-accent) text-(--color-canvas)"
                    : "border-(--color-line) text-(--color-ink-soft) hover:border-(--color-accent) hover:text-(--color-ink)")
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} className="h-full" delay={index * 0.03}>
              <article className="flex h-full flex-col rounded-2xl border border-(--color-line) bg-(--color-canvas-alt) p-6 transition-colors hover:border-(--color-accent)/55 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-accent)">
                    <Sparkles size={14} /> {project.category}
                  </span>
                  <span className="rounded-full border border-(--color-line) px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-(--color-ink-soft)">
                    {project.tag}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{project.title}</h2>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-7 text-(--color-ink-soft)">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-(--color-line) pt-5">
                  {project.stack.map((technology) => (
                    <span key={technology} className="rounded-md bg-(--color-canvas) px-2.5 py-1.5 text-xs text-(--color-ink-soft)">
                      {technology}
                    </span>
                  ))}
                </div>

                {(project.live || project.github) && (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-(--color-accent)">
                        Live demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-(--color-accent)">
                        Source code <Github size={14} />
                      </a>
                    )}
                  </div>
                )}
                {!project.live && !project.github && (
                  <p className="mt-6 text-xs text-(--color-ink-soft)">Project summary · <ArrowUpRight size={12} className="inline" /> Details on request</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}