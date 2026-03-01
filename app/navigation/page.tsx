import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { TopNav } from "@/components/cpsl/navigation/TopNav";
import { TabBar } from "@/components/cpsl/navigation/TabBar";
import { Breadcrumb } from "@/components/cpsl/navigation/Breadcrumb";
import { Pagination } from "@/components/cpsl/navigation/Pagination";
import { MobileTabBar } from "@/components/cpsl/navigation/MobileTabBar";

export default function NavigationPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader
        section="07 — Components"
        title="Navigation"
        description="Top nav, tab bars, breadcrumbs, pagination, and a mobile tab bar — all interactive. Click any tab, page number, or nav link to see the active state update in real time."
      />
      <div className="px-12 py-12">

        {/* ── 1. Top Navigation Bar ── */}
        <Section title="1 — Top Navigation Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Dark-navy bar with brand mark, interactive nav links (click to activate), live indicator, and user avatar. Accepts custom items, logo text, and user initials via props.
          </p>
          <TopNav />
        </Section>

        {/* ── 2. Tab Bar Variants ── */}
        <Section title="2 — Tab Bar Variants">
          <p className="text-xs text-muted-foreground mb-4">
            Two tab styles — both fully interactive. Click any tab to switch the active state. Use <code className="bg-secondary px-1.5 py-0.5 rounded">variant="underline"</code> for content pages, <code className="bg-secondary px-1.5 py-0.5 rounded">variant="pill"</code> for filter controls.
          </p>
          <div className="flex flex-col gap-4">

            {/* Underline */}
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>
                Underline (default)
              </div>
              <TabBar
                tabs={["Overview", "Matches", "Players", "Stats"]}
                variant="underline"
              />
            </div>

            {/* Pill */}
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>
                Pill tabs
              </div>
              <TabBar
                tabs={["All", "Home", "Away", "Cup"]}
                variant="pill"
              />
            </div>

          </div>
        </Section>

        {/* ── 3. Breadcrumb & Pagination ── */}
        <Section title="3 — Breadcrumb &amp; Pagination">
          <p className="text-xs text-muted-foreground mb-4">
            Breadcrumb uses chevron separators and bold final item. Pagination is fully interactive — click any page number or the arrow buttons to navigate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>
                Breadcrumb
              </div>
              <Breadcrumb items={["CPSL", "Teams", "Charlotte FC", "Matches"]} />
            </div>

            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>
                Pagination — 8 pages
              </div>
              <Pagination totalPages={8} defaultPage={1} />
            </div>

          </div>
        </Section>

        {/* ── 4. Mobile Tab Bar ── */}
        <Section title="4 — Mobile Bottom Tab Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Fixed-bottom navigation for mobile. SVG icons swap to the active blue when selected, with a dot indicator. Click any tab to switch.
          </p>
          <MobileTabBar />
        </Section>

        {/* ── Component API ── */}
        <Section title="Component API">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "TopNav",
                code: `<TopNav
  items={[
    { label: "Standings" },
    { label: "Matches" },
    { label: "Teams" },
  ]}
  logoText="CPSL"
  userInitials="JD"
  showLive={true}
  defaultActive={0}
/>`,
              },
              {
                title: "TabBar",
                code: `<TabBar
  tabs={["Overview", "Matches", "Players"]}
  variant="underline"  // or "pill"
  defaultActive={0}
/>`,
              },
              {
                title: "Breadcrumb",
                code: `<Breadcrumb
  items={["CPSL", "Teams", "Charlotte FC"]}
/>`,
              },
              {
                title: "Pagination",
                code: `<Pagination
  totalPages={12}
  defaultPage={1}
/>`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border overflow-hidden"
                style={{ background: "white", borderColor: "#E2E8F0" }}
              >
                <div
                  className="px-4 py-2.5 border-b"
                  style={{ background: "#FAFBFF", borderColor: "#F1F5F9" }}
                >
                  <span className="text-xs font-bold" style={{ color: "#0A0E1A" }}>
                    {item.title}
                  </span>
                </div>
                <pre
                  className="text-[11px] leading-relaxed p-4 overflow-x-auto"
                  style={{
                    fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                    color: "#475569",
                  }}
                >
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
