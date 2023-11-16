// components/CleanupLocalStorage.js
"use client";
import { useEffect } from "react";

const CleanupLocalStorage = () => {
  useEffect(() => {
    const expirationTime = 7 * 24 * 60 * 60 * 1000; // 7 jours en millisecondes

    const storedTimestamp = localStorage.getItem("timestamp");
    if (storedTimestamp) {
      const timestampDiff = Date.now() - parseInt(storedTimestamp, 10);
      if (timestampDiff > expirationTime) {
        // Suppression des données de localStorage
        localStorage.removeItem("visitedPages");
        // Met à jour le timestamp
        localStorage.setItem("timestamp", Date.now().toString());
      }
    } else {
      // Première utilisation, enregistre le timestamp
      localStorage.setItem("timestamp", Date.now().toString());
    }
  }, []);

  return null;
};

export default CleanupLocalStorage;
