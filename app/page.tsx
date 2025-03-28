"use client";
import { Hero } from "@/src/components";
import FaqAccordion from "@/src/components/FaqAccordion";
import { savePageVisitedToLocalStorage } from "@/src/components/localStorage/SaveToLocalStorage";
import SocialNetwork from "@/src/components/socialNetwork/SocialNetwork";
import { CustomButton } from "@/src/components/ui";
import CustomLink from "@/src/components/ui/links/CustomLink";
import {
  carsModel,
  manifactureLogo,
  sectionHome,
  supportCards,
} from "@/src/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../src/styles/trustmary.css";

const faqData = [
  {
    question: "Comment se passe l’achat d’un véhicule sur MKB Automobile",
    answer:
      "Accédez à la fiche détaillée pour chacun des véhicules proposés. Vous pouvez nous contacter par e-mail ou téléphone pour plus de renseignements. Le véhicule de vos rêves n’est pas encore disponible ? Inscrivez-vous à notre newsletter et restez informés des prochains véhicules correspondant à vos critères de recherche.",
  },
  {
    question: "La réservation d’un véhicule sélectionné",
    answer:
      " Vous avez trouvé votre véhicule et vous souhaitez le voir et l’essayer ? Vous devez simplement réserver sur notre site, le véhicule sera ainsi bloqué et ne pourra plus être vendu à d’autres clients. L’un de nos conseillers prend ensuite contact avec vous et convient d’un rendez-vous en fonction des disponibilités du vendeur. La livraison est également possible sur demande.",
  },
  {
    question: "La remise des clés",
    answer:
      "La visite du véhicule se fait avec l’un de nos agents. Vous vous présentez au rendez-vous fixé en ayant effectué votre virement sur un compte séquestre, bloqué et sécurisé ou un chèque de banque. Après l’essai du véhicule vous ne souhaitez pas concrétiser la transaction, nous vous remboursons immédiatement. Le véhicule vous plait ? Notre agent vous accompagne dans les démarches et vous repartez avec.",
  },
  {
    question: "Comment savoir si une voiture a des imperfections ?",
    answer:
      "Nous vous montrons de manière transparente les éventuelles imperfections dans notre galerie de photos. Nous suivons un processus très méticuleux pour identifier les imperfections et l’usure. Ces marques d’usure sont dues à une utilisation et un kilométrage normaux et n’apparaissent pas dans la galerie de photos. Vous pouvez en savoir plus sur nos normes de qualité en cliquant ici.",
  },
  {
    question: "Comment puis-je voir la voiture avant de la commander ?",
    answer:
      "Nous vous invitons à prendre rendez-vous par téléphone ou mail afin de confirmer un rendez-vous pour la tester.",
  },
  {
    question: "Comment prendre un rendez-vous de reprise de voiture ?",
    answer:
      "Après avoir fait une demande d’estimation en ligne, vous recevrez votre prix de vente final par e-mail. Il faudra valider un rendez-vous sur notre site web pour prendre rendez-vous. Prise de rendez-vous par : Téléphone : 01 88 83 09 17 E-mail : contact@mkbautomobile.fr",
  },
];

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
          {/* <div className="w-full flex flex-col justify-center items-center py-15">
            <h2>
              <span style={{ color: "#ff9f1c" }}>Recherche</span> rapide
            </h2>
            <div className="mt-12 w-full flex justify-evenly pb-20">
              <SearchBar />
            </div>
          </div> */}
          <section className="w-full py-20 border shadow-xl bg-primary-orange-50">
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
          <section className="flex  items-center w-full py-20">
            <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
              <div className="pb-5 px-20">
                <h2>
                  <span style={{ color: "#ff9f1c" }}>Recommandé</span> par nos
                  clients
                </h2>
              </div>
              <div id="trustmary-widget" />
              <div>
                <CustomButton
                  title="Découvrire tous les avis clients"
                  containerStyles="bg-secondary-red text-white rounded-full mt-10 w-[20rem] shadow-xl"
                  handleClick={() => {
                    savePageVisitedToLocalStorage("avis-clients");
                    router.push("/avis-clients");
                  }}
                />
              </div>
            </div>
          </section>
          <section className="py-20 border shadow-xl bg-primary-orange-50">
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
                          savePageVisitedToLocalStorage("voitures-occasions");
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
          <section className="flex w-full py-20">
            <div className="flex justify-around items-center gap-2 max-sm:flex-col w-full max-w-[1440px] mx-auto max-sm:p-4">
              <div className="flex justify-center pb-5">
                <Image
                  src="/MKB-automobile-Trouvez-votre-voiture-600-400.webp"
                  width={450}
                  height={201}
                  alt="service-personnsalise"
                  className="rounded-3xl border shadow-xl"
                />
              </div>
              <div className="">
                <h2 className="pb-5">
                  Bénéficier d'un accompagnement
                  <br />
                  adapté à vos besoins <br />
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
                      savePageVisitedToLocalStorage("recherche-personnalisee");
                      router.push("/recherche-personnalisee");
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex w-full justify-center py-20 border shadow-xl bg-primary-orange-50">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1  max-sm:p-4">
              {supportCards.map((card, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-center items-center bg-cover bg-center rounded-3xl h-48 px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.95)), url(${card.backgroundImage})`,
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
                        const keyStorage = card.path.split("/")[1];
                        savePageVisitedToLocalStorage(keyStorage);
                        router.push(card.path);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="flex w-full justify-center py-20">
            <div className="max-w-[1440px] mx-auto">
              <div className="w-ful flex justify-center items-center">
                <h2 className="flex flex-col items-center">
                  <span style={{ color: "#ff9f1c" }}>
                    Nos marques et modèles
                  </span>
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
                      savePageVisitedToLocalStorage("voitures-occasions");
                      router.push("/voitures-occasions");
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex justify-center py-20 bg-primary-orange-50 border shadow-xl">
            <div className="max-w-[1440px] mx-auto max-sm:p-4">
              <div className="flex flex-col items-center gap-5">
                <h2>
                  Un modèle vous intéresse ?{" "}
                  <span style={{ color: "#ff9f1c" }}> Contactez-nous </span>
                </h2>
                <p>
                  Nos experts vous accompagnent pour votre projet d'achat
                  automobile.
                </p>
                <p>Nous sommes à votre écoute!</p>
              </div>
              <div className="py-5 border-b-2 border-b-black">
                <div className="flex justify-center bg-secondary-red text-white p-5 rounded-full gap-2 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <CustomLink
                    title="Parler a notre équipe"
                    href={"tel:+33188830917"}
                  />
                </div>
              </div>
              <SocialNetwork />
            </div>
          </section>
          <section className="flex w-full py-20">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full px-10 items-center max-sm:p-4">
              <div className="py-10">
                <h2 className="flex flex-col items-center justify-center">
                  Vous avez des questions ? <br />
                  <span style={{ color: "#ff9f1c" }}>
                    On essaye d'y répondre
                  </span>
                </h2>
              </div>
              <div className="w-full">
                <FaqAccordion data={faqData} />
              </div>
              <div>
                <CustomButton
                  title="Accéder à la FAQ"
                  containerStyles="bg-secondary-red text-white rounded-full mt-10 shadow-xl"
                  handleClick={() => {
                    savePageVisitedToLocalStorage("faq");
                    router.push("/faq");
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
