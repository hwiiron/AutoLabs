"use client";

import Link from "next/link";

import { NavMain } from "@/components/SideBar/nav-main";
import { NavUser } from "@/components/SideBar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import data from "@/mocks/sidebarData";
import Logo from "@/public/images/icon-logo-gradient.svg";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      {...props}
      className="sticky top-0 h-screen mo:w-[170px]"
    >
      <SidebarHeader>
        <Link href={"/dashboard"} className="relative w-[120px]">
          <Logo />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title="Menu" items={data.nav} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
