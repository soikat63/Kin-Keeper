import React from 'react'
import { useApp } from '../../../context/AppContext';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = {
  Text: "#7C3AED", // purple
  Call: "#059669", // green
  Video: "#2563EB", // blue
  Meetup: "#F59E0B", // amber
};

const Stats = () => {

  const { timeline } = useApp();

  //Count each interaction type from timeline
  const counts = timeline.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});
  //Build chart data array
  const chartData = Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* --- Page heading (required per Challenge C1) --- */}
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Friendship Analytics
      </h1>

      {/* --- Chart card --- */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 max-w-xl">
        <h2 className="text-sm font-semibold text-gray-500 mb-6">
          By Interaction Type
        </h2>

        {chartData.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-16">
            No interactions logged yet. Start checking in!
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
              >
                {chartData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[entry.name] || "#94A3B8"}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [value, name]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  fontSize: "13px",
                }}
              />
              <Legend
                iconType="circle"
                iconSize={9}
                formatter={(value) => (
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Stats