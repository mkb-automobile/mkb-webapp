"use client";
import { useEffect } from "react";

const clearLocalStorage = () => {
  localStorage.clear();
};

const CleanupLocalStorage = () => {
  useEffect(() => {
    const expirationTime = 2 * 60 * 1000; // 2 minutes en millisecondes

    const storedTimestamp = localStorage.getItem("timestamp");
    if (storedTimestamp) {
      const timestampDiff = Date.now() - parseInt(storedTimestamp, 10);
      if (timestampDiff > expirationTime) {
        // Suppression des données de localStorage
        clearLocalStorage();
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
