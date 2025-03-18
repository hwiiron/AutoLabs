import Inner from "@/components/Layout/Inner";
import Logo from "@/public/images/icon-logo-white.svg";
import Link from "next/link";

const navClass =
  "relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full";

function Header() {
  return (
    <header className="h-[10vh] flex items-center">
      <Inner className="flex items-center">
        <Link href={"/"} className="block w-[120px]">
          <Logo />
        </Link>

        <nav className="flex gap-[36px] ml-auto">
          <Link href={"/solution"} className={navClass}>
            Solution
          </Link>
          <Link href={"/resource"} className={navClass}>
            Resource
          </Link>
          <Link href={"/company"} className={navClass}>
            Company
          </Link>
          <Link href={"/contactus"} className={navClass}>
            Contact Us
          </Link>
        </nav>
      </Inner>
    </header>
  );
}

export default Header;
