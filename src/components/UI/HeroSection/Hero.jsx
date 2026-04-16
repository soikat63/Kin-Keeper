import React from 'react'
import { LuPlus } from 'react-icons/lu';
import { useApp } from '../../../context/AppContext';


function StatCard({ value, label }) {


  return (
    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
      <div className="text-3xl font-bold text-[#244D3F]">{value}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}


const Hero = () => {
  const { friends } = useApp()

  // --- Compute stats from live friends data ---
  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttn = friends.filter((f) => f.status !== "on-track").length;
  const interactions = 12; 

  // const { stats } = useFriends();
  return (
    <section className="text-center py-20 container mx-auto">
      {/* -- Main headline -- */}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1F2937] mb-4">
        Friends to keep close in your life
      </h2>

      {/* -- Subtitle / description -- */}
      <p className=" text-[#64748B] max-w-md mx-auto mb-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* -- Add friend CTA button -- */}
      <button className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity mb-8">
        <LuPlus size={16} />
        Add a Friend
      </button>

      {/* --- 4 summary stat cards --- */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 max-w-3xl mx-auto">
        <StatCard value={total} label="Total Friends" />
        <StatCard value={onTrack} label="On Track" />
        <StatCard value={needAttn} label="Need Attention" />
        <StatCard value={interactions} label="Interactions This Month" />
      </div>
    </section>
  );
}

export default Hero