"use client";

import React from "react";
import { PhotoCard } from "@/src/components/cards";
import { Main } from "@/src/components/layouts";
import { CustomButton } from "@/src/components/ui";
import CustomLink from "@/src/components/ui/links/CustomLink";
import PhotoSlider from "@/src/components/ui/slider/PhotoSlider";
import { formatNumber } from "@/src/constants";
import { useCarContext } from "@/src/hooks/CarContext";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    "marque-model-reference": string;
  };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { data, isLoading } = useCarContext();

  const car = data?.find((item) => {
    const { marque, modele, reference } = item;
    const newModel = modele[0].replace(/\s/g, "-").toLocaleLowerCase();
    const id = `${marque[0].toLocaleLowerCase()}-${newModel}-${reference}`;
    return id === params["marque-model-reference"];
  });

  const descriptionArray = car?.description;
  const descriptionString = descriptionArray?.[0];
  const elements = descriptionString
    ?.split("<br />")
    .map((item, index) => <li key={index}>{item}</li>);
  const date = car?.datemes ? new Date(car.datemes) : undefined;

  console.log(car?.photos);

  return (
    <Main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex px-5 w-full">
            <div className="w-3/5 p-2">
              <PhotoSlider car={car} />
              <div className="grid grid-cols-3 gap-2">
                {car?.photos[0]?.photo?.map((url, index) => (
                  <PhotoCard key={index} url={url} alt={car.title} />
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Description & Équipements
                </h2>
                <ul className="">{elements}</ul>
              </div>
            </div>
            <div className="w-1/3 pl-6">
              <div className=" flex flex-col justify-evenly">
                <div className="py-5 border-b-2 border-b-black">
                  <h2 className="text-2xl font-bold">
                    {car?.marque} {car?.modele}
                  </h2>
                  <p>{car?.version}</p>
                </div>
                <div className="flex flex-col justify-evenly pt-5 h-1/2">
                  <p>
                    <span className="font-bold">Kilométrage:</span>{" "}
                    {car?.kilometrage} Km
                  </p>
                  <p className="pt-2">
                    <span className="font-bold">Boite de vitesse: </span>
                    {car?.typeboite == "A" ? "Automatique" : "Manuel"}{" "}
                  </p>
                  <p className="pt-2">
                    <span className="font-bold">
                      Date de mise en circulation:{" "}
                    </span>
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
                  <div className="flex justify-center bg-primary-orange-100 p-5 rounded-full">
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
                <div className="flex justify-evenly border-b-2 border-b-black p-5">
                  <div className="flex items-center justify-center bg-primary-orange p-5 rounded-full gap-2">
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
                      title="Nous contacter"
                      href={"tel:+33188830917"}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-primary-orange p-5 rounded-full gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <CustomLink
                      title="Nous contacter"
                      href={"mailto:contact@mkbautomobile.fr"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3>
                    Nos Solution de finacement{" "}
                    <CustomLink
                      title="Cliquez ici pour en savoir plus"
                      href="/financement"
                      containerStyles="text-primary-orange"
                    />
                  </h3>
                </div>
                <div>
                  <h3>Les services compris de MKB Automobiles</h3>
                  <ul>
                    <li>Garantie 6 mois</li>
                    <li>Contrôle technique</li>
                    <li>Nettoyage intérieur et extérieur</li>
                    <li>Carte grise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Main>
  );
}
