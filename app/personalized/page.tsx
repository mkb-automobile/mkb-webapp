import Image from "next/image";
import React from "react";
import "./personalized.css";
import SmsIcon from "@mui/icons-material/Sms";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DrawIcon from "@mui/icons-material/Draw";
import KeyIcon from "@mui/icons-material/Key";
import CheckIcon from "@mui/icons-material/Check";

function Personalized() {
  const stepProject = [
    {
      id: 1,
      title: "Découverte de votre projet d'achat automobile",
      icon: SmsIcon,
    },
    {
      id: 2,
      title: "Signature du mandat de recherche",
      icon: DrawIcon,
    },
    {
      id: 3,
      title:
        "Proposition de 3 véhicules dans vos critères de recherche sous 14 jours",
      icon: FormatListBulletedIcon,
    },
    {
      id: 4,
      title: "Validation du véhicule",
      icon: CheckIcon,
    },
    {
      id: 5,
      title: "Livraison du véhicule et remise des clés",
      icon: KeyIcon,
    },
  ];

  const stepEngagement = [
    {
      title: `ÊTRE accompagné par un expert du Marché de l'automobile`,
      icon: "/accompagne.svg",
    },
    {
      title:
        "BÉNÉFICIEZ d'un gain de temps car nous recherchons un véhicule dans vos critères",
      icon: "/benefice.svg",
    },
    {
      title:
        "SÉCURISEZ l'achat de votre véhicule. Nos équipes vérifient l'état de votre nouvelle voiture, la révise et la prépare avant la livraison",
      icon: "/secu.svg",
    },
  ];

  return (
    <main className="pt-36">
      <section>
        <div>
          <h1 className="elementor-heading-title elementor-size-default">
            <span style={{ color: "#ff9f1c" }}>
              Bénéficiez d'un accompagnement
            </span>
            <br />
            adapté à vos besoins
          </h1>
          <p style={{ textAlign: "left" }}>
            <strong>
              MKB Automobile est le partenaire idéal pour trouver la voiture qui
              correspond à vos envies
            </strong>
            , vous avez le choix parmi une sélection de véhicules. Grâce aux
            services de MKB Automobile, vous pouvez acheter sereinement une
            voiture d’occasion, au juste prix. De plus, toutes nos voitures sont
            contrôlées et vérifiées par nos équipes en inte
            <br />
            e.{" "}
            <span>
              Vous êtes ainsi assuré d’acheter une voiture totalement
              fonctionnelle.{" "}
            </span>
            <strong>
              Nos experts vous accompagnent tout au long de votre processus
              d’achat.
            </strong>
          </p>
        </div>
        <div>
          <Image
            src={"/MKB-Automobile-Recherche-personnalisee.png"}
            width={500}
            height={600}
            alt="personalized"
            className="rounded-xl"
          />
        </div>
      </section>

      <section>
        <div>
          <h2>
            <span style={{ color: "#ff9f1c" }}>Votre projet</span> en 5 étapes
          </h2>
          <p style={{ textAlign: "center" }}>
            <span>
              Nous vous aidons à trouver la voiture de vos rêves
              <br />
              parmi un large choix de véhicules en France et en Europe
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 w-full gap-5">
          {stepProject.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-5">
              <div className="flex place-items-center justify-center  bg-primary-orange text-white rounded-full h-10 w-10">
                {step.icon && <step.icon />}
              </div>
              <div className="arrow flex flex-col items-center rounded-lg">
                <p>
                  <span>{step.id}</span>
                </p>
                <h3>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full justify-center py-10">
        <div className="">
          <h2>
            <span style={{ color: "#ff9f1c" }}>Nos 3 engagements</span> pour
            vous accompagner
          </h2>
          <div>
            {stepEngagement.map((step, index) => (
              <div key={index} className="flex gap-6">
                <Image
                  src={step.icon}
                  width={50}
                  height={60}
                  alt={step.title}
                  className="rounded-full  bg-slate-300"
                />
                <p>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <form
          action="
        "
        ></form>
      </section>
    </main>
  );
}

export default Personalized;
