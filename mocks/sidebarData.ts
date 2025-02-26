import { Box, ChartLine } from "lucide-react";

const data = {
  user: {
    name: "AutoLabs",
    email: "AutoLabs@atlabs.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
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
