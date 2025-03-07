import { User, SearchCheck, ChartLine, Box } from "lucide-react";

const data = {
  user: {
    name: "AutoLabs",
    email: "AutoLabs@atlabs.com",
    avatar: "/avatars/shadcn.jpg",
  },
  users: [
    {
      name: "휘철",
      logo: User,
      rank: "jotbab",
    },
    {
      name: "윤석",
      logo: User,
      rank: "CEO",
    },
    {
      name: "준하",
      logo: User,
      rank: "CEO",
    },
  ],
  nav: [
    {
      title: "검수",
      url: "#",
      icon: SearchCheck,
      isActive: true,
      items: [
        {
          title: "자동 모드",
          url: "/auto-mode",
        },
        {
          title: "수동 도움 모드",
          url: "/manual-mode",
        },
      ],
    },
  ],

  // Reference
  navReference: [
    {
      title: "Chart",
      url: "/dashboard/AllChart",
      icon: ChartLine,
      isActive: false,
      items: [
        {
          title: "All Chart",
          url: "/dashboard/AllChart",
        },
        {
          title: "Area Chart",
          url: "/dashboard/AreaChart",
        },
        {
          title: "Bar Chart",
          url: "/dashboard/BarChart",
        },
        {
          title: "Line Chart",
          url: "/dashboard/LineChart",
        },
        {
          title: "Pie Chart",
          url: "/dashboard/PieChart",
        },
        {
          title: "Radar Chart",
          url: "/dashboard/RadarChart",
        },
        {
          title: "Radial Chart",
          url: "/dashboard/RadialChart",
        },
      ],
    },
    {
      title: "3D",
      url: "/dashboard/GLTF",
      icon: Box,
      isActive: false,
      items: [
        {
          title: "GLTF",
          url: "/dashboard/GLTF",
        },
        {
          title: "Text",
          url: "/dashboard/Text",
        },
      ],
    },
  ],
};

export default data;
