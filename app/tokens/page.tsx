import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

const tokenJson = `{
  "color": {
    "primary": {
      "50":  "#EEF3FF",
      "100": "#DDEAFF",
      "200": "#BDCEFF",
      "300": "#91AFFF",
      "400": "#5E8AFF",
      "500": "#0047FF",
      "600": "#0038CC",
      "700": "#0029A3",
      "800": "#001F7A",
      "900": "#001552"
    },
    "accent": {
      "400": "#FF7A4A",
      "500": "#FF5A1F",
      "600": "#E04A12"
    },
    "neutral": {
      "50":  "#F4F6FA",
      "200": "#E2E8F0",
      "400": "#94A3B8",
      "500": "#64748B",
      "600": "#475569",
      "700": "#334155",
      "900": "#0A0E1A"
    },
    "semantic": {
      "success": "#00C853",
      "warning": "#FFB300",
      "error":   "#FF1744",
      "info":    "#0288D1"
    }
  },
  "spacing": {
    "1": "4px",  "2": "8px",
    "3": "12px", "4": "16px",
    "6": "24px", "8": "32px",
    "12": "48px","16": "64px"
  },
  "radius": {
    "sm":   "6px",
    "md":   "10px",
    "lg":   "16px",
    "pill": "100px"
  },
  "typography": {
    "family": {
      "display": "Anton",
      "heading": "Barlow Condensed",
      "body":    "Inter"
    }
  }
}`;

const cssVars = `:root {
  /* Color — Primary */
  --cpsl-blue-50:  #EEF3FF;
  --cpsl-blue-500: #0047FF;
  --cpsl-blue-600: #0038CC;
  --cpsl-blue-900: #001552;

  /* Color — Accent */
  --cpsl-orange-500: #FF5A1F;
  --cpsl-orange-600: #E04A12;

  /* Color — Neutral */
  --cpsl-neutral-50:  #F4F6FA;
  --cpsl-neutral-200: #E2E8F0;
  --cpsl-neutral-400: #94A3B8;
  --cpsl-neutral-600: #475569;
  --cpsl-neutral-900: #0A0E1A;

  /* Semantic */
  --cpsl-success: #00C853;
  --cpsl-warning: #FFB300;
  --cpsl-error:   #FF1744;
  --cpsl-info:    #0288D1;

  /* Surface tokens (swap in dark mode) */
  --surface-1:     #FFFFFF;
  --surface-2:     #F4F6FA;
  --surface-3:     #E2E8F0;
  --text-primary:  #0A0E1A;
  --text-secondary:#475569;
  --text-muted:    #94A3B8;
  --border:        #E2E8F0;

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;
  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px;
  --space-12: 48px; --space-16: 64px;

  /* Border radius */
  --radius-sm:   6px;  --radius-md: 10px;
  --radius-lg:   16px; --radius-pill: 100px;

  /* Typefaces */
  --font-display: 'Anton', sans-serif;
  --font-heading: 'Barlow Condensed', sans-serif;
  --font-body:    'Inter', sans-serif;
}

/* Dark mode */
[data-theme="dark"] {
  --surface-1:     #0A1628;
  --surface-2:     #020B1A;
  --surface-3:     #1E2D45;
  --text-primary:  #F4F6FA;
  --text-secondary:#94A3B8;
  --text-muted:    #475569;
  --border:        #1E2D45;
}`;

const checklist = [
  "Uses design tokens only — no hardcoded colors, spacing, or radii",
  "All interactive states documented: default, hover, active, focus, disabled",
  "WCAG AA contrast verified (4.5:1 for body text, 3:1 for large text)",
  "Fully keyboard accessible — focus ring, tab order, no keyboard traps",
  "Responsive across all 5 breakpoints (375px → 1440px)",
  "Dark mode via surface tokens — no per-component dark overrides",
  "Semantic HTML with correct ARIA attributes documented",
  "Minimum 44×44px touch target on all interactive elements",
];

const principles = [
  { icon: "⚡", title: "Speed First", desc: "Optimistic updates, skeleton screens, and sub-200ms interactions keep fans engaged." },
  { icon: "🎯", title: "Data at a Glance", desc: "Large numerals, high contrast. Legible in bright sunlight on a mobile screen." },
  { icon: "♿", title: "Inclusive Default", desc: "WCAG AA always. Color is never the only signal — always paired with label or icon." },
  { icon: "🏟️", title: "Brand Cohesion", desc: "Tokens enforced everywhere. No one-off hex values in component implementations." },
  { icon: "📱", title: "Mobile-Led", desc: "44×44px touch targets. All layouts designed mobile-first, then scaled to desktop." },
];

export default function TokensPage() {
  return (
    <div style={{ background: "#0A0E1A", minHeight: "100vh" }}>
      <div style={{ background: "#020B1A", borderBottom: "1px solid #1E2D45" }}>
        <div className="px-12 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "4px", height: "40px", background: "#0047FF", borderRadius: "2px" }} />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#0047FF" }}>11 — Tokens &amp; Dev Guide</div>
              <h1 className="text-4xl font-bold" style={{ color: "#F4F6FA", letterSpacing: "-0.5px" }}>Design Tokens &amp; Dev Guide</h1>
            </div>
          </div>
          <p className="text-base leading-relaxed pl-4 border-l-2" style={{ color: "#64748B", borderColor: "#1E2D45", maxWidth: "560px" }}>
            All design decisions codified as JSON tokens and CSS custom properties. Ship consistently across React, Vue, Svelte, Next.js, and plain HTML.
          </p>
        </div>
      </div>

      <div className="px-12 py-12">
        <Section title="tokens.json">
          <CodeBlock code={tokenJson} language="json" />
        </Section>

        <Section title="tokens.css — CSS Custom Properties">
          <CodeBlock code={cssVars} language="css" />
        </Section>

        <Section title="Contribution Checklist">
          <div className="rounded-2xl p-6 border" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
            <div className="grid grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: "#0A1628", border: "1px solid #1E2D45" }}>
                  <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#0047FF22", border: "1.5px solid #0047FF" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#0047FF" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Design Principles">
          <div className="grid grid-cols-5 gap-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl p-5 border" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-sm font-bold mb-2" style={{ color: "#F4F6FA" }}>{p.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Supported Stacks">
          <div className="rounded-2xl p-6 border" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Vue 3", "Svelte", "Remix", "Vanilla CSS", "Tailwind CSS", "CSS Modules"].map(s => (
                <span key={s} className="px-4 py-2 rounded-lg text-sm font-semibold border" style={{ background: "#0047FF22", borderColor: "#0047FF44", color: "#7C9DFF" }}>{s}</span>
              ))}
            </div>
          </div>
        </Section>

        <div className="flex items-center justify-between p-6 rounded-2xl border mt-4" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
          <div>
            <div className="text-xl font-bold mb-1" style={{ color: "#F4F6FA" }}>CPSL Design System <span style={{ color: "#0047FF" }}>v1.0</span></div>
            <div className="text-sm" style={{ color: "#475569" }}>11 sections · 30+ components · 3 patterns · Publish-ready · 2026</div>
          </div>
          <div className="flex gap-2.5 items-center">
            {["#0047FF","#FF5A1F","#F4F6FA"].map(c => (
              <div key={c} className="w-8 h-8 rounded-full border-2" style={{ background: c, borderColor: "#1E2D45" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
