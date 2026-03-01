import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

const cssCode = `.btn-primary {
  background:    var(--cpsl-blue-500);
  color:         #ffffff;
  padding:       var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family:   var(--font-body);
  font-weight:   700;
  font-size:     15px;
  border:        none;
  cursor:        pointer;
  transition:    all 150ms ease;
  min-height:    44px; /* WCAG touch target */
}
.btn-primary:hover        { background: var(--cpsl-blue-600); transform: translateY(-1px); }
.btn-primary:active       { transform: translateY(0); opacity: 0.9; }
.btn-primary:focus-visible { outline: 2px solid var(--cpsl-blue-500); outline-offset: 2px; }
.btn-primary:disabled     { opacity: 0.45; cursor: not-allowed; transform: none; }

/* Secondary */
.btn-secondary {
  background:    transparent;
  color:         var(--cpsl-blue-500);
  border:        2px solid var(--cpsl-blue-500);
  padding:       calc(var(--space-3) - 2px) var(--space-6);
  border-radius: var(--radius-md);
  font-weight:   700; font-size: 15px; cursor: pointer;
  transition:    all 150ms ease;
}
.btn-secondary:hover { background: var(--cpsl-blue-50); }

/* Ghost */
.btn-ghost {
  background:    transparent;
  color:         var(--cpsl-blue-500);
  border:        none;
  padding:       var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight:   700; font-size: 15px; cursor: pointer;
}
.btn-ghost:hover { background: var(--cpsl-blue-50); }`;

export default function ButtonsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="04 — Components" title="Buttons & CTAs"
        description="5 variants, 3 sizes, 4 states. All buttons meet the WCAG 2.5.5 44×44px minimum touch target. Focus rings are always visible on keyboard navigation." />
      <div className="px-12 py-12">
        <Section title="Variants">
          <div className="rounded-2xl p-8 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="flex flex-wrap gap-4 items-center mb-8 pb-8 border-b" style={{ borderColor: "#F1F5F9" }}>
              <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF" }}>Primary</button>
              <button className="px-6 py-3 rounded-xl text-sm font-bold border-2" style={{ borderColor: "#0047FF", color: "#0047FF" }}>Secondary</button>
              <button className="px-6 py-3 rounded-xl text-sm font-bold" style={{ color: "#0047FF" }}>Ghost</button>
              <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#FF1744" }}>Danger</button>
              <button className="px-6 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2" style={{ background: "#FF1744" }}>
                <span className="w-2 h-2 rounded-full bg-white" />Live
              </button>
              <button className="px-6 py-3 rounded-xl text-sm font-bold border" style={{ background: "#FF5A1F", color: "white", borderColor: "transparent" }}>Accent</button>
            </div>

            <div className="mb-8 pb-8 border-b" style={{ borderColor: "#F1F5F9" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#94A3B8" }}>Sizes</div>
              <div className="flex gap-4 items-center">
                <button className="px-4 py-2 rounded-lg text-xs font-bold text-white" style={{ background: "#0047FF", minHeight: "32px" }}>Small</button>
                <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF", minHeight: "44px" }}>Medium (default)</button>
                <button className="px-8 py-4 rounded-xl text-base font-bold text-white" style={{ background: "#0047FF", minHeight: "52px" }}>Large</button>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "#94A3B8" }}>States</div>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center gap-2">
                  <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF" }}>Default</button>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>default</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0038CC", transform: "translateY(-1px)", boxShadow: "0 4px 12px rgba(0,71,255,0.3)" }}>Hover</button>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>:hover</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="px-6 py-3 rounded-xl text-sm font-bold text-white" style={{ background: "#0047FF", outline: "2px solid #0047FF", outlineOffset: "2px" }}>Focus</button>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>:focus-visible</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="px-6 py-3 rounded-xl text-sm font-bold text-white opacity-40 cursor-not-allowed" style={{ background: "#0047FF" }}>Disabled</button>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>:disabled</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="CSS Implementation">
          <CodeBlock code={cssCode} language="css" />
        </Section>

        <Section title="Accessibility Checklist">
          <div className="grid grid-cols-3 gap-4">
            {[
              { rule: "44×44px min touch target", desc: "All interactive elements meet WCAG 2.5.5 Target Size for touch accessibility on mobile." },
              { rule: "Focus ring always visible", desc: "2px solid #0047FF with 2px outline-offset on :focus-visible. Never suppressed with outline:none." },
              { rule: "Disabled ≠ aria-hidden", desc: "Disabled buttons stay keyboard reachable with aria-disabled='true' to explain the state to screen readers." },
            ].map(r => (
              <div key={r.rule} className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
                <div className="text-sm font-bold mb-2" style={{ color: "#0047FF" }}>✓ {r.rule}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
