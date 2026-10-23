import { motion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "../lib/router";
import { FloatingShapes } from "../components/FloatingShapes";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { profile, stats, skillGroups, projects, social } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <FloatingShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.8fr] lg:gap-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}
          >
            <motion.p variants={revealItem} className="inline-flex items-center gap-2 rounded-full border border-(--color-line) bg-(--color-canvas-alt) px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-(--color-accent)">
              <span className="size-1.5 rounded-full bg-(--color-accent)" />
              M.Tech Computer Science · IIT Bhubaneswar
            </motion.p>

            <motion.h1 variants={revealItem} className="mt-7 max-w-3xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Thoughtful code.
              <br />
              <span className="text-(--color-accent)">Useful software.</span>
            </motion.h1>

            <motion.p variants={revealItem} className="mt-7 max-w-xl text-base leading-8 text-(--color-ink-soft) sm:text-lg">
              I’m Avneel Singh — {profile.summary}
            </motion.p>

            <motion.div variants={revealItem} className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-3.5 text-sm font-semibold text-(--color-canvas) transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-canvas)">
                Explore projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-6 py-3.5 text-sm font-medium text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)">
                Get in touch <ArrowUpRight size={15} />
              </Link>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-6 py-3.5 text-sm font-medium text-(--color-ink-soft) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <FileText size={15} /> View résumé <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.div variants={revealItem} className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--color-ink-soft) transition-colors hover:text-(--color-accent)"
                >
                  {item.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-(--color-line)" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-(--color-line) bg-(--color-canvas-alt) p-2.5">
              <img
                src="/img/hero-portrait.jpg"
                alt="Portrait of Avneel Singh"
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-x-2.5 bottom-2.5 rounded-b-[1.2rem] bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-5 pt-16 text-white">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">Currently focused on</p>
                <p className="mt-2 font-display text-2xl font-medium">Engineering & AI/ML</p>
              </div>
            </div>
            <div className="absolute -left-5 top-8 rounded-2xl border border-(--color-line) bg-(--color-canvas-alt) px-4 py-3 shadow-2xl shadow-black/20 sm:-left-9">
              <p className="font-display text-xl font-medium">GATE ’24 · ’25</p>
              <p className="mt-0.5 text-xs text-(--color-ink-soft)">Qualified twice</p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-7xl items-center gap-3 text-xs uppercase tracking-[0.16em] text-(--color-ink-soft)">
          <ArrowDown size={14} className="text-(--color-accent)" />
          Scroll to explore
          <span className="h-px flex-1 bg-(--color-line)" />
        </div>
      </section>

      <section className="border-y border-(--color-line) bg-(--color-canvas-alt) px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <div className="h-full border-l border-(--color-line) pl-4 sm:pl-6">
                <p className="font-display text-3xl font-medium tracking-tight text-(--color-accent) sm:text-4xl">{item.number}</p>
                <p className="mt-2 max-w-40 text-xs leading-5 text-(--color-ink-soft) sm:text-sm">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Selected work</p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Built to be useful.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-(--color-ink-soft) sm:text-base">
                A selection of web development and machine-learning projects, with the technologies and decisions behind them.
              </p>
            </Reveal>
            <Link to="/projects" className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent) transition-colors hover:text-(--color-ink)">
              Browse all projects <ArrowUpRight size={15} />
            </Link>
          </div>

          <RevealGroup className="mt-10 grid gap-4 lg:grid-cols-3" stagger={0.08}>
            {projects.map((project, index) => (
              <motion.article
                variants={revealItem}
                key={project.title}
                className="group flex min-h-full flex-col rounded-2xl border border-(--color-line) bg-(--color-canvas-alt) p-6 transition-colors hover:border-(--color-accent)/60 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-(--color-line) bg-(--color-canvas) font-display text-lg text-(--color-accent)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-(--color-line) px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-(--color-ink-soft)">
                    {project.category}
                  </span>
                </div>
                <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-(--color-accent)">{project.tag}</p>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-(--color-ink-soft)">{project.points[0]}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((technology) => (
                    <span key={technology} className="rounded-md bg-(--color-canvas) px-2.5 py-1 text-[11px] text-(--color-ink-soft)">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-7 border-t border-(--color-line) pt-5">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-(--color-accent)">
                      View project <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-(--color-accent)">
                      Project details <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-y border-(--color-line) bg-(--color-canvas-alt) px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Toolkit</p>
            <h2 className="mt-4 max-w-md font-display text-4xl font-medium tracking-tight sm:text-5xl">Strong foundations. Practical tools.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-(--color-ink-soft)">
              I keep learning across core Computer Science, modern web development, and applied machine learning.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent) hover:text-(--color-ink)">
              More about me <ArrowRight size={15} />
            </Link>
          </Reveal>

          <RevealGroup className="grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {skillGroups.slice(0, 4).map((group) => (
              <motion.div variants={revealItem} key={group.title} className="rounded-2xl border border-(--color-line) bg-(--color-canvas) p-5">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-(--color-ink-soft)">{group.items.join(" · ")}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-8 sm:p-12 lg:p-16">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Have something in mind?</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Let’s make something that matters.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-(--color-ink-soft) sm:text-base">
                I’m happy to connect about software engineering, projects, research, and AI/ML.
              </p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3.5 text-sm font-semibold text-(--color-canvas) transition-transform hover:-translate-y-0.5">
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}