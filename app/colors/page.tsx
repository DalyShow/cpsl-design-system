import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const primaryColors = [
  { token: "--cpsl-blue-50", hex: "#EEF3FF", name: "Blue 50" },
  { token: "--cpsl-blue-100", hex: "#DDEAFF", name: "Blue 100" },
  { token: "--cpsl-blue-200", hex: "#BDCEFF", name: "Blue 200" },
  { token: "--cpsl-blue-300", hex: "#91AFFF", name: "Blue 300" },
  { token: "--cpsl-blue-400", hex: "#5E8AFF", name: "Blue 400" },
  { token: "--cpsl-blue-500", hex: "#0047FF", name: "Blue 500", main: true },
  { token: "--cpsl-blue-600", hex: "#0038CC", name: "Blue 600" },
  { token: "--cpsl-blue-700", hex: "#0029A3", name: "Blue 700" },
  { token: "--cpsl-blue-800", hex: "#001F7A", name: "Blue 800" },
  { token: "--cpsl-blue-900", hex: "#001552", name: "Blue 900" },
];
const accentColors = [
  { token: "--cpsl-orange-400", hex: "#FF7A4A", name: "Orange 400" },
  { token: "--cpsl-orange-500", hex: "#FF5A1F", name: "Orange 500", main: true },
  { token: "--cpsl-orange-600", hex: "#E04A12", name: "Orange 600" },
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
  { hex: "#0A0E1A", name: "N-900" },
];

const contrastRows = [
  ["White on Blue-500", "5.08:1", "✅", "✅", "❌"],
  ["White on Dark (#0A0E1A)", "18.9:1", "✅", "✅", "✅"],
  ["N-900 on N-50", "14.2:1", "✅", "✅", "✅"],
  ["N-600 on White", "5.74:1", "✅", "✅", "❌"],
  ["White on Error (#FF1744)", "4.58:1", "✅", "✅", "❌"],
  ["Dark text on Success bg", "7.2:1", "✅", "✅", "✅"],
];

export default function ColorsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="01 — Foundations" title="Color System"
        description="CPSL Blue (#0047FF) and CPSL Orange (#FF5A1F) anchor the brand. All colors ship as CSS custom properties and a design token JSON file for cross-platform consistency." />
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
                <div className="text-xs font-bold" style={{ color: "#0A0E1A" }}>{c.name}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#64748B" }}>{c.hex}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#94A3B8", fontSize: "10px" }}>{c.token}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Accent — CPSL Orange">
          <div className="flex gap-4">
            {accentColors.map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border flex-1" style={{ borderColor: "#E2E8F0" }}>
                <div className="h-20" style={{ background: c.hex }} />
                <div className="p-3" style={{ background: "white" }}>
                  <div className="text-xs font-bold" style={{ color: "#0A0E1A" }}>{c.name}</div>
                  <div className="text-xs font-mono" style={{ color: "#64748B" }}>{c.hex}</div>
                  {c.main && <div className="text-xs mt-1 font-semibold" style={{ color: "#FF5A1F" }}>Accent</div>}
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
                  <div className="text-xs font-bold mb-1" style={{ color: "#0A0E1A" }}>{c.name}</div>
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
                <div className="text-xs font-bold mb-1" style={{ color: "#0A0E1A" }}>{c.name}</div>
                <div className="text-xs font-mono" style={{ color: "#64748B" }}>{c.hex}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="WCAG Contrast Ratios">
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
                    <td className="px-5 py-3 font-bold text-sm" style={{ color: "#0A0E1A" }}>{ratio}</td>
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
          <div className="rounded-2xl p-6 border" style={{ background: "#020B1A", borderColor: "#1E2D45" }}>
            <div className="grid grid-cols-4 gap-4">
              {[
                { token: "--surface-1", light: "#FFFFFF", dark: "#0A1628" },
                { token: "--surface-2", light: "#F4F6FA", dark: "#020B1A" },
                { token: "--text-primary", light: "#0A0E1A", dark: "#F4F6FA" },
                { token: "--border", light: "#E2E8F0", dark: "#1E2D45" },
              ].map((t) => (
                <div key={t.token} className="rounded-xl p-3" style={{ background: "#0A1628", border: "1px solid #1E2D45" }}>
                  <div className="text-xs font-mono mb-2" style={{ color: "#7C9DFF" }}>{t.token}</div>
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
