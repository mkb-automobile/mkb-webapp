"use client";

import "./productPage.css";
import React from "react";
import { PhotoCard } from "@/src/components/cards";
import { Main } from "@/src/components/layouts";
import CustomLink from "@/src/components/ui/links/CustomLink";
import ImageSlider from "@/src/components/ui/slider/ImageSlider";
import { useCarContext } from "@/src/hooks/CarContext";
import { FormContact } from "@/src/components";
import ProductInfo from "@/src/components/producCard/ProductInfo";
import SocialNetwork from "@/src/components/socialNetwork/SocialNetwork";
import CardDetailsCritere from "@/src/components/cards/cardDetailCritere/CardDetailsCritere";
import CardDescription from "@/src/components/cards/cardDescription/CardDescription";
import { CustomButton } from "@/src/components/ui";

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

  const date = car?.datemes ? new Date(car.datemes) : undefined;

  const handlShow = () => {};

  return (
    <Main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex px-5 w-full max-md:flex-col">
            <div className="content w-[910px] max-md:w-full">
              <ImageSlider car={car} />
              <div className="grid grid-cols-3 gap-2 pb-10">
                {car?.photos[0]?.photo?.map((url, index) => (
                  <PhotoCard key={index} url={url} alt={car.title} />
                ))}
              </div>
              <div className="flex w-full gap-2">
                <CustomButton
                  title="Critère"
                  containerStyles="rounded-xl shadow-xl"
                  handleClick={handlShow}
                />
                <CustomButton
                  title="Description"
                  containerStyles="rounded-xl shadow-xl"
                />
              </div>
              <div className="max-md:w-full py-5">
                <CardDetailsCritere car={car} date={date} />
              </div>
              <div className="max-md:w-full py-5">
                <CardDescription car={car} />
              </div>
            </div>
            <aside className="relative block pl-10">
              <ProductInfo car={car} date={date} />
            </aside>
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
                <SocialNetwork />
              </div>
            </div>
          </div>
        </>
      )}
    </Main>
  );
}
