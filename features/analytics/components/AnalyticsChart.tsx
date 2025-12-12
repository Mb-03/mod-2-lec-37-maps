"use client";

import LoadingSpinner from "@/features/shared/components/LoadingSpiner";
import { useAnalytics } from "../hook/useAnalytics";
import {
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AnalyticsChart = () => {
  const { data, isLoading, error } = useAnalytics();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error Loading Analytics</p>;

  return (
    <div className="w-full h-80 bg-white p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#6366f1"
            name="Revenue ($)"
            radius={[6, 6, 0, 0]}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="active Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
