"use client";
import { Hero } from "@/src/components";
import { CustomButton, SearchBar } from "@/src/components/ui";
import {
  carsModel,
  manifactureLogo,
  sectionHome,
  supportCards,
} from "@/src/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home({}) {
  const router = useRouter();
  console.info(
    "Avertissement : En utilisant cette console, vous vous exposez au risque que des personnes malveillantes se fassent passer pour vous et volent vos informations grâce à une attaque appelée Self-XSS. Ne saisissez pas et ne copiez pas du code que vous ne comprenez pas.",
  );
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div>
          <div className="w-full flex flex-col justify-center items-center py-15">
            <h2>
              <span style={{ color: "#ff9f1c" }}>Recherche</span> rapide
            </h2>
            <div className="mt-12 w-full flex justify-evenly pb-20">
              <SearchBar />
            </div>
          </div>
          <section className="w-full py-10 border shadow-xl bg-primary-orange-50">
            <div className="max-w-[1440px] mx-auto">
              <div className="w-full pb-10 flex justify-center">
                <h2>
                  <span style={{ color: "#ff9f1c" }}>MKB</span> - Un gage de
                  qualité
                </h2>
              </div>
              <div className="flex justify-between max-sm:grid grid-cols-1">
                {sectionHome.map((section, index) => (
                  <div key={index} className="flex flex-col items-center p-10">
                    <Image
                      src={section.img}
                      width={50}
                      height={50}
                      alt={`${section.title}-logo`}
                      className="pb-5"
                    />
                    <h3 className="pb-5">{section.title}</h3>
                    <p className="text-center text-sm mx-auto leading-7">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex  items-center w-full py-10">
            <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
              <div className="pb-5 px-20">
                <h2>
                  <span style={{ color: "#ff9f1c" }}>Recommandé</span> par nos
                  clients - 4,8/5
                </h2>
              </div>
              <div>Ici les avis</div>
              <div>
                <CustomButton
                  title="Découvrire tous les avis clients"
                  containerStyles="bg-secondary-red text-white rounded-full mt-10 w-[20rem] shadow-xl"
                  handleClick={() => {
                    router.push("/voitures-occasions");
                  }}
                />
              </div>
            </div>
          </section>
          <section className="py-10 border shadow-xl bg-primary-orange-50">
            <div className="max-w-[1440px] mx-auto flex gap-4 max-md:grid grid-cols-1 max-sm:p-4 ">
              <div className="w-1/3 flex justify-center max-md:w-full max-sm:flex flex-col  pb-5 px-20">
                <div>
                  <div>
                    <h2>
                      Ne ratez pas
                      <br />
                      <span style={{ color: "#ff9f1c" }}>
                        une bonne occasion
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                  <p>
                    La meilleure façon d’acheter votre voiture à proximité de
                    chez vous et cela partout en France
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex justify-center w-full">
                      <CustomButton
                        title="Trouver votre voiture"
                        containerStyles="bg-secondary-red text-white rounded-full mt-10 shadow-xl"
                        handleClick={() => {
                          router.push("/voitures-occasions");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 max-sm:flex flex-col items-center gap-4">
                {carsModel.map((car, index) => (
                  <div key={index} className="rounded-t-lg w-fit">
                    <Image
                      src={car.path}
                      width={350}
                      height={200}
                      alt={car.title}
                      className="rounded-t-lg w-full h-auto object-cover"
                    />
                    <h4 className="mb-2 p-7 bg-white rounded-b-lg">
                      {car.title}
                    </h4>
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
                  className="rounded-3xl border shadow-xl"
                />
              </div>
              <div className="w-3/6">
                <h2 className="pb-5">
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
                    containerStyles="bg-secondary-red text-white rounded-full mt-10 shadow-xl"
                    handleClick={() => {
                      router.push("/voitures-occasions");
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex w-full justify-center p-10 rounded-xl border shadow-xl bg-primary-orange-50">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1  max-sm:p-4">
              {supportCards.map((card, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-center items-center bg-cover bg-center rounded-3xl h-48 px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.55)), url(${card.backgroundImage})`,
                  }}
                >
                  <div>
                    <h2>{card.title}</h2>
                  </div>
                  <div className="text-center">
                    <p>{card.text}</p>
                  </div>
                  <div>
                    <CustomButton
                      title={card.btnTitle}
                      containerStyles="bg-secondary-red text-white rounded-full mt-5 shadow-xl"
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
                <h2>
                  <span style={{ color: "#ff9f1c" }}>
                    Nos marques et modèles
                  </span>
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
                        className="p-2 rounded-xl border shadow-xl"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <CustomButton
                    title="Venez découvir"
                    containerStyles="bg-secondary-red text-white rounded-full mt-10 shadow-xl"
                    handleClick={() => {
                      router.push("/voitures-occasions");
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
