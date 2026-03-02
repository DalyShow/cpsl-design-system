import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { ContentSectionCentered } from "@/components/cpsl/sections/ContentSectionCentered";

export default function SectionsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader
        section="14 — Marketing Sections"
        title="Content Sections"
        description="Full-width marketing sections ported from Tailwind UI and styled to the CPSL brand. Drop directly into page layouts — no wrapper needed."
      />

      <div className="px-12 py-12">

        {/* ── 1. Centered — White ─────────────────────────────────── */}
        <Section title="1 — Centered (White)">
          <p className="text-xs text-muted-foreground mb-4">
            Centered eyebrow, display heading, lead paragraph, and a two-column body. Default
            surface is <code className="bg-secondary px-1.5 py-0.5 rounded">background="white"</code>.
            Gold divider bar separates the header from the body columns.
          </p>
        </Section>
      </div>

      {/* Live preview — full bleed */}
      <ContentSectionCentered background="white" />

      <div className="px-12 py-12">

        {/* ── 2. Centered — Surface ───────────────────────────────── */}
        <Section title="2 — Centered (Surface)">
          <p className="text-xs text-muted-foreground mb-4">
            <code className="bg-secondary px-1.5 py-0.5 rounded">background="surface"</code> uses the
            page background grey (<code className="bg-secondary px-1.5 py-0.5 rounded">#F4F6FA</code>)
            — ideal between two white sections.
          </p>
        </Section>
      </div>

      <ContentSectionCentered background="surface" />

      <div className="px-12 py-12">

        {/* ── 3. Centered — Navy ──────────────────────────────────── */}
        <Section title="3 — Centered (Navy)">
          <p className="text-xs text-muted-foreground mb-4">
            <code className="bg-secondary px-1.5 py-0.5 rounded">background="navy"</code> — dark
            championship surface. Heading switches to cream, body text to muted steel.
          </p>
        </Section>
      </div>

      <ContentSectionCentered background="navy" />

      {/* ── Component API ───────────────────────────────────────────── */}
      <div className="px-12 py-12">
        <Section title="Component API">
          <div className="rounded-xl border overflow-hidden" style={{ background: "white", borderColor: "#E2E8F0" }}>
            <div className="px-4 py-2.5 border-b" style={{ background: "#FAFBFF", borderColor: "#F1F5F9" }}>
              <span className="text-xs font-bold" style={{ color: "#091628" }}>ContentSectionCentered</span>
            </div>
            <pre
              className="text-[11px] leading-relaxed p-4 overflow-x-auto"
              style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", color: "#475569" }}
            >{`<ContentSectionCentered
  eyebrow="About the League"
  heading="Competitive Soccer Across the Carolinas"
  lead="From the Piedmont to the coast..."
  paragraphs={[
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph...",
    "Fourth paragraph...",
  ]}
  background="white"   // "white" | "surface" | "navy"
/>`}</pre>
          </div>
        </Section>
      </div>
    </div>
  );
}
