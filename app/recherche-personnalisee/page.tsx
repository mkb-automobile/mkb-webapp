"use client";
import "./personaliz.css";
import { Main } from "@/src/components/layouts";
import Image from "next/image";
import React from "react";
import { FaCheck, FaListOl } from "react-icons/fa";
import { MdOutlineDraw } from "react-icons/md";
import { PiChatsCircleBold, PiKeyBold } from "react-icons/pi";

function Personalized() {
  const stepProject = [
    {
      id: 1,
      title: "Découverte de votre projet d'achat automobile",
      icon: <PiChatsCircleBold />,
    },
    {
      id: 2,
      title: "Signature du mandat de recherche",
      icon: <MdOutlineDraw />,
    },
    {
      id: 3,
      title:
        "Proposition de 3 véhicules dans vos critères de recherche sous 14 jours",
      icon: <FaListOl />,
    },
    {
      id: 4,
      title: "Validation du véhicule",
      icon: <FaCheck />,
    },
    {
      id: 5,
      title: "Livraison du véhicule et remise des clés",
      icon: <PiKeyBold />,
    },
  ];

  const stepEngagement = [
    {
      title: `ÊTRE accompagné par un expert du Marché de l'automobile`,
      icon: "/accompagne.svg",
    },
    {
      title:
        "BÉNÉFICIEZ d'un gain de temps car nous recherchons un véhicule dans vos critères",
      icon: "/benefice.svg",
    },
    {
      title:
        "SÉCURISEZ l'achat de votre véhicule. Nos équipes vérifient l'état de votre nouvelle voiture, la révise et la prépare avant la livraison",
      icon: "/secu.svg",
    },
  ];
  return (
    <Main>
      <section className="w-full flex bg-primary-orange-50 p-10 border shadow-2xl rounded-3xl">
        <div className="w-1/2 p-10">
          <h2 className="pb-5">
            <span style={{ color: "#ff9f1c" }}>
              Bénéficiez d'un accompagnement
            </span>
            <br />
            adapté à vos besoins
          </h2>
          <p>
            <strong>
              MKB Automobile est le partenaire idéal pour trouver la voiture qui
              correspond à vos envies
            </strong>
            , vous avez le choix parmi une sélection de véhicules. Grâce aux
            services de MKB Automobile, vous pouvez acheter sereinement une
            voiture d’occasion, au juste prix. De plus, toutes nos véhicules
            sont contrôlées et vérifiées par nos équipes en interne.{" "}
            <span>
              Vous êtes ainsi assuré d’acheter une voiture totalement
              fonctionnelle.{" "}
            </span>
            <strong>
              Nos experts vous accompagnent tout au long de votre processus
              d’achat.
            </strong>
          </p>
        </div>
        <div>
          <Image
            src={"/MKB-Automobile-Recherche-personnalisee.png"}
            width={500}
            height={600}
            alt="recherche-personnalisee"
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col justify-center items-center py-10">
          <h2 className="pt-5">
            <span style={{ color: "#ff9f1c" }}>Votre projet</span> en 5 étapes
          </h2>
          <p className="text-center p-1">
            <span>
              Nous vous aidons à trouver la voiture de vos rêves
              <br />
              parmi un large choix de véhicules en France et en Europe
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 w-full gap-2">
          {stepProject.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-5">
              <div className="flex place-items-center justify-center  bg-primary-orange text-white rounded-full h-10 w-10 ">
                {step.icon && step.icon}
              </div>
              <div className="arrow flex flex-col items-center rounded-xl bg-primary-orange-50 border-xl shadow-xl">
                <p>
                  <span>{step.id}</span>
                </p>
                <h5 className="text-center">{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full justify-center py-10 bg-secondary-red rounded-3xl text-white p-5 border shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <h2 className="pb-10">
            <span style={{ color: "#ff9f1c" }}>Nos 3 engagements</span> pour
            vous accompagner
          </h2>
          <div className="grid grid-cols-3">
            {stepEngagement.map((step, index) => (
              <div key={index} className="flex  gap-6">
                <Image
                  src={step.icon}
                  width={100}
                  height={100}
                  alt={step.title}
                  className="rounded-full  bg-slate-300"
                />
                <p>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section></section>
    </Main>
  );
}

export default Personalized;
