import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Catalogue from "@/pages/Catalogue";

export default function Home({}) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue searchParams />
    </main>
  );
}
