"use client";
import "./personaliz.css";
import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import React from "react";
import { MessageCircle, FileSignature, List, CheckCircle2, Key } from "lucide-react";

function Personalized() {
  const stepProject = [
    {
      id: 1,
      title: "Découverte de votre projet d'achat automobile",
      icon: MessageCircle,
    },
    {
      id: 2,
      title: "Signature du mandat de recherche",
      icon: FileSignature,
    },
    {
      id: 3,
      title:
        "Proposition de 3 véhicules dans vos critères de recherche sous 14 jours",
      icon: List,
    },
    {
      id: 4,
      title: "Validation du véhicule",
      icon: CheckCircle2,
    },
    {
      id: 5,
      title: "Livraison du véhicule et remise des clés",
      icon: Key,
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
    <Main>
      <div className="max-w-[1440px] mx-auto px-6 max-md:px-4 space-y-16 animate-fade-in">
        <Card className="overflow-hidden border-0 shadow-large bg-gradient-to-br from-primary-orange-50 to-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <CardContent className="pt-6 space-y-6">
              <h1 className="text-h1 max-sm:text-3xl">
                <span className="text-primary-orange">
                  Bénéficiez d'un accompagnement
                </span>
                <br />
                adapté à vos besoins
              </h1>
              <div className="space-y-4 text-body-lg leading-relaxed">
                <p>
                  <strong>
                    MKB Automobile est le partenaire idéal pour trouver la voiture qui
                    correspond à vos envies
                  </strong>
                  , vous avez le choix parmi une sélection de véhicules. Grâce aux
                  services de MKB Automobile, vous pouvez acheter sereinement une
                  voiture d'occasion, au juste prix. De plus, toutes nos véhicules
                  sont contrôlées et vérifiées par nos équipes en interne.
                </p>
                <p>
                  Vous êtes ainsi assuré d'acheter une voiture totalement
                  fonctionnelle.{" "}
                  <strong>
                    Nos experts vous accompagnent tout au long de votre processus
                    d'achat.
                  </strong>
                </p>
              </div>
            </CardContent>
            <div className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <Image
                  src={"/MKB-Automobile-Recherche-personnalisee.png"}
                  width={500}
                  height={600}
                  alt="recherche-personnalisee"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Card>

        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-h2">
              <span className="text-primary-orange">Votre projet</span> en 5 étapes
            </h2>
            <p className="text-body-lg text-grey max-w-2xl mx-auto">
              Nous vous aidons à trouver la voiture de vos rêves parmi un large choix de véhicules en France et en Europe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {stepProject.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.id} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-center">
                      <div className="flex items-center justify-center bg-primary-orange text-white rounded-full h-16 w-16">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary-orange">{step.id}</div>
                      <h5 className="text-h5 leading-tight">{step.title}</h5>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Card className="bg-secondary-red text-white border-0 shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-h2">
              <span className="text-primary-orange">Nos 3 engagements</span> pour vous accompagner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {stepEngagement.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                    <Image
                      src={step.icon}
                      width={80}
                      height={80}
                      alt={step.title}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-body-lg leading-relaxed">{step.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
}

export default Personalized;
