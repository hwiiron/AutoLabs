"use client";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import DonutChart from "@/components/PieChart/DonutChart";
import TextChart from "@/components/RadialChart/TextChart";
import InspectionSummaryChart from "@/components/MainDashboard/InspectionSummaryChart";

const mixedChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 91, fill: "var(--color-other)" },
];

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <DonutChart
            data={mixedChartData}
            title="CPU 사용량"
            description="현재 시스템의 CPU 사용률"
            innerText={true}
          />
          <TextChart
            title="GPU 사용량"
            description="현재 시스템의 GPU 사용률"
          />
          <DonutChart
            data={mixedChartData}
            title="RAM 사용량"
            description="현재 시스템의 RAM(메모리) 사용률"
            innerText={true}
          />
        </div>

        <InspectionSummaryChart />
      </Container>
    </>
  );
}

export default DashBoardPage;
