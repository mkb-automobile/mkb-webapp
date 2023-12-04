"use client";
import React, { useState } from "react";
import { CustomButton } from "./ui";
import { sipdervoConfig } from "../config/services";
import CustomInput from "./ui/inputs/CustomInput";

const FormContact = ({ car }: any) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // const router = useRouter();
  const marque = car?.marque;
  const modele = car?.modele;
  const refCar = car?.reference;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: name,
      firstName: firstName,
      email: email,
      phone: phone,
      message: message,
      marque: marque,
      modele: modele,
      refCar: refCar,
    };

    console.log(formData);

    const response = await fetch(`${sipdervoConfig.serverUrl}/api/form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.log("Email sent failed");
    }

    setName("");
    setFirstName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form
      className="bg-white p-10 rounded-2xl border shadow-2xl w-full"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <CustomInput
                title="Nom"
                id="last-name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
                required={true}
                containerStyles="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                textStyles="block text-sm font-medium leading-6 text-gray-900"
              />
            </div>

            <div className="sm:col-span-3">
              <CustomInput
                title="Prénom"
                id="first-name"
                value={firstName}
                handleChange={(e) => setFirstName(e.target.value)}
                required={true}
                containerStyles="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                textStyles="block text-sm font-medium leading-6 text-gray-900"
              />
            </div>

            <div className="sm:col-span-5">
              <CustomInput
                title="Email"
                id="email"
                inputType="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                required={true}
                containerStyles="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                textStyles="block text-sm font-medium leading-6 text-gray-900"
              />
            </div>
            <div className="sm:col-span-4">
              <CustomInput
                title="Téléphone"
                id="phone"
                inputType="tel"
                value={phone}
                handleChange={(e) => setPhone(e.target.value)}
                required={true}
                containerStyles="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                textStyles="block text-sm font-medium leading-6 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <CustomInput
                title="Message"
                id="message"
                inputType="textarea"
                rows={5}
                value={message}
                handleChange={(e) => setMessage(e.target.value)}
                required={true}
                containerStyles="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                textStyles="block text-sm font-medium leading-6 text-gray-900"
              />
            </div>
          </div>
          <CustomButton
            title="Envoyer"
            btnType="submit"
            containerStyles="bg-primary-orange rounded-full mt-10 shadow-xl"
          />
        </div>
      </div>
    </form>
  );
};
export default FormContact;
