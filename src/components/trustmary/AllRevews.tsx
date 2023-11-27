"use client";

import { trustmaryConfig } from "@/src/config";
import { useEffect } from "react";

const AllRevews = () => {
  useEffect(() => {
    const revewsContainer = document.querySelector("#trustmary-widget-reviews");

    if (!revewsContainer) return;

    const script = document.createElement("script");
    script.src = `https://widget.trustmary.com/${trustmaryConfig.allApiKey}`;
    script.setAttribute("data-target", "#trustmary-widget-reviews");
    revewsContainer.appendChild(script);
    return () => {};
  }, []);
  return null;
};

export default AllRevews;
