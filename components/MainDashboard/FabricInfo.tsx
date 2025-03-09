import { ChartInfoProps } from "@/types/chart.type";
import Count from "@/components/Count";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function FabricInfo({ title, description }: ChartInfoProps) {
  return (
    <Card className="">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <dl className="grid grid-cols-2 gap-y-[30px] w-full text-sm mt-[55px]">
        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">총 길이</dt>
          <dd className="text-[26px] font-bold text-blue-600 mt-[12px]">
            <Count to={309} />m
          </dd>
        </div>

        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">평균 폼</dt>
          <dd className="text-[26px] font-bold text-blue-600 mt-[12px]">
            <Count to={40} />m
          </dd>
        </div>

        <div className="flex flex-col items-center col-span-2">
          <dt className="text-[16px] font-medium text-gray-700">사형도</dt>
          <dd className="text-[26px] font-bold text-red-500 mt-[12px]">
            <Count to={12} />%
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export default FabricInfo;
