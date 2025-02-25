"use client";

import InteractiveChart from "@/components/AreaChart/InteractiveChart";
import GradientChart from "@/components/AreaChart/GradientChart";
import BarMultipleChart from "@/components/BarChart/MultipleChart";
import LineMultipleChart from "@/components/LineChart/MultipleChart";

function MainPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <InteractiveChart />

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <GradientChart type="natural" />
        <BarMultipleChart />
        <LineMultipleChart />
      </div>
    </div>
  );
}

export default MainPage;
