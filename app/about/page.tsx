import Image from "next/image";
import React from "react";

function About() {
  return (
    <main className="pt-36">
      <div>
        <div className="flex flex-col items-center w-full py-5 bg-primary-orange-50">
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
              alt="about"
              width={800}
              height={450}
              className="rounded-3xl max-md:px-3"
            />
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-3 px-10 py-10 max-md:grid-cols-1 ">
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
          <h2 className="text-lg font-bold">Nos valeurs</h2>
          <p>
            Nos valeurs nous permettent d’offrir la meilleure expérience d’achat
            à nos clients :
          </p>
          <ul>
            <li>
              <strong>L’obsession client</strong> – Nous plaçons l’intérêt de
              nos clients au premier plan. Nous voulons être connus et reconnus
              pour offrir la meilleure expérience d’achat à nos clients.
            </li>
            <li>
              <strong>Pilotage par les données</strong> – Les données et
              l’analyse font partie de notre ADN et guident chacune de nos
              décisions. Nous les exploitons au quotidien pour nous améliorer et
              croître.
            </li>
            <li>
              <strong>Rapidité et dynamisme</strong> – Nous avons une mentalité
              d’entrepreneur et savons évoluer rapidement pour atteindre nos
              objectifs.
            </li>
            <li>
              <strong>Esprit d’équipe</strong> – Nous sommes meilleurs en tant
              qu’équipe qu’en tant qu’individus. Chacun compte. Nous sommes ici
              pour relever tous ensemble ce défi excitant.
            </li>
          </ul>
          <h2 className="text-lg font-bold">Nos engagements</h2>
          <ul>
            <li className="text-left">
              Tous nos véhicules sont contrôlés sur plus de 150 points via notre
              service qualité avant mise en vente sur notre site.
            </li>
            <li className="text-left">
              De ce fait vous bénéficier de l’expertise MKB Automobile avec la
              possibilité de mettre en place une extension de garantie.
            </li>
            <li className="text-left">
              Le plus important pour nous et de vous permettre de profiter de
              votre véhicule en ayant l’esprit libre.
            </li>
          </ul>{" "}
        </div>
      </div>
    </main>
  );
}

export default About;
