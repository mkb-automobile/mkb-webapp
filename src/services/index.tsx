import { BASE_API_URL } from "../constants";

const API_URL = BASE_API_URL;

export const fetchData = () => {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }
  return fetch(`${API_URL}/api`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Le format JSON est déjà parsé, pas besoin de le traiter
      const jsonDataArray = data.vehicules.vehicule;
      if (!Array.isArray(data.vehicules.vehicule)) {
        throw new Error("Les données ne sont pas au format JSON");
      }

      // Adaptation de la structure des données selon votre besoin
      const formattedData = jsonDataArray.map((item: any, index: number) => {
        return {
          marque: item.marque,
          modele: item.modele,
          prix: item.prixttcaffiche?.toLocaleString("fr-FR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
          photoUrls: item.photos[0]?.photo || [],
          kilometrage: item.kilometrage,
          annee: item.anneemodele,
          energie: item.energie,
          carrosserie: item.carrosserie,
          typeboite: item.typeboite,
        };
      });

      console.log("formattedData", formattedData);

      return formattedData;
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données JSON:",
        error,
      );
      throw error;
    });
};
