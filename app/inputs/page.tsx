import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function InputsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="05 — Components" title="Inputs & Form Controls"
        description="Text inputs, selects, checkboxes, radios, toggles, textareas, and sliders. Every control has default, hover, focus, error, and disabled states documented." />
      <div className="px-12 py-12">
        <Section title="Text Input States">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Default", borderColor: "#E2E8F0", bg: "white", value: "Enter team name...", textColor: "#94A3B8", bw: "1.5px" },
              { label: "Focus", borderColor: "#0047FF", bg: "#FAFCFF", value: "Charlotte FC", textColor: "#0A0E1A", bw: "2px" },
              { label: "Error", borderColor: "#FF1744", bg: "#FFF5F5", value: "bad-email@", textColor: "#0A0E1A", bw: "2px" },
              { label: "Disabled", borderColor: "#E2E8F0", bg: "#F4F6FA", value: "Not editable", textColor: "#94A3B8", bw: "1.5px" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>{s.label}</div>
                <div className="rounded-xl px-4 py-3 text-sm" style={{ border: `${s.bw} solid ${s.borderColor}`, background: s.bg, color: s.textColor }}>{s.value}</div>
                {s.label === "Error" && <p className="text-xs mt-1.5" style={{ color: "#FF1744" }}>✕ Please enter a valid email</p>}
                {s.label === "Focus" && <p className="text-xs mt-1.5" style={{ color: "#0047FF" }}>border: 2px solid #0047FF</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Select / Dropdown">
          <div className="max-w-sm">
            <div className="rounded-xl px-4 py-3 border text-sm flex items-center justify-between" style={{ background: "white", borderColor: "#E2E8F0", color: "#0A0E1A" }}>
              <span>CPSL League</span>
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </div>
          </div>
        </Section>

        <Section title="Checkbox, Radio & Toggle">
          <div className="rounded-2xl p-8 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="flex gap-16">
              {/* Checkbox */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Checkbox</div>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "#0047FF", border: "2px solid #0047FF" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#0A0E1A" }}>Checked</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-md border-2" style={{ borderColor: "#E2E8F0" }} />
                    <span className="text-sm" style={{ color: "#0A0E1A" }}>Unchecked</span>
                  </label>
                  <label className="flex items-center gap-3 opacity-40 cursor-not-allowed">
                    <div className="w-5 h-5 rounded-md border-2" style={{ borderColor: "#E2E8F0", background: "#F4F6FA" }} />
                    <span className="text-sm" style={{ color: "#94A3B8" }}>Disabled</span>
                  </label>
                </div>
              </div>

              {/* Radio */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Radio</div>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#0047FF" }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0047FF" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#0A0E1A" }}>Selected</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: "#E2E8F0" }} />
                    <span className="text-sm" style={{ color: "#0A0E1A" }}>Unselected</span>
                  </label>
                  <label className="flex items-center gap-3 opacity-40 cursor-not-allowed">
                    <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: "#E2E8F0" }} />
                    <span className="text-sm" style={{ color: "#94A3B8" }}>Disabled</span>
                  </label>
                </div>
              </div>

              {/* Toggle */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Toggle</div>
                <div className="flex flex-col gap-5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-11 h-6 rounded-full flex items-center px-0.5" style={{ background: "#0047FF" }}>
                      <div className="w-5 h-5 bg-white rounded-full shadow ml-auto" />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#0A0E1A" }}>On</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-11 h-6 rounded-full flex items-center px-0.5" style={{ background: "#E2E8F0" }}>
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </div>
                    <span className="text-sm" style={{ color: "#94A3B8" }}>Off</span>
                  </label>
                </div>
              </div>

              {/* Textarea */}
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#64748B" }}>Textarea</div>
                <div className="rounded-xl px-4 py-3 border-2 text-sm" style={{ borderColor: "#0047FF", background: "#FAFCFF", color: "#0A0E1A", minHeight: "90px", lineHeight: 1.6 }}>
                  Match report for Charlotte FC vs Raleigh Athletic...
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Slider">
          <div className="rounded-2xl p-8 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="max-w-md">
              <div className="flex justify-between mb-2 text-xs" style={{ color: "#64748B" }}>
                <span>Player Rating</span>
                <span className="font-bold" style={{ color: "#0047FF" }}>87</span>
              </div>
              <div className="relative h-2 rounded-full" style={{ background: "#E2E8F0" }}>
                <div className="absolute left-0 top-0 h-2 rounded-full" style={{ width: "87%", background: "#0047FF" }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-md" style={{ left: "calc(87% - 10px)", background: "#0047FF" }} />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Form Anatomy">
          <div className="rounded-2xl p-8 border max-w-lg" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <h3 className="font-bold text-base mb-5" style={{ color: "#0A0E1A" }}>Register Team</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#475569" }}>Team Name <span style={{ color: "#FF1744" }}>*</span></label>
                <div className="rounded-xl px-4 py-3 border-2 text-sm" style={{ borderColor: "#0047FF", background: "#FAFCFF", color: "#0A0E1A" }}>Charlotte FC</div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#475569" }}>Division</label>
                <div className="rounded-xl px-4 py-3 border text-sm flex items-center justify-between" style={{ borderColor: "#E2E8F0", color: "#0A0E1A" }}>
                  <span>Premier Division</span>
                  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF" }}>Register Team</button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
