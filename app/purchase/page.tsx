"use client";
import React, { useEffect, useState } from "react";
import { fetchXmlData } from "@/src/services";
import CatalogCars from "@/src/components/Catalog";

interface Data {
  name: string;
  marque: string;
  modele: string;
  prix_achat: string;
  photo: string;
}

const Purchase = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchXmlData().then((result) => setData(result as Data[]));
  }, []);

  return <main className="pt-36">{<CatalogCars data={data} />}</main>;
};

export default Purchase;
