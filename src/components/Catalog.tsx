"use client";
import {
  CarCard,
  CustomButton,
  CustomFilter,
  SearchBar,
} from "@/src/components";
import { fuels, yearsOfProduction } from "@/src/constants";
import { useEffect, useState } from "react";
import { fetchXmlData } from "../services";
import { CarDataProps } from "../types";

function CatalogCars() {
  const [data, setData] = useState<CarDataProps[]>([]);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const elementPerPage = 10;

  const startPage = (page - 1) * elementPerPage;
  const endPAge = startPage + elementPerPage;
  const dataCurrentPage = data?.slice(startPage, endPAge);
  const nbPages = Math.ceil(data?.length / elementPerPage);
  const pagesNumbers = Array.from({ length: nbPages }, (_, i) => i + 1);
  console.log(nbPages);

  const handlePageChange = (page: number) => {
    setPage(page);
    localStorage.setItem("currentPage", page.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <div className="home__cars-wrapper pb-10">
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
