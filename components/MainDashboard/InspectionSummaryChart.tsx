"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { date: "2024-04-01", totalInspections: 222, detectedDefects: 75 },
  { date: "2024-04-02", totalInspections: 97, detectedDefects: 90 },
  { date: "2024-04-03", totalInspections: 167, detectedDefects: 60 },
  { date: "2024-04-04", totalInspections: 242, detectedDefects: 130 },
  { date: "2024-04-05", totalInspections: 373, detectedDefects: 145 },
  { date: "2024-04-06", totalInspections: 301, detectedDefects: 170 },
  { date: "2024-04-07", totalInspections: 245, detectedDefects: 90 },
  { date: "2024-04-08", totalInspections: 409, detectedDefects: 160 },
  { date: "2024-04-09", totalInspections: 59, detectedDefects: 55 },
  { date: "2024-04-10", totalInspections: 261, detectedDefects: 95 },
  { date: "2024-04-11", totalInspections: 327, detectedDefects: 175 },
  { date: "2024-04-12", totalInspections: 292, detectedDefects: 105 },
  { date: "2024-04-13", totalInspections: 342, detectedDefects: 190 },
  { date: "2024-04-14", totalInspections: 137, detectedDefects: 110 },
  { date: "2024-04-15", totalInspections: 120, detectedDefects: 85 },
  { date: "2024-04-16", totalInspections: 138, detectedDefects: 95 },
  { date: "2024-04-17", totalInspections: 446, detectedDefects: 180 },
  { date: "2024-04-18", totalInspections: 364, detectedDefects: 205 },
  { date: "2024-04-19", totalInspections: 243, detectedDefects: 90 },
  { date: "2024-04-20", totalInspections: 89, detectedDefects: 75 },
  { date: "2024-04-21", totalInspections: 137, detectedDefects: 100 },
  { date: "2024-04-22", totalInspections: 224, detectedDefects: 85 },
  { date: "2024-04-23", totalInspections: 138, detectedDefects: 115 },
  { date: "2024-04-24", totalInspections: 387, detectedDefects: 145 },
  { date: "2024-04-25", totalInspections: 215, detectedDefects: 125 },
  { date: "2024-04-26", totalInspections: 75, detectedDefects: 65 },
  { date: "2024-04-27", totalInspections: 383, detectedDefects: 210 },
  { date: "2024-04-28", totalInspections: 122, detectedDefects: 90 },
  { date: "2024-04-29", totalInspections: 315, detectedDefects: 120 },
  { date: "2024-04-30", totalInspections: 454, detectedDefects: 190 },
  { date: "2024-05-01", totalInspections: 165, detectedDefects: 110 },
  { date: "2024-05-02", totalInspections: 293, detectedDefects: 155 },
  { date: "2024-05-03", totalInspections: 247, detectedDefects: 95 },
  { date: "2024-05-04", totalInspections: 385, detectedDefects: 210 },
  { date: "2024-05-05", totalInspections: 481, detectedDefects: 195 },
  { date: "2024-05-06", totalInspections: 498, detectedDefects: 260 },
  { date: "2024-05-07", totalInspections: 388, detectedDefects: 150 },
  { date: "2024-05-08", totalInspections: 149, detectedDefects: 105 },
  { date: "2024-05-09", totalInspections: 227, detectedDefects: 90 },
  { date: "2024-05-10", totalInspections: 293, detectedDefects: 165 },
  { date: "2024-05-11", totalInspections: 335, detectedDefects: 135 },
  { date: "2024-05-12", totalInspections: 197, detectedDefects: 120 },
  { date: "2024-05-13", totalInspections: 197, detectedDefects: 80 },
  { date: "2024-05-14", totalInspections: 448, detectedDefects: 245 },
  { date: "2024-05-15", totalInspections: 473, detectedDefects: 190 },
  { date: "2024-05-16", totalInspections: 338, detectedDefects: 200 },
  { date: "2024-05-17", totalInspections: 499, detectedDefects: 210 },
  { date: "2024-05-18", totalInspections: 315, detectedDefects: 175 },
  { date: "2024-05-19", totalInspections: 235, detectedDefects: 90 },
  { date: "2024-05-20", totalInspections: 177, detectedDefects: 115 },
  { date: "2024-05-21", totalInspections: 82, detectedDefects: 70 },
  { date: "2024-05-22", totalInspections: 81, detectedDefects: 60 },
  { date: "2024-05-23", totalInspections: 252, detectedDefects: 145 },
  { date: "2024-05-24", totalInspections: 294, detectedDefects: 110 },
  { date: "2024-05-25", totalInspections: 201, detectedDefects: 125 },
  { date: "2024-05-26", totalInspections: 213, detectedDefects: 85 },
  { date: "2024-05-27", totalInspections: 420, detectedDefects: 230 },
  { date: "2024-05-28", totalInspections: 233, detectedDefects: 95 },
  { date: "2024-05-29", totalInspections: 78, detectedDefects: 65 },
  { date: "2024-05-30", totalInspections: 340, detectedDefects: 140 },
  { date: "2024-05-31", totalInspections: 178, detectedDefects: 115 },
  { date: "2024-06-01", totalInspections: 178, detectedDefects: 100 },
  { date: "2024-06-02", totalInspections: 470, detectedDefects: 205 },
  { date: "2024-06-03", totalInspections: 103, detectedDefects: 80 },
  { date: "2024-06-04", totalInspections: 439, detectedDefects: 190 },
  { date: "2024-06-05", totalInspections: 88, detectedDefects: 70 },
  { date: "2024-06-06", totalInspections: 294, detectedDefects: 125 },
  { date: "2024-06-07", totalInspections: 323, detectedDefects: 185 },
  { date: "2024-06-08", totalInspections: 385, detectedDefects: 160 },
  { date: "2024-06-09", totalInspections: 438, detectedDefects: 240 },
  { date: "2024-06-10", totalInspections: 155, detectedDefects: 100 },
  { date: "2024-06-11", totalInspections: 92, detectedDefects: 75 },
  { date: "2024-06-12", totalInspections: 492, detectedDefects: 210 },
  { date: "2024-06-13", totalInspections: 81, detectedDefects: 65 },
  { date: "2024-06-14", totalInspections: 426, detectedDefects: 190 },
  { date: "2024-06-15", totalInspections: 307, detectedDefects: 175 },
  { date: "2024-06-16", totalInspections: 371, detectedDefects: 155 },
  { date: "2024-06-17", totalInspections: 475, detectedDefects: 260 },
  { date: "2024-06-18", totalInspections: 107, detectedDefects: 85 },
  { date: "2024-06-19", totalInspections: 341, detectedDefects: 145 },
  { date: "2024-06-20", totalInspections: 408, detectedDefects: 225 },
  { date: "2024-06-21", totalInspections: 169, detectedDefects: 105 },
  { date: "2024-06-22", totalInspections: 317, detectedDefects: 135 },
  { date: "2024-06-23", totalInspections: 480, detectedDefects: 265 },
  { date: "2024-06-24", totalInspections: 132, detectedDefects: 90 },
  { date: "2024-06-25", totalInspections: 141, detectedDefects: 95 },
  { date: "2024-06-26", totalInspections: 434, detectedDefects: 190 },
  { date: "2024-06-27", totalInspections: 448, detectedDefects: 245 },
  { date: "2024-06-28", totalInspections: 149, detectedDefects: 100 },
  { date: "2024-06-29", totalInspections: 103, detectedDefects: 80 },
  { date: "2024-06-30", totalInspections: 446, detectedDefects: 200 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  totalInspections: {
    label: "총 검사",
    color: "hsl(var(--chart-2))",
  },
  detectedDefects: {
    label: "검출 결함",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

function InspectionSummaryChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>검수 통계</CardTitle>
          <CardDescription>검수 횟수 및 결함 발생 횟수</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              지난 3개월
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              지난 30일
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              지난 7일
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient
                id="fillTotalInspections"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-2))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-2))"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="fillDetectedDefects"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-6))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-6))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="totalInspections"
              type="natural"
              fill="url(#fillTotalInspections)"
              stroke="hsl(var(--chart-2))"
            />
            <Area
              dataKey="detectedDefects"
              type="natural"
              fill="url(#fillDetectedDefects)"
              stroke="hsl(var(--chart-6))"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default InspectionSummaryChart;
