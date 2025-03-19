import Inner from "@/components/Layout/Inner";
import Logo from "@/public/images/icon-logo-white.svg";
import classNames from "classnames";

const barClass = "mx-[7px] h-[8px] w-[1px] bg-[#6c5d5d]";
const lineClass = "block h-[1px] w-full border-none";

function Footer() {
  return (
    <footer className="border border-x-0 border-b-0 border-[#1e1e1e] mt-[200px] px-[112px] py-[42px] text-sm">
      <Inner className="flex items-start gap-[100px]">
        <Logo className="w-[120px]" />

        <div className="flex flex-wrap items-center gap-[4px]">
          <dl className="flex">
            <dt>사업자명</dt>
            <dd className="ml-[6px]">(주)오토랩스</dd>
          </dl>

          <span className={classNames(barClass)} />

          <dl className="flex">
            <dt>대표자</dt>
            <dd className="ml-[6px]">오윤석</dd>
          </dl>

          <span className={classNames(barClass)} />

          <dl className="flex">
            <dt>TEL.</dt>
            <dd className="ml-[6px]">
              <a href="tel:010-0000-0000">010-0000-0000</a>
            </dd>
          </dl>

          <hr className={classNames(lineClass)} />

          <dl className="flex">
            <dt>사업자등록번호</dt>
            <dd className="ml-[6px]">000-00-00000</dd>
          </dl>

          <span className={classNames(barClass)} />

          <dl className="flex">
            <dt>oo업</dt>
          </dl>

          <span className={classNames(barClass)} />

          <dl className="flex">
            <dt>xx업</dt>
          </dl>

          <hr className={classNames(lineClass)} />

          <dl className="flex">
            <dt>주소</dt>
            <dd className="ml-[6px]">
              <address className="not-italic">대한민국 (우: 000000)</address>
            </dd>
          </dl>

          <hr className={classNames(lineClass)} />

          <p className="text-gray-400 mo:text-center">
            Copyright © (주)오토랩스 All rights reserved.
          </p>
        </div>
      </Inner>
    </footer>
  );
}

export default Footer;
