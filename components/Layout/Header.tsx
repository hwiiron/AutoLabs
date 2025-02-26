"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbMap: Record<string, { main: string; sub?: string }> = {
  "/Dashboard": { main: "Dashboard" },

  // Charts
  "/Dashboard/AreaChart": { main: "Dashboard", sub: "Area Chart" },
  "/Dashboard/BarChart": { main: "Dashboard", sub: "Bar Chart" },
  "/Dashboard/LineChart": { main: "Dashboard", sub: "Line Chart" },
  "/Dashboard/PieChart": { main: "Dashboard", sub: "Pie Chart" },
  "/Dashboard/RadialChart": { main: "Dashboard", sub: "Radial Chart" },
  "/Dashboard/TooltipChart": { main: "Dashboard", sub: "Tooltip Chart" },

  // 3D
  "/Dashboard/GLTF": { main: "Dashboard", sub: "GLTF" },
  "/Dashboard/Text": { main: "Dashboard", sub: "Text" },
};

function Header() {
  const router = usePathname();
  const currentBreadcrumb = breadcrumbMap[router];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <Link href={"/" + currentBreadcrumb.main}>
                {currentBreadcrumb.main}
              </Link>
            </BreadcrumbItem>

            {currentBreadcrumb.sub && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem>
                  <BreadcrumbPage>{currentBreadcrumb.sub}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default Header;
