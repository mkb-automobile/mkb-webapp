import { METHODS } from "http";
import { lenboxConfig, sipdervoConfig } from "../config/services";

export const fetchData = () => {
  if (!sipdervoConfig.serverUrl) {
    throw new Error("sipdervoConfig.serverUrl n'est pas définie");
  }
  return fetch(`${sipdervoConfig.serverUrl}/api`)
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

export const submitLoanApplication = async (data: any) => {
  try {
    const response = await fetch(lenboxConfig.apiCreditUrl!, {
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
