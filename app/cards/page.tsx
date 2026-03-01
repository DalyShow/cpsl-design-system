import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const standingsData = [
  { team: "Charlotte FC", init: "CC", color: "#4A78E8", p:18,w:14,d:2,l:2,gd:"+24",pts:44 },
  { team: "Raleigh Athletic", init: "RA", color: "#8B40D4", p:18,w:11,d:4,l:3,gd:"+14",pts:37 },
  { team: "Durham United", init: "DU", color: "#1A1A2E", p:18,w:10,d:3,l:5,gd:"+8",pts:33 },
];

export default function CardsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="06 — Components" title="Cards & Lists"
        description="Four card variants for different content needs, plus standings and activity list patterns. Cards use border-radius: 16px, 1px borders, and subtle box shadows for elevation." />
      <div className="px-12 py-12">
        <Section title="Card Variants">
          <div className="grid grid-cols-4 gap-4">
            {/* Default */}
            <div className="rounded-2xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#94A3B8" }}>Default</div>
              <div className="w-full h-28 rounded-xl mb-3" style={{ background: "#F4F6FA" }} />
              <div className="font-bold text-sm mb-1" style={{ color: "#0A0E1A" }}>Charlotte FC Preview</div>
              <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>Match preview ahead of Saturday&apos;s clash at Bank of America Stadium.</div>
            </div>
            {/* Elevated */}
            <div className="rounded-2xl p-5" style={{ background: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.10)", transform: "translateY(-3px)" }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#4A78E8" }}>Elevated</div>
              <div className="w-full h-28 rounded-xl mb-3" style={{ background: "#EEF4FF" }} />
              <div className="font-bold text-sm mb-1" style={{ color: "#0A0E1A" }}>Featured Match</div>
              <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>Promoted content, pinned items, or featured stories.</div>
            </div>
            {/* Score Card */}
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
              <div className="px-5 py-4" style={{ background: "#020B1A" }}>
                <div className="text-xs font-bold mb-4" style={{ color: "#475569" }}>CPSL League · FT</div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#4A78E8" }}>CC</div>
                    <span className="text-xs text-white">Charlotte</span>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-white" style={{ fontSize: "28px", letterSpacing: "-1px" }}>3–1</div>
                    <div className="text-xs mt-1 font-semibold" style={{ color: "#00C853" }}>WIN</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#8B40D4" }}>RA</div>
                    <span className="text-xs" style={{ color: "#64748B" }}>Raleigh</span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 text-xs" style={{ background: "white", color: "#64748B" }}>Sat, Feb 22 · Bank of America</div>
            </div>
            {/* Horizontal */}
            <div className="rounded-2xl border flex overflow-hidden" style={{ borderColor: "#E2E8F0", background: "white" }}>
              <div className="w-24 flex-shrink-0" style={{ background: "#EEF4FF" }} />
              <div className="p-4">
                <div className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#94A3B8" }}>Horizontal</div>
                <div className="font-bold text-sm mb-1" style={{ color: "#0A0E1A" }}>Player Profile</div>
                <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>Compact cards with side thumbnails. Great for player lists.</div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Standings List">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0", background: "white" }}>
            <div className="flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "#F4F6FA", borderBottom: "2px solid #E2E8F0", color: "#64748B" }}>
              <span className="flex-1">Team</span>
              {["P","W","D","L","GD","Pts"].map(h => <span key={h} className="w-10 text-center">{h}</span>)}
            </div>
            {standingsData.map((row, i) => (
              <div key={row.team} className="flex items-center px-5 py-3.5 border-b" style={{ borderColor: "#F1F5F9", background: i === 0 ? "#EEF4FF" : "white" }}>
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-xs font-mono w-4" style={{ color: "#94A3B8" }}>{i + 1}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: row.color }}>{row.init}</div>
                  <span className="text-sm font-semibold" style={{ color: "#0A0E1A" }}>{row.team}</span>
                </div>
                {[row.p, row.w, row.d, row.l, row.gd, row.pts].map((v, j) => (
                  <span key={j} className="w-10 text-center text-sm" style={{ color: j === 5 ? "#4A78E8" : "#475569", fontWeight: j === 5 ? 700 : 400 }}>{v}</span>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Activity List">
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E2E8F0", background: "white" }}>
            {[
              { icon: "⚽", title: "Goal — Thompson, R.", sub: "Charlotte FC vs Raleigh · 67'", time: "2min ago", color: "#00875A" },
              { icon: "🟨", title: "Yellow card — Davies, M.", sub: "Raleigh Athletic · 54'", time: "15min ago", color: "#FFB300" },
              { icon: "🔄", title: "Substitution — Barnes for Cole", sub: "Charlotte FC · 45'", time: "45min ago", color: "#4A78E8" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 border-b" style={{ borderColor: "#F1F5F9" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${item.color}22` }}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold" style={{ color: "#0A0E1A" }}>{item.title}</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>{item.sub}</div>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: "#94A3B8" }}>{item.time}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
