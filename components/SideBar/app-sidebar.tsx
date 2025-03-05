"use client";

import * as React from "react";
import data from "@/mocks/sidebarData";
import Link from "next/link";
import Logo from "@/public/images/icon-logo-gradient.svg";
import { Earth } from "lucide-react";
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
