"use client";
import { CustomButton, Hero } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const sectionHome = [
  {
    img: "/simplicite.svg",
    title: "Simplicité",
    text: "Nous vous aidons à trouver la voiture de vos rêves parmi un large choix de véhicules en France et en Europe. Du financement à l’immatriculation, achetez en toute simplicité.",
  },
  {
    img: "/fiabilite.svg",
    title: "Fiabilité",
    text: "La meilleure façon d’acheter votre voiture à proximité de chez vous et cela partout en France.",
  },
  {
    img: "/securite.svg",
    title: "Sécurité",
    text: "Nos équipes vérifient l’état de votre nouvelle voiture, la révisent et la préparent. Vous bénéficiez de l’expertise MKB Automobile et d’une garantie extensible pour votre véhicule.",
  },
];

export default function Home({}) {
  const router = useRouter();
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="w-full py-10">
        <h2 className="font-semibold text-center text-3xl">
          <span style={{ color: "#ff9f1c" }}>MKB</span> - Un gage de qualité
        </h2>
      </div>
      <section className="flex" style={{ backgroundColor: "#fff7f0" }}>
        <div className="max-w-[1440px] mx-auto flex justify-between">
          {sectionHome.map((section) => (
            <div className="flex flex-col items-center p-4">
              <Image
                src={section.img}
                width={50}
                height={50}
                alt={`${section.title}-logo`}
                className="pb-5"
              />
              <h1 className="text-3xl">{section.title}</h1>
              <p className="p-8 text-center text-base">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex  flex-col items-center w-full ">
        <div>
          <h1>Recommandation de nos clients</h1>
        </div>
        <div>Intégration de l'api </div>
        <div>
          <CustomButton
            title="Découvrire tous les avis clients"
            containerStyles="bg-primary-orange text-white rounded-full mt-10 w-[20rem]"
            handleClick={() => {
              router.push("/catalog");
            }}
          />
        </div>
      </section>
      <section className="flex" style={{ backgroundColor: "#fff7f0" }}>
        <div className="flex items-center">
          <div>
            <h2>Ne ratez pas une bonne occasion</h2>
          </div>
          <div>
            <div>
              <Image src="" alt="" />
              <h2>Citadine</h2>
            </div>
            <div>
              <Image src="" alt="" />
              <h2>Berline</h2>
            </div>
          </div>
          <div>
            <div>
              <Image src="" alt="" />
              <h2>SUV / 4x4</h2>
            </div>
            <div>
              <Image src="" alt="" />
              <h2>Utilitaire</h2>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div>
          <h1>Beneficier d'un accompagnement adaté à vos besoin</h1>
        </div>
        <div>Img</div>
      </div>
      <div>card information</div>
    </main>
  );
}
