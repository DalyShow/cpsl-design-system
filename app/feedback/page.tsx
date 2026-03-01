import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function FeedbackPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="08 — Components" title="Feedback & Overlays"
        description="Alert banners, toasts, progress bars, badges/tags, modals, tooltips, and empty states. Always pair color with an icon or text label — never rely on color alone." />
      <div className="px-12 py-12">
        <Section title="Alert Banners">
          <div className="flex flex-col gap-3">
            {[
              { type: "success", bg: "#E8FFF2", border: "#A7F3D0", color: "#00875A", icon: "✓", title: "Match recorded", msg: "Charlotte FC 3–1 Raleigh Athletic has been confirmed and published." },
              { type: "warning", bg: "#FFF8E1", border: "#FFE082", color: "#E65100", icon: "⚠", title: "Match postponed", msg: "Triangle FC vs Greensboro has been postponed due to adverse weather." },
              { type: "error", bg: "#FFF0F0", border: "#FFC5CC", color: "#FF1744", icon: "✕", title: "Submission failed", msg: "Unable to submit lineup. Check your connection and try again." },
              { type: "info", bg: "#E3F2FD", border: "#90CAF9", color: "#0288D1", icon: "ℹ", title: "Transfer window open", msg: "The winter transfer window closes on February 28, 2026 at midnight." },
            ].map((a) => (
              <div key={a.type} className="flex items-start gap-3 px-5 py-4 rounded-xl border" style={{ background: a.bg, borderColor: a.border }}>
                <span className="font-bold text-base mt-0.5 flex-shrink-0" style={{ color: a.color }}>{a.icon}</span>
                <div className="flex-1">
                  <span className="text-sm font-bold" style={{ color: a.color }}>{a.title}: </span>
                  <span className="text-sm" style={{ color: a.color }}>{a.msg}</span>
                </div>
                <button className="text-sm flex-shrink-0" style={{ color: a.color, opacity: 0.6 }}>✕</button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Toast Notifications">
          <div className="flex gap-4">
            {[
              { icon: "✓", color: "#00C853", title: "Lineup saved", sub: "Your changes are live." },
              { icon: "✕", color: "#FF1744", title: "Export failed", sub: "Try again in a moment." },
              { icon: "ℹ", color: "#0288D1", title: "New match added", sub: "Mar 8 vs Triangle FC." },
            ].map((t) => (
              <div key={t.title} className="rounded-xl px-4 py-3 border flex items-center gap-3 shadow-lg" style={{ background: "#0A1628", borderColor: "#1E2D45" }}>
                <span className="text-base" style={{ color: t.color }}>{t.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{t.title}</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>{t.sub}</div>
                </div>
                <button className="ml-2 text-xs" style={{ color: "#475569" }}>✕</button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Progress Bars">
          <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="flex flex-col gap-5">
              {[
                { label: "Season progress", value: 75, color: "#0047FF" },
                { label: "Registration complete", value: 100, color: "#00C853" },
                { label: "Upload: kit assets", value: 45, color: "#7C3AED" },
              ].map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between mb-1.5 text-xs font-medium" style={{ color: "#475569" }}>
                    <span>{p.label}</span>
                    <span style={{ color: p.color }}>{p.value}%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: "#E2E8F0" }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${p.value}%`, background: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Badges & Tags">
          <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Live", bg: "#FFF0F0", color: "#FF1744", border: "#FFC5CC" },
                { label: "Win", bg: "#E8FFF2", color: "#00875A", border: "#A7F3D0" },
                { label: "Postponed", bg: "#FFF3E0", color: "#E65100", border: "#FFCC80" },
                { label: "Loss", bg: "#FFF0F0", color: "#FF1744", border: "#FFC5CC" },
                { label: "Draw", bg: "#F4F6FA", color: "#475569", border: "#E2E8F0" },
                { label: "Cup", bg: "#F5F0FF", color: "#7C3AED", border: "#DDD6FE" },
                { label: "Featured", bg: "#EEF3FF", color: "#0047FF", border: "#BDCEFF" },
                { label: "New", bg: "#EEF3FF", color: "#0047FF", border: "#BDCEFF" },
              ].map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border" style={{ background: b.bg, color: b.color, borderColor: b.border }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: b.color }} />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Empty State">
          <div className="rounded-2xl p-12 border text-center" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "#EEF3FF" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="#0047FF" strokeWidth="2"/>
                <path d="M9 14h10M14 9v10" stroke="#0047FF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-base mb-2" style={{ color: "#0A0E1A" }}>No matches scheduled</h3>
            <p className="text-sm mb-5" style={{ color: "#64748B", maxWidth: "280px", margin: "0 auto 20px" }}>There are no upcoming matches for this team. Add a match to get started.</p>
            <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF" }}>+ Schedule Match</button>
          </div>
        </Section>
      </div>
    </div>
  );
}
