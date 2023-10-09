import { CarCard, CustomFilter, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

async function CatalogCars({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "",
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || "",
    limit: searchParams?.limit || 20,
    model: searchParams?.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="pt-36">
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
              {allCars?.map((car, index) => <CarCard car={car} key={index} />)}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default CatalogCars;
