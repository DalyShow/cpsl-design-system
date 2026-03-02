import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const primaryColors = [
  { token: "--cpsl-blue-50", hex: "#EEF4FF", name: "Blue 50" },
  { token: "--cpsl-blue-100", hex: "#DDEAFF", name: "Blue 100" },
  { token: "--cpsl-blue-200", hex: "#BEDAFF", name: "Blue 200" },
  { token: "--cpsl-blue-300", hex: "#8ABAFF", name: "Blue 300" },
  { token: "--cpsl-blue-400", hex: "#6A9AF2", name: "Blue 400" },
  { token: "--cpsl-blue-500", hex: "#3B82F6", name: "Blue 500", main: true },
  { token: "--cpsl-blue-600", hex: "#3761CC", name: "Blue 600" },
  { token: "--cpsl-blue-700", hex: "#284BAA", name: "Blue 700" },
  { token: "--cpsl-blue-800", hex: "#1B3488", name: "Blue 800" },
  { token: "--cpsl-blue-900", hex: "#0F2066", name: "Blue 900" },
];
const accentColors = [
  { token: "--cpsl-purple-400", hex: "#B08CF5", name: "Purple 400" },
  { token: "--cpsl-purple-500", hex: "#7C3AEC", name: "Purple 500", main: true },
  { token: "--cpsl-purple-600", hex: "#7333B8", name: "Purple 600" },
];
const goldColors = [
  { token: "--cpsl-gold-300", hex: "#E0C88A", name: "Gold 300" },
  { token: "--cpsl-gold-400", hex: "#CDB268", name: "Gold 400" },
  { token: "--cpsl-gold-500", hex: "#C9A74C", name: "Gold 500", main: true },
  { token: "--cpsl-gold-600", hex: "#A58840", name: "Gold 600" },
  { token: "--cpsl-gold-700", hex: "#8C7030", name: "Gold 700" },
];
const semanticColors = [
  { token: "--cpsl-success", hex: "#00C853", name: "Success", bg: "#E8FFF2", label: "Wins, confirmations, uploads" },
  { token: "--cpsl-warning", hex: "#FFB300", name: "Warning", bg: "#FFF8E1", label: "Postponed, cautions, yellow cards" },
  { token: "--cpsl-error", hex: "#FF1744", name: "Error", bg: "#FFF0F0", label: "Losses, failures, red cards" },
  { token: "--cpsl-info", hex: "#0288D1", name: "Info", bg: "#E3F2FD", label: "Informational states" },
];
const neutralColors = [
  { hex: "#F4F6FA", name: "N-50" }, { hex: "#E2E8F0", name: "N-200" },
  { hex: "#94A3B8", name: "N-400" }, { hex: "#64748B", name: "N-500" },
  { hex: "#475569", name: "N-600" }, { hex: "#334155", name: "N-700" },
  { hex: "#091628", name: "N-900" },
];

const contrastRows = [
  ["White on Blue-500 (#3B82F6)",       "3.7:1",  "❌", "✅", "❌"],
  ["Dark (#091628) on Blue-500",        "5.2:1",  "✅", "✅", "❌"],
  ["White on Dark (#091628)",           "18.9:1", "✅", "✅", "✅"],
  ["N-900 on N-50",                     "14.2:1", "✅", "✅", "✅"],
  ["N-600 on White",                    "5.74:1", "✅", "✅", "❌"],
  ["Dark text on Gold-500 (#C9A74C)",   "8.0:1",  "✅", "✅", "✅"],
  ["White on Purple-500 (#7C3AEC)",     "6.7:1",  "✅", "✅", "❌"],
  ["White on Error (#FF1744)",          "4.58:1", "✅", "✅", "❌"],
  ["Dark text on Success bg",           "7.2:1",  "✅", "✅", "✅"],
];

