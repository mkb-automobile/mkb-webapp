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
import { CheckCircle2, ArrowRight, ArrowLeft, Search, User, FileText, Send, Sparkles, Clock, Car, DollarSign, Settings } from "lucide-react";
import { marqueModel, yearsOfProduction, fuels } from "@/src/constants";

interface PersonalizedSearchFormData {
  // Critères de recherche
  marqueSouhaitee: string;
  modeleSouhaite: string;
  budgetMin: string;
  budgetMax: string;
  anneeMin: string;
  anneeMax: string;
  carburant: string;
  boiteVitesse: string;
  nombrePortes: string;
  kilometrageMax: string;
  couleurPreferee: string;
  criteresImportants: string[];
  
  // Coordonnées
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  codePostal: string;
  ville: string;
  
  // Informations complémentaires
  delaiRecherche: string;
  commentaires: string;
  urgence: string;
}

const PersonalizedSearchForm = () => {
  const steps = [
    {
      id: 1,
      title: "Véhicule recherché",
      icon: Car,
      description: "Définissez vos critères de recherche"
    },
    {
      id: 2,
      title: "Budget et préférences",
      icon: DollarSign,
      description: "Votre budget et vos priorités"
    },
    {
      id: 3,
      title: "Vos coordonnées",
      icon: User,
      description: "Comment vous contacter"
    },
    {
      id: 4,
      title: "Délai et informations",
      icon: FileText,
      description: "Détails supplémentaires"
    },
  ];

  const [formData, setFormData] = useState<PersonalizedSearchFormData>({
    marqueSouhaitee: "",
    modeleSouhaite: "",
    budgetMin: "",
    budgetMax: "",
    anneeMin: "",
    anneeMax: "",
    carburant: "",
    boiteVitesse: "",
    nombrePortes: "",
    kilometrageMax: "",
    couleurPreferee: "",
    criteresImportants: [],
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
    ville: "",
    delaiRecherche: "",
    commentaires: "",
    urgence: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (name: keyof PersonalizedSearchFormData, value: string | string[]) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const toggleCriteresImportant = (critere: string) => {
    const current = formData.criteresImportants;
    const updated = current.includes(critere)
      ? current.filter(c => c !== critere)
      : [...current, critere];
    handleInputChange("criteresImportants", updated);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 0) {
      // Pas de validation stricte pour l'étape 1, tous les champs sont optionnels
    } else if (step === 1) {
      if (formData.budgetMin && formData.budgetMax && parseFloat(formData.budgetMin) > parseFloat(formData.budgetMax)) {
        newErrors.budgetMax = "Le budget maximum doit être supérieur au budget minimum";
      }
    } else if (step === 2) {
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
    // await fetch('/api/recherche-personnalisee', { method: 'POST', body: JSON.stringify(formData) });
  };

  const getAvailableModels = () => {
    const selectedMarque = marqueModel.find(m => m.titre === formData.marqueSouhaitee);
    return selectedMarque ? Object.values(selectedMarque.modèles) : [];
  };

  const criteresOptions = [
    "Kilométrage faible",
    "Premier propriétaire",
    "Garantie constructeur",
    "Entretien régulier",
    "Pneus récents",
    "Véhicule d'occasion récent",
    "Options haut de gamme",
  ];

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
                <h3 className="text-h3 font-bold">Véhicule recherché</h3>
                <p className="text-body-sm text-grey">Décrivez le véhicule de vos rêves</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="marqueSouhaitee" className="text-body font-semibold">
                  Marque souhaitée
                </Label>
                <Select
                  value={formData.marqueSouhaitee || "none"}
                  onValueChange={(value) => {
                    handleInputChange("marqueSouhaitee", value === "none" ? "" : value);
                    handleInputChange("modeleSouhaite", "");
                  }}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez une marque (optionnel)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {marqueModel.map((marque) => (
                      <SelectItem key={marque.titre} value={marque.titre}>
                        {marque.titre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modeleSouhaite" className="text-body font-semibold">
                  Modèle souhaité
                </Label>
                <Select
                  value={formData.modeleSouhaite || "none"}
                  onValueChange={(value) => handleInputChange("modeleSouhaite", value === "none" ? "" : value)}
                  disabled={!formData.marqueSouhaitee}
                >
                  <SelectTrigger className="h-12" disabled={!formData.marqueSouhaitee}>
                    <SelectValue placeholder={formData.marqueSouhaitee ? "Sélectionnez un modèle" : "Sélectionnez d'abord une marque"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {getAvailableModels().map((model, index) => (
                      <SelectItem key={index} value={model.replace(" d'occasion", "")}>
                        {model.replace(" d'occasion", "")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="anneeMin" className="text-body font-semibold">Année minimum</Label>
                <Select
                  value={formData.anneeMin || "none"}
                  onValueChange={(value) => handleInputChange("anneeMin", value === "none" ? "" : value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Année minimum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {yearsOfProduction.slice(1).reverse().map((year) => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="anneeMax" className="text-body font-semibold">Année maximum</Label>
                <Select
                  value={formData.anneeMax || "none"}
                  onValueChange={(value) => handleInputChange("anneeMax", value === "none" ? "" : value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Année maximum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {yearsOfProduction.slice(1).reverse().map((year) => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="carburant" className="text-body font-semibold">Type de carburant</Label>
                <Select
                  value={formData.carburant || "none"}
                  onValueChange={(value) => handleInputChange("carburant", value === "none" ? "" : value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez un carburant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {fuels.slice(1).map((fuel) => (
                      <SelectItem key={fuel.value} value={fuel.value}>
                        {fuel.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="boiteVitesse" className="text-body font-semibold">Boîte de vitesse</Label>
                <Select
                  value={formData.boiteVitesse || "none"}
                  onValueChange={(value) => handleInputChange("boiteVitesse", value === "none" ? "" : value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    <SelectItem value="Automatique">Automatique</SelectItem>
                    <SelectItem value="Manuelle">Manuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nombrePortes" className="text-body font-semibold">Nombre de portes</Label>
                <Select
                  value={formData.nombrePortes || "none"}
                  onValueChange={(value) => handleInputChange("nombrePortes", value === "none" ? "" : value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez le nombre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune préférence</SelectItem>
                    {["3", "4", "5"].map((nb) => (
                      <SelectItem key={nb} value={nb}>
                        {nb} portes
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="kilometrageMax" className="text-body font-semibold">Kilométrage maximum</Label>
                <Input
                  id="kilometrageMax"
                  type="number"
                  placeholder="Ex: 50000"
                  value={formData.kilometrageMax}
                  onChange={(e) => handleInputChange("kilometrageMax", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="couleurPreferee" className="text-body font-semibold">Couleur préférée</Label>
                <Input
                  id="couleurPreferee"
                  type="text"
                  placeholder="Ex: Blanc, Noir, Gris..."
                  value={formData.couleurPreferee}
                  onChange={(e) => handleInputChange("couleurPreferee", e.target.value)}
                  className="h-12"
                />
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
                <h3 className="text-h3 font-bold">Budget et préférences</h3>
                <p className="text-body-sm text-grey">Définissez votre budget et vos priorités</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budgetMin" className="text-body font-semibold">
                  Budget minimum (€)
                </Label>
                <Input
                  id="budgetMin"
                  type="number"
                  placeholder="Ex: 15000"
                  value={formData.budgetMin}
                  onChange={(e) => handleInputChange("budgetMin", e.target.value)}
                  className={`h-12 ${errors.budgetMin ? "border-red-500" : ""}`}
                />
                {errors.budgetMin && (
                  <p className="text-sm text-red-500">{errors.budgetMin}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="budgetMax" className="text-body font-semibold">
                  Budget maximum (€)
                </Label>
                <Input
                  id="budgetMax"
                  type="number"
                  placeholder="Ex: 30000"
                  value={formData.budgetMax}
                  onChange={(e) => handleInputChange("budgetMax", e.target.value)}
                  className={`h-12 ${errors.budgetMax ? "border-red-500" : ""}`}
                />
                {errors.budgetMax && (
                  <p className="text-sm text-red-500">{errors.budgetMax}</p>
                )}
              </div>
            </div>

            <Separator className="bg-primary-orange/20" />

            <div className="space-y-4">
              <Label className="text-body font-semibold">Critères importants pour vous</Label>
              <p className="text-body-sm text-grey">Sélectionnez les critères qui comptent le plus</p>
              <div className="grid md:grid-cols-2 gap-3">
                {criteresOptions.map((critere) => (
                  <button
                    key={critere}
                    type="button"
                    onClick={() => toggleCriteresImportant(critere)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      formData.criteresImportants.includes(critere)
                        ? "border-primary-orange bg-primary-orange-50 shadow-medium"
                        : "border-gray-200 hover:border-primary-orange/50 hover:bg-primary-orange-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        formData.criteresImportants.includes(critere)
                          ? "border-primary-orange bg-primary-orange"
                          : "border-gray-300"
                      }`}>
                        {formData.criteresImportants.includes(critere) && (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-body font-medium">{critere}</span>
                    </div>
                  </button>
                ))}
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
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                <StepIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-h3 font-bold">Délai et informations</h3>
                <p className="text-body-sm text-grey">Aidez-nous à mieux vous servir</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="delaiRecherche" className="text-body font-semibold">
                  Délai de recherche souhaité
                </Label>
                <Select
                  value={formData.delaiRecherche}
                  onValueChange={(value) => handleInputChange("delaiRecherche", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sélectionnez un délai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 semaine">1 semaine</SelectItem>
                    <SelectItem value="2 semaines">2 semaines</SelectItem>
                    <SelectItem value="1 mois">1 mois</SelectItem>
                    <SelectItem value="2 mois">2 mois</SelectItem>
                    <SelectItem value="Pas de délai spécifique">Pas de délai spécifique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgence" className="text-body font-semibold">
                  Urgence de votre recherche
                </Label>
                <Select
                  value={formData.urgence}
                  onValueChange={(value) => handleInputChange("urgence", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Niveau d'urgence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Très urgente">Très urgente</SelectItem>
                    <SelectItem value="Urgente">Urgente</SelectItem>
                    <SelectItem value="Normale">Normale</SelectItem>
                    <SelectItem value="Sans urgence">Sans urgence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="commentaires" className="text-body font-semibold">
                  Commentaires ou informations supplémentaires
                </Label>
                <textarea
                  id="commentaires"
                  rows={6}
                  placeholder="Décrivez vos préférences spécifiques, des options particulières, des contraintes, etc..."
                  value={formData.commentaires}
                  onChange={(e) => handleInputChange("commentaires", e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 outline-none transition-all duration-300 resize-none text-body"
                />
              </div>
            </div>

            <Card className="border-2 border-primary-orange-100 bg-primary-orange-50/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-orange mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="text-h4 font-bold">Récapitulatif de votre demande</h4>
                    <div className="space-y-1 text-body-sm text-grey">
                      <p><strong>Recherche:</strong> {formData.marqueSouhaitee || "Marque non spécifiée"} {formData.modeleSouhaite || ""}</p>
                      <p><strong>Budget:</strong> {
                        formData.budgetMin && formData.budgetMax
                          ? `${parseInt(formData.budgetMin).toLocaleString()}€ - ${parseInt(formData.budgetMax).toLocaleString()}€`
                          : formData.budgetMin
                          ? `À partir de ${parseInt(formData.budgetMin).toLocaleString()}€`
                          : "Non spécifié"
                      }</p>
                      <p><strong>Contact:</strong> {formData.prenom} {formData.nom} - {formData.email}</p>
                      {formData.delaiRecherche && (
                        <p><strong>Délai souhaité:</strong> {formData.delaiRecherche}</p>
                      )}
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
          <h3 className="text-h2 font-bold text-gray-900">Demande de recherche envoyée !</h3>
          <p className="text-body-lg text-grey max-w-md mx-auto">
            Nous avons bien reçu votre demande de recherche personnalisée. Notre équipe va analyser vos critères et vous proposer 3 véhicules sous 14 jours.
          </p>
          <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Réponse sous 14 jours
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
        <div className="flex items-center justify-between mb-6 overflow-x-auto pb-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div key={step.id} className="flex items-center flex-1 min-w-[140px]">
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
                  <div className={`mt-2 text-center ${isActive ? "font-semibold" : "text-grey"} text-xs max-w-[120px]`}>
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
            Demande de recherche personnalisée envoyée avec succès !
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Voici un récapitulatif des informations que vous avez envoyées :
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          {/* Critères de recherche */}
          <div className="p-4 bg-primary-orange-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Critères de recherche
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {formData.marqueSouhaitee && <p><span className="font-medium">Marque souhaitée:</span> {formData.marqueSouhaitee}</p>}
              {formData.modeleSouhaite && <p><span className="font-medium">Modèle souhaité:</span> {formData.modeleSouhaite}</p>}
              {formData.budgetMin && <p><span className="font-medium">Budget min:</span> {formData.budgetMin} €</p>}
              {formData.budgetMax && <p><span className="font-medium">Budget max:</span> {formData.budgetMax} €</p>}
              {formData.anneeMin && <p><span className="font-medium">Année min:</span> {formData.anneeMin}</p>}
              {formData.anneeMax && <p><span className="font-medium">Année max:</span> {formData.anneeMax}</p>}
              {formData.carburant && <p><span className="font-medium">Carburant:</span> {formData.carburant}</p>}
              {formData.boiteVitesse && <p><span className="font-medium">Boîte:</span> {formData.boiteVitesse}</p>}
              {formData.kilometrageMax && <p><span className="font-medium">Kilométrage max:</span> {formData.kilometrageMax} km</p>}
              {formData.couleurPreferee && <p><span className="font-medium">Couleur préférée:</span> {formData.couleurPreferee}</p>}
            </div>
            {formData.criteresImportants && formData.criteresImportants.length > 0 && (
              <div className="mt-3 pt-3 border-t">
                <p className="text-sm font-medium mb-2">Critères importants:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.criteresImportants.map((critere, idx) => (
                    <Badge key={idx} variant="outline" className="bg-white">
                      {critere}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
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
          
          {/* Informations complémentaires */}
          {(formData.delaiRecherche || formData.urgence || formData.commentaires) && (
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Informations complémentaires
              </h3>
              <div className="space-y-2 text-sm">
                {formData.delaiRecherche && <p><span className="font-medium">Délai de recherche:</span> {formData.delaiRecherche}</p>}
                {formData.urgence && <p><span className="font-medium">Urgence:</span> {formData.urgence}</p>}
                {formData.commentaires && (
                  <div className="pt-2">
                    <p className="font-medium mb-1">Commentaires:</p>
                    <p className="text-gray-700 whitespace-pre-wrap">{formData.commentaires}</p>
                  </div>
                )}
              </div>
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

export default PersonalizedSearchForm;

