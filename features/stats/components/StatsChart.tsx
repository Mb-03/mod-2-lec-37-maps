"use client";

import LoadingSpinner from "@/features/shared/components/LoadingSpiner";
import { useStats } from "../hook/useStats";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatsChart = () => {
  const { data, isLoading, error } = useStats();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error Loading Chart</p>;

  return (
    <div className="w-full h-80 bg-white p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
