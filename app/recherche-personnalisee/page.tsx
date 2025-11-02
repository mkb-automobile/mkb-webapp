"use client";
import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import Image from "next/image";
import React from "react";
import { MessageCircle, FileSignature, List, CheckCircle2, Key, Search, ArrowRight, Sparkles, Clock, Shield } from "lucide-react";

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
      <div className="max-w-[1440px] mx-auto px-6 max-md:px-4 space-y-20 animate-fade-in">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-large pt-24 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-6 h-6 text-primary-orange" />
                <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 text-base">
                  Recherche personnalisée
                </Badge>
                <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700 px-6 py-2 text-base">
                  <Clock className="w-4 h-4 mr-2" />
                  14 jours
                </Badge>
              </div>
              <h1 className="text-h1 max-sm:text-4xl font-bold leading-tight">
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  Bénéficiez d'un accompagnement
                </span>
                <br />
                adapté à vos besoins
              </h1>
              <div className="space-y-4 text-body-lg leading-relaxed text-grey">
                <p>
                  <strong className="text-gray-900">
                    MKB Automobile est le partenaire idéal pour trouver la voiture qui
                    correspond à vos envies
                  </strong>
                  . Vous avez le choix parmi une sélection de véhicules. Grâce aux
                  services de MKB Automobile, vous pouvez acheter sereinement une
                  voiture d'occasion, au juste prix. De plus, toutes nos véhicules
                  sont contrôlées et vérifiées par nos équipes en interne.
                </p>
                <p>
                  Vous êtes ainsi assuré d'acheter une voiture totalement
                  fonctionnelle.{" "}
                  <strong className="text-gray-900">
                    Nos experts vous accompagnent tout au long de votre processus
                    d'achat.
                  </strong>
                </p>
              </div>
              <Button variant="orange" size="lg" className="rounded-full group shadow-large hover:shadow-xl" asChild>
                <a href="#etapes">
                  Découvrir le processus
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={"/MKB-Automobile-Recherche-personnalisee.png"}
                  width={500}
                  height={600}
                  alt="recherche-personnalisee"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Étapes Section */}
        <section id="etapes" className="space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-primary-orange" />
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                Processus simple
              </Badge>
              <Sparkles className="w-6 h-6 text-primary-orange" />
            </div>
            <h2 className="text-h1 font-bold">
              <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                Votre projet
              </span>{" "}
              en 5 étapes
            </h2>
            <p className="text-body-lg text-grey max-w-2xl mx-auto">
              Nous vous aidons à trouver la voiture de vos rêves parmi un large choix de véhicules en France et en Europe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {stepProject.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.id} 
                  className="text-center border-0 shadow-xl bg-gradient-to-br from-white to-primary-orange-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 space-y-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg" />
                        <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-orange to-orange-600 text-white rounded-full h-20 w-20 shadow-large group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-10 h-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-medium">
                          {step.id}
                        </div>
                      </div>
                      <h5 className="text-h4 font-bold leading-tight text-gray-900 group-hover:text-primary-orange transition-colors">
                        {step.title}
                      </h5>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Engagements Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-xl py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-12 px-6">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 text-primary-orange" />
                <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                  Nos engagements
                </Badge>
                <Shield className="w-6 h-6 text-primary-orange" />
              </div>
              <h2 className="text-h1 font-bold">
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  Nos 3 engagements
                </span>{" "}
                pour vous accompagner
              </h2>
              <p className="text-body-lg text-grey max-w-2xl mx-auto">
                Nous nous engageons à vous offrir le meilleur service possible
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stepEngagement.map((step, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-large bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group text-center overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 space-y-6">
                    <div className="relative flex justify-center">
                      <div className="absolute inset-0 bg-primary-orange/10 rounded-full blur-xl" />
                      <div className="relative rounded-full bg-gradient-to-br from-primary-orange/10 to-primary-orange/5 p-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={step.icon}
                          width={80}
                          height={80}
                          alt={step.title}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <Separator className="bg-primary-orange/20" />
                    <p className="text-body-lg leading-relaxed text-gray-900 font-medium">
                      {step.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}

export default Personalized;
