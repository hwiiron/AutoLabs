import { User, LayoutDashboard, SquareCheckBig } from "lucide-react";

const data = {
  user: {
    name: "AutoLabs",
    email: "AutoLabs@atlabs.com",
    avatar: "/avatars/shadcn.jpg",
  },
  users: [
    {
      name: "AutoBrics",
      logo: User,
      rank: "CEO",
    },
  ],
  nav: [
    {
      title: "대시보드",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "검수",
      url: "/auto-mode",
      icon: SquareCheckBig,
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
};

export default data;
