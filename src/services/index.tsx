import { lenboxConfig } from "../config/services";
import { mockCars } from "../constants";

export const fetchData = async () => {
  // Portfolio/demo: return mock cars instead of remote API
  return mockCars;
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
