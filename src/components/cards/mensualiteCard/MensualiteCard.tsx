import React from "react";

const MensualiteCard = ({ mois }: any) => {
  return (
    <div
      key={mois.mois}
      className="flex justify-between bg-primary-orange border shadow-lg rounded-lg p-5 gap-2"
    >
      <h3>{`Mensualité ${mois.mois} mois`} </h3>
      <p>{mois.mensualite} €</p>
    </div>
  );
};

export default MensualiteCard;
