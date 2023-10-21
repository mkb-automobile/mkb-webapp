import React from "react";
import { getGoogleReviews } from "../services";

const AvisDoogle = () => {
  // Exemple d'utilisation
  const apiKey = "AIzaSyChCUSv9xYcMHxIyxCgiJ5r0WLOvjTrVVk";
  const placeId = "0x47e673871c640579:0x48bd6a086a4ca13f";

  getGoogleReviews(apiKey, placeId)
    .then((reviews: any) => {
      // Traitez les avis comme nécessaire
      console.log(reviews);
    })
    .catch((error: any) => {
      // Gérez l'erreur selon vos besoins
      console.error("Erreur lors de la récupération des avis", error);
    });
  return <div>AvisDoogle</div>;
};

export default AvisDoogle;
