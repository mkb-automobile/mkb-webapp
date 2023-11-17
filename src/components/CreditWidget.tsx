"use client";
import React, { useState } from "react";
import { CustomButton } from "./ui";
import { submitLoanApplication } from "../services";
import MensualiteCard from "./cards/mensualiteCard/MensualiteCard";
import CustomLink from "./ui/links/CustomLink";

interface LoanResponse {
  affecte: boolean;
  mensualite_12?: number;
  mensualite_24?: number;
  mensualite_36?: number;
  mensualite_48?: number;
  mensualite_60?: number;
  mensualite_72?: number;
  url: string;
}

const CreditWidget = () => {
  const [loanAmount, setLoanAmount] = useState<number>(15000);
  const [apport, setApport] = useState<number>(3000);
  const [loanDuration, setLoanDuration] = useState<number>(12);
  const [response, setResponse] = useState<LoanResponse | null>(null);

  const mensualites = [
    { mois: 12, mensualite: response?.mensualite_12 ?? "Non défini" },
    { mois: 24, mensualite: response?.mensualite_24 ?? "Non défini" },
    { mois: 36, mensualite: response?.mensualite_36 ?? "Non défini" },
    { mois: 48, mensualite: response?.mensualite_48 ?? "Non défini" },
    { mois: 60, mensualite: response?.mensualite_60 ?? "Non défini" },
    { mois: 72, mensualite: response?.mensualite_72 ?? "Non défini" },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      authkey: process.env.NEXT_PUBLIC_LENBOX_AUTH_KEY,
      vd: process.env.NEXT_PUBLIC_LENBOX_VD,
      montant: loanAmount,
      apport: apport,
      duree: loanDuration,
      marque: "Test",
    };

    try {
      const responseData = await submitLoanApplication(data);
      // console.log("responseData", responseData);

      setResponse(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full border rounded-xl bg-white shadow-2xl">
      <div className="pt-5">
        <h3 className="text-center">Obtenez votre crédit en 5 minutes</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="py-20 flex flex-col gap-16 justify-between "
      >
        <div className="flex flex-col px-10">
          <div className="w-full flex justify-between">
            <label htmlFor="loanAmount">Montant à financer:</label>
            <input
              id="loanAmount"
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value, 10))}
              className="border rounded-xl w-1/4  pl-2 sm:pl-10 xl:pl-14"
            />
          </div>
          <div className="w-full flex justify-center pt-1">
            <input
              type="range"
              min={1500}
              max={100000}
              step={50}
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col px-10">
          <div className="w-full flex justify-between">
            <label htmlFor="apport">Votre apport :</label>
            <input
              id="apport"
              type="text"
              value={apport}
              onChange={(e) => setApport(parseInt(e.target.value, 10))}
              className="border rounded-xl w-1/4 pl-2 sm:pl-10 xl:pl-14"
            />
          </div>
          <div className="w-full flex justify-center pt-2">
            <input
              type="range"
              min={0}
              max={12000}
              step={50}
              value={apport}
              onChange={(e) => setApport(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between px-10">
            <label htmlFor="loanDuration">Durée du prêt:</label>
            {loanDuration} mois
          </div>
          <div className="px-10">
            <input
              id="loanDuration"
              type="range"
              min={0}
              step={12}
              max={72}
              value={loanDuration}
              onChange={(e) => setLoanDuration(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
        </div>

        <div className="px-10">
          <div className="flex flex-col">
            {response !== null && (
              <div className="w-full">
                <p>Choisisez votre formule</p>
                <p>
                  Type de crédit:{" "}
                  <span className=" font-semibold">
                    {response?.affecte === true
                      ? "Crédit affecté"
                      : "Crédit conso"}
                  </span>
                </p>
                <div className="grid grid-cols-1 gap-2 pt-5">
                  {mensualites.map((mois) => (
                    <MensualiteCard mois={mois} />
                  ))}
                </div>
                <div className="flex justify-center pt-5">
                  <CustomLink
                    title="Continuer le processus de financement"
                    href={response?.url}
                    containerStyles="text-primary-orange-500 font-semibold"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <CustomButton
            title="Faire ma sumulation"
            btnType="submit"
            containerStyles="bg-secondary-red text-white rounded-xl shadow-2xl w-1/2"
          />
        </div>
      </form>
    </div>
  );
};

export default CreditWidget;
