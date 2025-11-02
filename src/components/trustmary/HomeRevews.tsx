"use client";

import { trustmaryConfig } from "@/src/config/services";
import { useEffect } from "react";

const HomeRevews = () => {
  useEffect(() => {
    const container = document.querySelector("#trustmary-widget");

    if (!container) return;

    // Nettoyer les anciennes clés de cache qui pourraient causer des problèmes
    if (typeof window !== "undefined") {
      localStorage.removeItem("trustmary_home_widget_html");
      localStorage.removeItem("trustmary_home_widget_loaded");
      localStorage.removeItem("trustmary_home_cache_timestamp");
    }

    // Vérifier si le script est déjà chargé dans le DOM
    const existingScript = document.querySelector(
      `script[src*="widget.trustmary.com/${trustmaryConfig.homeApiKey}"]`
    );

    // Si le script existe déjà, ne pas recharger
    if (existingScript) {
      return;
    }

    // Charger le script seulement si nécessaire
    const script = document.createElement("script");
    script.src = `https://widget.trustmary.com/${trustmaryConfig.homeApiKey}`;
    script.setAttribute("data-target", "#trustmary-widget");
    script.async = true;

    script.onerror = () => {
      console.warn("Erreur lors du chargement du widget Trustmary");
    };

    container.appendChild(script);

    return () => {
      // Ne pas supprimer le script au démontage pour éviter les rechargements
    };
  }, []);

  return null;
};

export default HomeRevews;
