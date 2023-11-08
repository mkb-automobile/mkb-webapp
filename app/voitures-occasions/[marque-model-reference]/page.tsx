"use client";

import React from "react";
import { PhotoCard } from "@/src/components/cards";
import { Main } from "@/src/components/layouts";
import CustomLink from "@/src/components/ui/links/CustomLink";
import ImageSlider from "@/src/components/ui/slider/ImageSlider";
import { formatNumber } from "@/src/constants";
import { useCarContext } from "@/src/hooks/CarContext";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { BsCarFront, BsInstagram } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import { GoMilestone } from "react-icons/go";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiCarSeat } from "react-icons/gi";
import { PiEngineThin } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";
import { FormContact } from "@/src/components";
import { BsFacebook } from "react-icons/bs";
import { it } from "node:test";

interface PageProps {
  params: {
    "marque-model-reference": string;
  };
}

export default function Page({ params }: PageProps) {
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

  const cardDetailsServicesMkb = [
    {
      title: "Voiture contrôlée",
      logo: AiOutlineCheckCircle,
    },
    {
      title: "Garantie et prêt à partir",
      logo: FaAward,
    },
    {
      title: "Paiement en plusieurs fois ou à crédit",
      logo: FaRegCreditCard,
    },
  ];

  const cardDetailsCritere = [
    {
      logo: BsCarFront,
      titre: "Marque",
      value: car?.marque,
    },
    {
      logo: BsCarFront,
      titre: "Finition",
      value: car?.modele,
    },
    {
      logo: BsCarFront,
      titre: "Mise en circulation",
      value: date?.toLocaleDateString(),
    },
    {
      logo: GoMilestone,
      titre: "Kilométrage",
      value: car?.kilometrage,
    },
    {
      logo: MdLocalGasStation,
      titre: "Carburant",
      value: car?.energie,
    },
    {
      logo: TbManualGearbox,
      titre: "Boîte de vitesse",
      value: car?.typeboite,
    },
    {
      logo: BsCarFront,
      titre: "Type de véhicule",
      value: car?.carrosserie,
    },
    {
      logo: IoColorPaletteOutline,
      titre: "Couleur",
      value: car?.couleurexterieur,
    },
    {
      logo: PiEngineThin,
      titre: "Puissance fiscale",
      value: car?.puissancefiscale,
    },
    {
      logo: PiEngineThin,
      titre: "Puissance din",
      value: car?.puissancedyn,
    },
    {
      logo: GiCarDoor,
      titre: "Nombre de portes",
      value: car?.nbrporte,
    },
    {
      logo: GiCarSeat,
      titre: "Nombre de places",
      value: car?.nbrplace,
    },
  ];

  const reseauSocial = [
    {
      logo: BsFacebook,
      titre: "Facebook",
      href: "https://www.facebook.com/mkb.automobile",
    },
    {
      logo: BsInstagram,
      titre: "Instagram",
      href: "https://www.instagram.com/mkbautomobile/?igshid=MWs0bTB4YW11a2JkZQ%3D%3D",
    },
  ];

  return (
    <Main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex px-5 w-full max-md:flex-col">
            <div className="w-3/5 p-2 max-md:w-full">
              <ImageSlider car={car} />
              <div className="grid grid-cols-3 gap-2 pb-10">
                {car?.photos[0]?.photo?.map((url, index) => (
                  <PhotoCard key={index} url={url} alt={car.title} />
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6 max-md:w-full">
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
                    <CustomLink
                      title="Nous contacter"
                      href={"tel:+33188830917"}
                    />
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
                    <CustomLink
                      title="Nous contacter"
                      href={"mailto:contact@mkbautomobile.fr"}
                    />
                  </div>
                </div>
              </div>
              <div className="py-10">
                <div className="py-10">
                  <h3 className="text-2xl">
                    <span className="font-bold">
                      Nos Solution de finacement{" "}
                    </span>
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
                        <div
                          key={index}
                          className="flex items-center gap-2 text-xl"
                        >
                          <Icon className="text-orange-500" />
                          <p>{item.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-evenly px-5 max-md:flex-col">
            <div className="w-1/2 max-md:w-full py-5">
              <div className="text-3xl font-light w-full pb-10">
                <h2>Critéres</h2>
              </div>
              <div className="bg-primary-orange-100 p-10  grid grid-cols-3  lg:grid-cols-2 max-sm:flex flex-col items-center gap-5 justify-evenly rounded-xl shadow-2xl">
                {cardDetailsCritere.map((item, index) => {
                  const Icon = item.logo;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-xl"
                    >
                      <div className="flex items-center gap-2 ">
                        <Icon />
                        <span> {item.titre}</span>
                      </div>
                      <div className="text-orange-900">{item.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-1/2 max-md:w-full py-5">
              <h2 className="text-3xl font-light pb-5">
                Description & Équipements
              </h2>
              <ul className="grid grid-cols-2 text-md">{elements}</ul>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-10 bg-primary-orange-100 gap-6 shadow-xl">
            <div>
              <h1 className="text-center font-semibold text-3xl pb-5">
                Ce modèle vous intéresse ?
                <span style={{ color: "#ff9f1c" }}> Contactez-nous</span>
              </h1>
              <p className="text-center pb-5">
                Nos experts vous accompagnenent pour votre projet d'achat
                automobile.
                <br />
                Nous somme à cotre écoute.
              </p>
              <p className="text-center font-bold">
                Écrivez-nous, nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            <div className="w-full flex justify-evenly max-md:flex-col">
              <div className="">
                <FormContact />
              </div>
              <div className="flex flex-col  items-center justify-center">
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
                <div className="flex gap-10 py-5">
                  {reseauSocial.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-primary-orange p-5 rounded-full gap-2 shadow-xl"
                    >
                      <item.logo className="w-6 h-6" />
                      <CustomLink title={item.titre} href={item.href} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Main>
  );
}
