import React from "react";

const Main = ({ children }: any) => {
  return (
    <main className="overflow-hidden max-w-[1440px] mx-auto pt-36">
      {children}
    </main>
  );
};

export default Main;
