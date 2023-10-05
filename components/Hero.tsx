"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
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
          title={"Trouver votre voiture"}
          containerStyles="bg-primary-orange text-white rounded-full mt-10"
          handleClick={handleScroll}
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
