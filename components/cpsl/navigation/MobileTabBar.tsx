"use client";
import { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ── Types ───────────────────────────────────────────────────────────────────
export interface MobileTab {
  label: string;
  icon: React.ReactNode;
}

export interface MobileTabBarProps {
  tabs?: MobileTab[];
  defaultActive?: number;
}

const defaultTabs: MobileTab[] = [
  { label: "Home",      icon: <HomeIcon /> },
  { label: "Matches",   icon: <CalendarIcon /> },
  { label: "Standings", icon: <TrophyIcon /> },
  { label: "Profile",   icon: <UserIcon /> },
];

// ── Component ───────────────────────────────────────────────────────────────
export function MobileTabBar({
  tabs = defaultTabs,
  defaultActive = 0,
}: MobileTabBarProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="max-w-sm mx-auto">
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#1E2D45" }}>
        <div
          className="flex items-center justify-around px-2 py-3"
          style={{ background: "#020B1A" }}
        >
          {tabs.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all"
                style={{
                  color: isActive ? "#4A78E8" : "#475569",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
                <div
                  className="w-1 h-1 rounded-full transition-all"
                  style={{
                    background: isActive ? "#4A78E8" : "transparent",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
