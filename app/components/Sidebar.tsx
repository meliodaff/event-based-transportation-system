"use client";
import { url } from "inspector/promises";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const NAV_ITEMS = [
  { label: "Dashboard", icon: "📊", link: "/admin" },
  { label: "Event Manager", icon: "📅", link: "/admin/event" },
  { label: "Trip Planner", icon: "🗺️", link: "/admin/trip" },
  { label: "Booking Control", icon: "🎟️", link: "/admin/booking" },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const pathName = usePathname();
  return (
    <div
      className="flex h-screen bg-white overflow-hidden"
      style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}
    >
      {/* ── Sidebar ── */}
      <aside
        style={{ width: collapsed ? 80 : 208, transition: "width 0.3s ease" }}
        className="flex flex-col items-center bg-gray-50 border-r border-gray-200 py-5 gap-3 overflow-hidden flex-shrink-0"
      >
        {/* Logo + hamburger row */}
        <div
          className="flex items-center w-full px-4 mb-2"
          style={{ justifyContent: collapsed ? "center" : "space-between" }}
        >
          {!collapsed && (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md select-none"
              style={{
                background: "linear-gradient(135deg, #a8edea, #fed6e3)",
              }}
            >
              🚌
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Toggle sidebar"
          >
            <span
              className="block w-5 bg-gray-500 rounded"
              style={{ height: 2 }}
            />
            <span
              className="block w-5 bg-gray-500 rounded"
              style={{ height: 2 }}
            />
            <span
              className="block w-5 bg-gray-500 rounded"
              style={{ height: 2 }}
            />
          </button>
        </div>

        {/* Nav items */}
        {NAV_ITEMS.map(({ label, icon, link }) => {
          const isActive = pathName === link;
          return (
            <Link
              href={link}
              key={label}
              title={collapsed ? label : undefined}
              className="flex items-center rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-0"
              style={{
                width: collapsed ? 48 : "calc(100% - 20px)",
                padding: collapsed ? "12px 0" : "10px 16px",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: 10,
                background: isActive
                  ? "linear-gradient(90deg, #67e8f9, #a5f3fc)"
                  : "transparent",
                color: isActive ? "#0e7490" : "#6b7280",
                boxShadow: isActive
                  ? "0 4px 14px rgba(103,232,249,0.4)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = "#ecfeff";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="text-lg leading-none">{icon}</span>
              {!collapsed && (
                <span style={{ whiteSpace: "nowrap" }}>{label}</span>
              )}
            </Link>
          );
        })}
      </aside>
    </div>
  );
}
