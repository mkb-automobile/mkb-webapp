"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/constants";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CustomLink from "../../ui/links/CustomLink";

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="w-full fixed z-10 bg-white border-b shadow-xl">
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
              key={link.title}
              href={link.path}
              className="font-semibold text-sm leading-8"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileNav}>
            {!isMobileNavOpen ? (
              <Image src={"/icon-menu.svg"} width={40} height={40} alt="" />
            ) : (
              ""
            )}
          </button>
        </div>
      </nav>
      {isMobileNavOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-10 bg-primary-orange-50">
          <div className="flex justify-end pr-10 pt-5">
            <button onClick={toggleMobileNav}>{<AiOutlineClose />}</button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={toggleMobileNav}
                className="font-semibold  text-black text-2xl"
              >
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
