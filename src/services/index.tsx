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
      const carsData = data.vehicules.vehicule;
      if (!Array.isArray(data.vehicules.vehicule)) {
        throw new Error("Les données ne sont pas au format JSON");
      }
      return carsData;
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données JSON:",
        error,
      );
      throw error;
    });
};
