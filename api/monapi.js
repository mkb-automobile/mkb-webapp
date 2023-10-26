// api/monapi.ts
import fetch from "cross-fetch";
import { parseString } from "xml2js";

export default async (req, res) => {
  try {
    console.log("Début de la requête");

    const apiUrl =
      "https://www.spider-vo.net/api/42446d400a51005224542150225b07590b56104a3072172e3d3a042b090a05760158135e0b";

    console.log("Avant la requête Fetch côté serveur");

    if (apiUrl) {
      const response = await fetch(apiUrl);

      console.log("Après la requête Fetch côté serveur");

      if (response.ok) {
        const xmlData = await response.text();
        parseString(xmlData, (err, result) => {
          if (err) {
            console.error("Erreur lors de la conversion XML vers JSON:", err);
            res.status(500).send("Erreur lors de la conversion XML vers JSON");
          } else {
            console.log("Données récupérées:", result);
            res.json(result);
          }
        });
      } else {
        console.error(
          "Erreur de réponse:",
          response.status,
          response.statusText,
        );
        res
          .status(response.status)
          .send("Erreur lors de la requête Fetch côté serveur");
      }
    } else {
      console.error("apiUrl n'est pas défini");
      res.status(500).send("apiUrl n'est pas défini");
    }
  } catch (error) {
    console.error("Erreur lors de la requête Fetch côté serveur:", error);
    res.status(500).send("Erreur serveur");
  }
};
