"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbMap: Record<string, { main: string; sub?: string }> = {
  // Charts
  "/Charts/AreaChart": { main: "Charts", sub: "Area Chart" },
  "/Charts/BarChart": { main: "Charts", sub: "Bar Chart" },
  "/Charts/LineChart": { main: "Charts", sub: "Line Chart" },
  "/Charts/PieChart": { main: "Charts", sub: "Pie Chart" },
  "/Charts/RadialChart": { main: "Charts", sub: "Radial Chart" },
  "/Charts/TooltipChart": { main: "Charts", sub: "Tooltip Chart" },

  // 3D
  "/3D/GLTF": { main: "3D", sub: "GLTF" },
  "/3D/Text": { main: "3D", sub: "Text" },
};

function Header() {
  const router = usePathname();
  const currentBreadcrumb = breadcrumbMap[router] || { main: "", sub: "" };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              {currentBreadcrumb.main}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />

            <BreadcrumbItem>
              <BreadcrumbPage>{currentBreadcrumb.sub}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default Header;
