import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArtstation,
  FaDiscord,
} from "react-icons/fa";

const footerData = {
  future: ["Action Games", "Real Graphics", "Fighting", "Zombie Games"],
  links: ["Home", "About Us", "Services", "Contact Us"],
  services: ["FAQ", "Support", "Privacy", "Terms & Conditions"],
};

const socialLinks = [
  { name: "Facebook", href: "https://youtube.com", icon: FaYoutube },
  { name: "Twitter", href: "https://artstation.com", icon: FaArtstation },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Discord", href: "https://discord.com", icon: FaDiscord },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#12151F] via-[#10131d] to-[#12151F] text-white pt-20 pb-10 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo.jpg" // Ensure your logo is in the /public folder
                  alt="ARMO Logo"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold font-poppins">
                ARMO <span className="text-brandBlue">Studio</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-poppins font-light">
              ARMO make your next generation immersive experiences and pushing
              the boundaries of interactive entertainment.
            </p>
            <p className="text-sm font-bold font-poppins">GET IN TOUCH </p>
            <div className="flex items-start gap-6 p-4 pl-0">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brandBlue transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Our Future */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerData.links.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-poppins"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins border-b border-white/10 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-4">
              {footerData.services.map((item) => (
                <li
                  key={item}
                  className="text-gray-300 hover:text-brandBlue transition-colors cursor-pointer text-sm font-poppins"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm font-poppins">
            © 2022 <span className="text-white font-medium">ARMO Studio</span>.
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brandBlue/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
