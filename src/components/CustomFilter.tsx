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

  return (
    <div className="w-fit z-0">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected?.title || title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options &&
                options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active
                          ? "bg-primary-orange text-white"
                          : "text-gray-900"
                      }`
                    }
                  >
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
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
