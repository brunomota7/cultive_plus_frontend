"use client";
import Dashboard from "@/app/(pages)/home/(pages home)/Dashboard";
import Profile from "@/app/(pages)/home/(pages home)/Profile";
import Sales from "@/app/(pages)/home/(pages home)/Sales";
import Setting from "@/app/(pages)/home/(pages home)/Setting";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LogIn,
  BadgeDollarSign,
  Settings,
  LayoutDashboard,
  User,
  X,
  Menu,
  MessageCircleMore,
} from "lucide-react";
import Chat from "@/app/(pages)/home/(pages home)/Chat";
import "../../../styles/scrollbar.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("Painel");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
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
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      {isOpen && (
        <motion.aside
          initial={{ x: isOpen ? 0 : -200 }}
          animate={{ x: isOpen ? 0 : -200 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="hidden lg:block fixed top-0 left-0 h-screen bg-emerald-800 text-white w-64 z-20"
        >
          <div className="flex justify-between items-center p-4 border-emerald-700">
            <h2 className="ml-1 text-xl font-bold">
              Cultive<span className="font-extrabold text-green-500">+</span>
            </h2>
            <button onClick={toggleSidebar} className="text-white">
              <X />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {[
              { label: "Painel", icon: <LayoutDashboard /> },
              { label: "Perfil", icon: <User /> },
              { label: "Vendas", icon: <BadgeDollarSign /> },
              { label: "Chat", icon: <MessageCircleMore /> },
              { label: "Configurações", icon: <Settings /> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => setActiveContent(label)}
                className="flex items-center space-x-3 hover:bg-emerald-700 rounded-md p-2 text-left"
              >
                {icon}
                <span className="font-normal text-xl">{label}</span>
              </button>
            ))}
            <button
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:bg-emerald-700 rounded-md p-2"
            >
              <LogIn />
              <span className="font-normal text-xl">Sair</span>
            </button>
          </nav>
        </motion.aside>
      )}

      {/* Menu Mobile */}
      <header className="lg:hidden bg-emerald-800 text-white w-full flex justify-between items-center p-4 z-10">
        <h2 className="ml-1 text-xl font-bold">
          Cultive<span className="font-extrabold text-green-500">+</span>
        </h2>
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>
      {menuOpen && (
        <motion.nav
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden fixed inset-y-0 left-0 w-64 bg-emerald-800 text-white z-30"
        >
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="text-white absolute top-4 right-4"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-6">
              Cultive<span className="font-extrabold text-green-500">+</span>
            </h2>
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Painel" },
                { label: "Perfil" },
                { label: "Vendas" },
                { label: "Chat" },
                { label: "Configurações" },
              ].map(({ label }) => (
                <button
                  key={label}
                  onClick={() => {
                    setActiveContent(label);
                    setMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 hover:bg-emerald-700 rounded-md p-2"
                >
                  <span className="font-normal text-lg">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.nav>
      )}

      {/* Conteúdo principal */}
      <motion.div
        className={`flex flex-1 ${isOpen ? "ml-64" : "w-full"} transition-all duration-300 ease-in-out`}
      >
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 p-2 bg-emerald-700 text-white rounded-md focus:outline-none"
          >
            <Menu />
          </button>
        )}
        <motion.div
          key={activeContent}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full min-h-screen p-4 pt-4 bg-gray-100 scrollbar"
        >
          {renderContent()}
        </motion.div>
      </motion.div>
    </div>
  );
}
