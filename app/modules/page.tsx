"use client"

import PageHeader from "@/components/PageHeader"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

// ─── Data ───────────────────────────────────────────────────────────────────

const clubs = [
  { abbr: "CFA", name: "Charlotte FC Academy", city: "Charlotte",   color: "#0047FF", tier: "premier"  },
  { abbr: "RLH", name: "Raleigh Athletic",      city: "Raleigh",    color: "#7C3AED", tier: "premier"  },
  { abbr: "DUR", name: "Durham United",         city: "Durham",     color: "#0A0E1A", tier: "elite"    },
  { abbr: "TFC", name: "Triangle FC",           city: "Cary",       color: "#0288D1", tier: "elite"    },
  { abbr: "GFC", name: "Greensboro FC",         city: "Greensboro", color: "#00875A", tier: "academy"  },
  { abbr: "WSS", name: "Winston-Salem SC",      city: "Winston-Salem", color: "#FF5722", tier: "academy" },
]

const standings = [
  { pos: 1,  club: "Charlotte FC",    abbr: "CFA", color: "#0047FF", p: 18, w: 14, d: 2,  l: 2,  gd: "+24", pts: 44 },
  { pos: 2,  club: "Raleigh Athletic", abbr: "RLH", color: "#7C3AED", p: 18, w: 11, d: 4,  l: 3,  gd: "+14", pts: 37 },
  { pos: 3,  club: "Durham United",   abbr: "DUR", color: "#0A0E1A", p: 18, w: 10, d: 3,  l: 5,  gd: "+8",  pts: 33 },
  { pos: 4,  club: "Triangle FC",     abbr: "TFC", color: "#0288D1", p: 18, w:  8, d: 5,  l: 5,  gd: "+2",  pts: 29 },
  { pos: 5,  club: "Greensboro FC",   abbr: "GFC", color: "#00875A", p: 18, w:  6, d: 3,  l: 9,  gd: "-8",  pts: 21 },
  { pos: 6,  club: "Winston-Salem SC", abbr: "WSS", color: "#FF5722", p: 18, w:  2, d: 1, l: 15,  gd: "-28", pts: 7  },
]

const results = [
  { home: "Charlotte FC",  hScore: 3, away: "Raleigh Athletic", aScore: 1, date: "Sat 22 Feb", result: "win"  as const },
  { home: "Durham United", hScore: 2, away: "Charlotte FC",      aScore: 2, date: "Sat 15 Feb", result: "draw" as const },
  { home: "Charlotte FC",  hScore: 4, away: "Triangle FC",       aScore: 0, date: "Sat 8 Feb",  result: "win"  as const },
  { home: "Greensboro FC", hScore: 1, away: "Charlotte FC",      aScore: 3, date: "Sun 2 Feb",  result: "win"  as const },
]

const fixtures = [
  { home: "Charlotte FC",   away: "Durham United",    date: "Sat 1 Mar",  time: "3:00 PM", venue: "Matthews Sportsplex",  comp: "Premiership" },
  { home: "Raleigh Athletic", away: "Triangle FC",    date: "Sat 1 Mar",  time: "1:00 PM", venue: "Dix Park Fields",      comp: "Premiership" },
  { home: "Charlotte FC",   away: "Raleigh Athletic", date: "Sat 8 Mar",  time: "3:00 PM", venue: "Matthews Sportsplex",  comp: "CPSL Cup" },
  { home: "Winston-Salem SC", away: "Greensboro FC",  date: "Sun 9 Mar",  time: "2:00 PM", venue: "Truist Stadium",        comp: "Premiership" },
]

