import { FormContact } from "@/src/components";
import { Main } from "@/src/components/layouts";
import SocialNetwork from "@/src/components/socialNetwork/SocialNetwork";
import CustomLink from "@/src/components/ui/links/CustomLink";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Main>
      <div className="flex flex-col justify-center max-w-[1440px] mx-auto">
        <div className="flex justify-center">
          <h1 className="text-center pb-5">
            <span style={{ color: "#ff9f1c" }}>
              Une question, une demande de renseignements ?
            </span>
            <br /> Contactez-nous
          </h1>
        </div>
        <div className="flex justify-around max-md:hidden ">
          <h2 className="py-5">Par formulaire</h2>
          <h2 className="py-5">Par téléphone</h2>
        </div>
        <div className="flex items-center bg-primary-orange-50 p-10 rounded-2xl border shadow-2xl w-full max-md:flex-col-revers">
          <div className="flex justify-center w-1/2 flex-col max-md:w-full ">
            <div className="flex justify-center md:hidden">
              <h2 className="py-5">Par formulaire</h2>
            </div>
            <div className="w-full pt-10 flex flex-col ">
              <FormContact />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 max-md:w-full">
            <div className="flex justify-center md:hidden">
              <h2 className="py-5">Par téléphone</h2>
            </div>
            <div className="w-1/2 flex flex-col  items-center justify-center">
              <p>Vous preferez nous contacter par téléphone ? </p>
              <div className="py-5 border-b-2 border-b-black">
                <div className="flex justify-center bg-primary-orange p-5 rounded-full gap-2 shadow-xl">
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
                  <CustomLink
                    title="Parler a notre équipe"
                    href={"tel:+33188830917"}
                  />
                </div>
              </div>
              <SocialNetwork />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
