import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Chart from "@/components/BarChart/BarChart";
import MultipleChart from "@/components/BarChart/MultipleChart";
import MixedChart from "@/components/BarChart/MixedChart";
import InteractiveChart from "@/components/BarChart/InteractiveChart";

function BarChartPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart />
          <MultipleChart />
          <MixedChart />
        </div>

        <InteractiveChart />
      </Container>
    </>
  );
}

export default BarChartPage;
