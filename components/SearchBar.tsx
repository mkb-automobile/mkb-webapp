"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/public/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="objetc-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="search__item">
        <Image
          src={"/model-ico.png"}
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
      </div>
    </form>
  );
}

export default SearchBar;
