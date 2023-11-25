import { METHODS } from "http";
import { SPIDERVO_API_URL } from "../constants";
export const fetchData = () => {
  if (!SPIDERVO_API_URL) {
    throw new Error("SPIDERVO_API_URL n'est pas définie");
  }
  return fetch(`${SPIDERVO_API_URL}/api`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error("Les données ne sont pas au format JSON");
      }
      return data;
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données JSON:",
        error,
      );
      throw error;
    });
};

const apiUrl = process.env.NEXT_PUBLIC_LENBOX_API_URL;

export const submitLoanApplication = async (data: any) => {
  try {
    const response = await fetch(apiUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Échec de la requête POST vers Finnocar");
    }
    const responseData = await response.json();
    return responseData.response;
  } catch (error) {
    console.log(error);
  }
};
