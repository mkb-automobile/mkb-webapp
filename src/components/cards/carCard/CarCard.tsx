"use client";
import Image from "next/image";
import { CarCardProps } from "../../../types";
import { CustomButton } from "../../ui";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "../../localStorage/SaveToLocalStorage";
import { formatNumber } from "@/src/utils";

function CarCard({ data }: CarCardProps) {
  const router = useRouter();

  const {
    marque,
    modele,
    kilometrage,
    energie,
    typeboite,
    photos,
    prixttcaffiche,
    reference,
    anneemodele,
  } = data;

  const newModel = modele.replace(/\s/g, "-").toLocaleLowerCase();
  const newMarque = marque.replace(/\s/g, "-").toLocaleLowerCase();

  const handleViewMoreClick = () => {
    saveToLocalStorage({
      storageKey: "carDada",
      data: data,
    });
    router.push(`/voitures-occasions/${newMarque}-${newModel}-${reference}`);
  };

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h3 className="car-card_content-title">
          {marque} {modele}
        </h3>
      </div>
      <p className="flex text-[25px]">
        {formatNumber(prixttcaffiche)}
        <span className="self-start text-[14px] font-medium">€</span>
      </p>
      <div className="relative max-sm:h-80 max-md:h-60 w-full h-40 my-3 object-contain">
        <Image
          src={photos?.photo?.[0] ?? "/no-img.png"}
          alt="car model"
          fill
          priority
          className="object-cover h-50 rounded-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 1024px"
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
            <p className="text-[14px]">{typeboite == "A" ? "Auto" : "Manu"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt="tire" width={20} height={20} />

            <p className="text-[14px]">{formatNumber(kilometrage)} km</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
            <p className="text-[14px]">
              {energie == "DIESEL" ? "Diesel" : "Essence"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/Paomedia-Small-N-Flat-Calendar.512.png"}
              alt="gas"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{anneemodele}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Voir plus"
            containerStyles="w-full py-[16px] rounded-full bg-primary-orange"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleViewMoreClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
