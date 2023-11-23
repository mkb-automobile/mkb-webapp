"use client";
import React from "react";
import CustomButton from "./ui/buttons/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="hero max-w-[1440px] mx-auto pt-36 w-full ">
      <div className="flex-1 pl-5">
        <h1 className="hero__title">
          L'achat de votre voiture
          <span style={{ color: "#FF9F1C" }}> simple, fiable et sécurisé</span>
        </h1>
        <p className="hero__subtitle">
          Sécurisez votre achat et bénéficiez d'un accompagnement adapté à vos
          besoins
        </p>

        <CustomButton
          title="Trouver votre véhicule"
          containerStyles="bg-secondary-red text-white rounded-full mt-10 w-[14rem] shadow-xl"
          handleClick={() => {
            router.push("/voitures-occasions");
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/audi-a3-sportback-35-tfsi-150-s-tronic-7-neuf-2022-fleury-les-aubrais-1.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
