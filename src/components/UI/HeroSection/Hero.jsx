import React from 'react'
import { LuPlus } from 'react-icons/lu';

const Hero = () => {

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

      {/* -- Summary stat cards row -- */}
      {/* <div className="flex gap-3 justify-center flex-wrap">
            <StatCard value={stats.totalFriends} label="Total Friends" />
            <StatCard value={stats.onTrack} label="On Track" />
            <StatCard value={stats.needAttention} label="Need Attention" />
            <StatCard
              value={stats.interactionsThisMonth}
              label="Interactions This Month"
            />
          </div> */}
    </section>
  );
}

export default Hero