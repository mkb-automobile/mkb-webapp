"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/constants";
import { useState } from "react";

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.png"}
            alt="MKB-Automobile Logo"
            width={130}
            height={130}
            className="objetc-contain"
          />
        </Link>
        <div className="flex flex-between w-[75%] max-md:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              className="font-semibold text-base leading-8"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileNav}>
            <Image src={"/icon-menu.svg"} width={40} height={40} alt="" />
          </button>
        </div>
      </nav>
      {isMobileNavOpen && (
        <div className="flex flex-col items-center justify-center w-full fixed top-0 left-0 z-50">
          <button onClick={toggleMobileNav}>
            <Image src={"/icon-close.svg"} width={40} height={40} alt="" />
          </button>
          <div className="flex flex-col items-center justify-center w-full h-full">
            {navLinks.map((link) => (
              <Link href={link.path} className="font-semibold text-2xl">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
