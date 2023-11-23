import FaqAccordion from "@/src/components/FaqAccordion";
import { Main } from "@/src/components/layouts";
import CustomLink from "@/src/components/ui/links/CustomLink";
import React from "react";

const Faq = () => {
  const containerFaq = [
    {
      title: "Achat du véhicule",
      data: [
        {
          question: "Comment se passe l’achat d’un véhicule sur MKB Automobile",
          answer:
            "Accédez à la fiche détaillée pour chacun des véhicules proposés. Vous pouvez nous contacter par e-mail ou téléphone pour plus de renseignements. Le véhicule de vos rêves n’est pas encore disponible ? Inscrivez-vous à notre newsletter et restez informés des prochains véhicules correspondant à vos critères de recherche.",
        },
        {
          question: "La réservation d’un véhicule sélectionné",
          answer:
            " Vous avez trouvé votre véhicule et vous souhaitez le voir et l’essayer ? Vous devez simplement réserver sur notre site, le véhicule sera ainsi bloqué et ne pourra plus être vendu à d’autres clients. L’un de nos conseillers prend ensuite contact avec vous et convient d’un rendez-vous en fonction des disponibilités du vendeur. La livraison est également possible sur demande.",
        },
        {
          question: "La remise des clés",
          answer:
            "La visite du véhicule se fait avec l’un de nos agents. Vous vous présentez au rendez-vous fixé en ayant effectué votre virement sur un compte séquestre, bloqué et sécurisé ou un chèque de banque. Après l’essai du véhicule vous ne souhaitez pas concrétiser la transaction, nous vous remboursons immédiatement. Le véhicule vous plait ? Notre agent vous accompagne dans les démarches et vous repartez avec.",
        },
        {
          question: "Comment savoir si une voiture a des imperfections ?",
          answer:
            "Nous vous montrons de manière transparente les éventuelles imperfections dans notre galerie de photos. Nous suivons un processus très méticuleux pour identifier les imperfections et l’usure. Ces marques d’usure sont dues à une utilisation et un kilométrage normaux et n’apparaissent pas dans la galerie de photos. Vous pouvez en savoir plus sur nos normes de qualité en cliquant ici.",
        },
        {
          question: "Comment puis-je voir la voiture avant de la commander ?",
          answer:
            "Nous vous invitons à prendre rendez-vous par téléphone ou mail afin de confirmer un rendez-vous pour la tester.",
        },
        {
          question: "Comment prendre un rendez-vous de reprise de voiture ?",
          answer:
            "Après avoir fait une demande d’estimation en ligne, vous recevrez votre prix de vente final par e-mail. Il faudra valider un rendez-vous sur notre site web pour prendre rendez-vous. Prise de rendez-vous par : Téléphone : 01 88 83 09 17 E-mail : contact@mkbautomobile.fr",
        },
      ],
    },
    {
      title: "Réprise du véhicule",
      data: [
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
<li>E-mail : contact@mkbautomobile.fr </li>
</ul>`,
        },
        {
          question:
            "Est-ce qu'il y a des coûts supplémentaires lors de la vente de ma voiture ?",
          answer:
            "Non, aucun frais supplémentaire lors de l’estimation de votre voiture.",
        },
      ],
    },
    {
      title: "Les garantie MKB",
      data: [
        {
          question: "Comment savoir si une voiture a des imperfections ?",
          answer:
            "Nous vous informons en toute transparence sur les éventuelles marques d’usure ou des rayures sur notre galerie d’exposition en ligne. Nous suivons un processus très méticuleux pour les identifier.",
        },
        {
          question: "Comment puis-je voir la voiture avant de la commander ?",
          answer:
            "Nous vous invitons à prendre rendez-vous par téléphone ou mail afin de confirmer un rendez-vous pour la tester.",
        },
      ],
    },
    {
      title: "Financement",
      data: [
        {
          question: "Paiement en plusieurs fois",
          answer: `Conditions d’éligibilité :
<ul>
<li>Avoir une carte bancaire (Visa, MasterCard, … Hors carte de retrait type électron) </li>
<li>Avoir la majorité légale (18 ans révolus) </li>
<li>Ne pas être fiché en banque de France </li>
<li>Avoir une Carte bancaire valable jusqu’à la date du dernier paiement </li>
<li>Avoir un compte bancaire avec + de 3 mois d’ancienneté </li>
<li>Pour les étrangers, avoir un titre de séjour valable jusqu’à la fin du paiement. </li>
</ul>`,
        },
        {
          question: "Quels sont les différents types de moyens de paiement ?",
          answer: `Nous acceptons les moyens de paiement suivants :
          <ul>
          <li>Carte bancaire (Visa, MasterCard, … Hors carte de retrait type électron) </li>
          <li>Chèque de banque </li>
          <li>Virement bancaire </li>
          <li>Chèque </li>
          <li>Espèces </li>
          </ul>`,
        },
      ],
    },
    {
      title: "MKB Automobile",
      data: [
        {
          question: "Comment puis-je vous contacter ?",
          answer:
            "Que ce soit par téléphone ou par message, notre service client est là pour vous. Notre équipe se fera un plaisir de répondre à toutes vos questions concernant MKB Automobile, nos services ou votre commande. Tél : +33 1 88 83 09 17 E-mail : contact@mkbautomobile.com <>Horaires : Lun. – Ven. 09h00 – 19h00, Sam. 10h00 – 18h00",
        },
        {
          question: "Où êtes-vous situés ?",
          answer:
            "Notre siège est en région parisienne et nous avons plusieurs dépôts dans toute la France.",
        },
      ],
    },
  ];
  return (
    <Main>
      <section>
        <div className="flex flex-col max-w-[1440px] mx-auto w-full ">
          <div className="py-10">
            <h2 className="flex flex-col items-center justify-center">
              Vous avez des questions ? <br />
              <span style={{ color: "#ff9f1c" }}>On essaye d'y répondre</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10 py-10">
            {containerFaq.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3>{item.title}</h3>
                <FaqAccordion data={item.data} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Vous n’avez pas trouvé la réponse que vous cherchiez ?</p>
          <h2>N’hésitez pas à nous contacter</h2>
        </div>

        <div className="flex justify-center bg-primary-orange p-5 rounded-full gap-2 shadow-xl">
          <CustomLink title={"Nous contacter"} href="/contact" />
        </div>
      </section>
    </Main>
  );
};

export default Faq;
