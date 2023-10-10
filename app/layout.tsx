import { Footer, Navbar } from "@/src/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MKB-Automobile",
  description: "Tout vos vehicule au meilleure prix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
