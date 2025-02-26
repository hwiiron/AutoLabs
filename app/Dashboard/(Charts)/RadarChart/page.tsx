import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import Chart from "@/components/RadarChart/RadarChart";
import MultipleChart from "@/components/RadarChart/MultipleChart";
import LineOnlyChart from "@/components/RadarChart/LineOnlyChart";
import GridChart from "@/components/RadarChart/GridChart";

function RadarChart() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart />
          <MultipleChart />
          <LineOnlyChart />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <GridChart />
          <GridChart circle={true} />
        </div>
      </Container>
    </>
  );
}

export default RadarChart;
