"use client";
import { FormContact } from "@/src/components";
import { Main } from "@/src/components/layouts";
import SocialNetwork from "@/src/components/socialNetwork/SocialNetwork";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Main>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col justify-center max-w-[1440px] mx-auto space-y-20 px-6 max-md:px-4"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-primary-orange" />
            <Badge variant="outline" className="border-primary-orange/50 bg-primary-orange/10 text-primary-orange px-6 py-2 text-base">
              Contactez-nous
            </Badge>
            <MessageCircle className="w-6 h-6 text-primary-orange" />
          </div>
          <h1 className="text-h1 max-sm:text-4xl font-bold leading-tight">
            <span className="text-primary-orange bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
              Une question, une demande de renseignements ?
            </span>
            <br /> 
            <span className="text-gray-900">Contactez-nous</span>
          </h1>
          <p className="text-body-lg text-grey max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Formulaire Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-orange-50 via-white to-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10 bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-h2 font-bold">Par formulaire</CardTitle>
                </div>
                <CardDescription className="text-body text-grey">
                  Remplissez le formulaire et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-8">
                <FormContact />
              </CardContent>
            </Card>
          </motion.div>

          {/* Téléphone Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-primary-orange-50/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10 bg-gradient-to-r from-primary-orange-50 to-transparent border-b border-primary-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center shadow-medium">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-h2 font-bold">Par téléphone</CardTitle>
                </div>
                <CardDescription className="text-body text-grey">
                  Appelez-nous directement ou envoyez-nous un email
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-8 flex flex-col items-center justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center space-y-4"
                >
                  <p className="text-body-lg text-grey max-w-sm">
                    Vous préférez nous contacter par téléphone ?
                  </p>
                  <div className="flex items-center justify-center gap-2 text-body text-grey">
                    <Clock className="w-4 h-4 text-primary-orange" />
                    <span>Du lundi au vendredi, 9h - 18h</span>
                  </div>
                </motion.div>
                
                <div className="w-full space-y-4">
                  <Button
                    asChild
                    variant="orange"
                    size="lg"
                    className="w-full rounded-full group shadow-large"
                  >
                    <motion.a
                      href="tel:+33188830917"
                      className="flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>01 88 83 09 17</span>
                      <ArrowRight className="ml-auto w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full group"
                  >
                    <motion.a
                      href="mailto:contact@mkbautomobile.fr"
                      className="flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-5 h-5 text-primary-orange" />
                      <span>contact@mkbautomobile.fr</span>
                      <ArrowRight className="ml-auto w-5 h-5 text-primary-orange group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </Button>
                </div>

                <Separator className="bg-primary-orange/20 w-full" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary-orange" />
                    <p className="text-body-sm font-semibold text-gray-900">Suivez-nous</p>
                  </div>
                  <SocialNetwork />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Main>
  );
};

export default Contact;
