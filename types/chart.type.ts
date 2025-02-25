interface ChartType {
  type: "natural" | "linear" | "step";
}

interface DotChartType extends ChartType {
  label: boolean;
}

export type { ChartType, DotChartType };
