export const fetchXmlData = () => {
  return fetch("/data.xml")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      console.log(xmlDoc);

      const elements = xmlDoc.getElementsByTagName("vehicule");

      const data = Array.from(elements).map((element) => {
        const marque = element.getElementsByTagName("marque")[0].textContent;
        const modele = element.getElementsByTagName("modele")[0].textContent;
        const prixAchat =
          element.getElementsByTagName("prix_achat")[0].textContent;

        const photosElement = element.getElementsByTagName("photos")[0];
        const photoElements = photosElement.getElementsByTagName("photo");
        const photoUrls = Array.from(photoElements).map(
          (photoElement) => photoElement.textContent,
        );

        return {
          marque,
          modele,
          prixAchat,
          photoUrls,
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
