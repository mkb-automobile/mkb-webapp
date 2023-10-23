"use client";
import React from "react";
import CustomButton from "./ui/buttons/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomFilter } from ".";

const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
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
          containerStyles="bg-primary-orange text-white rounded-full mt-10 w-[14rem]"
          handleClick={() => {
            router.push("/purchase");
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
