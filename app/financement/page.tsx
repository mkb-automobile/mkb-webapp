import { Main } from "@/src/components/layouts";
import React from "react";

const Financing = () => {
  return (
    <Main>
      <section>
        <div>
          <h1 className="">
            <span style={{ color: "#ff9f1c" }}>Financez votre véhicule</span> en
            ligne
          </h1>
          <p>
            <strong>
              Vous cherchez un financement pour votre nouveau véhicule ?
            </strong>
          </p>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2 className="">Paiement en plusieurs fois</h2>
          </div>
          <div>
            <h2 className="">Crédit financement</h2>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Financing;
