import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Chart from "@/components/LineChart/LineChart";
import MultipleChart from "@/components/LineChart/MultipleChart";
import DotChart from "@/components/LineChart/DotChart";
import InteractiveChart from "@/components/LineChart/InteractiveChart";

function LineChart() {
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
          <MultipleChart />
          <DotChart type="natural" label={false} />
          <DotChart type="linear" label={true} />
        </div>

        <InteractiveChart />
      </Container>
    </>
  );
}

export default LineChart;
