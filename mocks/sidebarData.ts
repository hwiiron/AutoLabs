import { LayoutDashboard, SquareCheckBig, User } from "lucide-react";

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
      rank: "Admin",
    },
    {
      name: "오윤석",
      logo: User,
      rank: "대표",
    },
    {
      name: "유준하",
      logo: User,
      rank: "이사",
    },
    {
      name: "이정우",
      logo: User,
      rank: "연구원",
    },
    {
      name: "이인수",
      logo: User,
      rank: "연구원",
    },
    {
      name: "신휘철",
      logo: User,
      rank: "연구원",
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
