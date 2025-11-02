import React from "react";

const Main = ({ children }: any) => {
  return (
    <main className="max-w-[1440px] mx-auto pt-28 pb-12 px-6 max-sm:px-4 min-h-screen animate-fade-in">
      {children}
    </main>
  );
};

export default Main;
