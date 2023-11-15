import { Main } from "@/src/components/layouts";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <Main>
      <div>
        <div className="flex flex-col items-center w-full py-5 bg-primary-orange-50 rounded-2xl border shadow-2xl">
          <div className="text-center">
            <h2 className="font-semibold text-3xl py-5">
              <span style={{ color: "#ff9f1c" }}>MKB Automobile - </span> La
              garantie d’un
              <br />
              service irréprochable
            </h2>
          </div>
          <div className="rounded-lg">
            <Image
              src="/MKB-Automobile-A-propos.jpg"
              alt="a-propos"
              width={800}
              height={450}
              className="rounded-3xl max-md:px-3"
            />
          </div>
        </div>
        <div className="px-10 py-20 max-md:grid-cols-1 ">
          <p className="flex text-left">
            Fondée en 2018, MKB automobile est né de la volonté de simplifier
            d’accompagner et de sécuriser l’achat d’un véhicule d’occasion.
          </p>
          <p className="text-left">
            En offrant une solution pratique et sur-mesure, nous permettons à
            nos clients l’achat de manière plus fiable via notre plateforme et
            notre réseau.
          </p>
          <p className="text-left">
            Chez « MKB Automobile » nous souhaitons apporter le plus de solution
            possible pour réaliser vos envies.
          </p>
          <p className="text-left">
            MKB Automobile facilite la recherche et sécurise l’achat de
            véhicules d’occasion en France et Europe.
          </p>
          <h2 className="text-lg font-bold pt-5">Nos valeurs</h2>
          <p>
            Nos valeurs nous permettent d’offrir la meilleure expérience d’achat
            à nos clients :
          </p>
          <ul>
            <li>
              <p>
                <strong>L’obsession client</strong> – Nous plaçons l’intérêt de
                nos clients au premier plan. Nous voulons être connus et
                reconnus pour offrir la meilleure expérience d’achat à nos
                clients.
              </p>
            </li>
            <li>
              <p>
                <strong>Pilotage par les données</strong> – Les données et
                l’analyse font partie de notre ADN et guident chacune de nos
                décisions. Nous les exploitons au quotidien pour nous améliorer
                et croître.
              </p>
            </li>
            <li>
              <p>
                <strong>Rapidité et dynamisme</strong> – Nous avons une
                mentalité d’entrepreneur et savons évoluer rapidement pour
                atteindre nos objectifs.
              </p>
            </li>
            <li>
              <p>
                <strong>Esprit d’équipe</strong> – Nous sommes meilleurs en tant
                qu’équipe qu’en tant qu’individus. Chacun compte. Nous sommes
                ici pour relever tous ensemble ce défi excitant.
              </p>
            </li>
          </ul>
          <h2 className="text-lg font-bold pt-5">Nos engagements</h2>
          <ul>
            <li className="text-left">
              <p>
                Tous nos véhicules sont contrôlés sur plus de 150 points via
                notre service qualité avant mise en vente sur notre site.
              </p>
            </li>
            <li className="text-left">
              <p>
                De ce fait vous bénéficier de l’expertise MKB Automobile avec la
                possibilité de mettre en place une extension de garantie.
              </p>
            </li>
            <li className="text-left">
              <p>
                Le plus important pour nous et de vous permettre de profiter de
                votre véhicule en ayant l’esprit libre.
              </p>
            </li>
          </ul>{" "}
        </div>
      </div>
    </Main>
  );
}

export default About;
