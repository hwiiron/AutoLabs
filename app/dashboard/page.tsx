"use client";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import TextChart from "@/components/RadialChart/TextChart";
import InspectionSummaryChart from "@/components/MainDashboard/InspectionSummaryChart";

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <TextChart
            title="CPU 사용량"
            description="현재 시스템의 CPU 사용률"
          />
          <TextChart
            title="GPU 사용량"
            description="현재 시스템의 GPU 사용률"
          />
          <TextChart
            title="RAM 사용량"
            description="현재 시스템의 RAM(메모리) 사용률"
          />
        </div>

        <InspectionSummaryChart />
      </Container>
    </>
  );
}

export default DashBoardPage;
