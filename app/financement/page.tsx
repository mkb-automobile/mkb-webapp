import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { CreditWidget } from "@/src/components";
import { CreditCard, FileText, ThumbsUp, Timer, Handshake, Wallet, CheckCircle2, Phone } from "lucide-react";
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
      <div className="max-w-[1440px] mx-auto px-6 max-md:px-4 space-y-16 animate-fade-in">
        <section className="text-center space-y-4 py-8">
          <h1 className="text-h1 max-sm:text-3xl">
            <span className="text-primary-orange">Financez votre véhicule</span> en ligne
          </h1>
          <p className="text-body-lg text-grey max-w-2xl mx-auto">
            <strong>Vous cherchez un financement pour votre nouveau véhicule ?</strong>
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary-orange-50 to-white border-0 shadow-large">
            <CardHeader>
              <CardTitle className="text-h3 text-center">Paiement en plusieurs fois</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {paiementFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-primary-orange" />
                    <p className="text-body">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <p className="text-body-sm text-grey leading-relaxed">
                Simplifions et sécurisons votre paiement par carte bancaire
              </p>
              <Button asChild variant="default" size="lg" className="w-full">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black-100 text-white border-0 shadow-large">
            <CardHeader>
              <CardTitle className="text-h3 text-center">Crédit financement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {creditFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <feature.icon className="w-6 h-6 text-primary-orange mt-1 flex-shrink-0" />
                    <p className="text-body">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <Button asChild variant="orange" size="lg" className="w-full">
                <Link href="#financement">Simulez</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-h2">
              <span className="text-primary-orange">Paiement</span> par carte bancaire*
            </h2>
            <div className="space-y-2">
              <p className="text-h4 font-semibold">
                LE MOYEN LE PLUS SIMPLE DE PAYER VOTRE VOITURE
              </p>
              <p className="text-body-lg text-grey">
                Pourquoi nos clients aiment le paiement en plusieurs fois par carte bancaire ?
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-h3">Options de paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {optionsPaiement.map((option, index) => (
                  <div key={index} className="space-y-2 p-4 rounded-xl bg-primary-orange-50">
                    <h4 className="font-semibold text-primary-orange">Type: {option.type}</h4>
                    <p className="text-body-sm">{option.description}</p>
                    {option.accompagnement && (
                      <p className="text-body-sm">{option.accompagnement}</p>
                    )}
                    <p className="text-body-sm font-medium">{option.interet}</p>
                    {option.acceptation && (
                      <p className="text-body-sm text-grey">{option.acceptation}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-h3">Critères d'éligibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilite.map((critere, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                      <p className="text-body-sm leading-relaxed">{critere}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-orange-50 to-white rounded-3xl border border-primary-orange-100 shadow-large p-8">
          <div className="text-center mb-8">
            <h2 className="text-h2">
              Crédit <span className="text-primary-orange">financement</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-medium">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-body-lg leading-relaxed">
                    <strong>
                      La solution la plus adaptée à vos besoins.{" "}
                      <span className="text-primary-orange">Avec ou sans apport</span>
                    </strong>
                  </p>
                  <p className="text-body leading-relaxed">
                    Nous vous proposons la solution financement avec des mensualités adaptées à votre budget, sur des durées variées, avec ou sans apport personnel, avec ou sans garantie.
                  </p>
                  <p className="text-body leading-relaxed">
                    Votre conseiller commercial s'occupera de tout, de la vente jusqu'à l'acceptation de votre dossier de crédit.
                  </p>
                  <p className="text-body leading-relaxed">
                    N'hésitez pas à nous contacter pour étudier ensemble votre projet automobile.
                  </p>
                </div>
                <Button asChild variant="default" size="lg">
                  <Link href="tel:+33644699999" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Nous Appeler
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div id="financement" className="flex items-center justify-center">
              <CreditWidget />
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Financing;
