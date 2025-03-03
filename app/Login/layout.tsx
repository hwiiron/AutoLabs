import { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/SideBar/app-sidebar";

export const metadata: Metadata = {
  title: "AutoLabs - 로그인",
  description: "AI 기술을 활용한 모듈형 스마트팩토리 플랫폼",
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
