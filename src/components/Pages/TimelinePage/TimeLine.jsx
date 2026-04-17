import React, { useState } from 'react'
import {useApp} from '../../../context/AppContext'
import { LuPhoneCall } from 'react-icons/lu';
import { FiMessageSquare, FiVideo } from 'react-icons/fi';
import { SiCoffeescript } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';



// --- Icon + color config per interaction type ---
const TYPE_CONFIG = {
  Call: { icon: LuPhoneCall, bg: "bg-gray-100", text: "text-gray-600" },
  Text: { icon: FiMessageSquare, bg: "bg-gray-100", text: "text-gray-600" },
  Video: { icon: FiVideo, bg: "bg-gray-100", text: "text-gray-600" },
  Meetup: {
    icon: SiCoffeescript,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
};

// --- Single timeline entry row ---
function TimelineEntry({ entry }) {
  const cfg  = TYPE_CONFIG[entry.type] || TYPE_CONFIG['Call']
  const Icon = cfg.icon

  // --- Format date: "March 29, 2026" ---
  const date = new Date(entry.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })

  return (
    <div className="flex items-center gap-4 py-3.5 border-b border-gray-100 last:border-0">
      {/* --- Interaction type icon --- */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${cfg.bg}`}>
        <Icon size={14} className={cfg.text} />
      </div>

      {/* --- Title and date --- */}
      <div>
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{entry.type}</span>{' '}
          <span className="text-gray-500">with {entry.friendName}</span>
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{date}</p>
      </div>
    </div>
  )
}

const TimeLine = () => {

  const { timeline } = useApp();

  // --- Filter state for Challenge C2 ---
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const FILTERS = ["All", "Call", "Text", "Video", "Meetup"];

  // --- Apply filter ---
  const filtered =
    filter === "All" ? timeline : timeline.filter((e) => e.type === filter);
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* --- Page heading (Figma: large bold "Timeline") --- */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h1>

      {/* --- Filter dropdown (Challenge C2) --- */}
      <div className="relative mb-6 w-44">
        <button
          onClick={() => setDropdownOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-2 px-3 py-2
                     border border-gray-200 rounded-lg text-sm text-gray-600
                     hover:border-gray-300 bg-white transition-colors"
        >
          <span>Filter timeline{filter !== "All" ? `: ${filter}` : ""}</span>
          <FaChevronDown
            size={14}
            className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div
            className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200
                          rounded-lg shadow-lg z-10 overflow-hidden"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors
                            ${filter === f ? "text-brand-500 font-semibold bg-green-50" : "text-gray-600"}`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* --- Timeline entries list --- */}
      <div className="bg-white border border-gray-100 rounded-xl px-5 py-1">
        {filtered.length > 0 ? (
          filtered.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))
        ) : (
          <p className="text-sm text-gray-400 py-10 text-center">
            No {filter.toLowerCase()} interactions yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default TimeLine