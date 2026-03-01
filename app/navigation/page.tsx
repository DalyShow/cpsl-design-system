import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function NavigationPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="07 — Components" title="Navigation"
        description="Top navigation bar, tab bars, breadcrumbs, pagination, and sidebar patterns. All navigation is keyboard accessible with visible focus indicators and proper ARIA roles." />
      <div className="px-12 py-12">
        <Section title="Top Navigation Bar">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#1E2D45" }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ background: "#020B1A" }}>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#0047FF" }}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M1 1L15 1L15 12C15 16 8 17 8 17C8 17 1 16 1 12Z" fill="none" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm">CPSL</span>
                </div>
                <nav className="flex gap-6">
                  {["Standings", "Matches", "Teams", "Stats", "News"].map((item, i) => (
                    <a key={item} className="text-sm font-medium pb-4 border-b-2 transition-colors cursor-pointer" style={{ color: i === 0 ? "white" : "#64748B", borderColor: i === 0 ? "#0047FF" : "transparent" }}>
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: "#FF1744", color: "white" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />Live
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#0047FF" }}>JD</div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Tab Bar Variants">
          <div className="flex flex-col gap-4">
            {/* Underline tab */}
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Underline (default)</div>
              <div className="flex border-b" style={{ borderColor: "#E2E8F0" }}>
                {["Overview", "Matches", "Players", "Stats"].map((tab, i) => (
                  <button key={tab} className="px-5 py-3 text-sm font-semibold border-b-2 -mb-px"
                    style={{ color: i === 0 ? "#0047FF" : "#94A3B8", borderColor: i === 0 ? "#0047FF" : "transparent" }}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Pill tab */}
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Pill tabs</div>
              <div className="flex gap-2 p-1 rounded-xl inline-flex" style={{ background: "#F4F6FA" }}>
                {["All", "Home", "Away", "Cup"].map((tab, i) => (
                  <button key={tab} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={{ background: i === 0 ? "white" : "transparent", color: i === 0 ? "#0A0E1A" : "#94A3B8", boxShadow: i === 0 ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Breadcrumb & Pagination">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Breadcrumb</div>
              <div className="flex items-center gap-2 text-sm flex-wrap">
                {["CPSL", "Teams", "Charlotte FC", "Matches"].map((item, i, arr) => (
                  <span key={item} className="flex items-center gap-2">
                    <a className="cursor-pointer" style={{ color: i === arr.length - 1 ? "#0A0E1A" : "#0047FF", fontWeight: i === arr.length - 1 ? 600 : 400 }}>{item}</a>
                    {i < arr.length - 1 && <span style={{ color: "#CBD5E1" }}>/</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Pagination</div>
              <div className="flex items-center gap-1.5">
                <button className="px-3 py-2 rounded-lg text-sm border" style={{ borderColor: "#E2E8F0", color: "#94A3B8" }}>←</button>
                {[1,2,3,"…",8].map((p, i) => (
                  <button key={i} className="w-8 h-8 rounded-lg text-sm font-semibold"
                    style={{ background: p === 1 ? "#0047FF" : "transparent", color: p === 1 ? "white" : "#475569" }}>{p}</button>
                ))}
                <button className="px-3 py-2 rounded-lg text-sm border" style={{ borderColor: "#E2E8F0", color: "#475569" }}>→</button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Mobile Tab Bar">
          <div className="max-w-sm mx-auto">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#1E2D45" }}>
              <div className="flex items-center justify-around px-2 py-3" style={{ background: "#020B1A", borderTop: "1px solid #1E2D45" }}>
                {[
                  { icon: "⌂", label: "Home", active: true },
                  { icon: "📅", label: "Matches", active: false },
                  { icon: "🏆", label: "Standings", active: false },
                  { icon: "👤", label: "Profile", active: false },
                ].map((item) => (
                  <button key={item.label} className="flex flex-col items-center gap-1 px-3 py-1">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-medium" style={{ color: item.active ? "#0047FF" : "#475569" }}>{item.label}</span>
                    {item.active && <div className="w-1 h-1 rounded-full" style={{ background: "#0047FF" }} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
