"use client";
import {
  AvisGoogle,
  CustomButton,
  CustomFilter,
  Hero,
  SearchBar,
} from "@/src/components";
import {
  carsModel,
  fuels,
  manifactureLogo,
  sectionHome,
  supportCards,
  yearsOfProduction,
} from "@/src/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home({}) {
  const router = useRouter();
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="w-full flex flex-col justify-center items-center py-15">
        <h2 className="font-semibold text-3xl">
          <span style={{ color: "#ff9f1c" }}>Recherche</span> rapide
        </h2>
        <div className="mt-12 w-full flex justify-evenly pb-20">
          <SearchBar />
        </div>
      </div>
      <section className="w-full py-10" style={styles.section}>
        <div className="w-full pb-10">
          <h2 className="font-semibold text-center text-3xl">
            <span style={{ color: "#ff9f1c" }}>MKB</span> - Un gage de qualité
          </h2>
        </div>
        <div className="max-w-[1440px] mx-auto flex justify-between max-sm:grid grid-cols-1">
          {sectionHome.map((section, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <Image
                src={section.img}
                width={50}
                height={50}
                alt={`${section.title}-logo`}
                className="pb-5"
              />
              <h1 className="text-3xl">{section.title}</h1>
              <p className="text-center text-base">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex  items-center w-full py-10">
        <div className="flex flex-col items-center w-full">
          <div className="pb-5 px-20">
            <h2 className="font-semibold text-3xl">
              <span style={{ color: "#ff9f1c" }}>Recommandé</span> par nos
              clients - 4,8/5
            </h2>
          </div>
          <div>
            <AvisGoogle />
          </div>
          <div>
            <CustomButton
              title="Découvrire tous les avis clients"
              containerStyles="bg-primary-orange text-white rounded-full mt-10 w-[20rem]"
              handleClick={() => {
                router.push("/purchase");
              }}
            />
          </div>
        </div>
      </section>
      <section className="py-10" style={styles.section}>
        <div className="flex gap-4 max-md:grid grid-cols-1 max-sm:p-4 ">
          <div className="w-1/3 flex justify-center max-md:w-full max-sm:flex flex-col  pb-5 px-20">
            <div>
              <div className="font-semibold text-3xl">
                <h2>
                  Ne ratez pas
                  <br />
                  <span style={{ color: "#ff9f1c" }}>une bonne occasion</span>
                </h2>
              </div>
            </div>
            <div>
              <p>
                La meilleure façon d’acheter votre voiture à proximité de chez
                vous et cela partout en France
              </p>
            </div>
            <div>
              <div>
                <div className="flex justify-center w-full">
                  <CustomButton
                    title="Trouver votre voiture"
                    containerStyles="bg-primary-orange text-white rounded-full mt-10"
                    handleClick={() => {
                      router.push("/purchase");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 max-sm:flex flex-col items-center gap-4">
            {carsModel.map((car) => (
              <div className="rounded-t-lg w-fit">
                <Image
                  src={car.path}
                  width={429}
                  height={200}
                  alt={car.title}
                  className="rounded-t-lg"
                />
                <h2 className="mb-2 p-7 bg-white rounded-b-lg">{car.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex w-full py-10">
        <div className="flex justify-around items-center max-sm:flex-col w-full ">
          <div className="flex justify-center w-3/6 pb-5">
            <Image
              src="/MKB-automobile-Trouvez-votre-voiture-600-400.webp"
              width={300}
              height={201}
              alt="service-personnsalise"
              className="rounded-3xl"
            />
          </div>
          <div className="w-3/6">
            <h2 className="font-semibold text-3xl pb-5">
              Bénéficier d'un accompagnement
              <br />
              adapté à vos besoins{" "}
              <span style={{ color: "#ff9f1c" }}>
                via la recherche personnalisée
              </span>
            </h2>

            <div>
              Nos experts vous accompagnent
              <br />
              tout au long de votre processus d'achat.
            </div>

            <div>
              <CustomButton
                title="En savoir plus"
                containerStyles="bg-primary-orange text-white rounded-full mt-10"
                handleClick={() => {
                  router.push("/purchase");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex w-full justify-center py-10"
        style={styles.section}
      >
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1  max-sm:p-4">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center bg-cover bg-center rounded-3xl h-48"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="font-semibold text-center text-3xl ">
                <h2>{card.title}</h2>
              </div>
              <div>
                <p>{card.text}</p>
              </div>
              <div>
                <CustomButton
                  title={card.btnTitle}
                  containerStyles="bg-primary-orange text-white rounded-full mt-5"
                  handleClick={() => {
                    router.push(card.path);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full justify-center py-10">
        <div>
          <div className="flex justify-center items-center">
            <h2 className="font-semibold text-3xl">
              <span style={{ color: "#ff9f1c" }}>Nos marques et modèles</span>
              <br />
              les plus populaires
            </h2>
          </div>
          <div className="flex  flex-col items-center">
            <div className="grid grid-cols-10 gap-4 py-10 max-md:grid-cols-5  max-sm:p-4">
              {manifactureLogo.map((link, index) => (
                <div key={index} className="">
                  <Image
                    src={link.img}
                    width={100}
                    height={100}
                    alt={link.alt}
                  />
                </div>
              ))}
            </div>
            <div>
              <CustomButton
                title="Venez decouvir"
                containerStyles="bg-primary-orange text-white rounded-full mt-10"
                handleClick={() => {
                  router.push("/purchase");
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  section: {
    backgroundColor: "#fff7f0",
    // padding: "2% 0% 2% 0%",
  },
};
