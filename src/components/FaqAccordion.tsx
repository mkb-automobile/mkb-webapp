"use client";
import React, { useState } from "react";

const FaqAccordion = ({ data }: any) => {
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenedQuestion(index === openedQuestion ? null : index);
  };

  return (
    <div className="">
      {data.map((faqItem, index) => (
        <div key={index}>
          <div
            onClick={() => handleQuestionClick(index)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {faqItem.question}
          </div>
          {openedQuestion === index && <div>{faqItem.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
