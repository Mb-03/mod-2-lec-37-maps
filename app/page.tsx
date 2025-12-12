import AnalyticsChart from "@/features/analytics/components/AnalyticsChart";
import StatsChart from "@/features/stats/components/StatsChart";

const page = () => {
  return (
    <div>
      <StatsChart />
      <AnalyticsChart />
    </div>
  );
};

export default page;
