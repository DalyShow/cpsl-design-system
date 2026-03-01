import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function DataDisplayPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="09 — Components" title="Data Display, Tags & Avatars"
        description="Sortable data tables with row states, avatar components in 5 sizes with status indicators, filter chips, stat displays, and skeleton loading states." />
      <div className="px-12 py-12">
        <Section title="Sortable Data Table">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0", background: "white" }}>
            <div className="flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "#F4F6FA", borderBottom: "2px solid #E2E8F0", color: "#64748B" }}>
              <span className="flex-1">Team</span>
              {["P","W","D","L","GF","GA"].map((h) => (
                <span key={h} className="w-12 text-center">{h}</span>
              ))}
              <span className="w-14 text-center flex items-center justify-center gap-1" style={{ color: "#0047FF" }}>
                Pts <svg width="8" height="8" viewBox="0 0 8 8"><path d="M4 6L1 2h6z" fill="#0047FF"/></svg>
              </span>
            </div>
            {[
              { team: "Charlotte FC", init: "CC", color: "#0047FF", selected: true, p:18,w:14,d:2,l:2,gf:38,ga:14,pts:44 },
              { team: "Raleigh Athletic", init: "RA", color: "#FF5A1F", selected: false, p:18,w:11,d:4,l:3,gf:32,ga:18,pts:37 },
              { team: "Durham United", init: "DU", color: "#1A1A2E", selected: false, p:18,w:10,d:3,l:5,gf:28,ga:20,pts:33 },
              { team: "Triangle FC", init: "TF", color: "#00875A", selected: false, p:18,w:8,d:5,l:5,gf:24,ga:22,pts:29 },
            ].map((row) => (
              <div key={row.team} className="flex items-center px-5 py-3 border-b" style={{ borderColor: "#F1F5F9", background: row.selected ? "#EEF3FF" : "white" }}>
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: row.color }}>{row.init}</div>
                  <span className="text-sm font-semibold" style={{ color: "#0A0E1A" }}>{row.team}</span>
                  {row.selected && <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#BDCEFF", color: "#0047FF", fontSize: "10px", fontWeight: 700 }}>1st</span>}
                </div>
                {[row.p, row.w, row.d, row.l, row.gf, row.ga, row.pts].map((v, i) => (
                  <span key={i} className="text-center text-sm" style={{ width: i === 6 ? "56px" : "48px", color: i === 6 ? "#0047FF" : "#475569", fontWeight: i === 6 ? 700 : 400 }}>{v}</span>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Avatars">
          <div className="rounded-2xl p-8 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Sizes</div>
              <div className="flex items-end gap-6">
                {[{ size: 24, label: "xs" }, { size: 32, label: "sm" }, { size: 40, label: "md" }, { size: 56, label: "lg" }, { size: 72, label: "xl" }].map(({ size, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="rounded-full flex items-center justify-center font-bold text-white" style={{ width: size, height: size, background: "#0047FF", fontSize: Math.max(8, Math.floor(size * 0.28)) }}>JD</div>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t" style={{ borderColor: "#F1F5F9" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Status Indicators</div>
              <div className="flex gap-8">
                {[
                  { dot: "#00C853", label: "online" },
                  { dot: "#FFB300", label: "away" },
                  { dot: "#94A3B8", label: "offline" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <div className="relative w-10 h-10">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "#0047FF" }}>JD</div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={{ background: s.dot }} />
                    </div>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{s.label}</span>
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#64748B" }}>Group</div>
                  <div className="flex items-center">
                    {["#0047FF","#FF5A1F","#00875A","#7C3AED"].map((c, i) => (
                      <div key={c} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ background: c, marginLeft: i > 0 ? "-10px" : 0, zIndex: 4 - i }}>
                        {["JD","SA","MK","PR"][i]}
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ background: "#1E293B", marginLeft: "-10px" }}>+5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Filter Chips & Tags">
          <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#64748B" }}>Filter chips</div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: "#0047FF" }}>✓ All Matches</span>
              {["League", "Cup", "Friendly", "Away", "Home"].map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer" style={{ background: "white", color: "#475569", borderColor: "#E2E8F0" }}>{t}</span>
              ))}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#64748B" }}>Dismissible</div>
            <div className="flex flex-wrap gap-2">
              {["Charlotte FC", "Home Games", "2025–26 Season"].map(t => (
                <span key={t} className="flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full text-xs font-semibold border" style={{ background: "#EEF3FF", color: "#0047FF", borderColor: "#BDCEFF" }}>
                  {t}
                  <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#0047FF" }}>
                    <svg width="7" height="7" viewBox="0 0 7 7"><path d="M1 1l5 5M6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Skeleton Loading States">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Card skeleton</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: "#E2E8F0" }} />
                <div className="flex-1">
                  <div className="h-3 rounded-full mb-2" style={{ background: "#E2E8F0", width: "65%" }} />
                  <div className="h-2.5 rounded-full" style={{ background: "#E2E8F0", width: "45%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 rounded-full" style={{ background: "#E2E8F0" }} />
                <div className="h-2.5 rounded-full" style={{ background: "#E2E8F0", width: "80%" }} />
                <div className="h-2.5 rounded-full" style={{ background: "#E2E8F0", width: "60%" }} />
              </div>
            </div>
            <div className="rounded-2xl p-6 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Table skeleton</div>
              <div className="h-3 rounded-full mb-3" style={{ background: "#E2E8F0", width: "100%" }} />
              {[100, 80, 90].map((w, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b" style={{ borderColor: "#F1F5F9" }}>
                  <div className="w-7 h-7 rounded-full flex-shrink-0" style={{ background: "#E2E8F0" }} />
                  <div className="flex-1 h-2.5 rounded-full" style={{ background: "#E2E8F0", width: `${w}%` }} />
                  <div className="w-8 h-2.5 rounded-full" style={{ background: "#E2E8F0" }} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
