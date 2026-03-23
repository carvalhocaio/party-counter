import { notFound } from "next/navigation";

export default function StyleGuidePage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="flex min-h-full">
      <Sidebar />
      <main className="flex-1 px-8 py-12 max-w-5xl mx-auto">
        <Header />
        <ColorsSection />
        <TypographySection />
        <SpacingSection />
        <ShadowsSection />
        <BorderRadiusSection />
        <ComponentsSection />
        <PrinciplesSection />
      </main>
    </div>
  );
}

/* ─── Navigation ─── */

const NAV_ITEMS = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "shadows", label: "Shadows" },
  { id: "radius", label: "Radius" },
  { id: "components", label: "Components" },
  { id: "principles", label: "Principles" },
];

function Sidebar() {
  return (
    <nav className="sticky top-0 h-screen w-52 shrink-0 bg-surface-container-low p-6 hidden lg:block">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-6">
        Style Guide
      </p>
      <ul className="space-y-3">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm font-label text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ─── Helpers ─── */

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-8 font-display text-2xl font-bold text-on-surface mb-8 mt-20 first:mt-0"
    >
      {title}
    </h2>
  );
}

function ColorSwatch({
  name,
  bg,
  textColor = "text-on-surface",
}: {
  name: string;
  bg: string;
  textColor?: string;
}) {
  return (
    <div className="space-y-2">
      <div
        className={`${bg} ${textColor} h-16 rounded-lg shadow-sm flex items-end p-3`}
      >
        <span className="font-label text-xs font-medium opacity-80">
          {name}
        </span>
      </div>
    </div>
  );
}

/* ─── Header ─── */

function Header() {
  return (
    <section className="mb-16">
      <h1 className="font-display text-[3.5rem] font-extrabold leading-tight text-on-surface">
        Style Guide
      </h1>
      <p className="font-body text-lg text-on-surface-variant mt-4 max-w-2xl">
        A living reference for the &ldquo;Backyard Samba&rdquo; design system.
        Organic festivity — polished but never stiff.
      </p>
    </section>
  );
}

/* ─── 1. Colors ─── */

