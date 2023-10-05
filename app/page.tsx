import { Hero } from "@/components";
import Image from "next/image";
import Catalog from "./catalog/page";

export default function Home({}) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="w-full py-10">
        <h2 className="font-semibold text-center text-3xl">
          <span style={{ color: "#ff9f1c" }}>MKB</span> - Un gage de qualité
        </h2>
      </div>
      <div className="flex  flex-between bg-primary-orange-100">
        <div className="flex flex-col items-center p-4">
          <Image
            src={"/simplicite.svg"}
            width={50}
            height={50}
            alt="..."
            className="pb-4"
          />
          <h1 className="text-3xl">Simplicité</h1>
          <p className="p-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            architecto.
          </p>
        </div>
        <div>
          <Image src={"/simplicite.svg"} width={50} height={50} alt="..." />
          <h2>Titre</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            architecto.
          </p>
        </div>
        <div>
          <Image src={"/simplicite.svg"} width={50} height={50} alt="..." />
          <h2>Titre</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            architecto.
          </p>
        </div>
      </div>
    </main>
  );
}
