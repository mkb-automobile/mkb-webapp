"use client";
import { fuels, yearsOfProduction } from "@/src/constants";
import { useState } from "react";
import { Loader, SearchBar } from "./ui";
import { Button } from "./ui/button";
import { useCarContext } from "../hooks/CarContext";
import { CarCard } from "./cards";
import { saveToLocalStorage } from "./localStorage/SaveToLocalStorage";
import CustomFilter from "./CustomFilter";
import { applyPagination } from "../utils/applyPagination";

function CatalogCars() {
  const { data, isLoading, error } = useCarContext();
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
      <div className="padding-x padding-y max-width animate-fade-in" id="discover">
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-h1 max-sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Nos Véhicules
            </h1>
            <p className="text-body-lg text-grey max-w-2xl">
              Découvrez notre large sélection de véhicules d'occasion vérifiés et contrôlés. 
              Plus de 200 points de contrôle pour votre sécurité.
            </p>
          </div>
        </div>
        <div className="home__filters mb-12 space-y-6">
          <div className="w-full">
            <SearchBar
              data={dataFilterWithPaginatin}
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
              model={model}
              setModel={setModel}
            />
          </div>

          <div className="home__filter-container flex flex-wrap gap-4">
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
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-2xl animate-pulse" />
                <Loader />
              </div>
              <h2 className="text-h3 text-grey font-semibold">Chargement en cours...</h2>
              <p className="text-body text-grey">Recherche de véhicules disponibles...</p>
            </div>
          )}
          {error && !isLoading && (
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-3xl p-12 shadow-large text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚠️</span>
              </div>
              <h2 className="text-secondary-red text-h2 font-bold">
                Erreur de chargement
              </h2>
              <p className="text-grey text-body-lg">{error}</p>
              <p className="text-body-sm text-grey max-w-md mx-auto">
                Veuillez vérifier votre connexion internet ou réessayer plus tard.
              </p>
            </div>
          )}
          {!isLoading && !error && dataFilterWithPaginatin?.length === 0 && (
            <div className="bg-gradient-to-br from-primary-orange-50 to-orange-50 border-2 border-primary-orange-100 rounded-3xl p-12 shadow-large text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-primary-orange/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🔍</span>
              </div>
              <h2 className="text-black-100 text-h2 font-bold">Aucun véhicule trouvé</h2>
              <p className="text-grey text-body-lg max-w-md mx-auto">
                Essayez de modifier vos critères de recherche ou réinitialisez les filtres.
              </p>
            </div>
          )}
          {!error && (
            <>
              <div className="home__cars-wrapper">
                {dataFilterWithPaginatin?.map((car: any, index: any) => (
                  <div 
                    key={index} 
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CarCard data={car} />
                  </div>
                ))}
              </div>
              {!isLoading && dataFilterWithPaginatin && dataFilterWithPaginatin.length > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-4 mt-16 mb-8 animate-fade-in">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="min-w-[120px] rounded-full shadow-medium hover:shadow-large transition-all duration-300 disabled:opacity-50"
                  >
                    ← Précédent
                  </Button>
                  <div className="flex flex-wrap justify-center gap-2 max-sm:hidden">
                    {pagesNumbers.map((pageNumber) => (
                      <Button
                        key={pageNumber}
                        variant={page === pageNumber ? "orange" : "outline"}
                        size="lg"
                        onClick={() => handlePageChange(pageNumber)}
                        className="min-w-[48px] rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110"
                      >
                        {pageNumber}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === nbPages}
                    className="min-w-[120px] rounded-full shadow-medium hover:shadow-large transition-all duration-300 disabled:opacity-50"
                  >
                    Suivant →
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default CatalogCars;
