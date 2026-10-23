import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { social, profile } from "../data/site";

const inputClass =
  "w-full rounded-xl border border-(--color-line) bg-(--color-canvas) px-4 py-3 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-soft)/70 focus:border-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)/40";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim().slice(0, 120);
    const email = String(data.get("email") || "").trim().slice(0, 254);
    const subject = String(data.get("subject") || "General inquiry").trim().slice(0, 160);
    const message = String(data.get("message") || "").trim().slice(0, 5000);

    if (!name || !email || !message) {
      setNotice("Please complete your name, email, and message before continuing.");
      return;
    }

    const body = ["Name: " + name, "Reply-to: " + email, "", message].join("\n");
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", profile.email);
    gmailUrl.searchParams.set("su", "[Portfolio] " + subject);
    gmailUrl.searchParams.set("body", body);

    setNotice("Gmail is opening with your message prepared. If prompted, sign in to Gmail, review the draft, and press Send.");
    const gmailWindow = window.open(gmailUrl.toString(), "_blank");
    if (gmailWindow) {
      gmailWindow.opener = null;
    } else {
      // If a browser blocks the new tab, open Gmail in the current tab instead.
      window.location.assign(gmailUrl.toString());
    }
  }

  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)">Contact</p>
          <h1 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Good conversations start here.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-(--color-ink-soft) sm:text-lg">
            Have a role, project idea, research question, or just want to connect? Send me a note or reach me through my profiles.
          </p>

          <div className="mt-9 space-y-4">
            <a href={"mailto:" + profile.email} className="flex items-center gap-3 text-sm transition-colors hover:text-(--color-accent)">
              <span className="grid size-10 place-items-center rounded-xl border border-(--color-line) bg-(--color-canvas-alt)">
                <Mail size={17} className="text-(--color-accent)" />
              </span>
              <span className="break-all">{profile.email}</span>
              <ArrowUpRight size={14} className="ml-auto shrink-0" />
            </a>
            <div className="flex items-center gap-3 text-sm text-(--color-ink-soft)">
              <span className="grid size-10 place-items-center rounded-xl border border-(--color-line) bg-(--color-canvas-alt)">
                <MapPin size={17} className="text-(--color-accent)" />
              </span>
              {profile.location}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-(--color-ink-soft) transition-colors hover:text-(--color-accent)">
                {item.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-5 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-accent)">Write a message</p>
              <h2 className="mt-2 font-display text-2xl font-medium">What would you like to discuss?</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="mb-2 block text-sm font-medium">Name</label>
                <input id="c-name" name="name" autoComplete="name" required maxLength={120} type="text" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-2 block text-sm font-medium">Email</label>
                <input id="c-email" name="email" autoComplete="email" required maxLength={254} type="email" placeholder="you@example.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="c-subject" className="mb-2 block text-sm font-medium">Subject</label>
              <select id="c-subject" name="subject" className={inputClass} defaultValue="General inquiry">
                <option>General inquiry</option>
                <option>Job opportunity</option>
                <option>Project collaboration</option>
                <option>Research discussion</option>
              </select>
            </div>

            <div>
              <label htmlFor="c-message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea id="c-message" name="message" required minLength={5} maxLength={5000} rows={6} placeholder="A little context goes a long way…" className={inputClass + " resize-y"} />
              <p className="mt-2 text-xs text-(--color-ink-soft)">Gmail will open with the recipient, subject, and message prefilled. You will need to press Send.</p>
            </div>

            {notice && (
              <p role="status" className="flex items-start gap-2 rounded-xl border border-(--color-line) bg-(--color-canvas) p-3 text-sm leading-6 text-(--color-ink-soft)">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-(--color-accent)" />
                {notice}
              </p>
            )}

            <div>
              <MagneticButton type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm font-semibold text-(--color-canvas) transition-colors hover:bg-(--color-accent-soft) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-canvas-alt) sm:w-auto">
                Prepare email <Send size={15} />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}