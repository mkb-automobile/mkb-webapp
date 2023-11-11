import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar } from "@/src/components/layouts";
import { CarContextProvider } from "@/src/hooks/CarContext";

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
      <body className="">
        <Navbar />
        <CarContextProvider>{children}</CarContextProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
