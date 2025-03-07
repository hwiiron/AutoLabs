"use client";

import * as React from "react";
import data from "@/mocks/sidebarData";
import Link from "next/link";
// import Logo from "@/public/images/icon-logo-gradient.svg";
import { ChevronRight, LayoutDashboard } from "lucide-react";
import { NavMain } from "@/components/SideBar/nav-main";
import { NavUser } from "@/components/SideBar/nav-user";
import { UserSwitcher } from "@/components/SideBar/user-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      {...props}
      className="h-screen sticky top-0 mo:w-[170px]"
    >
      <SidebarHeader>
        <UserSwitcher users={data.users} />
        {/* <Link href={"/dashboard"} className="relative w-[120px]">
          <Logo />
        </Link> */}
      </SidebarHeader>

      <div className="flex flex-col gap-2 p-2">
        <Link href={"/dashboard"}>
          <SidebarMenuButton tooltip="대시보드">
            <LayoutDashboard />
            <span>대시보드</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </Link>
      </div>

      <SidebarContent className="flex-0">
        <NavMain title="Menu" items={data.nav} />
      </SidebarContent>

      <SidebarContent className="flex-0 mt-[60px]">
        <NavMain title="Reference" items={data.navReference} />
      </SidebarContent>

      <SidebarFooter className="mt-auto">
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
