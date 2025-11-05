"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import DynamicForm from "@/src/components/dynamicForm/DynamicForm";
import { savePageVisitedToLocalStorage } from "@/src/components/localStorage/SaveToLocalStorage";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { Main } from "@/src/components/layouts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock, Handshake, ArrowRight, Sparkles, Shield, TrendingUp, Zap, FileText, Mail, Phone } from "lucide-react";

function Taking() {
  const router = useRouter();
  const repriseAutoCardTitle = [
    {
      title: "En ligne",
      image: "/MKB-Automobile-Reprise-auto-en-ligne.png",
      alt: "online",
      button: "Estimation en ligne",
    },
    {
      title: "En agence",
      image: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
      alt: "en agence",
      button: "Prennez rendez-vous",
    },
  ];

  const containerFaq = [
    {
      question: "Quelles sont les étapes de ventes ?",
      answer: `<ul>
          <li>Estimez votre voiture</li>
          <li>Prenez un rendez- vous en agence</li>
          <li>Nous faisons l’expertise de votre véhicule</li>
          <li>Votre véhicule est vendu 😄</li>
        </ul>`,
    },
    {
      question: "Comment est calculé le prix de votre véhicule ?",
      answer: `Nos experts déterminent le prix de vente en fonction des critères saisis.

Une étude est faîte en se basant sur la marque, modèle, kilométrage, la date de première mise en circulation, la motorisation et l’état général du véhicule.

Vous recevrez un prix de vente cohérent avec le marché du rachat immédiat par un professionnel.`,
    },
    {
      question: "Comment prendre un rendez-vous de reprise de voiture ?",
      answer: `Après avoir fait une demande d’estimation en ligne, vous recevrez votre prix de vente final par e-mail.

Il faudra valider un rendez-vous sur notre site web pour prendre rendez-vous.

Prise de rendez-vous par :
<ul>
<li>Téléphone : 01 88 83 09 17 </li>
<li>E-mail : contact@portfolio.dev </li>
</ul>`,
    },
    {
      question:
        "Est-ce qu'il y a des coûts supplémentaires lors de la vente de ma voiture ?",
      answer:
        "Non, aucun frais supplémentaire lors de l’estimation de votre voiture.",
    },
  ];

  const engagements = [
    "Estimons au meilleur prix de reprise",
    "Sans contre partie",
    "Virement sous 24h",
  ];

  return (
    <Main>
      <div className="max-w-[1440px] mx-auto px-6 max-md:px-4 space-y-20 animate-fade-in">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-large pt-24 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 mb-16 px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 text-base">
                <TrendingUp className="w-4 h-4 mr-2" />
                Estimation rapide
              </Badge>
              <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700 px-6 py-2 text-base">
                <Shield className="w-4 h-4 mr-2" />
                100% gratuit
              </Badge>
            </div>
            <h1 className="text-h1 max-sm:text-4xl font-bold leading-tight">
              Reprise automobile{" "}
              <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                Une estimation gratuite et sans engagement
              </span>
            </h1>
            <p className="text-body-lg text-grey max-w-3xl mx-auto leading-relaxed">
              Vendez votre véhicule au meilleur prix. Estimation en 2 minutes, réponse sous 24h. 
              Sans frais cachés, sans engagement.
            </p>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
            {repriseAutoCardTitle.map((card, index) => (
              <Card 
                key={card.title}
                className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6 space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-medium">
                    {index === 0 ? (
                      <Zap className="w-8 h-8 text-white" />
                    ) : (
                      <Handshake className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-h2 font-bold">{card.title}</CardTitle>
                  <CardDescription className="text-body text-grey">
                    {index === 0 
                      ? "Obtenez une estimation instantanée en ligne" 
                      : "Rencontrez nos experts en agence"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-medium group-hover:shadow-large transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 group-hover:from-black/30 transition-all duration-500" />
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <Button 
                    asChild
                    variant="orange"
                    size="lg"
                    className="w-full rounded-full shadow-large hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <a href="#reprise-form" className="flex items-center justify-center">
                      {card.button}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Form Section */}
        <section className="w-full py-8" id="reprise-form">
          <div className="grid lg:grid-cols-3 gap-10 max-w-[1440px] mx-auto">
            {/* Main Form Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary-orange" />
                  <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                    Formulaire
                  </Badge>
                </div>
                <h2 className="text-h1 font-bold">
                  Estimez votre voiture en ligne{" "}
                  <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                    (environ 2 minutes)
                  </span>
                </h2>
                <p className="text-body-lg text-grey leading-relaxed max-w-2xl">
                  Remplissez le formulaire ci-dessous pour obtenir une estimation gratuite et sans engagement de votre véhicule. 
                  Notre équipe vous répondra sous 24h.
                </p>
              </div>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-primary-orange-50/30 to-white overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                  <CardTitle className="text-h3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    Formulaire d'estimation
                  </CardTitle>
                  <CardDescription className="text-body text-grey mt-2">
                    Tous les champs marqués d'un * sont obligatoires
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <DynamicForm />
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <Shield className="w-5 h-5 text-primary-orange" />
                    <h3 className="text-h4 font-semibold">Protection de vos données</h3>
                  </div>
                  <div className="space-y-4 text-body-sm text-grey leading-relaxed">
                    <p>
                      Conformément au Règlement Général sur la Protection des Données, n° 2016/679 du 27 avril 2016 et à la loi « Informatique & Libertés » n° 78-17 du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et d'opposition sur les données nominatives vous concernant. Vous pouvez consulter{" "}
                      <a href="/politique-de-confidentialite" target="_blank" className="text-primary-orange hover:underline font-medium">
                        notre politique de données personnelles.
                      </a>
                    </p>
                    <p>
                      Conformément à la loi n°78-17 du 6 janvier 1978, relative à l'informatique, aux fichiers et à la liberté, modifiée, vous disposez d'un droit d'accès et de rectification des informations vous concernant ainsi que d'un droit d'opposition au traitement desdites informations. Vous pouvez donc exercer ces droits en vous adressant au Service Client MKB Automobile Tél. : <a href="tel:0033188830917" className="text-primary-orange hover:underline font-medium">01 88 83 09 17</a>. Vous pouvez également, pour des motifs légitimes, vous opposer, à cette même adresse, au traitement des données vous concernant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-28 border-0 shadow-xl bg-white/95 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary-orange-50 to-white border-b border-primary-orange-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Handshake className="w-6 h-6 text-primary-orange" />
                    <CardTitle className="text-h3 font-bold">
                      La confiance avant tout
                    </CardTitle>
                  </div>
                  <CardDescription className="text-body">
                    Les engagements MKB Automobile
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 space-y-8">
                  <ul className="space-y-5">
                    {engagements.map((engagement, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-4 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative mt-1">
                          <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg" />
                          <CheckCircle2 className="w-6 h-6 text-primary-orange relative z-10 flex-shrink-0" />
                        </div>
                        <p className="text-body leading-relaxed font-medium">{engagement}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <Separator className="bg-primary-orange/20" />
                  
                  <div className="rounded-2xl overflow-hidden shadow-medium group hover:shadow-large transition-all duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-orange/10 to-transparent z-10" />
                      <Image
                        src="/MKB-Automobile-Reprise-auto-en-ligne_Deal.jpeg"
                        alt="deal"
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    <h3 className="text-h3 text-primary-orange font-bold">
                      Quand vendre sa voiture devient plus facile !
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full justify-start hover:bg-primary-orange-50 transition-all duration-300 group"
                        asChild
                      >
                        <a href="tel:+33188830917" className="flex items-center">
                          <Phone className="mr-3 w-5 h-5 text-primary-orange" />
                          01 88 83 09 17
                          <ArrowRight className="ml-auto w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full justify-start hover:bg-primary-orange-50 transition-all duration-300 group"
                        asChild
                      >
                        <a href="mailto:contact@portfolio.dev" className="flex items-center">
                          <Mail className="mr-3 w-5 h-5 text-primary-orange" />
                          contact@portfolio.dev
                          <ArrowRight className="ml-auto w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50/30 rounded-3xl border border-primary-orange-100 shadow-xl py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,159,28,0.1),transparent)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-12 px-6">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-primary-orange" />
                <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                  Questions fréquentes
                </Badge>
                <Sparkles className="w-6 h-6 text-primary-orange" />
              </div>
              <h2 className="text-h1 font-bold">
                <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                  FAQ Reprise véhicule
                </span>{" "}
                Questions fréquentes
              </h2>
              <p className="text-body-lg text-grey max-w-2xl mx-auto">
                Trouvez rapidement les réponses à vos questions sur la reprise de votre véhicule
              </p>
            </div>
            
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {containerFaq.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border-b border-gray-200 last:border-0 px-4"
                    >
                      <AccordionTrigger className="text-left text-h4 hover:no-underline py-6 hover:text-primary-orange transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body text-grey leading-relaxed pb-6">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <Button
                variant="orange"
                size="lg"
                className="rounded-full px-8 py-6 text-lg shadow-large hover:shadow-xl transition-all duration-300 group"
                onClick={() => {
                  savePageVisitedToLocalStorage("faq");
                  router.push("/faq");
                }}
              >
                Accéder à la FAQ complète
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}

export default Taking;
