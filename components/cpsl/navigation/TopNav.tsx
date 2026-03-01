"use client";
import { useState } from "react";

export interface TopNavItem {
  label: string;
}

export interface TopNavProps {
  items?: TopNavItem[];
  logoText?: string;
  userInitials?: string;
  showLive?: boolean;
  defaultActive?: number;
}

export function TopNav({
  items = [
    { label: "Standings" },
    { label: "Matches" },
    { label: "Teams" },
    { label: "Stats" },
    { label: "News" },
  ],
  logoText = "CPSL",
  userInitials = "JD",
  showLive = true,
  defaultActive = 0,
}: TopNavProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#1E2D45" }}>
      <div
        className="flex items-center justify-between px-6 py-0"
        style={{ background: "#020B1A" }}
      >
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5 py-4">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#4A78E8" }}
            >
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M1 1L15 1L15 12C15 16 8 17 8 17C8 17 1 16 1 12Z" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M4 9.5L8 6L12 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-white font-bold text-sm">{logoText}</span>
          </div>

          <nav className="flex gap-1">
            {items.map((item, i) => (
              <button
                key={item.label}
                onClick={() => setActiveIndex(i)}
                className="px-4 py-4 text-sm font-medium border-b-2 transition-colors"
                style={{
                  color: i === activeIndex ? "white" : "#64748B",
                  borderColor: i === activeIndex ? "#4A78E8" : "transparent",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right slot */}
        <div className="flex items-center gap-3">
          {showLive && (
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
              style={{ background: "#FF1744", color: "white" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-white"
                style={{ animation: "pulse 1.5s ease-in-out infinite" }}
              />
              Live
            </div>
          )}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "#4A78E8" }}
          >
            {userInitials}
          </div>
        </div>
      </div>
    </div>
  );
}
