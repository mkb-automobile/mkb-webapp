"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/constants";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { savePageVisitedToLocalStorage } from "../../localStorage/SaveToLocalStorage";

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-medium transition-all duration-300">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link 
          href={"/"} 
          className="flex justify-center items-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Image
            src={"/logo.png"}
            alt="MKB-Automobile Logo"
            width={100}
            height={130}
            className="w-full h-auto object-fill drop-shadow-sm"
          />
        </Link>
        <div className="flex flex-between w-[75%] max-md:hidden gap-10">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.title}
                href={link.path}
                className="text-body-sm font-medium leading-8 transition-all duration-200 hover:text-primary-orange relative group py-2"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMobileNav}
            className="p-2 rounded-lg hover:bg-primary-orange-50 transition-colors duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {!isMobileNavOpen ? (
              <Image 
                src={"/icon-menu.svg"} 
                width={32} 
                height={32} 
                alt="Menu"
                className="transition-transform duration-200"
              />
            ) : null}
          </button>
        </div>
      </nav>
      {isMobileNavOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 bg-white/98 backdrop-blur-lg animate-fade-in overflow-hidden">
          <div className="flex justify-end items-start pr-6 pt-6">
            <button 
              onClick={toggleMobileNav}
              className="p-3 rounded-full hover:bg-primary-orange-50 transition-all duration-200 active:scale-95 shadow-soft"
              aria-label="Close menu"
            >
              <AiOutlineClose className="w-6 h-6 text-black-100" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-8 px-6">
            {navLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  onClick={toggleMobileNav}
                  className="font-semibold text-black-100 text-h3 transition-all duration-300 hover:text-primary-orange hover:scale-105 active:scale-95 text-center"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slide-up 0.3s ease-out forwards'
                  }}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
