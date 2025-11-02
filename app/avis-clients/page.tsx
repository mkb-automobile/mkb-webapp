"use client";
import "../../src/styles/trustmary.css";
import { Main } from "@/src/components/layouts";
import AllRevews from "@/src/components/trustmary/AllRevews";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Star, Heart, Users } from "lucide-react";
import React from "react";

const Revews = () => {
  return (
    <Main>
      <AllRevews />
      <div className="w-full space-y-12 animate-fade-in">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-primary-orange fill-primary-orange" />
            <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 text-base">
              <Users className="w-4 h-4 mr-2" />
              Témoignages clients
            </Badge>
            <Star className="w-8 h-8 text-primary-orange fill-primary-orange" />
          </div>
          <h1 className="text-h1 max-w-4xl">
            <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
              Parce que la satisfaction de nos clients
            </span>{" "}
            est au cœur de notre métier
          </h1>
          <p className="text-body-lg text-grey max-w-2xl">
            Découvrez les avis authentiques de nos clients satisfaits. Plus de 98% d'entre eux nous recommandent.
          </p>
        </div>
        <Card className="border-0 shadow-large bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div id="trustmary-widget-reviews" className="min-h-[600px] flex items-center justify-center" />
          </CardContent>
        </Card>
      </div>
    </Main>
  );
};

export default Revews;
