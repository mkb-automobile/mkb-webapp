"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Data {
  name: string;
  marque: string;
  modele: string;
  prix_achat: string;
  photo: string;
}

function Taking() {
  return (
    <main className="pt-36">
      <div>Ceci est la page Reprise</div>
    </main>
  );
}

export default Taking;
