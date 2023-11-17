"use client";

import { fuels, yearsOfProduction } from "@/src/constants";
import { useState } from "react";
import { CustomButton, Loader, SearchBar } from "./ui";
import { useCarContext } from "../hooks/CarContext";
import { CarCard } from "./cards";
import CustomFilter from "./CustomFilter";
import SaveToLocalStorage from "./localStorage/SaveToLocalStorage";

function CatalogCars() {
  const { data, isLoading } = useCarContext();
  const [page, setPage] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedPage = JSON.parse(localStorage.getItem("visitedPages") ?? "1");
      return savedPage > 0 ? savedPage : 1;
    }
    return 1;
  });

  const elementPerPage = 12;
  const startPage = (page - 1) * elementPerPage;
  const endPAge = startPage + elementPerPage;
  const dataCurrentPage = data?.slice(startPage, endPAge);
  const nbPages = Math.ceil(data?.length / elementPerPage);
  const pagesNumbers = Array.from({ length: nbPages }, (_, i) => i + 1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const savePageToLocalStorage = (newPage: number) => {
    if (typeof window !== "undefined") {
      const visitedPages =
        JSON.parse(localStorage.getItem("visitedPages") ?? "[]") || [];
      visitedPages.push(newPage);
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
    }
    if (!data) {
      return null;
    }
  };

  return (
    <>
      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Nos Véhicules</h1>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Carburant" options={fuels} />
            <CustomFilter title="Année" options={yearsOfProduction} />
          </div>
        </div>

        <section>
          {isLoading && (
            <div className="home__error-container">
              <h2 className="text-black text-base">Chargement en cours...</h2>
              <Loader />
            </div>
          )}
          <div className="home__cars-wrapper">
            {dataCurrentPage?.map((car, index) => (
              <CarCard carData={car} key={index} />
            ))}
          </div>
          <div className="flex justify-evenly">
            <button
              className="custom-filter__btn"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Précédent
            </button>
            <div className="flex max-sm:hidden">
              {pagesNumbers.map((pageNumber) => (
                <CustomButton
                  key={pageNumber}
                  title={`${pageNumber}`}
                  containerStyles={`${
                    page === pageNumber
                      ? "bg-primary-orange text-white rounded-full"
                      : ""
                  }`}
                  handleClick={() => handlePageChange(pageNumber)}
                />
              ))}
            </div>
            <button
              className="custom-filter__btn"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === nbPages}
            >
              Suivant
            </button>
          </div>
        </section>
      </div>
      <SaveToLocalStorage
        storageKey="visitedPages"
        data={page}
        pagination={true}
      />
    </>
  );
}

export default CatalogCars;
