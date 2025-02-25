"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Header() {
  const router = usePathname();

  const pathname = () => {
    if (router === "/Charts/AreaChart") return "Area Chart";
    if (router === "/Charts/BarChart") return "Bar Chart";
    if (router === "/Charts/LineChart") return "Line Chart";
    if (router === "/Charts/PieChart") return "Pie Chart";
    if (router === "/Charts/RadialChart") return "Radial Chart";
    if (router === "/Charts/TooltipChart") return "Tooltip Chart";
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Chart</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="hidden md:block" />

            <BreadcrumbItem>
              <BreadcrumbPage>{pathname()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default Header;
