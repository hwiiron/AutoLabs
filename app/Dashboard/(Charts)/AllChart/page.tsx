import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import AreaChart from "@/components/AreaChart/AreaChart";
import AreaChartGradientChart from "@/components/AreaChart/GradientChart";
import AreaInteractiveChart from "@/components/AreaChart/InteractiveChart";
import BarChart from "@/components/BarChart/BarChart";
import BarMultipleChart from "@/components/BarChart/MultipleChart";
import BarMixedChart from "@/components/BarChart/MixedChart";
import BarInteractiveChart from "@/components/BarChart/InteractiveChart";
import LineChart from "@/components/LineChart/LineChart";
import LineMultipleChart from "@/components/LineChart/MultipleChart";
import LineDotChart from "@/components/LineChart/DotChart";
import LineInteractiveChart from "@/components/LineChart/InteractiveChart";
import PieChart from "@/components/PieChart/PieChart";
import PieDonutChart from "@/components/PieChart/DonutChart";
import RadarChart from "@/components/RadarChart/RadarChart";
import RadarMultipleChart from "@/components/RadarChart/MultipleChart";
import RadarLineOnlyChart from "@/components/RadarChart/LineOnlyChart";
import RadarGridChart from "@/components/RadarChart/GridChart";
import RadialChart from "@/components/RadialChart/RadialChart";
import RadialGridChart from "@/components/RadialChart/GridChart";
import RadialTextChart from "@/components/RadialChart/TextChart";
import RadialShapeChart from "@/components/RadialChart/ShapeChart";
import RadialStackedChart from "@/components/RadialChart/StackedChart";

function AllChart() {
  return (
    <>
      <Header />

      <Container>
        {/* Area Chart */}
        <AreaInteractiveChart />

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <AreaChart type="natural" />
          <AreaChart type="linear" />
          <AreaChart type="step" />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <AreaChartGradientChart type="natural" />
          <AreaChartGradientChart type="linear" />
          <AreaChartGradientChart type="step" />
        </div>

        {/* Bar Chart */}
        <BarInteractiveChart />

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <BarChart />
          <BarMultipleChart />
          <BarMixedChart />
        </div>

        {/* Line chart */}
        <LineInteractiveChart />

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <LineChart type="natural" />
          <LineChart type="linear" />
          <LineChart type="step" />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <LineMultipleChart />
          <LineDotChart type="natural" label={false} />
          <LineDotChart type="linear" label={true} />
        </div>

        {/* Pie Chart */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <PieChart label={false} />
          <PieChart label={true} />
          <PieChart insideLabel={true} />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <PieDonutChart label={true} />
          <PieDonutChart innerText={true} />
        </div>

        {/* Radar Chart */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <RadarChart />
          <RadarMultipleChart />
          <RadarLineOnlyChart />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <RadarGridChart />
          <RadarGridChart circle={true} />
        </div>

        {/* Radial Chart */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <RadialChart />
          <RadialChart label={true} />
          <RadialGridChart />
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <RadialTextChart />
          <RadialShapeChart />
          <RadialStackedChart />
        </div>
      </Container>
    </>
  );
}

export default AllChart;
