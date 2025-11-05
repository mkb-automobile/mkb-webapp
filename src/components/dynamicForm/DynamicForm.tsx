"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { CheckCircle2, ArrowRight, ArrowLeft, Car, User, FileText, Send, Sparkles, Clock } from "lucide-react";
import { marqueModel, yearsOfProduction, fuels } from "@/src/constants";

interface FormData {
  // Véhicule
  marque: string;
  modele: string;
  annee: string;
  mois: string;
  nombrePortes: string;
  carburant: string;
  boiteVitesse: string;
  motorisation: string;
  finition: string;
  kilometrage: string;
  couleurInterieur: string;
  couleurExterieur: string;
  etatGeneral: string;
  
  // Coordonnées
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  codePostal: string;
  ville: string;
  adresse: string;
  
  // Informations complémentaires
  commentaires: string;
}

const DynamicForm = () => {
  const steps = [
    {
      id: 1,
      title: "Caractéristiques du véhicule",
      icon: Car,
      description: "Informations sur votre véhicule"
    },
    {
      id: 2,
      title: "Vos coordonnées",
      icon: User,
      description: "Comment vous contacter"
    },
    {
      id: 3,
      title: "Informations complémentaires",
      icon: FileText,
      description: "Détails supplémentaires"
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    marque: "",
    modele: "",
    annee: "",
    mois: "",
    nombrePortes: "",
    carburant: "",
    boiteVitesse: "",
    motorisation: "",
    finition: "",
    kilometrage: "",
    couleurInterieur: "",
    couleurExterieur: "",
    etatGeneral: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
    ville: "",
    adresse: "",
    commentaires: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 0) {
      if (!formData.marque) newErrors.marque = "La marque est requise";
      if (!formData.modele) newErrors.modele = "Le modèle est requis";
      if (!formData.annee) newErrors.annee = "L'année est requise";
      if (!formData.carburant) newErrors.carburant = "Le carburant est requis";
      if (!formData.kilometrage) newErrors.kilometrage = "Le kilométrage est requis";
    } else if (step === 1) {
      if (!formData.nom) newErrors.nom = "Le nom est requis";
      if (!formData.prenom) newErrors.prenom = "Le prénom est requis";
      if (!formData.email) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email invalide";
      }
      if (!formData.telephone) newErrors.telephone = "Le téléphone est requis";
      if (!formData.codePostal) newErrors.codePostal = "Le code postal est requis";
      if (!formData.ville) newErrors.ville = "La ville est requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    // Portfolio: simulation d'envoi avec affichage dans un popup
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setShowDialog(true);
    
    // Here you would send the data to your API
    // await fetch('/api/reprise', { method: 'POST', body: JSON.stringify(formData) });
  };

  const getAvailableModels = () => {
    const selectedMarque = marqueModel.find(m => m.titre === formData.marque);
    return selectedMarque ? Object.values(selectedMarque.modèles) : [];
  };

  const renderStepContent = () => {
    const StepIcon = steps[currentStep].icon;

    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                <StepIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-h3 font-bold">Caractéristiques du véhicule</h3>
                <p className="text-body-sm text-grey">Renseignez les informations principales</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="marque" className="text-body font-semibold">
                  Marque <span className="text-primary-orange">*</span>
                </Label>
                <Select
                  value={formData.marque}
                  onValueChange={(value) => {
                    handleInputChange("marque", value);
                    handleInputChange("modele", ""); // Reset model when brand changes
                  }}
                >
                  <SelectTrigger className={`h-12 ${errors.marque ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Sélectionnez une marque" />
                  </SelectTrigger>
                  <SelectContent>
                    {marqueModel.map((marque) => (
                      <SelectItem key={marque.titre} value={marque.titre}>
                        {marque.titre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.marque && (
                  <p className="text-sm text-red-500">{errors.marque}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="modele" className="text-body font-semibold">
                  Modèle <span className="text-primary-orange">*</span>
                </Label>
                <Select
                  value={formData.modele}
                  onValueChange={(value) => handleInputChange("modele", value)}
                  disabled={!formData.marque}
                >
                  <SelectTrigger className={`h-12 ${errors.modele ? "border-red-500" : ""}`} disabled={!formData.marque}>
                    <SelectValue placeholder={formData.marque ? "Sélectionnez un modèle" : "Sélectionnez d'abord une marque"} />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableModels().map((model, index) => (
                      <SelectItem key={index} value={model.replace(" d'occasion", "")}>
                        {model.replace(" d'occasion", "")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.modele && (
                  <p className="text-sm text-red-500">{errors.modele}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="annee" className="text-body font-semibold">
                  Année de mise en circulation <span className="text-primary-orange">*</span>
                </Label>
                <Select
                  value={formData.annee}
                  onValueChange={(value) => handleInputChange("annee", value)}
                >
                  <SelectTrigger className={`h-12 ${errors.annee ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Sélectionnez une année" />
                  </SelectTrigger>
                  <SelectContent>
                    {yearsOfProduction.slice(1).map((year) => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.annee && (
                  <p className="text-sm text-red-500">{errors.annee}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mois" className="text-body font-semibold">Mois</Label>
                <Select
                  value={formData.mois}
                  onValueChange={(value) => handleInputChange("mois", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez un mois" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"].map((mois) => (
                      <SelectItem key={mois} value={mois}>
                        {mois}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="carburant" className="text-body font-semibold">
                  Carburant <span className="text-primary-orange">*</span>
                </Label>
                <Select
                  value={formData.carburant}
                  onValueChange={(value) => handleInputChange("carburant", value)}
                >
                  <SelectTrigger className={`h-12 ${errors.carburant ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Sélectionnez un carburant" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuels.slice(1).map((fuel) => (
                      <SelectItem key={fuel.value} value={fuel.value}>
                        {fuel.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.carburant && (
                  <p className="text-sm text-red-500">{errors.carburant}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="kilometrage" className="text-body font-semibold">
                  Kilométrage <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="kilometrage"
                  type="number"
                  placeholder="Ex: 50000"
                  value={formData.kilometrage}
                  onChange={(e) => handleInputChange("kilometrage", e.target.value)}
                  className={`h-12 ${errors.kilometrage ? "border-red-500" : ""}`}
                />
                {errors.kilometrage && (
                  <p className="text-sm text-red-500">{errors.kilometrage}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="boiteVitesse" className="text-body font-semibold">Boîte de vitesse</Label>
                <Select
                  value={formData.boiteVitesse}
                  onValueChange={(value) => handleInputChange("boiteVitesse", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Automatique">Automatique</SelectItem>
                    <SelectItem value="Manuelle">Manuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nombrePortes" className="text-body font-semibold">Nombre de portes</Label>
                <Select
                  value={formData.nombrePortes}
                  onValueChange={(value) => handleInputChange("nombrePortes", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez le nombre" />
                  </SelectTrigger>
                  <SelectContent>
                    {["3", "4", "5"].map((nb) => (
                      <SelectItem key={nb} value={nb}>
                        {nb} portes
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motorisation" className="text-body font-semibold">Motorisation</Label>
                <Input
                  id="motorisation"
                  type="text"
                  placeholder="Ex: 1.5 TDI"
                  value={formData.motorisation}
                  onChange={(e) => handleInputChange("motorisation", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="finition" className="text-body font-semibold">Finition</Label>
                <Input
                  id="finition"
                  type="text"
                  placeholder="Ex: Business"
                  value={formData.finition}
                  onChange={(e) => handleInputChange("finition", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="couleurExterieur" className="text-body font-semibold">Couleur extérieur</Label>
                <Input
                  id="couleurExterieur"
                  type="text"
                  placeholder="Ex: Blanc"
                  value={formData.couleurExterieur}
                  onChange={(e) => handleInputChange("couleurExterieur", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="couleurInterieur" className="text-body font-semibold">Couleur intérieur</Label>
                <Input
                  id="couleurInterieur"
                  type="text"
                  placeholder="Ex: Noir"
                  value={formData.couleurInterieur}
                  onChange={(e) => handleInputChange("couleurInterieur", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="etatGeneral" className="text-body font-semibold">État général</Label>
                <Select
                  value={formData.etatGeneral}
                  onValueChange={(value) => handleInputChange("etatGeneral", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez l'état" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Très bon">Très bon</SelectItem>
                    <SelectItem value="Bon">Bon</SelectItem>
                    <SelectItem value="Correct">Correct</SelectItem>
                    <SelectItem value="À restaurer">À restaurer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 1:
    return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                <StepIcon className="w-6 h-6 text-white" />
              </div>
      <div>
                <h3 className="text-h3 font-bold">Vos coordonnées</h3>
                <p className="text-body-sm text-grey">Comment vous joindre ?</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-body font-semibold">
                  Nom <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="nom"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={(e) => handleInputChange("nom", e.target.value)}
                  className={`h-12 ${errors.nom ? "border-red-500" : ""}`}
                />
                {errors.nom && (
                  <p className="text-sm text-red-500">{errors.nom}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-body font-semibold">
                  Prénom <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="prenom"
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={(e) => handleInputChange("prenom", e.target.value)}
                  className={`h-12 ${errors.prenom ? "border-red-500" : ""}`}
                />
                {errors.prenom && (
                  <p className="text-sm text-red-500">{errors.prenom}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-body font-semibold">
                  Email <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-body font-semibold">
                  Téléphone <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange("telephone", e.target.value)}
                  className={`h-12 ${errors.telephone ? "border-red-500" : ""}`}
                />
                {errors.telephone && (
                  <p className="text-sm text-red-500">{errors.telephone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="codePostal" className="text-body font-semibold">
                  Code postal <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="codePostal"
                  type="text"
                  placeholder="75001"
                  value={formData.codePostal}
                  onChange={(e) => handleInputChange("codePostal", e.target.value)}
                  className={`h-12 ${errors.codePostal ? "border-red-500" : ""}`}
                />
                {errors.codePostal && (
                  <p className="text-sm text-red-500">{errors.codePostal}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="ville" className="text-body font-semibold">
                  Ville <span className="text-primary-orange">*</span>
                </Label>
                <Input
                  id="ville"
                  type="text"
                  placeholder="Paris"
                  value={formData.ville}
                  onChange={(e) => handleInputChange("ville", e.target.value)}
                  className={`h-12 ${errors.ville ? "border-red-500" : ""}`}
                />
                {errors.ville && (
                  <p className="text-sm text-red-500">{errors.ville}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="adresse" className="text-body font-semibold">Adresse complète</Label>
                <Input
                  id="adresse"
              type="text"
                  placeholder="Numéro et nom de rue"
                  value={formData.adresse}
                  onChange={(e) => handleInputChange("adresse", e.target.value)}
                  className="h-12"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                <StepIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-h3 font-bold">Informations complémentaires</h3>
                <p className="text-body-sm text-grey">Ajoutez des détails utiles (optionnel)</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="commentaires" className="text-body font-semibold">
                Commentaires ou informations supplémentaires
              </Label>
              <textarea
                id="commentaires"
                rows={6}
                placeholder="Décrivez l'état de votre véhicule, des options particulières, l'historique, etc..."
                value={formData.commentaires}
                onChange={(e) => handleInputChange("commentaires", e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 outline-none transition-all duration-300 resize-none text-body"
              />
            </div>

            <Card className="border-2 border-primary-orange-100 bg-primary-orange-50/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-orange mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="text-h4 font-bold">Récapitulatif</h4>
                    <div className="space-y-1 text-body-sm text-grey">
                      <p><strong>Véhicule:</strong> {formData.marque} {formData.modele} ({formData.annee})</p>
                      <p><strong>Kilométrage:</strong> {formData.kilometrage ? `${parseInt(formData.kilometrage).toLocaleString()} km` : "Non renseigné"}</p>
                      <p><strong>Contact:</strong> {formData.prenom} {formData.nom} - {formData.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-large">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <div className="space-y-4">
          <h3 className="text-h2 font-bold text-gray-900">Demande envoyée avec succès !</h3>
          <p className="text-body-lg text-grey max-w-md mx-auto">
            Nous avons bien reçu votre demande d'estimation. Notre équipe vous contactera sous 24h.
          </p>
          <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Réponse sous 24h
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? "bg-green-500 text-white shadow-medium"
                        : isActive
                        ? "bg-gradient-to-br from-primary-orange to-orange-600 text-white shadow-large scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <StepIcon className="w-6 h-6" />
                    )}
                  </div>
                  <div className={`mt-2 text-center ${isActive ? "font-semibold" : "text-grey"} text-sm max-w-[100px]`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                    index < currentStep ? "bg-green-500" : "bg-gray-200"
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-grey">
          <span>Étape {currentStep + 1} sur {steps.length}</span>
          <span>{Math.round(progress)}% complété</span>
        </div>
      </div>

      <Separator className="bg-primary-orange/20" />

      {/* Step Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="rounded-full min-w-[140px] disabled:opacity-50"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
        Précédent
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button
            type="button"
            variant="orange"
            size="lg"
            onClick={nextStep}
            className="rounded-full min-w-[140px] group"
          >
        Suivant
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="orange"
            size="lg"
            disabled={isSubmitting}
            className="rounded-full min-w-[140px] group shadow-large"
          >
            {isSubmitting ? (
              <>
                <Sparkles className="mr-2 w-5 h-5 animate-spin" />
                Envoi...
              </>
            ) : (
              <>
                Envoyer la demande
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        )}
    </div>
    </form>
    
    {/* Dialog pour afficher les données soumises */}
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            Demande d'estimation envoyée avec succès !
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Voici un récapitulatif des informations que vous avez envoyées :
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          {/* Informations véhicule */}
          <div className="p-4 bg-primary-orange-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Caractéristiques du véhicule
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {formData.marque && <p><span className="font-medium">Marque:</span> {formData.marque}</p>}
              {formData.modele && <p><span className="font-medium">Modèle:</span> {formData.modele}</p>}
              {formData.annee && <p><span className="font-medium">Année:</span> {formData.annee}</p>}
              {formData.carburant && <p><span className="font-medium">Carburant:</span> {formData.carburant}</p>}
              {formData.kilometrage && <p><span className="font-medium">Kilométrage:</span> {formData.kilometrage} km</p>}
              {formData.boiteVitesse && <p><span className="font-medium">Boîte:</span> {formData.boiteVitesse}</p>}
              {formData.couleurExterieur && <p><span className="font-medium">Couleur extérieure:</span> {formData.couleurExterieur}</p>}
              {formData.etatGeneral && <p><span className="font-medium">État général:</span> {formData.etatGeneral}</p>}
            </div>
          </div>
          
          {/* Coordonnées */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <User className="w-5 h-5" />
              Vos coordonnées
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {formData.nom && <p><span className="font-medium">Nom:</span> {formData.nom}</p>}
              {formData.prenom && <p><span className="font-medium">Prénom:</span> {formData.prenom}</p>}
              {formData.email && <p><span className="font-medium">Email:</span> {formData.email}</p>}
              {formData.telephone && <p><span className="font-medium">Téléphone:</span> {formData.telephone}</p>}
              {formData.codePostal && <p><span className="font-medium">Code postal:</span> {formData.codePostal}</p>}
              {formData.ville && <p><span className="font-medium">Ville:</span> {formData.ville}</p>}
            </div>
          </div>
          
          {/* Commentaires */}
          {formData.commentaires && (
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Commentaires
              </h3>
              <p className="text-base text-gray-700 whitespace-pre-wrap">{formData.commentaires}</p>
            </div>
          )}
          <div className="pt-4 border-t">
            <p className="text-sm text-red-600 font-medium">
              ⚠️ Important : Les messages ne sont pas envoyés. Ceci est une démonstration pour portfolio uniquement.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default DynamicForm;
