"use client";

import Logo from "@/public/images/icon-logo-gradient.svg";

function ComingSoon() {
  return (
    <div className="fixed left-0 top-0 z-[3] flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="w-[180px] mo:w-[80px]">
          <Logo type="icon" />
        </div>
        <p className="mt-[16px] text-2xl font-medium text-white">
          페이지 준비 중입니다.
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
