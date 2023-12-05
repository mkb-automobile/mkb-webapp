"use client";
import FaqAccordion from "@/src/components/FaqAccordion";
import DynamicForm from "@/src/components/dynamicForm/DynamicForm";
import { savePageVisitedToLocalStorage } from "@/src/components/localStorage/SaveToLocalStorage";
import { CustomButton } from "@/src/components/ui";
import CustomLink from "@/src/components/ui/links/CustomLink";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Taking() {
  const router = useRouter();
  const repriseAutoCardTitle = [
    {
      title: "En ligne",
      image: "/MKB-Automobile-Reprise-auto-en-ligne.png",
      alt: "online",
      button: "Estimation en ligne",
    },
    {
      title: "En agence",
      image: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
      alt: "en agence",
      button: "Prennez rendez-vous",
    },
  ];

  const containerFaq = [
    {
      question: "Quelles sont les étapes de ventes ?",
      answer: `<ul>
          <li>Estimez votre voiture</li>
          <li>Prenez un rendez- vous en agence</li>
          <li>Nous faisons l’expertise de votre véhicule</li>
          <li>Votre véhicule est vendu 😄</li>
        </ul>`,
    },
    {
      question: "Comment est calculé le prix de votre véhicule ?",
      answer: `Nos experts déterminent le prix de vente en fonction des critères saisis.

Une étude est faîte en se basant sur la marque, modèle, kilométrage, la date de première mise en circulation, la motorisation et l’état général du véhicule.

Vous recevrez un prix de vente cohérent avec le marché du rachat immédiat par un professionnel.`,
    },
    {
      question: "Comment prendre un rendez-vous de reprise de voiture ?",
      answer: `Après avoir fait une demande d’estimation en ligne, vous recevrez votre prix de vente final par e-mail.

Il faudra valider un rendez-vous sur notre site web pour prendre rendez-vous.

Prise de rendez-vous par :
<ul>
<li>Téléphone : 01 88 83 09 17 </li>
<li>E-mail : contact@mkbautomobile.fr </li>
</ul>`,
    },
    {
      question:
        "Est-ce qu'il y a des coûts supplémentaires lors de la vente de ma voiture ?",
      answer:
        "Non, aucun frais supplémentaire lors de l’estimation de votre voiture.",
    },
  ];

  return (
    <main>
      <section className="bg-primary-orange-50 border shadow-xl">
        <div className="max-w-[1440px] mx-auto pt-36 max-sm:px-4">
          <div className="w-full flex justify-center ">
            <h2 className="flex flex-col items-center">
              Reprise automobile{" "}
              <span style={{ color: "#ff9f1c" }}>
                Une estimation gratuite et sans engagement
              </span>
            </h2>
          </div>
          <div className=" flex justify-evenly py-10 max-md:flex-col gap-5">
            {repriseAutoCardTitle.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-center items-center gap-10 bg-primary-orange rounded-3xl p-10 border shadow-xl max-md:p-5 "
              >
                <div>
                  <h3>{card.title}</h3>
                </div>
                <div>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <div className="bg-primary-ornage-50 rounded-xl">
                  <CustomLink title={card.button} href="#reprise-form" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-10 flex">
        <div className=" flex max-w-[1440px] mx-auto pt-36 max-md:px-4 max-md:flex-col">
          <div className="w-2/3 max-md:w-full px-5">
            <div>
              <h2>Estimez votre voiture en ligne (environ 2 minutes)</h2>
            </div>
            <div className="bg-primary-orange-50 rounded-xl p-10">
              <DynamicForm />
            </div>
            <div>
              <div>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données, n° 2016/679 du 27 avril 2016 et à la loi «
                  Informatique &amp; Libertés » n° 78-17 du 6 janvier 1978
                  modifiée, vous disposez d’un droit d’accès, de rectification
                  et d’opposition sur les données nominatives vous concernant.
                  Vous pouvez consulter{" "}
                  <a href="/politique-de-confidentialite" target="_blank">
                    notre politique de données personnelles.
                  </a>
                </p>
                <p>
                  Conformément à la loi n°78-17 du 6 janvier 1978, relative à
                  l’informatique, aux fichiers et à la liberté, modifiée, vous
                  disposez d’un droit d’accès et de rectification des
                  informations vous concernant ainsi que d’un droit d’opposition
                  au traitement desdites informations. Vous pouvez donc exercer
                  ces droits en vous adressant au Service Client MKB Automobile
                  Tél. : <a href="tel:0033188830917">01 88 83 09 17</a>. Vous
                  pouvez également, pour des motifs légitimes, vous opposer, à
                  cette même adresse, au traitement des données vous concernant.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 max-md:w-full">
            <div className="flex flex-col gap-10 pt-5">
              <h3>
                Parce que la relation client commence par la confiance. Les
                engagements MKB Automobile :
              </h3>
              <ul>
                <li>Estimons au meilleur prix de reprise</li>
                <li>Sans contre partie</li>
                <li>Virement sous 24h</li>
              </ul>
              <div>
                <Image
                  src="/MKB-Automobile-Reprise-auto-en-ligne_Deal.jpeg"
                  alt="deal"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <h3>Quand vendre sa voiture devient plus facile !</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-orange-50 py-10">
        <div className="max-w-[1440px] w-full flex flex-col gap-10 mx-auto max-sm:px-4">
          <div>
            <h2 className="flex flex-col justify-center items-center">
              <span style={{ color: "#ff9f1c" }}>FAQ Reprise véhicule</span>{" "}
              Questions fréquentes
            </h2>
          </div>
          <div>
            <FaqAccordion data={containerFaq} />
          </div>
          <div className="w-full flex justify-center">
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
    </main>
  );
}

export default Taking;
