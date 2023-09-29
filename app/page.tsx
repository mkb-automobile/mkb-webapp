import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Catalogue from "@/pages/Catalogue";

let kilometer = [];
for (let kilometrage = 0; kilometrage <= 300000; kilometrage += 10000) {
  console.log(kilometrage);
  kilometer.push(kilometrage);
}
console.log(kilometer);

export default function Home({}) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue searchParams />
    </main>
  );
}
