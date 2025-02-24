import type { Metadata } from "next";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "AUTOLABS",
  description: "AI 기술을 활용한 모듈형 스마트팩토리 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
