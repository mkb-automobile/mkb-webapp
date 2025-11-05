"use client";
import { Main } from "@/src/components/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { FileText, Building2, Shield, Scale } from "lucide-react";
import React from "react";

const LegalNotice = () => {
  return (
    <Main>
      <div className="w-full space-y-12 animate-fade-in">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-orange-50 via-white to-primary-orange-50">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-primary-orange" />
              <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-4 py-1.5">
                Informations légales
              </Badge>
            </div>
            <CardTitle className="text-h1">
              Mentions Légales
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-0 shadow-large bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">1. Édition du site</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              En vertu de{" "}
              <a
                href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                l’article 6 de la loi n° 2004-575 du 21 juin 2004
              </a>{" "}
              pour la confiance dans l’économie numérique, il est précisé aux
              utilisateurs du site inte
              <br />
              et{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>
              l’identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi:
            </p>
            <ul>
              <li>
                <strong>Propriétaire du site : </strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  MKB Automobile
                  <br />
                </span>
                Contact :{" "}
                <a href="mailto:mkb.automobile@gmail.com">
                  <span data-ref="e_mail_contact" data-fallback="">
                    mkb.automobile@gmail.com
                  </span>
                </a>
                <br />
                Tél :{" "}
                <span data-ref="telephone" data-fallback="">
                  01 88 83 09 17
                  <br />
                </span>
                Adresse :{" "}
                <span>
                  3 Rue Condorcet, 94430 Chennevières-sur-Ma
                  <br />
                  e.
                </span>
              </li>
              <li>
                <strong>Identification de l’entreprise :</strong>{" "}
                <span data-ref="forme_juridique" data-fallback="">
                  SASU
                </span>{" "}
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL
                  <br />
                  MKB Automobile
                </span>{" "}
                au capital social de{" "}
                <span data-ref="capital_social" data-fallback="">
                  1000
                </span>
                €<br />
                SIREN :{" "}
                <span data-ref="siren" data-fallback="">
                  840510333
                  <br />
                </span>
                RCS ou RM :{" "}
                <span data-ref="rcs" data-fallback="">
                  Creteil B 840 510 333
                  <br />
                </span>
                Adresse postale :{" "}
                <span>
                  3 Rue Condorcet, 94430 Chennevières-sur-Ma
                  <br />
                  e.
                </span>
              </li>
              <li>
                <strong>Directeur de la publication : </strong>
                <span data-ref="directeur_publication" data-fallback="">
                  Souleymane Traoré
                  <br />
                </span>
                Contact :{" "}
                <a href="mailto:contact@portfolio.dev">
                  <span data-ref="contact_directeur" data-fallback="">
                    contact@portfolio.dev
                  </span>
                </a>
                .
              </li>
              <li>
                <strong>Hébergeur :</strong>{" "}
                <span data-ref="hebergeur" data-fallback="">
                  Infomaniak – Rue Eugène-Marziano 25, 1227 Genève, Suisse
                  <br />
                  Téléphone : +41.22.820.35.44
                </span>
              </li>
              <li>
                <strong>Délégué à la protection des données : </strong>
                <span data-ref="dpo" data-fallback="">
                  Souleymane Traoré
                </span>{" "}
                –{" "}
                <a href="mailto:contact@portfolio.dev">
                  <span data-ref="contact_dpo" data-fallback="">
                    contact@portfolio.dev
                  </span>
                </a>
              </li>
              <li>
                <strong>Autres contributeurs :</strong>{" "}
                <span data-ref="autres_contributeurs" data-fallback="">
                  Webmaster{" "}
                  <a
                    href="https://nucom.fr"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    Agence Nucom
                  </a>
                </span>
              </li>
            </ul>
              <div className="flex items-center gap-3 pt-8">
                <Shield className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">2. Propriété intellectuelle et contrefaçons</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              est propriétaire des droits de propriété intellectuelle et détient
              les droits d’usage sur tous les éléments accessibles sur le site
              inte
              <br />
              et, notamment les textes, images, graphismes, logos, vidéos,
              architecture, icônes et sons.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de{" "}
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>
              .
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles{" "}
              <a
                href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000032655082&amp;cidTexte=LEGITEXT000006069414&amp;dateTexte=20160605"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                L.335-2 et suivants du Code de Propriété Intellectuelle
              </a>
              .
            </p>
              <div className="flex items-center gap-3 pt-8">
                <Shield className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">3. Limitations de responsabilité</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              ne pourra être tenu pour responsable des dommages directs et
              indirects causés au matériel de l’utilisateur, lors de l’accès au
              site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>
              .
            </p>
            <p>
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              décline toute responsabilité quant à l’utilisation qui pourrait
              être faite des informations et contenus présents sur{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>
              .
            </p>
            <p>
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              s’engage à sécuriser au mieux le site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>
              , cependant sa responsabilité ne pourra être mise en cause si des
              données indésirables sont importées et installées sur son site à
              son insu.
            </p>
            <p>
              Des espaces interactifs (espace contact ou commentaires) sont à la
              disposition des utilisateurs.{" "}
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              se réserve le droit de supprimer, sans mise en demeure préalable,
              tout contenu déposé dans cet espace qui contreviendrait à la
              législation applicable en France, en particulier aux dispositions
              relatives à la protection des données.
            </p>
            <p>
              Le cas échéant,{" "}
              <strong>
                <span data-ref="nom_proprietaire" data-fallback="">
                  {" "}
                  Kindamika MIGUEL – MKB Automobile
                </span>
              </strong>{" "}
              se réserve également la possibilité de mettre en cause la
              responsabilité civile et/ou pénale de l’utilisateur, notamment en
              cas de message à caractère raciste, injurieux, diffamant, ou po
              <br />
              ographique, quel que soit le support utilisé (texte, photographie
              …).
            </p>
              <div className="flex items-center gap-3 pt-8">
                <Building2 className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">4. CNIL et gestion des données personnelles</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              Conformément aux dispositions de{" "}
              <a
                href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                la loi 78-17 du 6 janvier 1978 modifiée
              </a>
              , l’utilisateur du site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>{" "}
              dispose d’un droit d’accès, de modification et de suppression des
              informations collectées. Pour exercer ce droit, envoyez un message
              à notre Délégué à la Protection des Données :{" "}
              <strong>
                <span data-ref="dpo" data-fallback="">
                  Souleymane Traoré
                </span>
              </strong>{" "}
              –{" "}
              <a href="mailto:contact@portfolio.dev">
                <strong>
                  <span data-ref="contact_dpo" data-fallback="">
                    contact@portfolio.dev
                  </span>
                </strong>
              </a>
              .
            </p>
            <p>
              Pour plus d’informations sur la façon dont nous traitons vos
              données (type de données, finalité, destinataire…), lisez notre{" "}
              <a href="https://mkbautomobile.com/politique-de-confidentialite">
                <strong>
                  <span data-ref="politique_confidentialite" data-fallback="">
                    https://mkbautomobile.com/politique-de-confidentialite
                  </span>
                </strong>
              </a>
              .
            </p>
              <div className="flex items-center gap-3 pt-8">
                <FileText className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">5. Liens hypertextes et cookies</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              Le site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>{" "}
              contient des liens hypertextes vers d’autres sites et dégage toute
              responsabilité à propos de ces liens exte
              <br />
              es ou des liens créés par d’autres sites vers{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>
              .
            </p>
            <p>
              La navigation sur le site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>{" "}
              est susceptible de provoquer l’installation de cookie(s) sur
              l’ordinateur de l’utilisateur.
            </p>
            <p>
              Un “cookie” est un fichier de petite taille qui enregistre des
              informations relatives à la navigation d’un utilisateur sur un
              site. Les données ainsi obtenues permettent d’obtenir des mesures
              de fréquentation, par exemple.
            </p>
            <p>
              Vous avez la possibilité{" "}
              <strong>d’accepter ou de refuser les cookies</strong> en modifiant
              les paramètres de votre navigateur. Aucun cookie ne sera déposé
              sans votre consentement.
            </p>
            <p>
              Les cookies sont enregistrés pour une durée maximale de{" "}
              <span data-ref="cookies" data-fallback="">
                1
              </span>{" "}
              mois.
            </p>
            <p>
              Pour plus d’informations sur la façon dont nous faisons usage des
              cookies, lisez notre{" "}
              <a
                href="https://mkbautomobile.com/politique-des cookies-eu"
                data-wplink-url-error="true"
              >
                <strong>
                  <span data-ref="politique_confidentialite" data-fallback="">
                    https://mkbautomobile.com/politique-des cookies-eu
                  </span>
                </strong>
              </a>
              .
            </p>
              <div className="flex items-center gap-3 pt-8">
                <Scale className="w-6 h-6 text-primary-orange" />
                <h2 className="text-h2">6. Droit applicable et attribution de juridiction</h2>
              </div>
              <Separator className="bg-primary-orange/30" />
            <p>
              Tout litige en relation avec l’utilisation du site{" "}
              <a href="https://mkbautomobile.com">
                <strong>
                  <span data-ref="url" data-fallback="">
                    https://mkbautomobile.com
                  </span>
                </strong>
              </a>{" "}
              est soumis au droit français. En dehors des cas où la loi ne le
              permet pas, il est fait attribution exclusive de juridiction aux
              tribunaux compétents de{" "}
              <strong>
                <span data-ref="ville_du_tribunal" data-fallback="">
                  Créteil
                </span>
              </strong>
              .
            </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
};

export default LegalNotice;
