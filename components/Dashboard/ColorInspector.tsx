import AnimatedCount from "@/components/Dashboard/AnimatedCount";
import { styles } from "@/components/Dashboard/FabricInfo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ColorInspectionData } from "@/mocks/data";
import { CardHeaderType } from "@/types/chart.type";

/**
 * @param {string} props.title - 카드의 제목
 * @param {string} props.description - 카드의 설명
 *
 * @returns {JSX.Element} 색상 정밀 검사 결과를 시각적으로 표시하는 카드 컴포넌트
 */
function ColorInspector({ title, description }: CardHeaderType) {
  return (
    <Card className="">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <dl className={styles.gridWrapper}>
        {ColorInspectionData.map((item, index) => {
          return (
            <div key={index} className={styles.cardWrapper}>
              <dt className={styles.label}>{item.name}</dt>
              <dd className={cn(styles.valueText, "text-red-500")}>
                <AnimatedCount to={item.value} />
                <span className={styles.unitText}>%</span>
              </dd>
            </div>
          );
        })}
      </dl>
    </Card>
  );
}

export default ColorInspector;
