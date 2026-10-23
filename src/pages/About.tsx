import { motion } from "motion/react";
import { Award, GraduationCap, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { profile, education, achievements, certificates, skillGroups, social } from "../data/site";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">A little about me</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Curious by nature.
              <br />
              <span className="text-(--color-accent)">Engineer by practice.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-(--color-ink-soft) sm:text-lg">{profile.summary}</p>
            <p className="mt-5 text-sm text-(--color-ink-soft)">{profile.location}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              {social.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-(--color-accent)">
                  {item.label} <ArrowUpRight size={14} />
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-(--color-line) px-4 py-2 text-sm font-semibold transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                View résumé <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative ml-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] border border-(--color-line)" />
              <img
                src="/img/about-portrait.jpg"
                alt="Avneel Singh outdoors in the mountains"
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[1.6rem] border border-(--color-line) object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-(--color-line) bg-(--color-canvas-alt) px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Education</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Learning, year by year.</h2>
          </Reveal>
          <RevealGroup className="mt-10 divide-y divide-(--color-line) border-y border-(--color-line)" stagger={0.06}>
            {education.map((item) => (
              <motion.article variants={revealItem} key={item.degree + item.years} className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-(--color-accent)">{item.years}</span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">{item.degree}</h3>
                  <p className="mt-1 text-sm text-(--color-ink-soft)">{item.school}</p>
                  <p className="mt-3 text-sm leading-6 text-(--color-ink-soft)">{item.note}</p>
                </div>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
              <Award size={15} /> Milestones
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">Work worth celebrating.</h2>
            <ul className="mt-7 space-y-3">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3 rounded-xl border border-(--color-line) bg-(--color-canvas-alt) p-4 text-sm leading-6">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                  {achievement}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
              <GraduationCap size={15} /> Learning record
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">Courses & certificates.</h2>
            <ul className="mt-7 space-y-3">
              {certificates.map((certificate) => (
                <li key={certificate} className="flex items-start gap-3 border-b border-(--color-line) py-3 text-sm leading-6 text-(--color-ink-soft)">
                  <ArrowUpRight size={15} className="mt-1 shrink-0 text-(--color-accent)" />
                  {certificate}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-(--color-line) bg-(--color-canvas-alt) px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">My toolkit</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Skills I’m building on.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {skillGroups.map((group) => (
              <motion.article variants={revealItem} key={group.title} className="rounded-2xl border border-(--color-line) bg-(--color-canvas) p-5 sm:p-6">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-lg border border-(--color-line) px-2.5 py-1.5 text-xs text-(--color-ink-soft)">{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}