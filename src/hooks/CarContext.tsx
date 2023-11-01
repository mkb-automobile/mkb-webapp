"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CarDataProps } from "../types";
import { fetchData } from "../services";

type CarContextType = {
  data: CarDataProps[];
  isLoading: boolean;
};

const CarContext = createContext<CarContextType>({
  data: [],
  isLoading: false,
});

export const CarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<CarDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchData().then((result) => {
      setData(result as CarDataProps[]);
      setIsLoading(false);
    });
  }, []);
  return (
    <CarContext.Provider value={{ data, isLoading }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  return useContext(CarContext);
};
