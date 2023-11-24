"use client";

import { fuels, yearsOfProduction } from "@/src/constants";
import { useState } from "react";
import { CustomButton, Loader, SearchBar } from "./ui";
import { useCarContext } from "../hooks/CarContext";
import { CarCard } from "./cards";
import { saveToLocalStorage } from "./localStorage/SaveToLocalStorage";
import CustomFilter from "./CustomFilter";

function CatalogCars() {
  // data state from context
  const { data, isLoading } = useCarContext();

  // search state
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2010);

  // pagination state
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

  const dataFilter = data
    ?.filter((car) => {
      if (manufacturer && model) {
        return (
          car.marque.toString().toLowerCase() === manufacturer.toLowerCase() &&
          car.modele.toString().toLowerCase() === model.toLowerCase()
        );
      }
      if (manufacturer) {
        return (
          car.marque.toString().toLowerCase() === manufacturer.toLowerCase()
        );
      }
      if (model) {
        return car.modele.toString().toLowerCase() === model.toLowerCase();
      }
      return true;
    })
    .slice(startPage, endPAge);

  const nbPages = Math.ceil(data?.length / elementPerPage);
  const pagesNumbers = Array.from({ length: nbPages }, (_, i) => i + 1);

  // console.log(dataFilter);

  const dataYearsFilter = data?.map((car) => car.anneemodele);
  const yearsObjetArray = dataYearsFilter?.map(([year]) => ({
    title: year,
    value: year,
  }));

  const sortedYears = yearsObjetArray.sort(
    (a, b) => parseInt(a.value) - parseInt(b.value),
  );

  // const handleYearFilter = (year: number) => {
  //   const isYearSelected = selectedYear.includes(year);
  //   if (isYearSelected) {
  //     const newSelectedYear = selectedYear.filter((y) => y !== year);
  //     setSelectedYear(newSelectedYear);
  //   } else {
  //     setSelectedYear([...selectedYear, year]);
  //   }
  // };

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
            data={dataFilter}
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            model={model}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title="Carburant" options={fuels} setFuel={setFuel} />
            <CustomFilter
              title="Année"
              options={sortedYears}
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
            {dataFilter?.map((car, index) => (
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
    </>
  );
}

export default CatalogCars;
