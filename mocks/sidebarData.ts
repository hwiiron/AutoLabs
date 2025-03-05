import {
  Layers,
  AlertCircle,
  Cpu,
  PieChart,
  FileText,
  ChartLine,
  Box,
} from "lucide-react";

const data = {
  user: {
    name: "AutoLabs",
    email: "AutoLabs@atlabs.com",
    avatar: "/avatars/shadcn.jpg",
  },
  nav: [
    {
      title: "3D Visualizer",
      url: "#",
      icon: Layers,
      isActive: true,
      items: [
        {
          title: "Segmentation",
          url: "#",
        },
        {
          title: "3D Viewer",
          url: "#",
        },
        {
          title: "결함 길이",
          url: "#",
        },
      ],
    },
    {
      title: "Anomaly Detection",
      url: "#",
      icon: AlertCircle,
      isActive: false,
      items: [
        {
          title: "AUROC",
          url: "#",
        },
        {
          title: "recall",
          url: "#",
        },
        {
          title: "precision",
          url: "#",
        },
        {
          title: "ACC",
          url: "#",
        },
        {
          title: "히트맵",
          url: "#",
        },
        {
          title: "모델 변경",
          url: "#",
        },
      ],
    },
    {
      title: "Model 학습 (MLOps)",
      url: "#",
      icon: Cpu,
      isActive: false,
      items: [
        {
          title: "현재 학습된 모델이 가진 지식",
          url: "#",
        },
      ],
    },
    {
      title: "통계",
      url: "#",
      icon: PieChart,
      isActive: false,
      items: [
        {
          title: "모델별 통계",
          url: "#",
        },
        {
          title: "기간별 통계",
          url: "#",
        },
        {
          title: "영역별 통계",
          url: "#",
        },
      ],
    },
    {
      title: "LLM Report",
      url: "#",
      icon: FileText,
      isActive: false,
      items: [
        {
          title: "보고서 생성",
          url: "#",
        },
      ],
    },
  ],
  navReference: [
    {
      title: "Chart",
      url: "/Dashboard/AllChart",
      icon: ChartLine,
      isActive: false,
      items: [
        {
          title: "All Chart",
          url: "/Dashboard/AllChart",
        },
        {
          title: "Area Chart",
          url: "/Dashboard/AreaChart",
        },
        {
          title: "Bar Chart",
          url: "/Dashboard/BarChart",
        },
        {
          title: "Line Chart",
          url: "/Dashboard/LineChart",
        },
        {
          title: "Pie Chart",
          url: "/Dashboard/PieChart",
        },
        {
          title: "Radar Chart",
          url: "/Dashboard/RadarChart",
        },
        {
          title: "Radial Chart",
          url: "/Dashboard/RadialChart",
        },
      ],
    },
    {
      title: "3D",
      url: "/Dashboard/GLTF",
      icon: Box,
      isActive: false,
      items: [
        {
          title: "GLTF",
          url: "/Dashboard/GLTF",
        },
        {
          title: "Text",
          url: "/Dashboard/Text",
        },
      ],
    },
  ],
};

export default data;
