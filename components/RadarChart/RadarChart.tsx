"use client";

import { barLineChartData } from "@/mocks/chartData";
import { barLineChartConfig } from "@/mocks/chartConfig";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function Chart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={barLineChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={barLineChartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Chart;
