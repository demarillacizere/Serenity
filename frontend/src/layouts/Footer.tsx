import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Button } from "../Components/Button";
import Logo from "../assets/logo_white.png"
export function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end ... p-5 text-white flex justify-around flex-shrink text-lg mt-5">
      <div className="flex-col p-5">
        {/* <img src={Logo} className="w-2/5"/> */}
        <h3 className="text-3xl font-semibold text-white">Serenity</h3>
        <p className="mt-4 text-sm">
          Vestibulum consectetur mi sed ligula efficitur consequat.
        </p>
      </div>
      <div className="flex-col p-5">
        <h3 className="font-bold mb-3 ">Services</h3>
        <ul className="text-sm">
          <li className="py-1">Psychotherapy</li>
          <li className="py-1">Mental Counseling</li>
          <li className="py-1">Support Groups</li>
          <li className="py-1">Case Management</li>
        </ul>
      </div>
      <div className="flex-col p-5 text-sm">
        <h3 className="font-bold mb-3 text-base">Contact</h3>
        <div className="flex gap-2 mb-2">
          <Phone className="w-5" />
          <div>+250784352615</div>
        </div>
        <div className="flex gap-2 mb-2">
          <Mail className="w-5" />
          <div>serenity@gmail.com</div>
        </div>
        <div className="flex gap-2 mb-2">
          <MapPin className="w-5" />
          <div>KN 4 Av, Kigali - Rwanda</div>
        </div>
      </div>
      <div className="flex-col p-5">
        <h3 className="font-bold mb-3 ">Links</h3>
        <ul className="text-sm">
          <li className="py-1">About</li>
          <li className="py-1">Services</li>
          <li className="py-1">Resources</li>
          <li className="py-1">Register</li>
        </ul>
      </div>
    </div>
  );
}
