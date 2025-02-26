import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import GridChart from "@/components/RadialChart/GridChart";
import Chart from "@/components/RadialChart/RadialChart";
import TextChart from "@/components/RadialChart/TextChart";
import ShapeChart from "@/components/RadialChart/ShapeChart";
import StackedChart from "@/components/RadialChart/StackedChart";

function RadialChart() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart />
          <Chart label={true} />
          <GridChart />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <TextChart />
          <ShapeChart />
          <StackedChart />
        </div>
      </Container>
    </>
  );
}

export default RadialChart;
