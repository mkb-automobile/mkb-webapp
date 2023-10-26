import express from "express";
import { Request, Response } from "express";
import fetch from "cross-fetch";
import { parseString } from "xml2js"; // Ajoutez l'importation pour parseString

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
  );
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Fix: pass string "true" instead of boolean true
  next();
});

app.get("/api", async (req: Request, res: Response) => {
  try {
    console.log("Début de la requête");

    const apiUrl =
      "https://www.spider-vo.net/api/42446d400a51005224542150225b07590b56104a3072172e3d3a042b090a05760158135e0b";

    console.log("Avant la requête Fetch côté serveur");

    // Vérifiez si apiUrl est défini avant de faire la requête
    if (apiUrl) {
      const response = await fetch(apiUrl);

      console.log("Après la requête Fetch côté serveur");

      // Reste du code inchangé
      if (response.ok) {
        const xmlData = await response.text();
        parseString(xmlData, (err: Error | null, result: any) => {
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
    // Log en cas d'erreur lors de la requête
    console.error("Erreur lors de la requête Fetch côté serveur:", error);

    // Renvoyez un message d'erreur comme réponse
    res.status(500).send("Erreur serveur");
  }
});

const PORT = process.env.PORT || 3000;
console.log(`Port: ${PORT}`);
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
