import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import React from "react";

function About() {
  const valeurs = [
    {
      title: "L'obsession client",
      description: "Nous plaçons l'intérêt de nos clients au premier plan. Nous voulons être connus et reconnus pour offrir la meilleure expérience d'achat à nos clients.",
    },
    {
      title: "Pilotage par les données",
      description: "Les données et l'analyse font partie de notre ADN et guident chacune de nos décisions. Nous les exploitons au quotidien pour nous améliorer et croître.",
    },
    {
      title: "Rapidité et dynamisme",
      description: "Nous avons une mentalité d'entrepreneur et savons évoluer rapidement pour atteindre nos objectifs.",
    },
    {
      title: "Esprit d'équipe",
      description: "Nous sommes meilleurs en tant qu'équipe qu'en tant qu'individus. Chacun compte. Nous sommes ici pour relever tous ensemble ce défi excitant.",
    },
  ];

  const engagements = [
    "Tous nos véhicules sont contrôlés sur plus de 150 points via notre service qualité avant mise en vente sur notre site.",
    "De ce fait vous bénéficiez de l'expertise MKB Automobile avec la possibilité de mettre en place une extension de garantie.",
    "Le plus important pour nous est de vous permettre de profiter de votre véhicule en ayant l'esprit libre.",
  ];

  return (
    <Main>
      <div className="space-y-12 animate-fade-in">
        <Card className="overflow-hidden border-0 shadow-large bg-gradient-to-br from-primary-orange-50 to-white">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-h1 max-sm:text-2xl">
              <span className="text-primary-orange">MKB Automobile</span> - La garantie d'un service irréprochable
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center px-6 pb-8">
            <div className="rounded-3xl overflow-hidden shadow-medium max-w-4xl">
              <Image
                src="/MKB-Automobile-A-propos.jpg"
                alt="a-propos"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8 px-6 max-md:px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-h2">Notre histoire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-lg leading-relaxed">
                  Fondée en 2018, MKB automobile est née de la volonté de simplifier, d'accompagner et de sécuriser l'achat d'un véhicule d'occasion.
                </p>
                <p className="text-body-lg leading-relaxed">
                  En offrant une solution pratique et sur-mesure, nous permettons à nos clients l'achat de manière plus fiable via notre plateforme et notre réseau.
                </p>
                <p className="text-body-lg leading-relaxed">
                  Chez « MKB Automobile » nous souhaitons apporter le plus de solutions possible pour réaliser vos envies.
                </p>
                <p className="text-body-lg leading-relaxed">
                  MKB Automobile facilite la recherche et sécurise l'achat de véhicules d'occasion en France et en Europe.
                </p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-h2 mb-8 text-center">Nos valeurs</h2>
              <p className="text-body-lg text-center text-grey mb-8 max-w-2xl mx-auto">
                Nos valeurs nous permettent d'offrir la meilleure expérience d'achat à nos clients :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {valeurs.map((valeur, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-h4 text-primary-orange">{valeur.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-body leading-relaxed">
                        {valeur.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary-orange-50 border-primary-orange-100">
              <CardHeader>
                <CardTitle className="text-h2">Nos engagements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {engagements.map((engagement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary-orange text-xl font-bold mt-1">•</span>
                      <p className="text-body-lg leading-relaxed flex-1">{engagement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default About;
