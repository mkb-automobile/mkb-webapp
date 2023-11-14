import { FormContact } from "@/src/components";
import { Main } from "@/src/components/layouts";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Main>
      <div className="flex flex-col justify-center max-w-[1440px] mx-auto">
        <div className="flex justify-center">
          <h1 className="text-center font-semibold text-3xl pb-5">
            <span style={{ color: "#ff9f1c" }}>
              Une question, une demande de renseignements ?
            </span>
            <br /> Contactez-nous
          </h1>
        </div>
        <div className="flex items-center max-md:flex-col-reverse">
          <div className="flex justify-center w-full max-md:flex-col ">
            <div className="pt-10 flex flex-col  w-3/5">
              <div className="flex justify-center">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Par formulaire
                </h2>
              </div>
              <FormContact />
            </div>
          </div>
          <div className="flex  justify-center w-full max-md:flex-col ">
            <div className="pt-10 flex flex-col w-3/5">
              <div className="flex justify-center">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Par téléphone
                </h2>
              </div>
              <div className="flex-col justify-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link href="tel:+33 1 88 83 09 17" className="pl-4 text-xl">
                    {" "}
                    +33 1 88 83 09 17{" "}
                  </Link>
                </div>
                <span className="flex justify-center">ou</span>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <Link
                    href={"mailto:contact@mkbautomobile.fr"}
                    className="pl-4 text-xl"
                  >
                    contact@mkbautomobile.fr
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
