"use client";

import * as React from "react";
import data from "@/mocks/sidebarData";
import Link from "next/link";
import Logo from "@/public/images/icon-logo-gradient.svg";
import { NavMain } from "@/components/SideBar/nav-main";
import { NavUser } from "@/components/SideBar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
        <Link href={"/"} className="relative w-[120px]">
          <Logo />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
