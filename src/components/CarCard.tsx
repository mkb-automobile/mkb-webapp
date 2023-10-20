"use client";
import Image from "next/image";
import { useState } from "react";
import { CarDetails, CustomButton } from ".";
import { CarCardProps } from "../types";

function CarCard({ carData }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    marque,
    modele,
    prix,
    kilometrage,
    annee,
    energie,
    carrosserie,
    photoUrls,
    typeboite,
  } = carData;

  console.log(photoUrls && photoUrls[0]);

  return (
    <div>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card_content-title">
            {marque} {modele}
          </h2>
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
          {prix}
          <span className="self-start text-[14px] font-medium">€</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={photoUrls?.[0] ?? "/car-placeholder.png"}
            alt="car model"
            fill
            priority
            className="rounded-xl"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src={"/steering-wheel.svg"}
                alt="steering-wheel.svg"
                width={20}
                height={20}
              />
              <p className="text-[14px]">
                {typeboite === "A" ? "Auto" : "Manu"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={"/tire.svg"} alt="tire" width={20} height={20} />

              <p className="text-[14px]">{kilometrage} km</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
              <p className="text-[14px]">
                {energie === "DIESEL" ? "Diesel" : "Essence"}
              </p>
            </div>
          </div>

          <div className="car-card__btn-container">
            <CustomButton
              title="Voir plus"
              containerStyles="w-full py-[16px] rounded-full bg-primary-orange"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <CarDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={carData}
        />
      </div>
    </div>
  );
}

export default CarCard;
