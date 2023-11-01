"use client";
import { CarDetails } from "@/src/components";
import { useCarContext } from "@/src/hooks/CarContext";
import React from "react";

interface PageProps {
  params: {
    "marque-model-ref": string;
  };
}

export default function Page({ params }: PageProps) {
  const { data, isLoading } = useCarContext();
  return (
    <div className="p-60">{isLoading && <h1>Chargement en cours...</h1>}</div>
  );
}
