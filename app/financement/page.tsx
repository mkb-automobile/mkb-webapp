import { Main } from "@/src/components/layouts";
import CustomLink from "@/src/components/ui/links/CustomLink";
import Image from "next/image";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { LuPenSquare } from "react-icons/lu";
import { SlLike } from "react-icons/sl";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { PiCardholderLight } from "react-icons/pi";
import { CreditWidget } from "@/src/components";

const Financing = () => {
  const optionsPaiement = [
    {
      type: "3 ou 4 fois",
      description: "Augmentez votre budget pour l’achat de votre voiture",
      accompagnement: "Nous vous accompagnons à valeur de 4500€",
      interet: "Avec ou sans intérêt",
    },
    {
      type: "10 fois",
      description:
        "Bénéficiez de 3000€ supplémentaires sur votre budget, lissé sur 10 mois",
      interet: "Avec ou sans intérêt",
      acceptation: "L’acceptation de votre dossier se fait instantanément",
    },
  ];

  const eligibilite = [
    "Avoir une carte bancaire (Visa, MasterCard, … Hors carte de retrait type électron)",
    "Avoir la majorité",
    "Ne pas être fiché en banque de France",
    "Avoir une carte bancaire valable jusqu’à la date du dernier paiement",
    "Avoir un compte bancaire avec plus de 3 mois d’ancienneté",
    "Pour les étrangers, avoir un titre de séjour valable jusqu’à la fin du paiement",
  ];

  return (
    <Main>
      <section className="w-full pb-20 ">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="pb-5">
            <span style={{ color: "#ff9f1c" }}>Financez votre véhicule</span> en
            ligne
          </h2>
          <p className="flex px-5">
            <strong>
              Vous cherchez un financement pour votre nouveau véhicule ?
            </strong>
          </p>
        </div>
      </section>

      <section className="w-full py-10 ">
        <div className="flex max-md:flex-col">
          <div className="w-1/2  p-10 flex flex-col justify-center items-center rounded-l-lg bg-orange-50 border shadow-xl max-md:w-full">
            <div className="pb-5">
              <h3 className="flex items-center justify-center">
                Paiement en plusieurs fois
              </h3>
            </div>
            <div className="">
              <ul className="flex flex-col ">
                <li className="flex gap-2 items-center">
                  <span className="text-2xl">{<CiCreditCard1 />}</span>
                  <p>Financez votre voiture</p>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-2xl">{<LuPenSquare />}</span>
                  <p>Simple et rapide</p>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-2xl">{<SlLike />}</span>
                  <p>Réponse instantanée</p>
                </li>
              </ul>

              <p className="p-2">
                Simplifions et sécurisons votre paiement par carte bancaire
              </p>
            </div>
            <div className="py-10">
              <CustomLink
                title="Nous contacter"
                href="/contact"
                containerStyles=" bg-black text-white px-4 py-2 rounded-full"
              />
            </div>
          </div>
          <div className="w-1/2 p-10 flex flex-col justify-center items-center rounded-r-lg bg-black text-white border shadow-xl max-md:w-full">
            <div className="pb-5">
              <h3 className="">Crédit financement</h3>
            </div>
            <div>
              <ul>
                <li className="flex gap-2 items-center">
                  <p className="text-2xl">{<MdOutlineTimer />}</p>
                  <p>Un financement 100% en ligne</p>
                </li>
                <li className="flex gap-2 items-center">
                  <p className="text-2xl">
                    <FaRegHandshake />
                  </p>
                  <p>Proposition dans 5 banques pour maximiser vos chances</p>
                </li>
                <li className="flex gap-2 items-center">
                  <p className="text-2xl">
                    <PiCardholderLight />
                  </p>
                  <p className="">
                    Personnalisez vos mensualités <br /> Remboursement jusqu'à
                    72 mois
                  </p>
                </li>
              </ul>
            </div>
            <div className="py-10">
              <CustomLink
                title="Simulez"
                href="#financement"
                containerStyles="bg-primary-orange text-black px-4 py-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="w-full flex flex-col justify-center items-center border-b-black">
          <div>
            <h2 className="w-full justify-center items-center pb-5">
              <span style={{ color: "#ff9f1c" }}>Paiement</span> par carte
              bancaire*
            </h2>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              <strong>
                <span>LE MOYEN LE PLUS SIMPLE DE PAYER VOTRE VOITURE</span>
              </strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>
                Pourquoi nos clients aiment le paiement en plusieurs fois par
                carte bancaire ?
              </strong>
            </p>{" "}
          </div>
        </div>

        <div className="w-full flex py-5">
          <div className="w-1/2 px-5">
            <h2 className="pb-2">Options de paiement</h2>
            <ul>
              {optionsPaiement.map((option, index) => (
                <li key={index}>
                  <p>Type: {option.type}</p>
                  <p>{option.description}</p>
                  <p>{option.accompagnement}</p>
                  <p>{option.interet}</p>
                  {option.acceptation && (
                    <p>Acceptation: {option.acceptation}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 px-5">
            <h2 className="pb-2">Critères d'éligibilité</h2>
            <ul>
              {eligibilite.map((critere, index) => (
                <li key={index}>{critere}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-primary-orange-50 rounded-xl border shadow-xl px-5">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <h2 className="">
              Crédit<span style={{ color: "#ff9f1c" }}> financement</span>
            </h2>
          </div>

          <div className="w-full flex max-md:flex-col py-5 ">
            <div className="w-1/2 p-20  relative max-md:w-full">
              <div className="pb-5 sticky top-48">
                <div className="pb-5">
                  <p>
                    <strong>
                      La solution la plus adaptée à vos besoin.{" "}
                      <span style={{ color: "#ff9f1c" }}>
                        Avec ou sans apport
                      </span>
                    </strong>
                  </p>
                  <p>
                    Nous vous proposons la solution financement avec des
                    mensualités adaptées à votre budget, sur des durées variées,
                    avec ou sans apport personnel, avec ou sans garantie.
                  </p>
                  <p>
                    Votre conseiller commercial s’occupera de tout, de la vente
                    jusqu’à l’acceptation de votre dossier de crédit.
                  </p>
                  <p>
                    N’hésitez pas à nous contacter pour étudier ensemble votre
                    projet automobile.
                  </p>
                </div>
                <CustomLink
                  title="Nous Appeler"
                  href="tel:+33644699999"
                  containerStyles="bg-secondary-red text-white px-4 py-2 rounded-full border shadow-xl"
                />
              </div>
            </div>
            <div className="w-1/2 max-md:w-full">
              <CreditWidget />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Financing;
