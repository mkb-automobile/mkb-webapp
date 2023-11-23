import { reseauSocial } from "@/src/constants";
import React from "react";
import CustomLink from "../ui/links/CustomLink";

const SocialNetwork = () => {
  return (
    <div className="flex justify-evenly py-5">
      {reseauSocial.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-secondary-red text-white p-5 rounded-full gap-2 shadow-xl"
        >
          <item.logo className="w-6 h-6" />
          <CustomLink title={item.titre} href={item.href} />
        </div>
      ))}
    </div>
  );
};

export default SocialNetwork;
