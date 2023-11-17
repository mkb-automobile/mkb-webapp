import React from "react";

const CardDescription = ({ car }: any) => {
  const descriptionArray = car?.description;
  const descriptionString = descriptionArray?.[0];
  const elements = descriptionString
    ?.split("<br />")
    .map((item: any, index: any) => <li key={index}>{item}</li>);

  return (
    <div className="bg-primary-orange-50 p-10 max-sm:flex flex-col items-center gap-5 justify-evenly rounded-xl shadow-2xl">
      <ul className="grid grid-cols-2 text-md">{elements}</ul>
    </div>
  );
};

export default CardDescription;
