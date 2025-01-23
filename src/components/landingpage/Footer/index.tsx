"use client";
import { Copyright } from "lucide-react";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";

const itemsLink = [
  {
    title: "Recursos",
    links: [
      { li: "Use Cultive+", url: "#" },
      { li: "Documentação", url: "#" },
      { li: "Suporte", url: "#" },
    ],
  },
  {
    title: "Desenvolvedores",
    links: [
      { li: "GitHub", url: "#" },
      { li: "LinkedIn", url: "#" },
      { li: "Time", url: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { li: "Sobre", url: "#" },
      { li: "Contato", url: "#" },
      { li: "Parcerias", url: "#" },
    ],
  },
  {
    title: "Redes Sociais",
    links: [
      { li: "Facebook", url: "#" },
      { li: "Instagram", url: "#" },
      { li: "Twitter", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-emerald-950 text-white">
      {/* Top Section */}
      <div className="w-full px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <h2 className="text-3xl font-extrabold">
              Cultive<span className="text-green-500">+</span>
            </h2>
          </div>
          <p className="text-emerald-200 text-lg font-light text-center md:text-left mt-4">
            A plataforma que impulsiona seus cultivos!
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-around w-full md:w-2/3 gap-2">
          {itemsLink.map((category, index) => (
            <div className="flex flex-col items-center md:items-start gap-2" key={index}>
              <h4 className="text-lg font-bold text-emerald-300">{category.title}</h4>
              {category.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="text-sm font-light hover:underline"
                >
                  {link.li}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between border-t-2 border-emerald-800 px-6 py-6">
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
          <div className="flex items-center gap-2">
            <Copyright width={16} height={16} />
            <h3 className="text-sm">
              2025 <span className="ml-1">Cultive</span>
              <span className="font-extrabold text-green-500">+</span>
            </h3>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm hover:underline">
              Termos
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacidade
            </a>
          </div>
        </div>

        {/* Rights Reserved */}
        <div className="mt-4 md:mt-0">
          <div className="border border-green-500 rounded-full px-4 py-1">
            <h4 className="text-xs font-light text-green-300 tracking-wide">
              All RIGHTS RESERVED
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}