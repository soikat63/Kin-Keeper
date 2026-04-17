import React from 'react'
import StatusBadge from '../StatusBadge/StatusBadge';
import { useNavigate } from 'react-router';


const FriendCard = ({ friend }) => {
    
     const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-lg p-6 cursor-pointer shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col items-center"
    >
      {/*Profile picture*/}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full object-cover mb-3 border border-gray-100"
      />

      {/*Friend name  */}
      <p className="font-semibold text-[#1F2937] text-xl mb-2 group-hover:text-brand-500 transition-colors">
        {friend.name}
      </p>

      {/* Days since contact */}
      <p className="text-[12px] text-[#64748B] mb-2">
        {friend.days_since_contact}d ago
      </p>

      {/*Tag pills*/}
      <div className="flex flex-wrap gap-2 mb-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] font-medium uppercase px-2 py-1.5 rounded-full bg-[#CBFADB] text-[#244D3F] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status badge  */}
      <StatusBadge status={friend.status} />
    </div>
  );
}

export default FriendCard