import React, { useState } from "react";

const MultiStepForm = () => {
  const steps = [
    {
      title: "Votre voiture",
      questions: [
        "Marque",
        "Modèle",
        "Année",
        "Mois",
        "Nombre de portes",
        "Carburant",
        "Boite de vitesse",
        "Motorisation",
        "Finition",
        "Kilométrage",
        "Couleur intérieur",
        "Couleur extérieur",
      ],
    },
    {
      title: "Vos Coordonnées",
      questions: [
        "Nom",
        "Prénom",
        "Email",
        "Téléphone",
        "Code postal",
        "Ville",
        "Adresse",
      ],
    },
  ];

  // Déclarer le type de formData
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const renderStep = () => {
    const currentQuestions = steps[currentStep].questions;

    return (
      <div>
        <h2>{steps[currentStep].title}</h2>
        {currentQuestions.map((question, index) => (
          <div key={index}>
            <label>{question}:</label>
            <input
              type="text"
              name={question}
              value={formData[question] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderStep()}
      <button onClick={prevStep} disabled={currentStep === 0}>
        Précédent
      </button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
        Suivant
      </button>
    </div>
  );
};

export default MultiStepForm;