export default function ColorsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="01 — Foundations" title="Color System"
        description="CPSL Blue (#3B82F6), Gold (#C9A74C), and Purple (#7C3AEC) anchor the new brand palette. Cream (#F4EFE6) adds warmth to premium surfaces. All colors ship as CSS custom properties and design token JSON." />
      <div className="px-12 py-12">
        <Section title="Primary — CPSL Blue">
          <div className="flex rounded-2xl overflow-hidden h-20 mb-4 shadow-sm">
            {primaryColors.map((c) => (
              <div key={c.hex} className="flex-1 relative" style={{ background: c.hex }}>
                {c.main && <div className="absolute inset-0 flex items-end p-2"><span className="text-xs font-bold text-white bg-black/20 px-1.5 py-0.5 rounded">Primary</span></div>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3">
            {primaryColors.map((c) => (
              <div key={c.hex} className="rounded-xl p-3 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
                <div className="w-full h-10 rounded-lg mb-2" style={{ background: c.hex }} />
                <div className="text-xs font-bold" style={{ color: "#091628" }}>{c.name}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#64748B" }}>{c.hex}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#94A3B8", fontSize: "10px" }}>{c.token}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Gold ── */}
        <Section title="Championship — CPSL Gold">
          <p className="text-xs text-muted-foreground mb-4">
            Gold marks championship moments, top scorers, and premium surfaces. Always use dark text on gold — it achieves 8:1 contrast (AAA).
          </p>
          <div className="flex rounded-2xl overflow-hidden h-20 mb-4 shadow-sm">
            {goldColors.map((c) => (
              <div key={c.hex} className="flex-1 relative" style={{ background: c.hex }}>
                {c.main && <div className="absolute inset-0 flex items-end p-2"><span className="text-xs font-bold px-1.5 py-0.5 rounded bg-black/10" style={{ color: "#091628" }}>Gold</span></div>}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {goldColors.map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border flex-1" style={{ borderColor: "#E2E8F0" }}>
                <div className="h-16" style={{ background: c.hex }} />
                <div className="p-3" style={{ background: "white" }}>
                  <div className="text-xs font-bold" style={{ color: "#091628" }}>{c.name}</div>
                  <div className="text-xs font-mono" style={{ color: "#64748B" }}>{c.hex}</div>
                  {c.main && <div className="text-xs mt-1 font-semibold" style={{ color: "#A58840" }}>Championship</div>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Purple Accent ── */}
        <Section title="Accent — CPSL Purple">
          <div className="flex gap-4">
            {accentColors.map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border flex-1" style={{ borderColor: "#E2E8F0" }}>
                <div className="h-20" style={{ background: c.hex }} />
                <div className="p-3" style={{ background: "white" }}>
                  <div className="text-xs font-bold" style={{ color: "#091628" }}>{c.name}</div>
                  <div className="text-xs font-mono" style={{ color: "#64748B" }}>{c.hex}</div>
                  {c.main && <div className="text-xs mt-1 font-semibold" style={{ color: "#7C3AEC" }}>Accent</div>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Cream ── */}
        <Section title="Warm Surface — CPSL Cream">
          <p className="text-xs text-muted-foreground mb-4">
            Cream brings warmth to premium surfaces — editorial panels, feature callouts, and championship highlights. Use in place of cold white for a richer, more premium brand feel.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { token: "--cpsl-cream",      hex: "#F4EFE6", name: "Cream",      label: "Premium backgrounds, feature panels" },
              { token: "--cpsl-cream-dark",  hex: "#EDE4CC", name: "Cream Dark", label: "Borders, dividers on cream surfaces" },
            ].map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
                <div className="h-20 border-b" style={{ background: c.hex, borderColor: "#E2E8F0" }} />
                <div className="p-4" style={{ background: "white" }}>
                  <div className="text-xs font-bold" style={{ color: "#091628" }}>{c.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: "#64748B" }}>{c.hex}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: "#94A3B8", fontSize: "10px" }}>{c.token}</div>
                  <div className="text-xs mt-1.5" style={{ color: "#94A3B8" }}>{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Semantic Colors">
          <div className="grid grid-cols-4 gap-4">
            {semanticColors.map((c) => (
              <div key={c.hex} className="rounded-xl border overflow-hidden" style={{ borderColor: "#E2E8F0", background: "white" }}>
                <div className="h-16 flex items-center px-4" style={{ background: c.bg }}>
                  <div className="w-7 h-7 rounded-full" style={{ background: c.hex }} />
                </div>
                <div className="p-3">
                  <div className="text-xs font-bold mb-1" style={{ color: "#091628" }}>{c.name}</div>
                  <div className="text-xs font-mono mb-1" style={{ color: "#64748B" }}>{c.hex}</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Neutral Scale">
          <div className="flex rounded-2xl overflow-hidden h-16 mb-3">
            {neutralColors.map((c) => <div key={c.hex} className="flex-1" style={{ background: c.hex }} />)}
          </div>
          <div className="grid grid-cols-7 gap-3">
            {neutralColors.map((c) => (
              <div key={c.hex} className="text-center">
                <div className="text-xs font-bold mb-1" style={{ color: "#091628" }}>{c.name}</div>
                <div className="text-xs font-mono" style={{ color: "#64748B" }}>{c.hex}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="WCAG Contrast Ratios">
          <p className="text-xs text-muted-foreground mb-4">
            The new primary blue (#3B82F6) passes AA for <strong>large text</strong> with white. For small body copy on a blue button, use dark text — it achieves 5.2:1 (AA Normal). Gold (#C9A74C) always requires dark text.
          </p>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
            <table className="w-full text-sm" style={{ background: "white" }}>
              <thead>
                <tr style={{ background: "#F4F6FA", borderBottom: "2px solid #E2E8F0" }}>
                  {["Combination", "Ratio", "AA Normal", "AA Large", "AAA"].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contrastRows.map(([combo, ratio, aa, aaL, aaa], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="px-5 py-3 font-mono text-xs" style={{ color: "#475569" }}>{combo}</td>
                    <td className="px-5 py-3 font-bold text-sm" style={{ color: "#091628" }}>{ratio}</td>
                    <td className="px-5 py-3 text-sm">{aa}</td>
                    <td className="px-5 py-3 text-sm">{aaL}</td>
                    <td className="px-5 py-3 text-sm">{aaa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Dark Mode Tokens">
          <div className="rounded-2xl p-6 border" style={{ background: "#091628", borderColor: "#1E2D45" }}>
            <div className="grid grid-cols-4 gap-4">
              {[
                { token: "--primary",      light: "#3B82F6", dark: "#6A9AF2"  },
                { token: "--accent",       light: "#7C3AEC", dark: "#B08CF5"  },
                { token: "--cpsl-gold",    light: "#C9A74C", dark: "#CDB268"  },
                { token: "--surface-warm", light: "#F4EFE6", dark: "#1A1208"  },
                { token: "--surface-1",    light: "#FFFFFF",  dark: "#0A1628" },
                { token: "--surface-2",    light: "#F4F6FA",  dark: "#091628" },
                { token: "--text-primary", light: "#091628",  dark: "#F4F6FA" },
                { token: "--border",       light: "#E2E8F0",  dark: "#1E2D45" },
              ].map((t) => (
                <div key={t.token} className="rounded-xl p-3" style={{ background: "#0A1628", border: "1px solid #1E2D45" }}>
                  <div className="text-xs font-mono mb-2" style={{ color: "#8ABAFF" }}>{t.token}</div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-6 rounded" style={{ background: t.light, border: "1px solid #1E2D45" }} />
                    <div className="flex-1 h-6 rounded" style={{ background: t.dark, border: "1px solid #334155" }} />
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span className="flex-1 text-xs font-mono text-center" style={{ color: "#475569" }}>Light</span>
                    <span className="flex-1 text-xs font-mono text-center" style={{ color: "#475569" }}>Dark</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
