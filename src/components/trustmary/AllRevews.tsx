"use client";

import { trustmaryConfig } from "@/src/config/services";
import { useEffect } from "react";

const AllRevews = () => {
  useEffect(() => {
    const revewsContainer = document.querySelector("#trustmary-widget-reviews");

    if (!revewsContainer) return;

    // Nettoyer les anciennes clés de cache qui pourraient causer des problèmes
    if (typeof window !== "undefined") {
      localStorage.removeItem("trustmary_all_widget_html");
      localStorage.removeItem("trustmary_all_widget_loaded");
      localStorage.removeItem("trustmary_all_cache_timestamp");
    }

    // Vérifier si le script est déjà chargé dans le DOM
    const existingScript = document.querySelector(
      `script[src*="widget.trustmary.com/${trustmaryConfig.allApiKey}"]`
    );

    // Si le script existe déjà, ne pas recharger
    if (existingScript) {
      return;
    }

    // Charger le script seulement si nécessaire
    const script = document.createElement("script");
    script.src = `https://widget.trustmary.com/${trustmaryConfig.allApiKey}`;
    script.setAttribute("data-target", "#trustmary-widget-reviews");
    script.async = true;

    script.onerror = () => {
      console.warn("Erreur lors du chargement du widget Trustmary (all reviews)");
    };

    revewsContainer.appendChild(script);

    return () => {
      // Ne pas supprimer le script au démontage pour éviter les rechargements
    };
  }, []);

  return null;
};

export default AllRevews;
