"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchManufacturer } from "..";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button 
    type="submit" 
    className={`-ml-3 z-10 p-2 rounded-full bg-primary-orange hover:bg-primary-orange/90 transition-all duration-300 hover:scale-110 active:scale-95 shadow-medium hover:shadow-large ${otherClasses}`}
  >
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar({
  data,
  manufacturer,
  model,
  setManufacturer,
  setModel,
}: any) {
  const router = useRouter();
  const [localModel, setLocalModel] = useState(model);

  // Sync localModel with external model prop
  useEffect(() => {
    setLocalModel(model);
  }, [model]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && localModel === "") {
      return;
    }

    setModel(localModel);
    updateSearchParams(localModel.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  const handleClear = () => {
    setManufacturer("");
    setModel("");
    setLocalModel("");
    updateSearchParams("", "");
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          data={data}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={localModel}
          onChange={(e) => setLocalModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        {(manufacturer || localModel) && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-grey hover:text-black transition-colors"
            aria-label="Effacer la recherche"
            title="Effacer la recherche"
          >
            ×
          </button>
        )}
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
