"use client";

import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { SearchManufacturerProps } from "@/src/types";

const SearchManufacturer = ({
  data,
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  console.log("manufacturer", manufacturer);

  const vehiculesFilter = data?.filter((car: any) => {
    const marque = car?.marque?.[0];
    console.log("marque", marque);
    return marque && marque.toLowerCase().includes(manufacturer.toLowerCase());
  });

  console.log("vehiculesFilter", vehiculesFilter);

  // const marque = car?.marque?.[0];

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setManufacturer("")}
          >
            <Combobox.Options>
              {data?.marque?.map((item: any) => (
                <Combobox.Option
                  key={item}
                  className={({
                    active,
                  }) => `relative search-manufacturer__option ${
                    active ? "bg-primary-orange text-white" : "text-gray-900"
                  }
                                        `}
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
