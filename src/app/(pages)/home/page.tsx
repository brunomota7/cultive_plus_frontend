"use client";
import Dashboard from "@/components/home/Dashboard";
import Profile from "@/components/home/Profile";
import Sales from "@/components/home/Sales";
import Setting from "@/components/home/Setting";
import { useState } from "react";
import { motion } from "motion/react";
import { LogIn, BadgeDollarSign, Settings, LayoutDashboard, User, X, Menu, MessageCircleMore } from 'lucide-react';
import Chat from "@/components/home/Chat";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeContent, setActiveContent] = useState("Painel");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

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
                    initial={{ x: -300 }}
                    animate={{ x: isOpen ? 0: -300}}
                    transition={{ type: "spring", stiffness: 70, damping: 20, duration: 0.8 }}
                    className="fixed top-0 left-0 h-screen bg-emerald-800 text-white w-64 z-10"
                >
                    <div className="flex justify-between items-center p-4 border-emerald-700">
                        <h2 className="ml-1 text-xl font-bold">Cultive<span className="font-extrabold text-green-500">+</span></h2>
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

            {/* Conteúdo principal  */}
            <motion.div
                className={`flex flex-1 ${isOpen ? "ml-64": "w-full" } transition-all duration-300 ease-in-out`}
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
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="w-full min-h-screen p-4 bg-gray-100"
                >
                    { renderContent() }
                </motion.div>
            </motion.div>
        </div>
    );
}