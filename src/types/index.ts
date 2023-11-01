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

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarDataProps {
  id: string;
  marque: string;
  modele: string;
  prix?: string;
  prix_vente?: string;
  kilometrage?: string;
  annee?: string;
  energie?: string;
  carrosserie?: string;
  photoUrls?: string[];
  categorie?: string;
  typeboite?: string;
}

export interface CarCardProps {
  carData: CarDataProps;
}

export interface CarDetailsProps {
  isOpen?: boolean;
  closeModal?: () => void;
  car: CarDataProps;
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
}
