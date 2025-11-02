"use client";
import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/src/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { CreditWidget } from "@/src/components";
import { CreditCard, FileText, ThumbsUp, Timer, Handshake, Wallet, CheckCircle2, Phone, ArrowRight, Shield, Zap, TrendingUp, Info } from "lucide-react";
import Link from "next/link";
import React from "react";

const Financing = () => {
  const optionsPaiement = [
    {
      type: "3 ou 4 fois",
      description: "Augmentez votre budget pour l'achat de votre voiture",
      accompagnement: "Nous vous accompagnons à valeur de 4500€",
      interet: "Avec ou sans intérêt",
    },
    {
      type: "10 fois",
      description:
        "Bénéficiez de 3000€ supplémentaires sur votre budget, lissé sur 10 mois",
      interet: "Avec ou sans intérêt",
      acceptation: "L'acceptation de votre dossier se fait instantanément",
    },
  ];

  const eligibilite = [
    "Avoir une carte bancaire (Visa, MasterCard, … Hors carte de retrait type électron)",
    "Avoir la majorité",
    "Ne pas être fiché en banque de France",
    "Avoir une carte bancaire valable jusqu'à la date du dernier paiement",
    "Avoir un compte bancaire avec plus de 3 mois d'ancienneté",
    "Pour les étrangers, avoir un titre de séjour valable jusqu'à la fin du paiement",
  ];

  const paiementFeatures = [
    { icon: CreditCard, text: "Financez votre voiture" },
    { icon: FileText, text: "Simple et rapide" },
    { icon: ThumbsUp, text: "Réponse instantanée" },
  ];

  const creditFeatures = [
    { icon: Timer, text: "Un financement 100% en ligne" },
    { icon: Handshake, text: "Proposition dans 5 banques pour maximiser vos chances" },
    { icon: Wallet, text: "Personnalisez vos mensualités - Remboursement jusqu'à 72 mois" },
  ];

  return (
    <Main>
      <div className="max-w-[1440px] mx-auto px-6 max-md:px-4 space-y-20 animate-fade-in">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-large pt-24 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 text-base">
                <CreditCard className="w-4 h-4 mr-2" />
                Financement flexible
              </Badge>
              <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700 px-6 py-2 text-base">
                <Zap className="w-4 h-4 mr-2" />
                Réponse instantanée
              </Badge>
            </div>
            <h1 className="text-h1 max-sm:text-4xl font-bold leading-tight">
              <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                Financez votre véhicule
              </span>{" "}
              en ligne
            </h1>
            <p className="text-body-lg text-grey max-w-3xl mx-auto leading-relaxed">
              <strong className="text-gray-900">Vous cherchez un financement pour votre nouveau véhicule ?</strong>
              <br />
              Choisissez parmi nos solutions de paiement adaptées à vos besoins
            </p>
          </div>
        </section>

        {/* Options de Financement */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-orange-50 via-white to-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-orange/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="relative z-10 bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
              <div className="flex items-center justify-center gap-3 mb-2">
                <CreditCard className="w-6 h-6 text-primary-orange" />
                <CardTitle className="text-h2 font-bold">Paiement en plusieurs fois</CardTitle>
              </div>
              <CardDescription className="text-center text-body text-grey">
                Simple, rapide et sécurisé
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6 pt-8">
              <ul className="space-y-4">
                {paiementFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg" />
                      <div className="relative p-2 rounded-full bg-gradient-to-br from-primary-orange to-orange-600">
                        <feature.icon className="w-5 h-5 text-white relative z-10" />
                      </div>
                    </div>
                    <p className="text-body font-medium">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <Separator className="bg-primary-orange/20" />
              <p className="text-body-sm text-grey leading-relaxed">
                Simplifions et sécurisons votre paiement par carte bancaire
              </p>
              <Button asChild variant="orange" size="lg" className="w-full rounded-full group shadow-large">
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-orange/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="relative z-10 border-b border-white/10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-primary-orange" />
                <CardTitle className="text-h2 font-bold text-white">Crédit financement</CardTitle>
              </div>
              <CardDescription className="text-center text-gray-200">
                Solution personnalisée pour votre budget
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6 pt-8">
              <ul className="space-y-4">
                {creditFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg" />
                      <div className="relative p-2 rounded-full bg-gradient-to-br from-primary-orange to-orange-600">
                        <feature.icon className="w-5 h-5 text-white relative z-10" />
                      </div>
                    </div>
                    <p className="text-body font-medium text-white">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <Separator className="bg-white/10" />
              <Button asChild variant="orange" size="lg" className="w-full rounded-full group shadow-large">
                <Link href="#financement">
                  Simulez votre crédit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Paiement Carte Bancaire */}
        <section className="space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-6 h-6 text-primary-orange" />
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                Paiement simple
              </Badge>
              <CreditCard className="w-6 h-6 text-primary-orange" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-h1 font-bold">
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  Paiement
                </span>{" "}
                par carte bancaire
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-5 h-5 text-primary-orange cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-700 max-w-xs">
                    <p>Le paiement par carte bancaire est disponible pour tous nos véhicules</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-y-3">
              <p className="text-h3 font-semibold text-gray-900">
                LE MOYEN LE PLUS SIMPLE DE PAYER VOTRE VOITURE
              </p>
              <p className="text-body-lg text-grey max-w-2xl mx-auto">
                Pourquoi nos clients aiment le paiement en plusieurs fois par carte bancaire ?
              </p>
            </div>
          </div>

          <Tabs defaultValue="options" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-primary-orange-50/50 rounded-full p-1">
              <TabsTrigger value="options" className="rounded-full data-[state=active]:bg-primary-orange data-[state=active]:text-white">
                Options de paiement
              </TabsTrigger>
              <TabsTrigger value="eligibilite" className="rounded-full data-[state=active]:bg-primary-orange data-[state=active]:text-white">
                Critères d'éligibilité
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="options" className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-primary-orange-50/30">
                <CardHeader className="bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                  <CardTitle className="text-h3 font-bold flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-primary-orange" />
                    Options de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {optionsPaiement.map((option, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-primary-orange-100 bg-primary-orange-50/50 hover:bg-primary-orange-50 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange">
                            {option.type}
                          </Badge>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-4 h-4 text-primary-orange/70 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900 text-white border-gray-700 max-w-xs">
                                <p>Cette option est disponible selon les conditions d'éligibilité</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <p className="text-body font-medium text-gray-900">{option.description}</p>
                        {option.accompagnement && (
                          <Alert className="border-primary-orange-200 bg-primary-orange-50/50">
                            <CheckCircle2 className="h-4 w-4 text-primary-orange" />
                            <AlertDescription className="text-body-sm">
                              {option.accompagnement}
                            </AlertDescription>
                          </Alert>
                        )}
                        <div className="flex items-center gap-2 pt-2 border-t border-primary-orange/20">
                          <CheckCircle2 className="w-5 h-5 text-primary-orange flex-shrink-0" />
                          <p className="text-body-sm font-semibold text-primary-orange">{option.interet}</p>
                        </div>
                        {option.acceptation && (
                          <p className="text-body-sm text-grey italic">{option.acceptation}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="eligibilite" className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-primary-orange-50/30">
                <CardHeader className="bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                  <CardTitle className="text-h3 font-bold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-orange" />
                    Critères d'éligibilité
                  </CardTitle>
                  <CardDescription>
                    Vérifiez que vous remplissez ces conditions pour bénéficier du paiement en plusieurs fois
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Alert className="mb-6 border-primary-orange-200 bg-primary-orange-50/50">
                    <Info className="h-4 w-4 text-primary-orange" />
                    <AlertTitle className="text-body font-semibold">Information importante</AlertTitle>
                    <AlertDescription className="text-body-sm">
                      Tous ces critères doivent être respectés pour être éligible au paiement en plusieurs fois.
                    </AlertDescription>
                  </Alert>
                  <ul className="space-y-4">
                    {eligibilite.map((critere, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-4 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="relative mt-1">
                          <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg" />
                          <CheckCircle2 className="w-6 h-6 text-primary-orange relative z-10 flex-shrink-0" />
                        </div>
                        <p className="text-body leading-relaxed text-gray-900">{critere}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Crédit Financement */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-xl py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          
          <div className="relative z-10 max-w-6xl mx-auto space-y-12 px-6">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary-orange" />
                <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                  Simulation gratuite
                </Badge>
                <TrendingUp className="w-6 h-6 text-primary-orange" />
              </div>
              <h2 className="text-h1 font-bold">
                Crédit{" "}
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  financement
                </span>
              </h2>
              <p className="text-body-lg text-grey max-w-2xl mx-auto">
                La solution la plus adaptée à vos besoins avec ou sans apport
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                  <CardTitle className="text-h3 font-bold flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-primary-orange" />
                    Un accompagnement personnalisé
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-6">
                  <div className="space-y-4">
                    <p className="text-body-lg leading-relaxed text-gray-900">
                      <strong>
                        La solution la plus adaptée à vos besoins.{" "}
                        <span className="text-primary-orange">Avec ou sans apport</span>
                      </strong>
                    </p>
                    <p className="text-body leading-relaxed text-grey">
                      Nous vous proposons la solution financement avec des mensualités adaptées à votre budget, sur des durées variées, avec ou sans apport personnel, avec ou sans garantie.
                    </p>
                    <Separator className="bg-primary-orange/20" />
                    <p className="text-body leading-relaxed text-grey">
                      Votre conseiller commercial s'occupera de tout, de la vente jusqu'à l'acceptation de votre dossier de crédit.
                    </p>
                    <p className="text-body leading-relaxed text-grey">
                      N'hésitez pas à nous contacter pour étudier ensemble votre projet automobile.
                    </p>
                  </div>
                  <Button asChild variant="orange" size="lg" className="rounded-full group shadow-large w-full">
                    <Link href="tel:+33644699999" className="flex items-center justify-center">
                      <Phone className="mr-2 w-5 h-5" />
                      Nous Appeler
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div id="financement" className="flex items-center justify-center">
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm w-full">
                  <CardHeader className="bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                    <CardTitle className="text-h3 font-bold text-center">
                      Simulez votre crédit
                    </CardTitle>
                    <CardDescription className="text-center">
                      Obtenez une estimation en quelques secondes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <CreditWidget />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Financing;
