"use client";
import { Main } from "@/src/components/layouts";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Search, CreditCard, Key, Phone, Mail, ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import React from "react";

const Works = () => {
  const steps = [
    {
      number: "1",
      title: "Trouvez votre véhicule au meilleur prix",
      icon: Search,
      content: [
        "Trouvez la voiture de vos rêves parmi une grande sélection en France et Europe",
        "Bénéficiez de l'expertise de MKB Automobile",
        "Nous contrôlons pour vous plus de 200 points sur chaque voiture",
        "Prenez rendez-vous par téléphone ou email pour une séance d'essai"
      ],
      image: "/MKB-Automobile-service-personnsalise.webp",
      reverse: false
    },
    {
      number: "2",
      title: "Payez en plusieurs fois, si vous le souhaitez",
      icon: CreditCard,
      content: [
        "Trouvons ensemble la meilleure façon de vous accompagner",
        "Financez ou payez en plusieurs fois votre achat automobile",
        "Adaptez votre paiement à vos besoins"
      ],
      image: "/MKB-Automobile-paiement-plusieurs-fois.jpg",
      reverse: true
    },
    {
      number: "3",
      title: "Remise des clés",
      icon: Key,
      content: [
        "Après avoir essayé et validé votre véhicule",
        "Choisissez parmi nos solutions de paiement (financement, paiement jusqu'à 10 fois, chèque de banque, virement)",
        "Si vous le souhaitez, nous nous chargeons de vos démarches d'immatriculation"
      ],
      image: "/MKB-Automobile-pratique.webp",
      reverse: false
    }
  ];

  return (
    <Main>
      <div className="w-full space-y-16 animate-fade-in">
        <section className="flex flex-col justify-center items-center pb-12 bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50 rounded-3xl border border-primary-orange-100 shadow-large relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-16 py-16 text-center space-y-6">
            <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Processus simplifié
            </Badge>
            <h1 className="text-h1">
              Comment acheter une voiture{" "}
              <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                avec MKB Automobile ?
              </span>
            </h1>
            <p className="text-body-lg text-grey max-w-2xl mx-auto">
              Un processus simple en 3 étapes pour trouver, financer et récupérer votre véhicule
            </p>
          </div>
        </section>
        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className={`border-0 shadow-large bg-white/90 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  step.reverse ? "lg:flex-row-reverse" : ""
                } lg:flex`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-transparent z-10" />
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={762}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                        {step.number}
                      </div>
                    </div>
                    <Icon className="w-8 h-8 text-primary-orange" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-h2 font-bold">{step.title}</h2>
                    <Separator className="w-16 bg-primary-orange/30" />
                    <ul className="space-y-3">
                      {step.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                          <p className="text-body text-grey leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                <Phone className="w-4 h-4 mr-2" />
                Contactez-nous
              </Badge>
              <h2 className="text-h2">
                Un modèle vous intéresse ?{" "}
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  Contactez-nous
                </span>
              </h2>
              <p className="text-body-lg text-grey max-w-2xl mx-auto">
                Nos experts vous accompagnent pour votre projet d'achat automobile.
                Nous sommes à votre écoute !
              </p>
            </div>
            <Separator className="w-24 mx-auto bg-primary-orange/30" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="orange"
                size="lg"
                className="rounded-full px-8 py-6 text-lg shadow-large hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="tel:+33188830917" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  +33 1 88 83 09 17
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary-orange-50 transition-all duration-300"
                asChild
              >
                <a href="mailto:contact@mkbautomobile.fr" className="flex items-center">
                  <Mail className="mr-2 w-5 h-5" />
                  contact@mkbautomobile.fr
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
};

export default Works;
