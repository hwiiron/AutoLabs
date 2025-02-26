import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Chart from "@/components/AreaChart/AreaChart";
import GradientChart from "@/components/AreaChart/GradientChart";
import InteractiveChart from "@/components/AreaChart/InteractiveChart";

function AreaChartPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart type="natural" />
          <Chart type="linear" />
          <Chart type="step" />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <GradientChart type="natural" />
          <GradientChart type="linear" />
          <GradientChart type="step" />
        </div>

        <InteractiveChart />
      </Container>
    </>
  );
}

export default AreaChartPage;
