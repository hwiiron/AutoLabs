import { ChartLine } from "lucide-react";

const data = {
  user: {
    name: "Name",
    email: "Email",
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
  ],
};

export default data;
