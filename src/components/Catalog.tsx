"use client";
import { fuels, yearsOfProduction } from "@/src/constants";
import { useState } from "react";
import { CustomButton, Loader, SearchBar } from "./ui";
import { useCarContext } from "../hooks/CarContext";
import { CarCard } from "./cards";
import { saveToLocalStorage } from "./localStorage/SaveToLocalStorage";
import CustomFilter from "./CustomFilter";
import { applyPagination } from "../utils/applyPagination";

function CatalogCars() {
  const { data, isLoading } = useCarContext();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2010);
  const [searchResults, setSearchResults] = useState(null);
  const [page, setPage] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedPage = JSON.parse(localStorage.getItem("visitedPages") ?? "1");
      return savedPage > 0 ? savedPage : 1;
    }
    return 1;
  });

  // Function to filter data by manufacturer, model, fuel and year
  const { dataFilterWithPaginatin, pagesNumbers, nbPages } = applyPagination({
    data,
    manufacturer,
    model,
    page,
    elementPerPage: 16,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    saveToLocalStorage({
      storageKey: "catalogPage",
      data: newPage,
    });
  };

  return (
    <>
      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Nos Véhicules</h1>
        </div>
        <div className="home__filters">
          <SearchBar
            data={dataFilterWithPaginatin}
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            model={model}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title="Carburant" options={fuels} setFuel={setFuel} />
            <CustomFilter
              title="Année"
              options={yearsOfProduction}
              setYear={setYear}
            />
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
            {dataFilterWithPaginatin?.map((car: any, index: any) => (
              <CarCard data={car} key={index} />
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
    </>
  );
}

export default CatalogCars;
