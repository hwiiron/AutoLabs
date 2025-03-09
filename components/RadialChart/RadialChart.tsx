"use client";

import { RadialChartProps } from "@/types/chart.type";
import { mixedChartData } from "@/mocks/chartData";
import { mixedChartConfig } from "@/mocks/chartConfig";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
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

function Chart({ label }: RadialChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={mixedChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={mixedChartData}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />

            <RadialBar dataKey="visitors" background>
              {label && (
                <LabelList
                  position="insideStart"
                  dataKey="browser"
                  className="fill-white capitalize mix-blend-luminosity"
                  fontSize={11}
                />
              )}
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Chart;
