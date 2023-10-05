import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const navLinks = [
  "Achat",
  "Reprise",
  "Recherche personalisée",
  "Financemenet",
  "Comment ça marche",
];

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
          <Link href={"achat"} className="font-semibold text-base leading-8">
            Achat
          </Link>
          <Link href={"achat"} className="font-semibold text-base leading-8">
            Reprise
          </Link>
          <Link href={"achat"} className="font-semibold text-base leading-8">
            Recherche personalisée
          </Link>
          <Link href={"achat"} className="font-semibold text-base leading-8">
            Financemenet
          </Link>
          <Link href={"achat"} className="font-semibold text-base leading-8">
            Comment ça marche
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
