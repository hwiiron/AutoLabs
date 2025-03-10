import { Metadata } from "next";

import { AppSidebar } from "@/components/SideBar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AutoBrics - 대시보드",
  description: "AI 기술을 활용한 섬유 결함 검수 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
