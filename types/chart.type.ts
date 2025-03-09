interface ChartProps {
  type: "natural" | "linear" | "step";
}

interface ChartInfoProps {
  title?: string;
  description?: string;
}

interface DotChartProps extends ChartProps {
  label: boolean;
}

interface PieChartProps extends ChartInfoProps {
  label?: boolean;
  insideLabel?: boolean;
  data: { browser: string; visitors: number; fill: string }[];
}

interface DonutChartProps extends ChartInfoProps {
  data: { browser: string; visitors: number; fill: string }[];
  label?: boolean;
  innerText?: boolean;
}

interface GridChartProps {
  circle?: boolean;
}

interface RadialChartProps {
  label?: boolean;
}

export type {
  ChartProps,
  ChartInfoProps,
  DotChartProps,
  PieChartProps,
  DonutChartProps,
  GridChartProps,
  RadialChartProps,
};
