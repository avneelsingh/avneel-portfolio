# Personal Brand Website Template - Entrepreneur, Author & Keynote Speaker

Premium personal brand website for an entrepreneur, author and keynote speaker (Elena Voss) in a warm ivory and blush theme with elegant serif headlines, terracotta accents and a soft golden glow. Features a split hero with portrait and Book a keynote / Meet Elena buttons, Featured In press logos, animated stats (12M+ audience, 180+ keynotes, 3 books, $40M revenue), biography, a milestones timeline, three bestselling books, latest videos, client testimonials, newsletter articles, upcoming events and a newsletter signup. Nav covers Speaking, Content, Podcast, Newsletter, Courses and Media Kit. Fully phone responsive.

> Generated from this template's own files. Read THIS instead of exploring the tree — it already says where everything is.

## Where the copy lives

**`src/data/site.ts`** holds the site's strings. Rewrite it in ONE edit for the real business. Open a component only when its STRUCTURE must change.

## Imagery — 9 file(s) shipped

### Photos of a person — ASK before you do anything with these

These show the template's sample model, not the user. "Reuse the imagery" does NOT apply to a face: a portfolio or personal brand site showing someone else is the one place silent reuse fails them. Ask **once** (AskUser) whether to:

1. use their own photo — they can attach it in the chat (recommended)
2. generate a portrait for them
3. keep the template's photo

Do not silently keep someone else's face, and do not silently generate one.

- `public/img/about-portrait.png`
- `public/img/hero-portrait.png`

### All other imagery

These ARE the design the user picked. **Reuse them.** Generating a replacement set is the most expensive thing in this workflow and makes the result look nothing like the preview they chose. Generate at most 2, only when the brief names a subject the existing art plainly cannot show, and keep the filename.

Never `Read` an image: it returns base64 and tells you nothing the filename does not.

| file | bytes |
| --- | ---: |
| `public/favicon.svg` | 272 |
| `public/img/about-portrait.png` | 609,324 |
| `public/img/backstage.png` | 667,232 |
| `public/img/books.png` | 759,880 |
| `public/img/courses-hero.png` | 720,520 |
| `public/img/hero-portrait.png` | 656,608 |
| `public/img/podcast-studio.png` | 656,537 |
| `public/img/speaking-stage.png` | 564,820 |
| `public/og-image.jpg` | 656,608 |

## Sections (14)

Open only what you change.

- `src/components/FloatingShapes.tsx` (1,008 B)
- `src/components/Footer.tsx` (2,824 B)
- `src/components/MagneticButton.tsx` (1,183 B)
- `src/components/Nav.tsx` (3,260 B)
- `src/components/NewsletterForm.tsx` (2,239 B)
- `src/components/Reveal.tsx` (1,167 B)
- `src/components/SpeakingInquiryForm.tsx` (4,555 B)
- `src/components/Testimonials.tsx` (2,321 B)
- `src/components/VideoGrid.tsx` (3,260 B)
- `src/pages/About.tsx` (5,204 B)
- `src/pages/Contact.tsx` (5,661 B)
- `src/pages/Courses.tsx` (4,000 B)
- `src/pages/Home.tsx` (15,764 B)
- `src/pages/Speaking.tsx` (4,924 B)

## Placeholder brand: "Elena Voss" — 46 occurrence(s) in 10 file(s)

It is hardcoded outside the content module too, in several spellings:

- `Elena Voss` ×14
- `elenavoss` ×15
- `ELENA` ×1
- `Elena` ×16

Replace **every spelling in ONE command** (fill each `<…>`; order matters — longest first), then confirm with the grep, which must print nothing:

```
grep -rlE 'Elena Voss|elenavoss|ELENA|Elena' src index.html | xargs sed -i -e 's/Elena Voss/<Full Name>/g' -e 's/elenavoss/<fullname, lowercase, no spaces>/g' -e 's/ELENA/<FIRST NAME, UPPERCASE>/g' -e 's/Elena/<First name>/g'
grep -rniE 'elena|voss' src index.html
```

Never replace it occurrence by occurrence, or one spelling per turn — that is a tool call each.

- `index.html` ×20
- `src/pages/Home.tsx` ×9
- `src/pages/About.tsx` ×6
- `src/data/site.ts` ×5
- `src/pages/Speaking.tsx` ×5
- `src/components/Nav.tsx` ×4
- `src/components/Footer.tsx` ×4
- `src/pages/Contact.tsx` ×3
- `src/pages/Courses.tsx` ×3
- `src/components/SpeakingInquiryForm.tsx` ×1

## How to edit

- **One change per file per turn.** Rewrite a section with ONE Edit covering all its copy, or `Write` the whole file — these are small.
- Several Edits to the **same** file in one turn conflict: the first lands, the rest fail as "modified since last read" and must be retried.
- Editing **different** files in parallel is fine, and the fast way.

## Keep

- The palette, type scale, spacing and layout — that is what was chosen.
- The shipped imagery and its framing.

## Replace

- Every visible string: names, headings, body copy, stats, contact details.
- The placeholder brand this template was built around — a site still carrying it has failed.
- `index.html` title/description and `public/og-image.*` so the page does not advertise the template's own subject.
