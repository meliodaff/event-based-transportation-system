"use client";
import { useState } from "react";

export default function EventCard({ event, index }: any) {
  const [hovered, setHovered] = useState(false);
  const seatsUrgent = event.seatsLeft <= 5;

  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer bg-white"
      style={{
        boxShadow: hovered
          ? `0 12px 40px -4px ${event.accent}28, 0 4px 16px #00000012`
          : "0 2px 12px #0000000d, 0 1px 3px #00000010",
        transform: hovered
          ? "translateY(-5px) scale(1.015)"
          : "translateY(0) scale(1)",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        border: "1px solid #efefef",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: 190 }}>
        <img
          src={event.event_banner}
          alt={event.event_name}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #00000050 0%, transparent 55%)",
          }}
        />

        {/* Accent bar at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: event.accent,
            opacity: hovered ? 1 : 0.8,
            transition: "opacity 0.3s",
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
              color: "#52525b",
              fontFamily: "monospace",
              letterSpacing: "0.04em",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            EVT-00{event.event_id}
          </span>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: event.accent,
              color: "#fff",
              letterSpacing: "0.04em",
              boxShadow: `0 2px 8px ${event.accent}55`,
            }}
          >
            Day {event.event_day}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-3 pb-4 bg-white">
        {/* Title */}
        <h2
          className="text-center text-lg font-bold mb-3"
          style={{
            color: "#18181b",
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.01em",
          }}
        >
          {event.event_name}
        </h2>

        {/* Accent divider */}
        <div
          className="mb-3"
          style={{
            height: 1,
            background: `linear-gradient(to right, transparent, ${event.accent}66, transparent)`,
          }}
        />

        {/* Meta */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold" style={{ color: "#3f3f46" }}>
              {event.event_location}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#a1a1aa" }}>
              {event.event_date}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium" style={{ color: "#71717a" }}>
              Trips:{" "}
              <span style={{ color: "#18181b", fontWeight: 700 }}>
                {event.total_trips}
              </span>
            </p>
            <p
              className="text-xs font-medium mt-0.5"
              style={{ color: "#71717a" }}
            >
              Seats Left:{" "}
              <span
                style={{
                  color: seatsUrgent ? "#f43f5e" : "#18181b",
                  fontWeight: 700,
                }}
              >
                {event.seats_left}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
