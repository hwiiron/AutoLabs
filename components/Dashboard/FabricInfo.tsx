import { cn } from "@/lib/utils";
import { CardHeaderProps } from "@/types/chart.type";
import AnimatedCount from "@/components/Dashboard/AnimatedCount";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const styles = {
  gridWrapper: "grid grid-cols-2 gap-4 w-full text-sm mt-[25px] px-[20px]",
  cardWrapper: "flex flex-col items-center border rounded-xl shadow-sm p-4",
  label: "text-[16px] font-medium text-gray-700",
  valueText: "text-[26px] font-bold mt-[12px]",
  unitText: "text-[14px] ml-1",
};

/**
 * @param {string} props.title - 카드의 제목
 * @param {string} props.description - 카드의 설명
 *
 * @returns {JSX.Element} 원단의 기본 정보를 시각적으로 표시하는 카드 컴포넌트
 */
function FabricInfo({ title, description }: CardHeaderProps) {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <dl className={styles.gridWrapper}>
        <div className={styles.cardWrapper}>
          <dt className={styles.label}>총 길이</dt>
          <dd className={cn(styles.valueText, "text-blue-600")}>
            <AnimatedCount to={309} />
            <span className={styles.unitText}>m</span>
          </dd>
        </div>

        <div className={styles.cardWrapper}>
          <dt className={styles.label}>평균 폼</dt>
          <dd className={cn(styles.valueText, "text-blue-600")}>
            <AnimatedCount to={40} />
            <span className={styles.unitText}>m</span>
          </dd>
        </div>

        <div className={cn(styles.cardWrapper, "col-span-2")}>
          <dt className={styles.label}>사형도</dt>
          <dd className={cn(styles.valueText, "text-red-500")}>
            <AnimatedCount to={12} />
            <span className={styles.unitText}>%</span>
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export default FabricInfo;
