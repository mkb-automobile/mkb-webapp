import { CarCard, CustomFilter, SearchBar } from "@/src/components";
import { fuels, yearsOfProduction } from "@/src/constants";

interface CarData {
  // Define the shape of the car object
  name: string;
  marque: string;
  modele: string;
  prix_achat: string;
  photo: string;

  // Add any other properties you need
}

interface CatalogCarsProps {
  data: CarData[];
}

function CatalogCars({ data }: CatalogCarsProps) {
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
              {data?.map((car, index) => <CarCard car={car} key={index} />)}
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
