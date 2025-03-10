"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { InspectionSummaryConfig } from "@/mocks/config";
import { InspectionSummaryData } from "@/mocks/data";
import { CardHeaderType } from "@/types/chart.type";

/**
 * @returns {JSX.Element} 원단에서 발생한 염색의 결점 위치를 그래프로 표시하는 카드 컴포넌트
 */
function InspectionSummary({ title, description }: CardHeaderType) {
  return (
    <Card>
      <CardHeader className="grid flex-1 text-center sm:text-left">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={InspectionSummaryConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={InspectionSummaryData}>
            <defs>
              <linearGradient id="fillListing" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-12))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-12))"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillEnding" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-13))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-13))"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillSkewing" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-14))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-14))"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillBowing" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-15))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-15))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="length"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={8}
              interval={0}
              tickFormatter={(value) => `${value}m`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent labelFormatter={(value) => `${value}m`} />
              }
            />

            <Area
              dataKey="listing"
              type="natural"
              fill="url(#fillListing)"
              stroke="hsl(var(--chart-12))"
            />
            <Area
              dataKey="ending"
              type="natural"
              fill="url(#fillEnding)"
              stroke="hsl(var(--chart-13))"
            />
            <Area
              dataKey="skewing"
              type="natural"
              fill="url(#fillSkewing)"
              stroke="hsl(var(--chart-14))"
            />
            <Area
              dataKey="bowing"
              type="natural"
              fill="url(#fillBowing)"
              stroke="hsl(var(--chart-15))"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default InspectionSummary;
