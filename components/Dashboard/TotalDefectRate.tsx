"use client";

import { LabelList, Pie, PieChart } from "recharts";

import { styles } from "@/components/Dashboard/FabricInfo";
import { TotalDefectRateData } from "@/mocks/data";
import { TotalDefectRateConfig } from "@/mocks/config";
import { CardHeaderProps } from "@/types/chart.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

/**
 * @param {string} props.title - 카드의 제목
 * @param {string} props.description - 카드의 설명
 *
 * @returns {JSX.Element} 전체 결함률을 시각적으로 표시하는 카드 컴포넌트
 */
function TotalDefectRate({ title, description }: CardHeaderProps) {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-row items-center justify-center p-6 pb-0">
        <CardTitle>{title} :</CardTitle>
        <CardDescription className="ml-[12px] mt-0 text-[22px] font-bold text-red-500">
          {description}
          <span className={styles.unitText}>%</span>
        </CardDescription>
      </div>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={TotalDefectRateConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={TotalDefectRateData} dataKey="defectFigures">
              <LabelList
                dataKey="defect"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof TotalDefectRateConfig) =>
                  TotalDefectRateConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TotalDefectRate;
