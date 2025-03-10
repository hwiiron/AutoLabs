import { CalendarDays } from "lucide-react";

import { UserSwitcher } from "@/components/SideBar/user-switcher";
import usersData from "@/mocks/sidebarData";

function Header() {
  const currentDate = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  });

  return (
    <header className="mb-4 flex h-[70px] items-center justify-between rounded-md border-b border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-[20px] font-semibold text-gray-800">Dashboard</h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="size-4" />
          <span>{currentDate}</span>
        </div>
      </div>

      <div className="ml-auto w-[200px]">
        <UserSwitcher users={usersData.users} />
      </div>
    </header>
  );
}

export default Header;
