"use client";
import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { Shield, Lock, Eye, Mail, Cookie, CheckCircle2 } from "lucide-react";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Main>
      <div className="w-full space-y-12 animate-fade-in">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary-orange" />
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                Protection des données
              </Badge>
            </div>
            <CardTitle className="text-h1">
              Politique de confidentialité
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-0 shadow-large bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">1. Collecte de l'information</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
            Nous recueillons des informations lorsque vous vous inscrivez sur
            notre site, lorsque vous vous connectez à votre compte, faites un
            achat, participez à un concours, et / ou lorsque vous vous
            déconnectez. Les informations recueillies incluent votre nom, votre
            adresse e-mail, numéro de téléphone, et / ou carte de crédit. En
            outre, nous recevons et enregistrons automatiquement des
            informations à partir de votre ordinateur et navigateur, y compris
            votre adresse IP, vos logiciels et votre matériel, et la page que
            vous demandez.
          </p>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <CheckCircle2 className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">2. Utilisation des informations</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
              <p className="text-body-lg text-grey">
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "Personnaliser votre expérience et répondre à vos besoins individuels",
                  "Fournir un contenu publicitaire personnalisé",
                  "Améliorer notre site",
                  "Améliorer le service client et vos besoins de prise en charge",
                  "Vous contacter par e-mail",
                  "Administrer un concours, une promotion, ou une enquête"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-body text-grey">{item}</span>
                  </li>
                ))}
              </ul>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <Lock className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">3. Confidentialité du commerce en ligne</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
            Nous sommes les seuls propriétaires des informations recueillies sur
            ce site. Vos informations personnelles ne seront pas vendues,
            échangées, transférées, ou données à une autre société pour
            n’importe quelle raison, sans votre consentement, en dehors de ce
            qui est nécessaire pour répondre à une demande.
          </p>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <Shield className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">4. Divulgation à des tiers</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
            Nous ne vendons, n’échangeons et ne transférons pas vos informations
            personnelles identifiables à des tiers. Cela ne comprend pas les
            tierce parties de confiance qui nous aident à exploiter notre site
            Web ou à mener nos affaires, tant que ces parties conviennent de
            garder ces informations confidentielles. Nous pensons qu’il est
            nécessaire de partager des informations afin d’enquêter, de prévenir
            ou de prendre des mesures concesant des activités illégales, fraudes
            présumées, situations impliquant des menaces potentielles à la
            sécurité physique de toute personne, violations de nos conditions
            d’utilisation, ou quand la loi nous y contraint. Les informations
            non-privées, cependant, peuvent être fou
            <br />
            ies à d’autres parties pour le marketing, la publicité, ou d’autres
            utilisations.
          </p>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <Shield className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">5. Protection des informations</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour
            préserver la sécurité de vos informations personnelles. Nous
            utilisons un cryptage à la pointe de la technologie pour protéger
            les informations sensibles transmises en ligne. Nous protégeons
            également vos informations hors ligne. Seuls les employés qui ont
            besoin d’effectuer un travail spécifique (par exemple, la
            facturation ou le service à la clientèle) ont accès aux informations
            personnelles identifiables. Les ordinateurs et serveurs utilisés
            pour stocker des informations personnelles identifiables sont
            conservés dans un environnement sécurisé. Est-ce que nous utilisons
            des cookies ? Nos cookies améliorent l’accès à notre site et
            identifient les visiteurs réguliers. En outre, nos cookies
            améliorent l’expérience d’utilisateur grâce au suivi et au ciblage
            de ses intérêts. Cependant, cette utilisation des cookies n’est en
            aucune façon liée à des informations personnelles identifiables sur
            notre site.
          </p>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <Mail className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">6. Se désabonner</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
            Nous utilisons l’adresse e-mail que vous fournissez pour vous
            envoyer des informations et mises à jour relatives à votre commande,
            des nouvelles de l’entreprise de façon occasionnelle, des
            informations sur des produits liés, etc. Si à n’importe quel moment
            vous souhaitez vous désinscrire et ne plus recevoir d’e-mails, des
            instructions de désabonnement détaillées sont incluses en bas de
            chaque e-mail.
          </p>
          <p>&nbsp;</p>
              <div className="flex items-center gap-3 pt-8">
                <CheckCircle2 className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">7. Consentement</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
          <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
};

export default PrivacyPolicy;
