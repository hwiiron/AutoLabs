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
  "/dashboard": { main: "Home" },

  // AutoMode
  "/auto-mode": { main: "자동모드" },

  // ManualMode
  "/manual-mode": { main: "수동모드" },
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
