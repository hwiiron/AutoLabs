import { ChartConfig } from "@/components/ui/chart";

// 전체 결함률
export const TotalDefectRateConfig = {
  a: {
    label: "원사 불량",
    color: "hsl(var(--chart-7))",
  },
  b: {
    label: "시와현상",
    color: "hsl(var(--chart-8))",
  },
  c: {
    label: "원단구멍",
    color: "hsl(var(--chart-9))",
  },
  d: {
    label: "이염 불량",
    color: "hsl(var(--chart-10))",
  },
  e: {
    label: "인쇄불량",
    color: "hsl(var(--chart-11))",
  },
} satisfies ChartConfig;

// 원단 결점 위치
export const InspectionSummaryConfig = {
  listing: {
    label: "Listing",
    color: "hsl(var(--chart-21))",
  },
  ending: {
    label: "Ending",
    color: "hsl(var(--chart-22))",
  },
  skewing: {
    label: "Skewing",
    color: "hsl(var(--chart-22))",
  },
  bowing: {
    label: "Bowing",
    color: "hsl(var(--chart-22))",
  },
} satisfies ChartConfig;
