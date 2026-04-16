import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useApp } from "../../../context/AppContext";
import FriendCard from "../FriendCard/FriendCard";

const Friends = () => {
  const { friends, loading } = useApp();
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Your Friends
      </h2>

      {/* --- Loading animation while data fetches  */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        /* --- 4-column responsive grid --- */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Friends;
