"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../services";
import { CarDataProps } from "../types";

type CarContextType = {
  data: CarDataProps[];
  isLoading: boolean;
  error: string | null;
};

const CarContext = createContext<CarContextType>({
  data: [],
  isLoading: false,
  error: null,
});

export const CarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<CarDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    fetchData()
      .then((result) => {
        setData(result as CarDataProps[]);
        setIsLoading(false);
      })
      .catch((err) => {
        // En mode développement, les erreurs sont gérées silencieusement dans fetchData
        // En production, on affiche l'erreur
        if (process.env.NODE_ENV === 'production') {
          console.error("Erreur lors du chargement des données:", err);
          setError(err.message || "Erreur lors du chargement des données");
        } else {
          // En développement, on log juste un avertissement
          console.warn("Mode développement : aucune donnée chargée depuis l'API");
        }
        setIsLoading(false);
        // Ne pas planter l'application, continuer avec un tableau vide
        setData([]);
      });
  }, []);

  return (
    <CarContext.Provider value={{ data, isLoading, error }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  return useContext(CarContext);
};
