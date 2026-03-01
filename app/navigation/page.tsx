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
        description="Top nav, tab bars, breadcrumbs, pagination, and bottom tab bars — all interactive. Card variants for component showcases; full-width variants for production layouts."
      />
      <div className="px-12 py-12">

        {/* ───────────────────────────────────────────── CARD VARIANTS ─── */}

        {/* 1. Top Navigation Bar — card */}
        <Section title="1 — Top Navigation Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Dark-navy bar with brand mark, interactive nav links, live badge, and user avatar. Click any link to switch the active state. Use <code className="bg-secondary px-1.5 py-0.5 rounded">variant="card"</code> (default) inside modals, drawers, or preview frames.
          </p>
          <TopNav variant="card" />
        </Section>

        {/* 2. Tab Bar Variants — card */}
        <Section title="2 — Tab Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Two interactive tab styles. Use <code className="bg-secondary px-1.5 py-0.5 rounded">variant="underline"</code> for content pages,{" "}
            <code className="bg-secondary px-1.5 py-0.5 rounded">variant="pill"</code> for filter controls.
          </p>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Underline</div>
              <TabBar tabs={["Overview", "Matches", "Players", "Stats"]} variant="underline" />
            </div>
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Pill</div>
              <TabBar tabs={["All", "Home", "Away", "Cup"]} variant="pill" />
            </div>
          </div>
        </Section>

        {/* 3. Breadcrumb & Pagination */}
        <Section title="3 — Breadcrumb &amp; Pagination">
          <p className="text-xs text-muted-foreground mb-4">
            Breadcrumb uses chevron separators, bold current-page item. Pagination is interactive — click numbers or arrow buttons to navigate; ellipsis collapses large page counts automatically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Breadcrumb</div>
              <Breadcrumb items={["CPSL", "Teams", "Charlotte FC", "Matches"]} />
            </div>
            <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#94A3B8" }}>Pagination — 8 pages</div>
              <Pagination totalPages={8} defaultPage={1} />
            </div>
          </div>
        </Section>

        {/* 4. Mobile Tab Bar — card */}
        <Section title="4 — Mobile Bottom Tab Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Centered card for mobile previews. Rounded corners, max-width 384 px. SVG icons turn blue on tap; dot marks the active item.
          </p>
          <MobileTabBar variant="mobile" />
        </Section>

        {/* ─────────────────────────────────────────── FULL-WIDTH VARIANTS ─── */}

        <div className="mt-12 mb-6">
          <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#94A3B8" }}>Full-width variants</div>
          <h2 className="text-xl font-bold" style={{ color: "#0A0E1A" }}>Edge-to-Edge Production Layouts</h2>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>
            No rounded corners — each bar spans the full browser width exactly as it would in a deployed app.
          </p>
        </div>

      </div>

      {/* 5. Desktop — Full-Width Top Nav */}
      <div className="px-12 mb-2">
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#94A3B8" }}>5 — Desktop</div>
        <p className="text-xs mb-3" style={{ color: "#64748B" }}>
          <code className="bg-secondary px-1.5 py-0.5 rounded">variant="full"</code> — bottom border only, no border-radius. Pair with a <code className="bg-secondary px-1.5 py-0.5 rounded">sticky top-0</code> wrapper in production.
        </p>
      </div>
      <TopNav variant="full" />

      {/* 6. Tablet — Full-Width Tab Bar */}
      <div className="px-12 mt-8 mb-2">
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#94A3B8" }}>6 — Tablet</div>
        <p className="text-xs mb-3" style={{ color: "#64748B" }}>
          <code className="bg-secondary px-1.5 py-0.5 rounded">stretch</code> prop makes each tab fill equal width across the full bar. Works with both <code className="bg-secondary px-1.5 py-0.5 rounded">underline</code> and <code className="bg-secondary px-1.5 py-0.5 rounded">pill</code> variants.
        </p>
      </div>
      {/* White background card so the underline border reads cleanly */}
      <div style={{ background: "white", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <TabBar tabs={["Overview", "Matches", "Players", "Stats", "News"]} variant="underline" stretch />
      </div>
      <div className="mt-3" style={{ background: "#F4F6FA", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", padding: "10px 0" }}>
        <TabBar tabs={["All", "Home", "Away", "Neutral", "Cup"]} variant="pill" stretch />
      </div>

      {/* 7. Mobile — Full-Width Bottom Tab Bar */}
      <div className="px-12 mt-8 mb-2">
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#94A3B8" }}>7 — Mobile</div>
        <p className="text-xs mb-3" style={{ color: "#64748B" }}>
          <code className="bg-secondary px-1.5 py-0.5 rounded">variant="full"</code> — edge-to-edge, top-border only. Active item shows a sliding top-bar indicator. Place inside a <code className="bg-secondary px-1.5 py-0.5 rounded">fixed bottom-0 w-full</code> wrapper in production.
        </p>
      </div>
      <MobileTabBar variant="full" />

      {/* Component API */}
      <div className="px-12 py-12">
        <Section title="Component API">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "TopNav",
                code: `<TopNav
  items={[{ label: "Standings" }, ...]}
  logoText="CPSL"
  userInitials="JD"
  showLive={true}
  defaultActive={0}
  variant="card"   // or "full"
/>`,
              },
              {
                title: "TabBar",
                code: `<TabBar
  tabs={["Overview", "Matches", "Players"]}
  variant="underline"   // or "pill"
  defaultActive={0}
  stretch={false}       // true → fills full width
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
              {
                title: "MobileTabBar",
                code: `<MobileTabBar
  tabs={[{ label: "Home", icon: <HomeIcon /> }, ...]}
  defaultActive={0}
  variant="mobile"   // or "full"
/>`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border overflow-hidden"
                style={{ background: "white", borderColor: "#E2E8F0" }}
              >
                <div className="px-4 py-2.5 border-b" style={{ background: "#FAFBFF", borderColor: "#F1F5F9" }}>
                  <span className="text-xs font-bold" style={{ color: "#0A0E1A" }}>{item.title}</span>
                </div>
                <pre
                  className="text-[11px] leading-relaxed p-4 overflow-x-auto"
                  style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", color: "#475569" }}
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
