"use client";

import { trustmaryConfig } from "@/src/config/services";
import { useEffect } from "react";

const HomeRevews = () => {
  useEffect(() => {
    const container = document.querySelector("#trustmary-widget");

    if (!container) return;

    const script = document.createElement("script");
    script.src = `https://widget.trustmary.com/${trustmaryConfig.homeApiKey}`;
    script.setAttribute("data-target", "#trustmary-widget");
    container.appendChild(script);
    return () => {};
  }, []);
  return null;
};

export default HomeRevews;
