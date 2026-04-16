// ============================================================
// FriendDetail.jsx — Friend Detail Page
// Figma layout: top row (photo + name + stats cards)
// Then: Relationship Goal card + Quick Check-In card
// Left sidebar: action buttons (Snooze, Archive, Delete)
// ============================================================

import { useParams, useNavigate } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  Video,
  AlarmClock,
  Archive,
  Trash2,
  ChevronLeft,
  Edit2,
} from "lucide-react";
import toast from "react-hot-toast";
import { useApp } from "../../context/AppContext";
import StatusBadge from "../common/StatusBadge";

// --- Quick check-in button config ---
const CHECKIN_TYPES = [
  { type: "Call", icon: Phone, label: "Call" },
  { type: "Text", icon: MessageSquare, label: "Text" },
  { type: "Video", icon: Video, label: "Video" },
];

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry } = useApp();

  // --- Find friend by URL param id ---
  const friend = friends.find((f) => f.id === parseInt(id));

  // --- Friend not found state ---
  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-gray-400 mb-4">Friend not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-brand-500 hover:underline text-sm"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  // --- Handle check-in: log to timeline + show toast notification (Req 10.3) ---
  const handleCheckIn = (type) => {
    addTimelineEntry(type, friend.id, friend.name);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* --- Back button --- */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-6 transition-colors"
      >
        <ChevronLeft size={15} />
        Back
      </button>

      {/* ============================================================
          TWO-COLUMN LAYOUT: Left (info card) | Right (stats + actions)
          ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5">
        {/* ========================
            LEFT COLUMN — Friend Info
            ======================== */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 h-fit">
          {/* --- Profile photo --- */}
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 rounded-full object-cover border border-gray-100 mb-3"
          />

          {/* --- Name --- */}
          <h1 className="text-lg font-bold text-gray-900 mb-1">
            {friend.name}
          </h1>

          {/* --- Status badge --- */}
          <div className="mb-3">
            <StatusBadge status={friend.status} />
          </div>

          {/* --- Tags --- */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {friend.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-500 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* --- Bio (italic quote style like Figma) --- */}
          <p className="text-xs text-gray-400 italic mb-3 leading-relaxed">
            "{friend.bio.slice(0, 60)}..."
          </p>

          {/* --- Email --- */}
          <p className="text-xs text-gray-400 mb-5">{friend.email}</p>

          {/* --- Divider --- */}
          <div className="border-t border-gray-100 pt-4 space-y-2">
            {/* --- Snooze button (no functionality needed per spec) --- */}
            <button className="w-full flex items-center gap-2.5 px-3 py-2 border border-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <AlarmClock size={14} className="text-gray-400" />
              Snooze 2 Weeks
            </button>

            {/* --- Archive button --- */}
            <button className="w-full flex items-center gap-2.5 px-3 py-2 border border-gray-100 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Archive size={14} className="text-gray-400" />
              Archive
            </button>

            {/* --- Delete button --- */}
            <button className="w-full flex items-center gap-2.5 px-3 py-2 border border-red-100 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </div>
        /* ========================
        <div className="flex flex-col gap-4">
          {/* ① Stats Cards Row: Days Since Contact, Goal, Next Due Date */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-gray-900">
                {friend.days_since_contact}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Days Since Contact
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-gray-900">
                {friend.goal}
              </div>
              <div className="text-xs text-gray-400 mt-1">Goal (Days)</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center">
              <div className="text-lg font-bold text-gray-900">
                {friend.next_due_date}
              </div>
              <div className="text-xs text-gray-400 mt-1">Next Due</div>
            </div>
          </div>

          {/* ② Relationship Goal Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-gray-700">
                Relationship Goal
              </h2>
              <button className="flex items-center gap-1 text-xs text-brand-500 font-semibold hover:underline">
                <Edit2 size={12} /> Edit
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Connect every{" "}
              <span className="font-bold text-gray-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          {/*  Quick Check-In Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Quick Check-In
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {CHECKIN_TYPES.map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className="flex flex-col items-center gap-2 py-4 border border-gray-100 rounded-xl
                             text-xs font-semibold text-gray-600
                             hover:border-brand-500 hover:text-brand-500 hover:bg-green-50
                             transition-all duration-150 active:scale-95"
                >
                  <Icon size={20} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
