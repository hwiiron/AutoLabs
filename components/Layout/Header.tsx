import Inner from "@/components/Layout/Inner";
import Logo from "@/public/images/icon-logo-white.svg";
import Link from "next/link";

const navLinkClass =
  "relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full";

const navLinks = [
  {
    href: "/solution",
    children: "Solution",
  },
  {
    href: "/resource",
    children: "Resource",
  },
  {
    href: "/company",
    children: "Company",
  },
  {
    href: "/contactus",
    children: "Contact Us",
  },
];

function Header() {
  return (
    <header className="h-[10vh] flex items-center">
      <Inner className="flex items-center">
        <Link href={"/"} className="block w-[120px]">
          <Logo />
        </Link>

        <nav className="flex gap-[36px] ml-auto">
          {navLinks.map((link, i) => {
            return (
              <Link href={link.href} className={navLinkClass} key={i}>
                {link.children}
              </Link>
            );
          })}
        </nav>
      </Inner>
    </header>
  );
}

export default Header;
