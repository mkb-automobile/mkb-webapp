import { cardDetailsServicesMkb, formatNumber } from "@/src/constants";
import React from "react";
import CustomLink from "../ui/links/CustomLink";

const ProductInfo = ({ car, date }: any) => {
  return (
    <div
      className={`w-96 p-6 max-md:w-full border border-primary-orange top-28 sticky rounded-2xl shadow-2xl`}
    >
      <div className=" flex flex-col justify-evenly">
        <div className="py-5 border-b-2 border-b-black">
          <h2 className="text-2xl font-bold">
            {car?.marque} {car?.modele}
          </h2>
          <p>{car?.version}</p>
        </div>
        <div className="flex flex-col justify-evenly pt-5 h-1/2">
          <p>
            <span className="font-bold">Kilométrage:</span> {car?.kilometrage}{" "}
            Km
          </p>
          <p className="pt-2">
            <span className="font-bold">Boite de vitesse: </span>
            {car?.typeboite == "A" ? "Automatique" : "Manuel"}{" "}
          </p>
          <p className="pt-2">
            <span className="font-bold">Date de mise en circulation: </span>
            {date?.toLocaleDateString()}{" "}
          </p>
          <p className="pt-2">
            <span className="font-bold">Carburant: </span>
            {car?.energie == "DIESEL" ? "Diesel" : "Essence"}
          </p>
          {/* <p>Lieu pour voir le vehicule: {car?.ville}</p> */}
          <div className="py-5">
            <p>
              <span className="italic">Référance du véhicule: </span>
              {car?.reference}
            </p>
          </div>
          <div className="flex justify-center bg-primary-orange-100 p-5 rounded-full shadow-xl">
            {car?.prixttcaffiche !== undefined && (
              <div className="flex justify-between py-5">
                <p>
                  <span className="font-bold text-3xl">
                    {formatNumber(car.prixttcaffiche)} €
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-evenly border-b-2 border-b-black p-5 max-sm:flex-col max-sm:gap-3 max-sm:p-10">
          <div className="flex items-center justify-center bg-primary-orange p-5 rounded-full gap-2 shadow-xl max-sm:p-3">
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
            <CustomLink title="" href={"tel:+33188830917"} />
          </div>
          <div className="flex items-center justify-center bg-primary-orange p-5 rounded-full gap-2 shadow-xl max-sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <CustomLink title="" href={"mailto:contact@mkbautomobile.fr"} />
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="py-10">
          <h3 className="text-2xl">
            <span className="font-bold">Nos Solution de finacement </span>
            <CustomLink
              title="Cliquez ici pour en savoir plus"
              href="/financement"
              containerStyles="text-primary-orange"
            />
          </h3>
        </div>
        <div>
          <div>
            <span className="font-bold text-2xl">
              <h3>Les services compris de MKB Automobiles</h3>
            </span>
          </div>
          <div className="py-3">
            {cardDetailsServicesMkb.map((item, index) => {
              const Icon = item.logo;
              return (
                <div key={index} className="flex items-center gap-2 text-xl">
                  <Icon className="text-orange-500" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
