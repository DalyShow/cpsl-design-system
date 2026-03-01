"use client";
import { useState } from "react";

export interface TabBarProps {
  tabs?: string[];
  variant?: "underline" | "pill";
  defaultActive?: number;
}

export function TabBar({
  tabs = ["Overview", "Matches", "Players", "Stats"],
  variant = "underline",
  defaultActive = 0,
}: TabBarProps) {
  const [active, setActive] = useState(defaultActive);

  if (variant === "pill") {
    return (
      <div
        className="flex gap-1.5 p-1 rounded-xl"
        style={{ background: "#F4F6FA", display: "inline-flex" }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: i === active ? "white" : "transparent",
              color: i === active ? "#0A0E1A" : "#94A3B8",
              boxShadow: i === active ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
              cursor: "pointer",
              border: "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }

  // Underline variant (default)
  return (
    <div className="flex border-b" style={{ borderColor: "#E2E8F0" }}>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className="px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition-all"
          style={{
            color: i === active ? "#4A78E8" : "#94A3B8",
            borderColor: i === active ? "#4A78E8" : "transparent",
            background: "none",
            cursor: "pointer",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
