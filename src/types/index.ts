import { manufacturers } from "../constants/index";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomLinkProps {
  key?: number;
  title?: string;
  href: string;
  containerStyles?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
  data: any;
}

export interface CarDataProps {
  title: string;
  marque: string;
  modele: string;
  reference: string;

  version?: string;
  prixttcaffiche: number;
  kilometrage: number;
  anneemodele: string;
  energie: string;
  carrosserie: string;
  nbrplace: number;
  nbrporte: number;
  couleurexterieur: string;
  puissancefiscale: number;
  puissancedyn: number;
  categorie: string;
  typeboite: string;
  description: string;
  datemes?: string;
  photos: {
    photo: string[];
  };
  ville?: string;
}

export interface CarCardProps {
  data: CarDataProps;
}

export interface CarDetailsProps {
  car?: CarDataProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFiltersProps {
  title: string;
  options?: OptionsProps[];
  setYear?: (year: number) => void;
  setFuel?: (fuel: string) => void;
}