const news = [
  { category: "Match Report", date: "Feb 22",  title: "Charlotte FC Cruise Past Raleigh in Dominant 3–1 Win", excerpt: "Thompson's brace and a stunning long-range strike from Davies sealed a comprehensive victory for Charlotte." },
  { category: "Transfer",     date: "Feb 20",  title: "Charlotte FC Sign Striker Marcus Webb from Triangle FC", excerpt: "The 21-year-old forward joins on a season-long deal after a standout campaign in the CPSL Cup last year." },
  { category: "League News",  date: "Feb 18",  title: "CPSL Announces Expansion to 14 Clubs for 2026–27 Season", excerpt: "Two new franchises from Asheville and Wilmington will join the league following a rigorous admission process." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ModulesPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader
        section="13 — Patterns"
        title="Body Modules"
        description="Nine reusable page sections built from shadcn primitives — skinned with CPSL design tokens. Drop these below any hero to assemble a complete page."
      />

      <div className="px-12 py-12">

        {/* ── 1. League Stats Bar ─────────────────────────────────────────────── */}
        <Section title="1 — League Stats Bar">
          <p className="text-xs text-muted-foreground mb-4">
            Full-width counter strip. Barlow Condensed numbers command attention. Sits naturally directly below a hero.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div
              className="flex items-center justify-around"
              style={{ background: "#020B1A", padding: "36px 48px" }}
            >
              {[
                { value: "12",    label: "Clubs" },
                { value: "380+", label: "Players" },
                { value: "38",   label: "Match Days" },
                { value: "6",    label: "Venues" },
                { value: "2026", label: "Season" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-10">
                  <div className="text-center">
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "52px", fontWeight: 800, color: "white",
                      lineHeight: 1, letterSpacing: "-1.5px",
                    }}>
                      {s.value}
                    </div>
                    <div style={{ color: "#475569", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "8px" }}>
                      {s.label}
                    </div>
                  </div>
                  {i < 4 && <Separator orientation="vertical" className="h-12 opacity-10" />}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── 2. Feature Highlights ───────────────────────────────────────────── */}
        <Section title="2 — Feature Highlights">
          <p className="text-xs text-muted-foreground mb-4">
            Three-column <code className="bg-secondary px-1.5 py-0.5 rounded">Card</code> grid. Icon → title → description. Use for value props, league benefits, or platform features.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                ),
                title: "Live Match Tracking",
                body: "Real-time scores, stats, and minute-by-minute updates for every CPSL fixture across all competitions.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                title: "Club Management Portal",
                body: "Submit rosters, manage transfers, upload documents, and track registration status — all in one place.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                ),
                title: "Performance Analytics",
                body: "Season-long player and team statistics, heat maps, and form guides updated after every match.",
              },
            ].map((f) => (
              <Card key={f.title} className="bg-white border-[#E2E8F0]">
                <CardHeader>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: "#EEF3FF" }}>
                    {f.icon}
                  </div>
                  <CardTitle className="text-base text-[#0A0E1A]">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-[#64748B]">
                    {f.body}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary text-sm">
                    Learn more →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── 3. Results / Fixtures Tabs ──────────────────────────────────────── */}
        <Section title="3 — Results & Fixtures (Tabs)">
          <p className="text-xs text-muted-foreground mb-4">
            <code className="bg-secondary px-1.5 py-0.5 rounded">Tabs</code> with <code className="bg-secondary px-1.5 py-0.5 rounded">variant=&quot;line&quot;</code> switching between recent results and upcoming fixtures.
          </p>
          <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden">
            <Tabs defaultValue="results">
              <div className="px-6 pt-5 pb-0 border-b border-[#F1F5F9]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-[#0A0E1A]">Charlotte FC · 2025–26</h3>
                  <Badge variant="premier">Premiership</Badge>
                </div>
                <TabsList variant="line" className="bg-transparent p-0 h-auto gap-6">
                  <TabsTrigger value="results" className="pb-3 text-xs font-semibold uppercase tracking-widest">Results</TabsTrigger>
                  <TabsTrigger value="fixtures" className="pb-3 text-xs font-semibold uppercase tracking-widest">Fixtures</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="results" className="mt-0">
                <div className="divide-y divide-[#F1F5F9]">
                  {results.map((r, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4">
                      <span className="text-xs text-[#94A3B8] w-20 shrink-0">{r.date}</span>
                      <div className="flex-1 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#0A0E1A] flex-1 text-right">{r.home}</span>
                        <span style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "20px", fontWeight: 800, color: "#0A0E1A",
                          letterSpacing: "-0.5px", minWidth: "52px", textAlign: "center",
                        }}>
                          {r.hScore}–{r.aScore}
                        </span>
                        <span className="text-sm font-medium text-[#64748B] flex-1">{r.away}</span>
                      </div>
                      <Badge variant={r.result} className="w-12 justify-center shrink-0">
                        {r.result === "win" ? "W" : r.result === "draw" ? "D" : "L"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fixtures" className="mt-0">
                <div className="divide-y divide-[#F1F5F9]">
                  {fixtures.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-20 shrink-0">
                        <div className="text-xs font-semibold text-[#0A0E1A]">{f.date}</div>
                        <div className="text-xs text-[#94A3B8]">{f.time}</div>
                      </div>
                      <div className="flex-1 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#0A0E1A] flex-1 text-right">{f.home}</span>
                        <span className="text-xs font-bold text-[#94A3B8] px-3">vs</span>
                        <span className="text-sm font-medium text-[#64748B] flex-1">{f.away}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <Badge variant="upcoming" className="mb-1">{f.comp}</Badge>
                        <div className="text-[10px] text-[#94A3B8]">{f.venue}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Section>

        {/* ── 4. Standings Table ──────────────────────────────────────────────── */}
        <Section title="4 — Standings Table">
          <p className="text-xs text-muted-foreground mb-4">
            shadcn <code className="bg-secondary px-1.5 py-0.5 rounded">Table</code> skinned with CPSL tokens. Leader row highlighted in primary blue. Points in bold blue.
          </p>
          <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F4F6FA] hover:bg-[#F4F6FA] border-b-2 border-[#E2E8F0]">
                  <TableHead className="w-10 text-center text-[10px] font-bold uppercase tracking-widest text-[#64748B]">#</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Club</TableHead>
                  {["P","W","D","L","GD","Pts"].map(h => (
                    <TableHead key={h} className="text-center text-[10px] font-bold uppercase tracking-widest text-[#64748B] w-12">{h}</TableHead>
                  ))}
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((row) => (
                  <TableRow
                    key={row.club}
                    className="border-b border-[#F1F5F9]"
                    style={{ background: row.pos === 1 ? "#EEF3FF" : row.pos <= 3 ? "white" : "white" }}
                  >
                    <TableCell className="text-center">
                      <span className="text-xs font-mono text-[#94A3B8]">{row.pos}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                          style={{ background: row.color }}
                        >
                          {row.abbr.slice(0,2)}
                        </div>
                        <span className="text-sm font-semibold text-[#0A0E1A]">{row.club}</span>
                        {row.pos <= 2 && <Badge variant="promotion" className="text-[9px] px-1.5 py-0">Promo</Badge>}
                      </div>
                    </TableCell>
                    {[row.p, row.w, row.d, row.l, row.gd].map((v, j) => (
                      <TableCell key={j} className="text-center text-sm text-[#475569]">{v}</TableCell>
                    ))}
                    <TableCell className="text-center">
                      <span className="text-sm font-bold text-[#0047FF]">{row.pts}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {(row.pos === 1
                          ? ["W","W","W","D","W"]
                          : row.pos === 2
                          ? ["W","D","W","L","W"]
                          : row.pos === 3
                          ? ["D","W","L","W","D"]
                          : row.pos === 4
                          ? ["D","L","W","D","W"]
                          : row.pos === 5
                          ? ["L","W","L","D","L"]
                          : ["L","L","D","L","L"]
                        ).map((r, k) => (
                          <span
                            key={k}
                            className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold text-white"
                            style={{ background: r === "W" ? "#00C853" : r === "D" ? "#94A3B8" : "#FF1744" }}
                          >{r}</span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Section>

        {/* ── 5. Club Directory ───────────────────────────────────────────────── */}
        <Section title="5 — Club Directory">
          <p className="text-xs text-muted-foreground mb-4">
            <code className="bg-secondary px-1.5 py-0.5 rounded">Card</code> grid with <code className="bg-secondary px-1.5 py-0.5 rounded">Avatar</code> initials crest, club name, city, and tier <code className="bg-secondary px-1.5 py-0.5 rounded">Badge</code>.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {clubs.map((c) => (
              <Card key={c.abbr} className="bg-white border-[#E2E8F0] hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback
                        className="text-white font-bold text-sm"
                        style={{ background: c.color }}
                      >
                        {c.abbr}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm text-[#0A0E1A] leading-tight">{c.name}</CardTitle>
                      <p className="text-xs text-[#94A3B8] mt-0.5">{c.city}, NC</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant={c.tier as "premier" | "elite" | "academy"} className="capitalize">
                    {c.tier}
                  </Badge>
                </CardContent>
                <CardFooter className="border-t border-[#F1F5F9] pt-3">
                  <Button variant="ghost" size="sm" className="text-primary px-0 h-auto text-xs font-semibold">
                    View Club →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── 6. News Grid ────────────────────────────────────────────────────── */}
        <Section title="6 — News & Stories">
          <p className="text-xs text-muted-foreground mb-4">
            Three-column article <code className="bg-secondary px-1.5 py-0.5 rounded">Card</code> grid. Category <code className="bg-secondary px-1.5 py-0.5 rounded">Badge</code>, date metadata, headline, excerpt, and read-more link.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {news.map((n) => (
              <Card key={n.title} className="bg-white border-[#E2E8F0] flex flex-col">
                {/* Simulated image */}
                <div className="h-40 rounded-t-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #EEF3FF 0%, #DDEAFF 100%)" }}>
                  <div className="h-full flex items-center justify-center">
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "40px", fontWeight: 800, color: "#BDCEFF", letterSpacing: "-1px" }}>
                      CPSL
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="text-[10px] px-2">{n.category}</Badge>
                    <span className="text-[10px] text-[#94A3B8]">{n.date}</span>
                  </div>
                  <CardTitle className="text-sm leading-snug text-[#0A0E1A]">{n.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-xs leading-relaxed text-[#64748B] line-clamp-3">
                    {n.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t border-[#F1F5F9] pt-3 mt-auto">
                  <Button variant="link" className="px-0 text-primary text-xs font-semibold h-auto">
                    Read more →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── 7. Player Spotlight ─────────────────────────────────────────────── */}
        <Section title="7 — Player Spotlight">
          <p className="text-xs text-muted-foreground mb-4">
            Featured player <code className="bg-secondary px-1.5 py-0.5 rounded">Card</code> with large <code className="bg-secondary px-1.5 py-0.5 rounded">Avatar</code>, season stats, and shadcn <code className="bg-secondary px-1.5 py-0.5 rounded">Progress</code> bars. Use for player profiles or weekly highlights.
          </p>
          <div className="grid grid-cols-3 gap-4 items-start">
            {/* Player card */}
            <Card className="bg-white border-[#E2E8F0] col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3 mb-5">
                  <Avatar size="lg" className="w-20 h-20">
                    <AvatarFallback className="text-white font-bold text-xl w-20 h-20" style={{ background: "#0047FF", fontSize: "24px" }}>
                      RT
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-base font-bold text-[#0A0E1A]">Ryan Thompson</div>
                    <div className="text-xs text-[#64748B]">Forward · Charlotte FC</div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="premier">Premiership</Badge>
                    <Badge variant="gold">Top Scorer</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { value: "14", label: "Goals" },
                    { value: "7",  label: "Assists" },
                    { value: "18", label: "Games" },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "#F4F6FA" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", fontWeight: 800, color: "#0047FF", lineHeight: 1 }}>
                        {s.value}
                      </div>
                      <div className="text-[10px] font-semibold text-[#94A3B8] mt-1 uppercase tracking-wide">{s.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats breakdown */}
            <Card className="bg-white border-[#E2E8F0] col-span-2">
              <CardHeader>
                <CardTitle className="text-sm text-[#0A0E1A]">Season Performance</CardTitle>
                <CardDescription className="text-xs text-[#64748B]">2025–26 CPSL Premiership · Match Day 18</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Shooting Accuracy",  value: 72, color: "#0047FF" },
                    { label: "Pass Completion",    value: 84, color: "#0047FF" },
                    { label: "Dribble Success",    value: 61, color: "#7C3AED" },
                    { label: "Aerial Duels Won",   value: 55, color: "#7C3AED" },
                    { label: "Distance Covered",   value: 88, color: "#00C853" },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-[#475569]">{stat.label}</span>
                        <span className="text-xs font-bold tabular-nums" style={{ color: stat.color }}>{stat.value}%</span>
                      </div>
                      <Progress
                        value={stat.value}
                        className="h-2"
                        style={{ "--progress-color": stat.color } as React.CSSProperties}
                      />
                    </div>
                  ))}
                </div>

                <Separator className="my-5" />

                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Mins Played", value: "1,530" },
                    { label: "Yellow Cards", value: "2" },
                    { label: "Red Cards", value: "0" },
                    { label: "Man of the Match", value: "5×" },
                  ].map(s => (
                    <div key={s.label} className="rounded-lg p-3" style={{ background: "#F4F6FA" }}>
                      <div className="text-sm font-bold text-[#0A0E1A]">{s.value}</div>
                      <div className="text-[10px] text-[#94A3B8] mt-0.5 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ── 8. CTA Banner ───────────────────────────────────────────────────── */}
        <Section title="8 — CTA Banner">
          <p className="text-xs text-muted-foreground mb-4">
            Full-width dark navy section with Barlow Condensed headline, subtext, and a primary + secondary CTA pair. Use between content sections to drive conversion.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#1E2D45]" style={{ background: "#020B1A" }}>
            <div className="px-16 py-14 flex items-center justify-between gap-12">
              <div>
                <div className="text-[10px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "#0047FF" }}>
                  2025–26 Season
                </div>
                <h2 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "52px", fontWeight: 800,
                  color: "white", lineHeight: 0.95, letterSpacing: "-1.5px",
                  marginBottom: "16px",
                }}>
                  REGISTER YOUR CLUB<br />
                  <span style={{ color: "#0047FF" }}>BEFORE APRIL 30</span>
                </h2>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#64748B" }}>
                  Applications for the 2025–26 CPSL Premiership and Development League are now open. Secure your spot for next season before the deadline closes.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Button size="lg" className="min-w-[180px]">Apply Now →</Button>
                <Button size="lg" variant="secondary" className="min-w-[180px]">Learn More</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── 9. Skeleton Loading State ───────────────────────────────────────── */}
        <Section title="9 — Skeleton Loading State">
          <p className="text-xs text-muted-foreground mb-4">
            shadcn <code className="bg-secondary px-1.5 py-0.5 rounded">Skeleton</code> shimmer applied to a card grid and a table row. Shows the layout while data fetches — mirrors the shape of the real modules above.
          </p>

          {/* Card skeletons */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[0,1,2].map(i => (
              <Card key={i} className="bg-white border-[#E2E8F0]">
                <CardContent className="pt-5">
                  <Skeleton className="h-32 w-full rounded-lg mb-4" />
                  <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="w-9 h-9 rounded-full shrink-0" />
                    <div className="flex-1">
                      <Skeleton className="h-3.5 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                  <Skeleton className="h-3 w-full mb-2" />
                  <Skeleton className="h-3 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Table skeleton */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-[#E2E8F0]" style={{ background: "#F4F6FA" }}>
              <Skeleton className="h-3 w-48" />
            </div>
            {[0,1,2,3].map(i => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 border-b border-[#F1F5F9]">
                <Skeleton className="w-6 h-6 rounded-full shrink-0" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-5 w-10 rounded-md" />
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
