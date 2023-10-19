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

      const elements = xmlDoc.getElementsByTagName("vehicule");

      const data = Array.from(elements).map((element) => ({
        marque: element.getElementsByTagName("marque")[0].textContent,
        modele: element.getElementsByTagName("modele")[0].textContent,
        prix_achat: element.getElementsByTagName("prix_achat")[0].textContent,
        photo: element.getElementsByTagName("photos")[0].textContent,
      }));

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
