"use client";
import Image from "next/image";
import { CarCardProps } from "../../../types";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "../../localStorage/SaveToLocalStorage";
import { formatNumber } from "@/src/utils";
import { ArrowRight, Calendar, Fuel, Gauge, Settings } from "lucide-react";

function CarCard({ data }: CarCardProps) {
  const router = useRouter();

  const {
    marque,
    modele,
    kilometrage,
    energie,
    typeboite,
    photos,
    prixttcaffiche,
    reference,
    anneemodele,
  } = data;

  const newModel = modele.replace(/\s/g, "-").toLocaleLowerCase();
  const newMarque = marque.replace(/\s/g, "-").toLocaleLowerCase();

  const handleViewMoreClick = () => {
    saveToLocalStorage({
      storageKey: "carDada",
      data: data,
    });
    router.push(`/voitures-occasions/${newMarque}-${newModel}-${reference}`);
  };

  return (
    <Card className="car-card group border-0 shadow-large bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <CardContent className="p-6 space-y-4">
        {/* Header with title and price */}
        <div className="space-y-3">
          <div>
            <h3 className="text-h3 font-bold text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
              {marque} {modele}
            </h3>
            <Badge variant="outline" className="mt-2 border-primary-orange/30 bg-primary-orange/5 text-primary-orange text-xs">
              {anneemodele}
            </Badge>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">
              {formatNumber(prixttcaffiche)}
            </span>
            <span className="text-sm font-medium text-grey">€</span>
          </div>
        </div>

        {/* Image with overlay effect */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 group-hover:from-black/30 transition-all duration-500" />
          <Image
            src={photos?.photo?.[0] ?? "/no-img.png"}
            alt={`${marque} ${modele}`}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Car specs */}
        <div className="relative flex w-full">
          <div className="flex group-hover:opacity-0 transition-opacity duration-300 w-full justify-between text-gray-600">
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
              <div className="p-2 rounded-lg bg-primary-orange-50">
                <Settings className="w-5 h-5 text-primary-orange" />
              </div>
              <p className="text-sm font-medium">{typeboite == "A" ? "Auto" : "Manu"}</p>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
              <div className="p-2 rounded-lg bg-primary-orange-50">
                <Gauge className="w-5 h-5 text-primary-orange" />
              </div>
              <p className="text-sm font-medium">{formatNumber(kilometrage)} km</p>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
              <div className="p-2 rounded-lg bg-primary-orange-50">
                <Fuel className="w-5 h-5 text-primary-orange" />
              </div>
              <p className="text-sm font-medium">
                {energie == "DIESEL" ? "Diesel" : "Essence"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
              <div className="p-2 rounded-lg bg-primary-orange-50">
                <Calendar className="w-5 h-5 text-primary-orange" />
              </div>
              <p className="text-sm font-medium">{anneemodele}</p>
            </div>
          </div>

          {/* Button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              variant="orange"
              size="lg"
              onClick={handleViewMoreClick}
              className="w-full rounded-full shadow-large hover:shadow-xl transition-all duration-300 group/btn"
            >
              Voir plus
              <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CarCard;
