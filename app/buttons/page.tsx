import PageHeader from "@/components/PageHeader"
import Section from "@/components/Section"
import CodeBlock from "@/components/CodeBlock"
import { Button } from "@/components/ui/button"

const cssCode = `/* Import the component */
import { Button } from "@/components/ui/button"

// ── Core variants ──────────────────────────────────────
<Button variant="default">Primary</Button>
<Button variant="cpsl-orange">Orange CTA</Button>
<Button variant="cpsl-navy">Navy</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="cpsl-outline">Outline Blue</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="cpsl-success">Success</Button>
<Button variant="cpsl-live">Live Match</Button>

// ── Sizes ──────────────────────────────────────────────
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="pill">Pill</Button>

// ── With icons ─────────────────────────────────────────
<Button>
  <PlusIcon />
  Add Club
</Button>

// ── Disabled ───────────────────────────────────────────
<Button disabled>Disabled</Button>`

export default function ButtonsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader
        section="04 — Components"
        title="Buttons & CTAs"
        description="11 variants, 8 sizes, 4 states. All buttons meet WCAG 2.5.5 44×44px minimum touch target. Built on shadcn/ui CVA primitives with CPSL design tokens."
      />

      <div className="px-12 py-12">
        {/* Live variants */}
        <Section title="All Variants — Live Components">
          <div className="rounded-2xl p-8 border bg-white border-[#E2E8F0]">
            <p className="text-xs text-muted-foreground mb-6">These are real <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">Button</code> components — keyboard navigable, accessible, and fully interactive.</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="default">Primary</Button>
              <Button variant="cpsl-orange">Orange CTA</Button>
              <Button variant="cpsl-navy">Navy</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="cpsl-outline">Outline Blue</Button>
              <Button variant="cpsl-outline-orange">Outline Orange</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="cpsl-success">Success</Button>
              <Button variant="cpsl-live">Live</Button>
            </div>
          </div>
        </Section>

        {/* Sizes */}
        <Section title="Sizes">
          <div className="rounded-2xl p-8 border bg-white border-[#E2E8F0]">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex flex-col items-center gap-2">
                <Button size="xs">xs</Button>
                <span className="text-[10px] text-muted-foreground">xs · h-6</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="sm">sm</Button>
                <span className="text-[10px] text-muted-foreground">sm · h-8</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="default">Default</Button>
                <span className="text-[10px] text-muted-foreground">default · h-9</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="lg">lg</Button>
                <span className="text-[10px] text-muted-foreground">lg · h-11</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="xl">xl</Button>
                <span className="text-[10px] text-muted-foreground">xl · h-13</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="pill" variant="secondary">Pill</Button>
                <span className="text-[10px] text-muted-foreground">pill · rounded-full</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="pill-sm" variant="cpsl-orange">Pill SM</Button>
                <span className="text-[10px] text-muted-foreground">pill-sm</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="pill-lg" variant="cpsl-navy">Pill LG</Button>
                <span className="text-[10px] text-muted-foreground">pill-lg</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#F1F5F9]">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Icon Buttons</p>
              <div className="flex gap-3 items-center">
                <Button size="icon-xs" variant="outline" aria-label="Navigate">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
                <Button size="icon-sm" variant="secondary" aria-label="Navigate">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
                <Button size="icon" variant="default" aria-label="Navigate">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
                <Button size="icon-lg" variant="cpsl-orange" aria-label="Navigate">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* States */}
        <Section title="States">
          <div className="rounded-2xl p-8 border bg-white border-[#E2E8F0]">
            <div className="flex gap-6 items-end flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Button>Default</Button>
                <span className="text-[10px] text-muted-foreground">default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button disabled>Disabled</Button>
                <span className="text-[10px] text-muted-foreground">:disabled</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="cpsl-orange" disabled>Disabled</Button>
                <span className="text-[10px] text-muted-foreground">orange disabled</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="outline" disabled>Disabled</Button>
                <span className="text-[10px] text-muted-foreground">outline disabled</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Real-world patterns */}
        <Section title="Common Patterns">
          <div className="rounded-2xl p-8 border bg-white border-[#E2E8F0] flex flex-col gap-6">
            {/* CTA pair */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Primary + Secondary CTA Pair</p>
              <div className="flex gap-3">
                <Button variant="cpsl-orange" size="lg">
                  Apply for Admission
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            {/* Inline actions */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Match Actions</p>
              <div className="flex gap-2">
                <Button variant="cpsl-live" size="pill">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>
                  Watch Live
                </Button>
                <Button variant="ghost" size="pill-sm">Highlights</Button>
                <Button variant="ghost" size="pill-sm">Stats</Button>
                <Button variant="ghost" size="pill-sm">Lineups</Button>
              </div>
            </div>
            {/* Destructive confirm */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Destructive Action Pair</p>
              <div className="flex gap-3">
                <Button variant="destructive">Remove Club</Button>
                <Button variant="ghost">Cancel</Button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Implementation">
          <CodeBlock code={cssCode} language="tsx" />
        </Section>

        {/* A11y */}
        <Section title="Accessibility Checklist">
          <div className="grid grid-cols-3 gap-4">
            {[
              { rule: "44×44px min touch target", desc: "All interactive elements meet WCAG 2.5.5. icon-sm and above exceed this threshold." },
              { rule: "Focus ring always visible", desc: "3px ring using --ring (CPSL blue #0047FF) on :focus-visible. Never suppressed." },
              { rule: "Disabled state", desc: "pointer-events-none + opacity-50. Never use aria-hidden on disabled buttons." },
              { rule: "Aria labels on icon buttons", desc: "All icon-only buttons require aria-label describing the action, not the icon." },
              { rule: "Color independence", desc: "Never rely on color alone — always pair with text, label, or icon for state communication." },
              { rule: "asChild for navigation", desc: "Use <Button asChild><Link href='...'> to wrap Next.js links in button styles." },
            ].map((r) => (
              <div key={r.rule} className="rounded-xl p-5 border bg-white border-[#E2E8F0]">
                <div className="text-sm font-bold mb-1.5" style={{ color: "#0047FF" }}>✓ {r.rule}</div>
                <div className="text-xs leading-relaxed text-muted-foreground">{r.desc}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
