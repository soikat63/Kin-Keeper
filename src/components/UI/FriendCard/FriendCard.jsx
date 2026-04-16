import React from 'react'
import StatusBadge from '../StatusBadge/StatusBadge';
import { useNavigate } from 'react-router';


const FriendCard = ({ friend }) => {
    
     const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer
                 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
    >
      {/* --- Profile picture --- */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-12 h-12 rounded-full object-cover mb-3 border border-gray-100"
      />

      {/* --- Friend name --- */}
      <p className="font-semibold text-gray-800 text-sm mb-0.5 group-hover:text-brand-500 transition-colors">
        {friend.name}
      </p>

      {/* --- Days since contact (e.g. "62d ago") --- */}
      <p className="text-[11px] text-gray-400 mb-2">
        {friend.days_since_contact}d ago
      </p>

      {/* --- Tag pills --- */}
      <div className="flex flex-wrap gap-1 mb-3">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-500 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* --- Status badge (color varies by status) --- */}
      <StatusBadge status={friend.status} />
    </div>
  );
}

export default FriendCard