"use client";
import Image from "next/image";
import { CarCardProps } from "../types";
import { CustomButton } from "./ui";
import { useRouter } from "next/navigation";

function CarCard({ carData }: CarCardProps) {
  const router = useRouter();
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

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card_content-title">
          {marque} {modele}
        </h2>
      </div>
      <p className="flex text-[32px] font-extrabold">
        {prix}
        <span className="self-start text-[14px] font-medium">€</span>
      </p>
      <div className="relative max-sm:h-80 max-md:h-60 w-full h-40 my-3 object-contain">
        <Image
          src={photoUrls?.[0] ?? "/no-img.png"}
          alt="car model"
          fill
          priority
          className="object-cover h-50 rounded-xl"
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
            <p className="text-[14px]">{typeboite === "A" ? "Auto" : "Manu"}</p>
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
            handleClick={() => {
              router.push(
                `/voitures-occasions/${carData.marque}-${carData.modele}-${carData.id}`,
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
