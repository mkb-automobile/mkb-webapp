import "../../src/styles/trustmary.css";
import { Main } from "@/src/components/layouts";
import AllRevews from "@/src/components/trustmary/AllRevews";
import React from "react";

const Revews = () => {
  return (
    <Main>
      <AllRevews />
      <div className="w-full h-full">
        <h2 className="flex flex-col justify-center items-center">
          <span style={{ color: "#ff9f1c" }}>
            Parce que la satisfaction de nos clients
          </span>{" "}
          est au coeur de notre métier
        </h2>
        <div id="trustmary-widget-reviews" />
      </div>
    </Main>
  );
};

export default Revews;
