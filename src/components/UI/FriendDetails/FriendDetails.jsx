import React from "react";
import { LuAlarmClock, LuPhoneCall } from "react-icons/lu";
import { FaChevronLeft, FaRegMessage } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import StatusBadge from "../StatusBadge/StatusBadge";
import { useNavigate, useParams } from "react-router";
import { useApp } from "../../../context/AppContext";
import { BsArchive } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";

// ✅ FIXED: store component, not JSX
const CHECKIN_TYPES = [
  { type: "Call", icon: LuPhoneCall, label: "Call" },
  { type: "Text", icon: FaRegMessage, label: "Text" },
  { type: "Video", icon: IoVideocamOutline, label: "Video" },
];

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry, loading } = useApp();

  // ✅ Loading state
  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const friend = friends.find((f) => f.id === parseInt(id));

  // ✅ Not found
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

  const handleCheckIn = (type) => {
    addTimelineEntry(type, friend.id, friend.name);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-6"
      >
        <FaChevronLeft size={15} />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5">
        {/* LEFT */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 h-fit">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h1 className="text-lg font-bold mb-1">{friend.name}</h1>

          <div className="mb-3">
            <StatusBadge status={friend.status} />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {friend.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 bg-gray-100 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-400 italic mb-3">
            "{friend.bio.slice(0, 60)}..."
          </p>

          <p className="text-xs text-gray-400 mb-5">{friend.email}</p>

          <div className="border-t pt-4 space-y-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 border rounded-lg text-xs hover:bg-gray-50">
              <LuAlarmClock size={14} />
              Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 border rounded-lg text-xs hover:bg-gray-50">
              <BsArchive size={14} />
              Archive
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 border border-red-100 text-red-500 rounded-lg text-xs hover:bg-red-50">
              <FiTrash2 size={14} />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <StatBox
              label="Days Since Contact"
              value={friend.days_since_contact}
            />
            <StatBox label="Goal (Days)" value={friend.goal} />
            <StatBox label="Next Due" value={friend.next_due_date} />
          </div>

          {/* Goal */}
          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between mb-2">
              <h2 className="text-sm font-semibold">Relationship Goal</h2>
              <button className="flex items-center gap-1 text-xs text-brand-500">
                <FaRegEdit size={12} /> Edit
              </button>
            </div>
            <p className="text-sm">
              Connect every <b>{friend.goal} days</b>
            </p>
          </div>

          {/* Check-In */}
          <div className="bg-white border rounded-xl p-5">
            <h2 className="text-sm font-semibold mb-4">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-3">
              {CHECKIN_TYPES.map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className="flex flex-col items-center gap-2 py-4 border rounded-xl text-xs hover:bg-green-50"
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
};

// 🔥 Reusable stat component
const StatBox = ({ label, value }) => (
  <div className="bg-white border rounded-xl p-5 text-center">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs text-gray-400 mt-1">{label}</div>
  </div>
);

export default FriendDetails;
