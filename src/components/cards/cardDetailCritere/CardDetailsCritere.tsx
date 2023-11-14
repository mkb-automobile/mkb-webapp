import React from "react";
import { BsCarFront } from "react-icons/bs";
import { GiCarDoor, GiCarSeat } from "react-icons/gi";
import { GoMilestone } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLocalGasStation } from "react-icons/md";
import { PiEngineThin } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";

const CardDetailsCritere = ({ car, date }: any) => {
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
  return (
    <div className="bg-primary-orange-100 p-10  grid grid-cols-3  lg:grid-cols-2 max-sm:flex flex-col items-center gap-5 justify-evenly rounded-xl shadow-2xl">
      {cardDetailsCritere.map((item, index) => {
        const Icon = item.logo;
        return (
          <div key={index} className="flex flex-col items-center text-xl">
            <div className="flex items-center gap-2 ">
              <Icon />
              <span> {item.titre}</span>
            </div>
            <div className="text-orange-900">{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CardDetailsCritere;
