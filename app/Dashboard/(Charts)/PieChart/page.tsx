import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import Chart from "@/components/PieChart/PieChart";
import DonutChart from "@/components/PieChart/DonutChart";

function PieChart() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Chart label={false} />
          <Chart label={true} />
          <Chart insideLabel={true} />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <DonutChart label={true} />
          <DonutChart innerText={true} />
        </div>
      </Container>
    </>
  );
}

export default PieChart;
