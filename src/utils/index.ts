import { CarProps, FilterProps } from "@/src/types";
import axios from "axios";

export async function fetchCars(filter: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filter;
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: {
      make: manufacturer,
      year: year,
      feul_type: fuel,
      limit: limit,
      model: model,
    },
    headers: {
      "X-RapidAPI-Key": "f7e2139139msh6c0a33a12b4877ap1745bfjsndb627cf5ddf1",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const genereteCarImageUrl = (car: CarProps, angle?: string) => {};
