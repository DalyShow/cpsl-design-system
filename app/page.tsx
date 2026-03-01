import Link from "next/link";

const sections = [
  { num: "01", label: "Color System", href: "/colors", desc: "Primary, accent, semantic, neutral palettes. Dark mode tokens and WCAG contrast ratios.", color: "#0047FF" },
  { num: "02", label: "Typography", href: "/typography", desc: "9-level type scale. Anton, Barlow Condensed, and Inter. Responsive and accessible.", color: "#7C3AED" },
  { num: "03", label: "Grid & Spacing", href: "/grid", desc: "12-column grid, 5 breakpoints, 8px base spacing scale, border radius tokens.", color: "#0288D1" },
  { num: "04", label: "Buttons & CTAs", href: "/buttons", desc: "5 variants, 4 states, 3 sizes. Full anatomy, CSS tokens, and a11y specs.", color: "#00875A" },
  { num: "05", label: "Inputs & Forms", href: "/inputs", desc: "Text, select, checkbox, radio, toggle, textarea. All interactive states.", color: "#FF5A1F" },
  { num: "06", label: "Cards & Lists", href: "/cards", desc: "Default, elevated, score, and horizontal card variants. Standings list pattern.", color: "#E65100" },
  { num: "07", label: "Navigation", href: "/navigation", desc: "Top nav, tab bar, breadcrumb, pagination, sidebar, and mobile tab bar.", color: "#7C3AED" },
  { num: "08", label: "Feedback & Overlays", href: "/feedback", desc: "Alerts, toasts, progress bars, badges, modal, tooltip, and empty states.", color: "#FF1744" },
  { num: "09", label: "Data Display", href: "/data-display", desc: "Sortable tables, avatar groups, tags, stat displays, and skeleton loading.", color: "#0047FF" },
  { num: "10", label: "Patterns", href: "/patterns", desc: "Live scoreboard widget, match cards, auth sign-in flow with 2FA.", color: "#FF5A1F" },
  { num: "11", label: "Tokens & Dev Guide", href: "/tokens", desc: "tokens.json, CSS custom properties, dark mode, contribution checklist.", color: "#00875A" },
];

const stats = [
  { value: "11", label: "Sections" },
  { value: "30+", label: "Components" },
  { value: "3", label: "Patterns" },
  { value: "WCAG AA", label: "Accessibility" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="px-12 py-16 border-b" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#0047FF" }}>
            Carolina Premier Soccer League
          </div>
          <h1 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "56px", lineHeight: 1.05, letterSpacing: "-1px", color: "white" }}>
            CPSL<br /><span style={{ color: "#0047FF" }}>Design System</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#64748B", maxWidth: "520px" }}>
            A complete, publish-ready design system for the Carolina Premier Soccer League. Built for speed, accessibility, and brand cohesion across all digital surfaces.
          </p>
          <div className="flex gap-3">
            <Link href="/colors"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: "#0047FF" }}>
              Get Started →
            </Link>
            <Link href="/tokens"
              className="px-6 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ border: "1.5px solid #1E2D45", color: "#94A3B8", background: "transparent" }}>
              View Tokens
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-12 pt-8 border-t" style={{ borderColor: "#1E2D45" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold mb-1" style={{ color: "white", letterSpacing: "-0.5px" }}>{s.value}</div>
              <div className="text-xs" style={{ color: "#475569" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section cards grid */}
      <div className="px-12 py-12" style={{ background: "#F4F6FA" }}>
        <div className="grid grid-cols-3 gap-4">
          {sections.map((s) => (
            <Link key={s.href} href={s.href}
              className="group block rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl font-black leading-none" style={{ color: s.color, fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {s.num}
                </span>
                <div className="w-px self-stretch" style={{ background: "#E2E8F0" }} />
                <h3 className="font-bold text-base leading-tight" style={{ color: "#0A0E1A" }}>{s.label}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
              <div className="mt-4 text-xs font-semibold transition-colors" style={{ color: "#94A3B8" }}>
                View docs →
              </div>
            </Link>
          ))}
        </div>

        {/* Footer banner */}
        <div className="mt-8 rounded-2xl p-6 border flex items-center justify-between" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
          <div>
            <div className="text-base font-bold text-white mb-1">CPSL Design System <span style={{ color: "#0047FF" }}>v1.0</span></div>
            <div className="text-xs" style={{ color: "#475569" }}>11 sections · 30+ components · 3 patterns · Publish-ready · 2026</div>
          </div>
          <div className="flex gap-2.5">
            {["#0047FF", "#FF5A1F", "#F4F6FA"].map((c) => (
              <div key={c} className="w-7 h-7 rounded-full border" style={{ background: c, borderColor: "#1E2D45" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
