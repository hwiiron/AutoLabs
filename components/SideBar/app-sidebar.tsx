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
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Earth } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      {...props}
      className="h-screen sticky top-0 mo:w-[170px]"
    >
      <SidebarHeader>
        <Link href={"/Dashboard"} className="relative w-[120px]">
          <Logo />
        </Link>
      </SidebarHeader>

      <div className="flex flex-col gap-2 p-2">
        <Link href={"/"}>
          <SidebarMenuButton tooltip="AutoLabs">
            <Earth />
            <span>AutoLabs</span>
          </SidebarMenuButton>
        </Link>
      </div>

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
