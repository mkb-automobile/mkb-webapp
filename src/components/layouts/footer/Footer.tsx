import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/src/constants";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto flex flex-col text-black-100 mt-5 border-t border-gray-100 w-full">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="h-auto w-auto object-fill"
          />
          <p className="text-sm text-gray-700">
            MKB-Automobile 2023 <br />
            Tous Droits Réservés &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 MKB-Automobile. Tous Droits Réservés</p>

        <div className="footer__copyrights-link">
          <Link href="/politique-de-confidentialite" className="text-gray-500">
            Politique de confidentialité
          </Link>

          <Link href="/mentions-legales" className="text-gray-500">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
