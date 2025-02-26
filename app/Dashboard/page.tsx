"use client";

import InteractiveChart from "@/components/AreaChart/InteractiveChart";
import GradientChart from "@/components/AreaChart/GradientChart";
import BarMultipleChart from "@/components/BarChart/MultipleChart";
import LineMultipleChart from "@/components/LineChart/MultipleChart";
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <InteractiveChart />

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <GradientChart type="natural" />
          <BarMultipleChart />
          <LineMultipleChart />
        </div>
      </Container>
    </>
  );
}

export default DashBoardPage;
