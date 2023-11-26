import { marqueModel } from "@/src/constants";
import React from "react";

const SeoCarManufactures = () => {
  return (
    <>
      <section className="w-full flex justify-center py-20 bg-primary-orange-50 border shadow-xl">
        <div className="max-w-[1440px] mx-auto px-5 max-sm:p-4">
          <div className="w-ful flex justify-center items-center pb">
            <h2>
              Quelques-une de nos{" "}
              <span style={{ color: "#ff9f1c" }}>marques de voiture</span>
            </h2>
          </div>
          <div className="w-full flex flex-wrap gap-20 py-10">
            {marqueModel.map((marque, index) => (
              <div key={index} className="flex flex-col ">
                <div>
                  <h3>{marque.titre}</h3>
                </div>
                <div className="flex flex-col gap-1">
                  {Object.values(marque.modèles).map((model, index) => (
                    <div key={index}>
                      <p>{model}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoCarManufactures;
