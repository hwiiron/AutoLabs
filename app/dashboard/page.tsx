"use client";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import InteractiveChart from "@/components/AreaChart/InteractiveChart";
import GradientChart from "@/components/AreaChart/GradientChart";
import GridChart from "@/components/RadarChart/GridChart";
import BarMultipleChart from "@/components/BarChart/MultipleChart";
import Chart from "@/components/PieChart/PieChart";
import RadialChart from "@/components/RadialChart/RadialChart";
import DonutChart from "@/components/PieChart/DonutChart";

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <InteractiveChart />

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <GradientChart type="natural" />
          <GridChart circle={true} />
          <BarMultipleChart />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart insideLabel={true} />
          <RadialChart label={true} />
          <DonutChart innerText={true} />
        </div>
      </Container>
    </>
  );
}

export default DashBoardPage;
