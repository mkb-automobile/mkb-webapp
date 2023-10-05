import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.png"}
            alt="MKB-Automobile Logo"
            width={118}
            height={18}
            className="objetc-contain"
          />
        </Link>
        <div className="flex flex-between w-[75%]">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              className="font-semibold text-base leading-8"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
