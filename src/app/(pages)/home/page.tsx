"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import Dashboard from "@/app/(pages)/home/(pages home)/Dashboard";
import Profile from "@/app/(pages)/home/(pages home)/Profile";
import Sales from "@/app/(pages)/home/(pages home)/Sales";
import Setting from "@/app/(pages)/home/(pages home)/Setting";
import Chat from "@/app/(pages)/home/(pages home)/Chat";
import "../../../styles/scrollbar.css";

export default function Home() {
  const [activeContent, setActiveContent] = useState("Painel");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const renderContent = () => {
    switch (activeContent) {
      case "Painel":
        return <Dashboard />;
      case "Perfil":
        return <Profile />;
      case "Vendas":
        return <Sales />;
      case "Configurações":
        return <Setting />;
      case "Chat":
        return <Chat />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-emerald-700 to-green-500 text-white shadow-md flex justify-between items-center px-6 z-50"
      >
        <h2 className="text-3xl font-bold">
          Cultive<span className="font-extrabold text-yellow-300">+</span>
        </h2>
        <nav className="hidden lg:flex gap-6 text-lg font-light">
          {["Painel", "Perfil", "Vendas", "Chat", "Configurações"].map((label) => (
            <button
              key={label}
              onClick={() => setActiveContent(label)}
              className="hover:text-yellow-300 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </motion.header>

      {/* Menu Mobile */}
      {menuOpen && (
        <motion.nav
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden fixed top-2 right-2 w-64 h-80 bg-white/90 backdrop-blur-md shadow-lg z-50 p-6 flex flex-col space-y-6 rounded-md"
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <X size={28} className="text-emerald-800" />
          </button>
          {["Painel", "Perfil", "Vendas", "Chat", "Configurações"].map((label) => (
            <button
              key={label}
              onClick={() => {
                setActiveContent(label);
                setMenuOpen(false);
              }}
              className="text-xl font-light hover:text-emerald-600 transition-colors"
            >
              {label}
            </button>
          ))}
        </motion.nav>
      )}

      {/* Conteúdo principal */}
      <motion.div
        key={activeContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-16 h-[calc(100vh-4rem)] w-full bg-gray-50 overflow-auto scrollbar"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
