import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useApp } from "../../../context/AppContext";
import FriendCard from "../FriendCard/FriendCard";

const Friends = () => {
  const { friends, loading } = useApp();
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">
        Your Friends
      </h2>

      {/* Loading animation  */}
      {loading ? (
        <LoadingSpinner />
      ) : (
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Friends;
