"use client";
import { CarCard, CustomFilter, SearchBar } from "@/src/components";
import { fuels, yearsOfProduction } from "@/src/constants";
import { useEffect, useState } from "react";
import { fetchXmlData } from "../services";
import { CarDataProps } from "../types";

function CatalogCars() {
  const [data, setData] = useState<CarDataProps[]>([]);

  useEffect(() => {
    fetchXmlData().then((result) => setData(result as CarDataProps[]));
  }, []);
  const isDataEmpty = data?.length === 0;

  return (
    <>
      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Nos Véhicules</h1>
          <p> </p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Carburant" options={fuels} />
            <CustomFilter title="Année" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {data?.map((car, index) => <CarCard carData={car} key={index} />)}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default CatalogCars;
