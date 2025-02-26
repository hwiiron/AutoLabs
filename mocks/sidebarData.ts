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
      url: "/Dashboard/AreaChart",
      icon: ChartLine,
      isActive: true,
      items: [
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
          title: "Radial Chart",
          url: "/Dashboard/RadialChart",
        },
        {
          title: "Tooltip Chart",
          url: "/Dashboard/TooltipChart",
        },
      ],
    },
    {
      title: "3D",
      url: "/Dashboard/GLTF",
      icon: Box,
      isActive: true,
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
