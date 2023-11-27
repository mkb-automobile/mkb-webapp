"use client";
import React, { useState } from "react";
import { CustomButton } from "./ui";
import { sipdervoConfig } from "../config";

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

    const response = await fetch(
      `${sipdervoConfig.serverUrl}/api/sendcontactform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

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
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votremail@ ..."
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Téléphone
              </label>
              <div className="mt-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="060707..."
                  required
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
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