function ColorsSection() {
  return (
    <section>
      <SectionHeading id="colors" title="Colors" />

      <h3 className="font-display text-lg font-semibold mb-4">
        Background & Surface
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        <ColorSwatch name="background" bg="bg-background" />
        <ColorSwatch name="surface" bg="bg-surface" />
        <ColorSwatch name="surface-bright" bg="bg-surface-bright" />
        <ColorSwatch name="surface-dim" bg="bg-surface-dim" />
        <ColorSwatch name="surface-variant" bg="bg-surface-variant" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-4">
        Surface Container Scale
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
        <ColorSwatch name="lowest" bg="bg-surface-container-lowest" />
        <ColorSwatch name="low" bg="bg-surface-container-low" />
        <ColorSwatch name="default" bg="bg-surface-container" />
        <ColorSwatch name="high" bg="bg-surface-container-high" />
        <ColorSwatch name="highest" bg="bg-surface-container-highest" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-4">
        Primary (Sun Yellow / Amber)
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        <ColorSwatch name="primary" bg="bg-primary" textColor="text-on-primary" />
        <ColorSwatch name="primary-dim" bg="bg-primary-dim" textColor="text-on-primary" />
        <ColorSwatch name="primary-container" bg="bg-primary-container" textColor="text-on-primary-container" />
        <ColorSwatch name="primary-fixed" bg="bg-primary-fixed" textColor="text-on-primary-container" />
        <ColorSwatch name="on-primary" bg="bg-on-primary" textColor="text-primary" />
        <ColorSwatch name="on-primary-container" bg="bg-on-primary-container" textColor="text-primary-container" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-4">
        Secondary (Deep Green)
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        <ColorSwatch name="secondary" bg="bg-secondary" textColor="text-on-secondary" />
        <ColorSwatch name="secondary-container" bg="bg-secondary-container" textColor="text-on-secondary-container" />
        <ColorSwatch name="on-secondary" bg="bg-on-secondary" textColor="text-secondary" />
        <ColorSwatch name="on-secondary-container" bg="bg-on-secondary-container" textColor="text-secondary-container" />
      </div>

      <h3 className="font-display text-lg font-semibold mb-4">
        Outline & Error
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        <ColorSwatch name="outline" bg="bg-outline" textColor="text-on-primary" />
        <ColorSwatch name="outline-variant" bg="bg-outline-variant" />
        <ColorSwatch name="error" bg="bg-error" textColor="text-on-error" />
        <ColorSwatch name="error-container" bg="bg-error-container" textColor="text-on-error-container" />
      </div>

      {/* Tonal Hierarchy Demo */}
      <h3 className="font-display text-lg font-semibold mb-4">
        Tonal Hierarchy (Nested Cards)
      </h3>
      <div className="bg-surface-container rounded-lg p-6">
        <p className="font-label text-xs text-on-surface-variant mb-3">
          surface-container
        </p>
        <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm">
          <p className="font-label text-xs text-on-surface-variant mb-3">
            surface-container-lowest (lifted card)
          </p>
          <div className="bg-surface-container-low rounded-lg p-4">
            <p className="font-label text-xs text-on-surface-variant">
              surface-container-low (inner element)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. Typography ─── */

function TypographySection() {
  return (
    <section>
      <SectionHeading id="typography" title="Typography" />

      <div className="space-y-10">
        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Display — Epilogue / 3.5rem / 800
          </p>
          <p className="font-display text-[3.5rem] font-extrabold leading-tight">
            PAGODE DA GABI
          </p>
        </div>

        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Headline — Epilogue / 2rem / 700
          </p>
          <p className="font-display text-[2rem] font-bold">
            Sunday Afternoon Vibes
          </p>
        </div>

        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Title — Be Vietnam Pro / 1.25rem / 600
          </p>
          <p className="font-body text-[1.25rem] font-semibold">
            Event Details & Location
          </p>
        </div>

        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Body LG — Be Vietnam Pro / 1.125rem / 400
          </p>
          <p className="font-body text-[1.125rem]">
            Join us for an unforgettable afternoon of samba, cold beer, and good
            company under the Brazilian sun.
          </p>
        </div>

        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Body MD — Be Vietnam Pro / 1rem / 400
          </p>
          <p className="font-body text-base">
            Bring your favorite dish and your dancing shoes. The party starts at
            2pm and goes until the last song plays.
          </p>
        </div>

        <div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-3">
            Label — Plus Jakarta Sans / 0.75rem / 600
          </p>
          <p className="font-label text-xs font-semibold uppercase tracking-wide">
            RSVP by March 15 · 42 spots remaining
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. Spacing ─── */

const SPACING_SCALE = [
  { name: "1", value: "0.25rem", width: "w-1" },
  { name: "2", value: "0.5rem", width: "w-2" },
  { name: "3", value: "0.75rem", width: "w-3" },
  { name: "4", value: "1rem", width: "w-4" },
  { name: "6", value: "1.5rem", width: "w-6" },
  { name: "8", value: "2rem", width: "w-8" },
  { name: "10", value: "2.5rem", width: "w-10" },
  { name: "12", value: "3rem", width: "w-12" },
  { name: "16", value: "4rem", width: "w-16" },
  { name: "20", value: "5rem", width: "w-20" },
  { name: "24", value: "6rem", width: "w-24" },
  { name: "32", value: "8rem", width: "w-32" },
];

function SpacingSection() {
  return (
    <section>
      <SectionHeading id="spacing" title="Spacing" />

      <div className="space-y-3">
        {SPACING_SCALE.map((s) => (
          <div key={s.name} className="flex items-center gap-4">
            <span className="font-label text-xs text-on-surface-variant w-8 text-right shrink-0">
              {s.name}
            </span>
            <div
              className={`${s.width} h-4 rounded-sm bg-primary-container`}
            />
            <span className="font-label text-xs text-on-surface-variant">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-surface-container-low rounded-lg p-6">
        <p className="font-label text-xs text-on-surface-variant mb-2">
          Design tokens from DESIGN.md
        </p>
        <p className="font-body text-sm text-on-surface">
          <strong>Spacing 8</strong> (2.75rem) — card content separation
          &nbsp;·&nbsp;
          <strong>Spacing 24</strong> (8.5rem) — major section breathing room
        </p>
      </div>
    </section>
  );
}

/* ─── 4. Shadows & Elevation ─── */

function ShadowsSection() {
  return (
    <section>
      <SectionHeading id="shadows" title="Shadows & Elevation" />

      <p className="font-body text-sm text-on-surface-variant mb-6">
        Beer-tinted shadows using rgba(50, 46, 37) — warm instead of grey.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {[
          { name: "sm", cls: "shadow-sm" },
          { name: "md", cls: "shadow-md" },
          { name: "lg", cls: "shadow-lg" },
          { name: "xl", cls: "shadow-xl" },
        ].map((s) => (
          <div
            key={s.name}
            className={`bg-surface-container-lowest rounded-lg p-6 ${s.cls}`}
          >
            <p className="font-label text-xs font-semibold text-on-surface">
              shadow-{s.name}
            </p>
          </div>
        ))}
      </div>

      <h3 className="font-display text-lg font-semibold mb-4">
        Tonal Surface Nesting
      </h3>
      <div className="bg-surface rounded-lg p-6">
        <p className="font-label text-xs text-on-surface-variant mb-4">
          Surface → Container Low → Container Lowest (lift without shadows)
        </p>
        <div className="bg-surface-container-low rounded-lg p-5">
          <div className="bg-surface-container-lowest rounded-lg p-5">
            <p className="font-body text-sm text-on-surface">
              Depth through tonal shifts, not drop shadows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. Border Radius ─── */

const RADIUS_TOKENS = [
  { name: "sm", class: "rounded-sm", value: "0.5rem" },
  { name: "md", class: "rounded-md", value: "0.75rem" },
  { name: "lg", class: "rounded-lg", value: "1rem" },
  { name: "xl", class: "rounded-xl", value: "1.5rem" },
  { name: "full", class: "rounded-full", value: "9999px" },
];

function BorderRadiusSection() {
  return (
    <section>
      <SectionHeading id="radius" title="Border Radius" />

      <div className="flex flex-wrap gap-6">
        {RADIUS_TOKENS.map((r) => (
          <div key={r.name} className="text-center space-y-2">
            <div
              className={`${r.class} w-20 h-20 bg-primary-container shadow-sm`}
            />
            <p className="font-label text-xs font-semibold text-on-surface">
              {r.name}
            </p>
            <p className="font-label text-xs text-on-surface-variant">
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 6. Components ─── */

function ComponentsSection() {
  return (
    <section>
      <SectionHeading id="components" title="Components" />

      {/* Buttons */}
      <h3 className="font-display text-lg font-semibold mb-4">
        Buttons — &ldquo;Bottle Cap&rdquo; Style
      </h3>
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <button className="bg-primary-container text-on-primary-container font-body font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
          RSVP Now
        </button>
        <button className="bg-surface-container-highest text-secondary font-body font-semibold px-6 py-3 rounded-full hover:shadow-sm transition-shadow">
          View Details
        </button>
        <button className="bg-primary-container/60 text-on-primary-container/60 font-body font-semibold px-6 py-3 rounded-full cursor-not-allowed">
          Disabled
        </button>
      </div>

      {/* Cards */}
      <h3 className="font-display text-lg font-semibold mb-4">
        Cards — &ldquo;Flyer&rdquo; Style
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-surface-container-lowest rounded-lg p-6 shadow-md">
          <p className="font-display text-xl font-bold mb-[2.75rem]">
            Sunday Pagode
          </p>
          <p className="font-body text-sm text-on-surface-variant mb-[2.75rem]">
            Live samba, cold drinks, and all your friends. March 28 at 2pm.
          </p>
          <button className="bg-primary-container text-on-primary-container font-body font-semibold text-sm px-5 py-2.5 rounded-full">
            Join the Party
          </button>
        </div>
        <div className="bg-surface-container-low rounded-lg p-6 shadow-sm">
          <p className="font-display text-xl font-bold mb-[2.75rem]">
            Guest List
          </p>
          <p className="font-body text-sm text-on-surface-variant mb-[2.75rem]">
            42 confirmed · 8 pending · 12 spots left
          </p>
          <button className="bg-surface-container-highest text-secondary font-body font-semibold text-sm px-5 py-2.5 rounded-full">
            See All Guests
          </button>
        </div>
      </div>

      {/* Inputs */}
      <h3 className="font-display text-lg font-semibold mb-4">Input Fields</h3>
      <div className="max-w-sm space-y-4 mb-10">
        <div>
          <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wide block mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="e.g. Maria Silva"
            className="w-full bg-surface-container-low rounded-lg px-4 py-3 font-body text-base text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>
        <div>
          <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wide block mb-2">
            Message
          </label>
          <textarea
            placeholder="Any food preferences?"
            rows={3}
            className="w-full bg-surface-container-low rounded-lg px-4 py-3 font-body text-base text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Chips */}
      <h3 className="font-display text-lg font-semibold mb-4">
        Chips — &ldquo;Ticket&rdquo; Style
      </h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {["Live Music", "Open Bar", "Pool Party", "BBQ", "Samba"].map(
          (tag) => (
            <span
              key={tag}
              className="bg-secondary-container text-on-secondary-container font-label text-xs font-semibold px-4 py-2 rounded-sm"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Glassmorphism */}
      <h3 className="font-display text-lg font-semibold mb-4">
        Glassmorphism
      </h3>
      <div
        className="relative rounded-lg p-8 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dim) 100%)",
        }}
      >
        <p className="font-display text-2xl font-bold text-on-primary mb-6">
          Warm gradient backdrop
        </p>
        <div className="inline-flex items-center gap-2 bg-surface-bright/40 backdrop-blur-[12px] rounded-full px-5 py-2.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-label text-sm font-semibold text-on-surface">
            Live Music Now
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. Principles ─── */

function PrinciplesSection() {
  return (
    <section className="pb-20">
      <SectionHeading id="principles" title="Design Principles" />

      <div className="space-y-10">
        {/* Overlap */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Do: Overlap Elements
          </h3>
          <div className="relative h-32 max-w-xs">
            <div className="absolute left-0 top-2 w-28 h-28 rounded-full bg-primary-fixed" />
            <div className="absolute left-14 top-0 w-28 h-28 rounded-lg bg-surface-container-lowest shadow-lg flex items-center justify-center">
              <span className="font-label text-xs text-on-surface-variant">
                Photo
              </span>
            </div>
          </div>
        </div>

        {/* No pure black */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Do: Use on-surface instead of black
          </h3>
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <p className="text-on-surface font-body text-lg font-semibold mb-1">
                Correct
              </p>
              <p className="font-label text-xs text-on-surface-variant">
                #322e25 (on-surface)
              </p>
            </div>
            <div className="text-center">
              <p className="text-black font-body text-lg font-semibold mb-1">
                Avoid
              </p>
              <p className="font-label text-xs text-on-surface-variant">
                #000000 (pure black)
              </p>
            </div>
          </div>
        </div>

        {/* Background shift vs border */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Do: Use background shifts, not borders
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-label text-xs text-secondary font-semibold mb-3 uppercase tracking-wide">
                Correct
              </p>
              <div className="bg-surface-container rounded-lg p-5">
                <div className="bg-surface-container-lowest rounded-lg p-4">
                  <p className="font-body text-sm text-on-surface">
                    Content separated by tonal shift
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-label text-xs text-error font-semibold mb-3 uppercase tracking-wide">
                Avoid
              </p>
              <div className="rounded-lg p-5 border border-outline-variant">
                <div className="rounded-lg p-4 border-t border-outline-variant">
                  <p className="font-body text-sm text-on-surface">
                    Content separated by 1px borders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetry */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Do: Embrace Asymmetry
          </h3>
          <div className="bg-surface-container rounded-lg p-8 max-w-lg">
            <p className="font-display text-3xl font-bold text-left">
              PAGODE
            </p>
            <p className="font-display text-3xl font-bold text-right text-primary">
              DA GABI
            </p>
            <p className="font-body text-sm text-on-surface-variant mt-4 text-right">
              Sunday · March 28 · 2pm
            </p>
          </div>
        </div>

        {/* Signature Gradient */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Signature: Lacquered Wood Gradient
          </h3>
          <div
            className="rounded-lg p-8 shadow-lg"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, var(--color-primary) 0%, var(--color-primary-dim) 100%)",
            }}
          >
            <p className="font-display text-2xl font-bold text-on-primary">
              Primary CTA or Hero Section
            </p>
            <p className="font-body text-sm text-on-primary/80 mt-2">
              Radial gradient from primary → primary-dim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
