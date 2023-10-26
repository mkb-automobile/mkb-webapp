export const fetchXmlData = () => {
  const apiUrl = process.env.NEXT_PUBLIC_SPIDERVO_API_URL;
  if (!apiUrl) {
    throw new Error("API URL is not defined");
  }

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      console.log("xmlDoc", xmlDoc);

      const elements = xmlDoc.getElementsByTagName("vehicule");

      const data = Array.from(elements).map((element) => {
        const marque = element.getElementsByTagName("marque")[0].textContent;
        const modele = element.getElementsByTagName("modele")[0].textContent;
        const prixAchat =
          element.getElementsByTagName("prix_achat")[0].textContent;
        const prixFormatte = prixAchat
          ? parseFloat(prixAchat.replace(",", "."))
          : null;
        const prix = prixFormatte?.toLocaleString("fr-FR", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        const kilometrage =
          element.getElementsByTagName("kilometrage")[0].textContent;
        const annee = element.getElementsByTagName("annee")[0].textContent;
        const energie = element.getElementsByTagName("energie")[0].textContent;
        const carrosserie =
          element.getElementsByTagName("carrosserie")[0].textContent;
        const typeboite =
          element.getElementsByTagName("typeboite")[0].textContent;

        const photosElement = element.getElementsByTagName("photos")[0];
        const photoElements = photosElement.getElementsByTagName("photo");
        const photoUrls = Array.from(photoElements).map(
          (photoElement) => photoElement.textContent,
        );

        return {
          marque,
          modele,
          prix,
          photoUrls,
          kilometrage,
          annee,
          energie,
          carrosserie,
          typeboite,
        };
      });

      return data;
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération du fichier XML:",
        error,
      );
      throw error;
    });
};

import axios, { AxiosResponse, AxiosError } from "axios";

export function getGoogleReviews(apiKey: string, placeId: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

  return axios
    .get(url)
    .then((response: AxiosResponse) => {
      const reviews = response.data.result.reviews;
      return reviews;
    })
    .catch((error: AxiosError) => {
      console.error("Erreur lors de la récupération des avis", error);
      throw error; // Vous pouvez gérer l'erreur de manière appropriée selon vos besoins
    });
}
