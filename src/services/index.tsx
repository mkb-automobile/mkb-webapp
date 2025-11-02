import { lenboxConfig, sipdervoConfig } from "../config/services";

export const fetchData = async () => {
  // En mode développement, si l'URL n'est pas définie, retourner un tableau vide silencieusement
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (!sipdervoConfig.serverUrl) {
    if (isDevelopment) {
      console.warn(
        "⚠️ NEXT_PUBLIC_API_URL n'est pas définie. L'application fonctionnera sans données de l'API."
      );
      return [];
    }
    const errorMessage = "sipdervoConfig.serverUrl n'est pas définie. Veuillez définir NEXT_PUBLIC_API_URL dans vos variables d'environnement.";
    console.warn(errorMessage);
    throw new Error(errorMessage);
  }

  // Log l'URL utilisée en développement pour debug
  if (isDevelopment) {
    console.log("🔗 Tentative de connexion à l'API:", `${sipdervoConfig.serverUrl}/api`);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 secondes

    const response = await fetch(`${sipdervoConfig.serverUrl}/api`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Les données ne sont pas au format JSON attendu (tableau)");
    }

    return data;
  } catch (error: any) {
    // En mode développement, retourner un tableau vide au lieu de planter
    if (isDevelopment) {
      console.warn(
        "⚠️ Impossible de charger les données depuis l'API. L'application continuera avec un tableau vide.",
        error.message || error
      );
      return [];
    }

    // Gestion plus spécifique des erreurs en production
    if (error.name === 'AbortError') {
      console.error("Timeout lors de la récupération des données:", error);
      throw new Error("La requête a pris trop de temps. Veuillez réessayer plus tard.");
    }
    
    if (error instanceof TypeError && (error.message.includes('fetch') || error.message.includes('Failed to fetch'))) {
      console.error("Erreur réseau lors de la récupération des données:", error);
      throw new Error("Erreur de connexion réseau. Vérifiez votre connexion internet et que le serveur est accessible.");
    }

    console.error(
      "Une erreur s'est produite lors de la récupération des données JSON:",
      error,
    );
    throw error;
  }
};

export const submitLoanApplication = async (data: any) => {
  try {
    const response = await fetch(lenboxConfig.apiCreditUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Échec de la requête POST vers Finnocar");
    }
    const responseData = await response.json();
    return responseData.response;
  } catch (error) {
    console.log(error);
  }
};
