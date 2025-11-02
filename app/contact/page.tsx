import { FormContact } from "@/src/components";
import { Main } from "@/src/components/layouts";
import SocialNetwork from "@/src/components/socialNetwork/SocialNetwork";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Main>
      <div className="flex flex-col justify-center max-w-[1440px] mx-auto space-y-8 animate-fade-in">
        <div className="flex justify-center px-6">
          <div className="text-center space-y-4">
            <h1 className="text-h1 max-sm:text-3xl">
              <span className="text-primary-orange">
                Une question, une demande de renseignements ?
              </span>
              <br /> Contactez-nous
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-6 max-md:px-4">
          <Card className="bg-gradient-to-br from-primary-orange-50 to-white border-0 shadow-large">
            <CardHeader>
              <CardTitle className="text-h3 text-center md:text-left">Par formulaire</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <FormContact />
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-large">
            <CardHeader>
              <CardTitle className="text-h3 text-center md:text-left">Par téléphone</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col items-center justify-center space-y-6">
              <p className="text-body-lg text-center text-grey max-w-sm">
                Vous préférez nous contacter par téléphone ?
              </p>
              
              <Button
                asChild
                variant="orange"
                size="lg"
                className="group"
              >
                <Link href="tel:+33188830917" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>Parler à notre équipe</span>
                </Link>
              </Button>

              <div className="w-full pt-6 border-t border-gray-200">
                <SocialNetwork />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
