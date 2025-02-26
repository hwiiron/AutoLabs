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
      url: "/Charts/AreaChart",
      icon: ChartLine,
      isActive: true,
      items: [
        {
          title: "Area Chart",
          url: "/Charts/AreaChart",
        },
        {
          title: "Bar Chart",
          url: "/Charts/BarChart",
        },
        {
          title: "Line Chart",
          url: "/Charts/LineChart",
        },
        {
          title: "Pie Chart",
          url: "/Charts/PieChart",
        },
        {
          title: "Radial Chart",
          url: "/Charts/RadialChart",
        },
        {
          title: "Tooltip Chart",
          url: "/Charts/TooltipChart",
        },
      ],
    },
    {
      title: "3D",
      url: "/3D/GLTF",
      icon: Box,
      isActive: true,
      items: [
        {
          title: "GLTF",
          url: "/3D/GLTF",
        },
        {
          title: "Text",
          url: "/3D/Text",
        },
      ],
    },
  ],
};

export default data;
