import { ChartInfoProps } from "@/types/chart.type";
import Count from "@/components/Count";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ColorCheck({ title, description }: ChartInfoProps) {
  return (
    <Card className="">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <dl className="grid grid-cols-2 gap-y-[30px] w-full text-sm mt-[55px]">
        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">D65</dt>
          <dd className="text-[26px] font-bold text-red-500 mt-[12px]">
            <Count to={10} />%
          </dd>
        </div>

        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">TL84</dt>
          <dd className="text-[26px] font-bold text-red-500 mt-[12px]">
            <Count to={8} />%
          </dd>
        </div>

        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">CWF</dt>
          <dd className="text-[26px] font-bold text-red-500 mt-[12px]">
            <Count to={3} />%
          </dd>
        </div>

        <div className="flex flex-col items-center">
          <dt className="text-[16px] font-medium text-gray-700">UV</dt>
          <dd className="text-[26px] font-bold text-red-500 mt-[12px]">
            <Count to={5} />%
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export default ColorCheck;
