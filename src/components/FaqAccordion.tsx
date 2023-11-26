"use client";
import React, { useState } from "react";

const FaqAccordion = ({ data }: any) => {
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenedQuestion(index === openedQuestion ? null : index);
  };

  return (
    <div className="shadow-xl border border-orange-500 rounded-xl overflow-hidden">
      {data.map((faqItem: any, index: number) => (
        <div key={index} className="w-full border-inherit">
          <div
            onClick={() => handleQuestionClick(index)}
            style={{ cursor: "pointer" }}
            className="bg-primary-orange-100 p-4"
          >
            <h4>
              <span className="text-xl">
                {openedQuestion === index ? "--" : "+"}
              </span>{" "}
              {faqItem.question}
            </h4>
          </div>
          {openedQuestion === index && (
            <div className="px-4 py-5">
              {faqItem.answer && (
                <p dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
