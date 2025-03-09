"use client";

import * as React from "react";
import data from "@/mocks/sidebarData";
import { NavMain } from "@/components/SideBar/nav-main";
import { NavUser } from "@/components/SideBar/nav-user";
import { UserSwitcher } from "@/components/SideBar/user-switcher";
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
        <UserSwitcher users={data.users} />
      </SidebarHeader>

      <SidebarContent className="flex-0">
        <NavMain title="Menu" items={data.nav} />
      </SidebarContent>

      <SidebarFooter className="mt-auto">
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
