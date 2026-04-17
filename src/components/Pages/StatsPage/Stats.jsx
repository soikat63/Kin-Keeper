import React from "react";
import { useApp } from "../../../context/AppContext";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = {
  Text: "#7C3AED",
  Call: "#059669",
  Video: "#2563EB", 
  Meetup: "#F59E0B",
};

const Stats = () => {
  const { timeline } = useApp();

  // Count each interaction type
  const counts = timeline.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});

  // Build chart data
  const chartData = Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 w-full">
        <h2 className="text-xl font-medium text-[#244D3F] mb-4 sm:mb-6">
          By Interaction Type
        </h2>

        {chartData.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-16">
            No interactions logged yet. Start checking in!
          </p>
        ) : (
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
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
                  wrapperStyle={{
                    fontSize: "13px",
                    paddingTop: "10px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
