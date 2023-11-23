import FaqAccordion from "@/src/components/FaqAccordion";
import { Main } from "@/src/components/layouts";
import CustomLink from "@/src/components/ui/links/CustomLink";
import React from "react";

const Faq = () => {
  const data = [
    {
      question: "What is the meaning of life?",
      answer: "42",
    },
    {
      question: "What is the meaning of life?",
      answer: "42",
    },
    {
      question: "What is the meaning of life?",
      answer: "42",
    },
  ];
  return (
    <Main>
      <section>
        <div>
          <h2>Achat du véhicule</h2>
          <FaqAccordion data={data} />
        </div>
        <div>
          <h2>Réprise du véhicule</h2>
          <FaqAccordion data={data} />
        </div>
        <div>
          <h2>Les garantie MKB</h2>
          <FaqAccordion data={data} />
        </div>
        <div>
          <h2>Financement</h2>
          <FaqAccordion data={data} />
        </div>
        <div>
          <h2>MKB Automobile</h2>
          <FaqAccordion data={data} />
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
