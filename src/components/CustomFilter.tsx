"use client";
import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFiltersProps } from "@/src/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CustomFilter({
  title,
  options,
  setYear,
  setFuel,
}: CustomFiltersProps) {
  const [selected, setSelected] = useState(options ? options[0] : null);
  const router = useRouter();

  const handleUpdateParams = () => {
    const newPathName = "";
    router.push(newPathName);
  };

  useEffect(() => {
    if (selected) {
      if (setYear && typeof selected.value === "number") {
        setYear(selected.value);
      }
      if (setFuel && typeof selected.value === "string") {
        setFuel(selected.value);
      }
    }
  }, [selected, setYear, setFuel]);

  return (
    <div className="w-fit z-0">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn group hover:shadow-medium transition-all duration-300">
            <span className="block truncate font-medium">{selected?.title || title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain transition-transform duration-300 group-hover:scale-110"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
          >
            <Listbox.Options className="custom-filter__options animate-fade-in shadow-xl">
              {options &&
                options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-3 px-5 rounded-lg transition-all duration-200 ${
                        active
                          ? "bg-primary-orange text-white scale-105"
                          : "text-gray-900 hover:bg-primary-orange-50"
                      }`
                    }
                  >
                    <span
                      className={`block truncate ${
                        selected?.value === option.value ? "font-bold" : "font-medium"
                      }`}
                    >
                      {option.title}
                    </span>
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
