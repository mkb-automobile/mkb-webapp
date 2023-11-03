"use client";

import { Main } from "@/src/components/layouts";
import PhotoSlider from "@/src/components/ui/slider/PhotoSlider";
import { useCarContext } from "@/src/hooks/CarContext";
import React from "react";

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

  return (
    <Main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex px-5 w-full">
            <div className="w-2/3 p-2">
              <PhotoSlider car={car} />
            </div>
            <div className="w-1/3 pl-6 pt-4">
              <div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {car?.marque} {car?.modele}
                  </h2>
                  <p>{car?.titre}</p>
                </div>
                <div>
                  <p>Kilométrage: {car?.kilometrage} Km</p>
                  <p>
                    Boite de vitesse:{" "}
                    {car?.typeboite == "A" ? "Automatique" : "Manuel"}{" "}
                  </p>
                  <p>
                    Carburant: {car?.energie == "DIESEL" ? "Diesel" : "Essence"}
                  </p>
                  <p>Lieu pour voir le vehicule: {car?.ville}</p>
                  <p>Référance du véhicule: {car?.reference}</p>
                  <p>Prix: {car?.prixttcaffiche} €</p>
                </div>
              </div>
            </div>
          </div>
          <section className="p-2">
            <h2 className="text-2xl font-bold">OPTIONS ET EQUIPEMENTS :</h2>
            <ul className="grid grid-cols-2 gap-2 p-5 ">{elements}</ul>
          </section>
        </>
      )}
    </Main>
  );
}
