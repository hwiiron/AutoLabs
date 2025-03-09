"use client";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Chart from "@/components/PieChart/PieChart";
import InspectionSummaryChart from "@/components/MainDashboard/InspectionSummaryChart";
import FabricInfo from "@/components/MainDashboard/FabricInfo";
import ColorCheck from "@/components/MainDashboard/ColorCheck";

const data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <FabricInfo title="원단 정보" description="원단의 기본 정보를 제공" />

          <Chart
            title="전체 결함률"
            description="1.23%"
            insideLabel={true}
            data={data}
          />

          <ColorCheck
            title="색상 정밀 검사"
            description="광원의 종류별 손실률을 제공"
          />
        </div>

        <InspectionSummaryChart />
      </Container>
    </>
  );
}

export default DashBoardPage;
