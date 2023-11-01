"use client";
import { useCarContext } from "@/src/hooks/CarContext";
import React from "react";

interface PageProps {
  params: {
    "marque-model-id": string;
  };
}

export default function Page({ params }: PageProps) {
  const { data, isLoading } = useCarContext();
  const car = data?.find((item) => {
    const { marque, modele } = item;
    const id = `${marque}-${modele}-${item.id}`;
    return id === params["marque-model-id"];
  });

  return (
    <div className="p-60">
      {car?.photoUrls?.map((url) => <img src={url} alt="" />)}{" "}
      <h1 className="text-3xl font-bold">
        {car?.marque} {car?.modele}{" "}
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{car?.prix} €</p>
          <p>{car?.kilometrage} Km</p>
          <p>{car?.annee}</p>
          <p>{car?.energie}</p>
          <p>{car?.carrosserie}</p>
          <p>{car?.typeboite}</p>
        </div>
      )}
    </div>
  );
}
