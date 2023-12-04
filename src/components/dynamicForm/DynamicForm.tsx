import React, { useState } from "react";
import CustomInput from "../ui/inputs/CustomInput";
import { CustomButton } from "../ui";

const DynamicForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    ["Nom", "Prénom", "Email"],
    ["Nom du Projet", "Description du Projet"],
    ["Estimation du Budget", "Délai de Livraison"],
  ];

  const handleAnswer = (answer: any) => {
    setAnswers((prevAnswer) => [...prevAnswer, answer]);
    setCurrentQuestion(currentQuestion + 1);

    // Vérifie si toutes les questions de l'étape actuelle ont été répondues
    if (currentQuestion === questions[currentStep].length - 1) {
      // Passe à l'étape suivante
      setCurrentStep(currentStep + 1);
      // Réinitialise le numéro de question
      setCurrentQuestion(0);
    }
  };

  const hangleChangePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div>
      {currentStep < questions.length ? (
        <div>
          <h3>Étape {currentStep + 1}</h3>
          <h4>{questions[currentStep][currentQuestion]}</h4>
          <CustomInput
            id="answer"
            inputType="text"
            value={answers[currentQuestion]}
            handleChange={(e) => handleAnswer(e.target.value)}
          />
          <CustomButton
            title="Suivant"
            handleClick={() => handleAnswer("answer")}
            containerStyles="bg-primary-orange-50"
            textStyles="text-primary-orange"
          />
        </div>
      ) : (
        <h3>Merci pour vos réponses à nos questions</h3>
      )}
    </div>
  );
};

export default DynamicForm;
