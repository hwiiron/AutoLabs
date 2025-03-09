"use client";

import { mixedChartConfig } from "@/mocks/chartConfig";
import { LabelList, Pie, PieChart } from "recharts";
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

function Chart({
  title,
  description,
  label,
  insideLabel,
  data,
}: {
  title?: string;
  description?: string;
  label?: boolean;
  insideLabel?: boolean;
  data: { browser: string; visitors: number; fill: string }[];
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[18px] font-bold text-red-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={mixedChartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {!insideLabel ? (
              <Pie
                data={data}
                dataKey="visitors"
                label={label}
                nameKey="browser"
              />
            ) : (
              <Pie data={data} dataKey="visitors">
                <LabelList
                  dataKey="browser"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof mixedChartConfig) =>
                    mixedChartConfig[value]?.label
                  }
                />
              </Pie>
            )}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Chart;
