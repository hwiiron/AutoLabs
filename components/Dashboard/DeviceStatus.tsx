import { Bot } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeviceData } from "@/mocks/data";
import { CardHeaderProps } from "@/types/chart.type";

/**
 * @param {string} props.title - 카드의 제목
 * @param {string} props.description - 카드의 설명
 *
 * @returns {JSX.Element} 현재 기기 상태를 시각적으로 표시하는 카드 컴포넌트
 */
function DeviceStatus({ title, description }: CardHeaderProps) {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <dl className="mt-[25px] flex w-full flex-col items-center justify-center gap-y-[18px]">
        {DeviceData.map((item, index) => (
          <div
            key={index}
            className="flex w-[240px] items-center justify-between rounded-xl border p-3 shadow-sm"
          >
            <dt className="flex items-center space-x-2">
              <Bot className="size-5 text-[#333]" />
              <span className="text-[16px] font-medium text-[#333]">
                {item.name}
              </span>
            </dt>

            <dd className="flex w-[80px] items-center justify-center">
              <span
                className="block size-[12px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="ml-[8px] text-[16px] font-medium text-[#666]">
                {item.status}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export default DeviceStatus;
