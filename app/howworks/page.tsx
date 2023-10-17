import { CustomButton } from "@/src/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <main className="flex flex-col pt-36 w-full">
      <div className="flex flex-col justify-center w-full bg-primary-orange-100">
        <div>
          <h1 className="text-center font-semibold text-3xl py-10">
            Comment acheter une voiture{" "}
            <span style={{ color: "#ff9f1c" }}>
              {" "}
              avec
              <br /> MKB Automobile ?
            </span>{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full max-md:flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-2/4 pl-5 max-md:w-full p-5">
              <h2 className="pb-10 font-semibold text-xl">
                1. Trouvez votre véhicule au meilleur prix
              </h2>
              <p>
                Trouvez la voiture de vos rêves parmi{" "}
                <strong>une grande sélection en France et Europe</strong> et
                bénéficier de l’expertise de MKB Automobile.
              </p>
              <p>
                <strong>
                  Nous contrôlons pour vous plus de 200 points sur chaque
                  voitures.
                </strong>
              </p>
              <p>
                Vous avez trouvé votre véhicule et vous souhaitez faire une
                séance d’essais ? Simple, prenez rendez-vous par téléphone ou
                par email.
              </p>{" "}
            </div>
            <div>
              <Image
                src={"/MKB-Automobile-service-personnsalise.webp"}
                alt="MKB-Automobile-service-personnsalise"
                width={762}
                height={500}
              />
            </div>
          </div>
          <div className="flex  flex-row-reverse w-full max-md:flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-2/4 pl-5 max-md:w-full p-5">
              <h2 className="pb-10 font-semibold text-xl">
                2. Payez en plusieurs fois, si vous le souhaitez
              </h2>
              <p>
                <strong>
                  Trouvons ensemble la meilleure façon de vous accompagner.
                </strong>
              </p>
              <p>Financez ou payez en plusieurs fois votre achat automobile.</p>
              <p>Adaptez votre paiement à vos besoins.</p>
            </div>
            <div>
              <Image
                src={"/MKB-Automobile-paiement-plusieurs-fois.jpg"}
                alt="MKB-Automobile-service-personnsalise"
                width={762}
                height={500}
              />
            </div>
          </div>
          <div className="flex w-full max-md:flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-2/4 pl-5 max-md:w-full p-5">
              <h2 className="pb-10 font-semibold text-xl">
                3. Remise des clés
              </h2>
              <p>
                Après avoir essayé et validé votre véhicule et une de nos
                solutions de paiement (financement et paiement jusqu’à 10 fois,
                chèque de banque, virement) le véhicule vous appartient !
              </p>
              <p>
                <strong>
                  Si vous le souhaitez nous nous chargerons de vos démarches
                  d’immatriculation.
                </strong>
              </p>
            </div>
            <div>
              <Image
                src={"/MKB-Automobile-pratique.webp"}
                alt="MKB-Automobile-service-personnsalise"
                width={762}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <h3 className="pb-10 font-semibold text-xl">
          Un modèle vous intéresse ? Contactez-nous
        </h3>
        <p>
          Nos experts vous accompagnent pour votre projet d’achat automobile.
          Nous sommes à votre écoute !
        </p>
      </div>
      <div className="flex-col justify-center">
        <div className="flex justify-center">
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
          <Link href="tel:+33 1 88 83 09 17" className="pl-4 text-xl">
            {" "}
            +33 1 88 83 09 17{" "}
          </Link>
        </div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>

          <Link
            href={"mailto:contact@mkbautomobile.fr"}
            className="pl-4 text-xl"
          >
            contact@mkbautomobile.fr
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Works;
