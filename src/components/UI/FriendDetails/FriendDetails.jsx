import React from "react";
import { LuAlarmClock, LuPhoneCall } from "react-icons/lu";
import { FaChevronLeft, FaRegMessage } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import StatusBadge from "../StatusBadge/StatusBadge";
import { Link, useNavigate, useParams } from "react-router";
import { useApp } from "../../../context/AppContext";
import { BsArchive } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";

//  store component, not JSX
const CHECKIN_TYPES = [
  { type: "Call", icon: LuPhoneCall, label: "Call" },
  { type: "Text", icon: FaRegMessage, label: "Text" },
  { type: "Video", icon: IoVideocamOutline, label: "Video" },
];

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry, loading } = useApp();

  // Loading state
  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const friend = friends.find((f) => f.id === parseInt(id));

  //  Not found
  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center py-36 text-center">
        <p className="text-[#244D3F] text-4xl mb-8">Friend not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-white font-medium text-lg  px-16 py-4 rounded-md bg-[#244D3F] cursor-pointer"
        >
          Back to Home
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
        className="flex items-center gap-1 text-sm text-[#244D3F] hover:text-gray-700 mb-6"
      >
        <FaChevronLeft size={12} />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-5">
        {/* LEFT */}
        <div>
          {/* left top */}
          <div className="bg-white border flex flex-col justify-center items-center border-gray-100 shadow rounded-lg p-6 h-fit">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover mb-3"
            />

            <h1 className="text-[20px] font-semibold text-[#1F2937] mb-2">
              {friend.name}
            </h1>

            <div className="mb-2">
              <StatusBadge status={friend.status} />
            </div>

            <div className="flex flex-wrap gap-1.5  mb-3">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium uppercase px-2 py-1.5 rounded-full bg-[#CBFADB] text-[#244D3F] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-medium text-[#64748B] text-center italic mb-3">
              "{friend.bio.slice(0, 60)}."
            </p>

            <p className="text-sm text-[#64748B] mb-5">
              {" "}
              Preferred: <a href={`mailto:${friend.email}`}> {friend.email}</a>
            </p>
          </div>
          {/* Left Bottom */}
          <div className="pt-4 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-4 border font-medium bg-white  border-[#E9E9E9] rounded-md  text-gray-700 hover:bg-gray-50 transition">
              <LuAlarmClock size={20} className="font-bold" />
              Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-4 border font-medium bg-white border-[#E9E9E9] rounded-md  text-gray-700 hover:bg-gray-50 transition">
              <BsArchive size={20} className="font-bold" />
              Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-4 border font-medium bg-white border-[#E9E9E9] text-red-500 rounded-md  hover:bg-red-50 transition">
              <FiTrash2 size={20} className="font-bold" />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            <StatBox
              label="Days Since Contact"
              value={friend.days_since_contact}
            />
            <StatBox label="Goal (Days)" value={friend.goal} />

            <div className="col-span-2 md:col-span-1">
              <StatBox label="Next Due" value={friend.next_due_date} />
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white shadow rounded-lg p-4 md:p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-medium text-[#244D3F]">
                Relationship Goal
              </h2>
              <button className="flex items-center gap-1 font-medium text-sm py-2 px-5 rounded-sm bg-[#F8FAFC] border border-[#E9E9E9] text-[#1F2937]">
                <FaRegEdit size={16} className="font-bold" /> Edit
              </button>
            </div>
            <p className="text-lg text-[#64748B]">
              Connect every <b className="text-[#1F2937]">{friend.goal} days</b>
            </p>
          </div>

          {/* Check-In */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-medium text-[#244D3F] mb-4">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CHECKIN_TYPES.map(({ type, icon: Icon, label }, index) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className={`flex flex-col items-center p-4 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg text-xs hover:bg-green-50
        ${index === CHECKIN_TYPES.length - 1 ? "col-span-2 md:col-span-1" : ""}
      `}
                >
                  <Icon size={24} className="font-bold text-[#1F2937]" />
                  <p className="text-lg text-[#1F2937] mt-2">{label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Reusable stat component
const StatBox = ({ label, value }) => (
  <div className="shadow bg-white rounded-lg py-8 px-4 text-center">
    <div className="text-3xl font-semibold text-[#244D3F]">{value}</div>
    <div className="text-lg text-[#64748B] mt-2">{label}</div>
  </div>
);

export default FriendDetails;
