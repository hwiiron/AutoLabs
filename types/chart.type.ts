interface ChartProps {
  type: "natural" | "linear" | "step";
}

interface DotChartProps extends ChartProps {
  label: boolean;
}

interface PieChartProps {
  label?: boolean;
  insideLabel?: boolean;
}

interface DonutChartProps {
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
  DotChartProps,
  PieChartProps,
  DonutChartProps,
  GridChartProps,
  RadialChartProps,
};
