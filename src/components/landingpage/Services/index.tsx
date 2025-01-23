"use client";
import { BarChartBig, CloudSunRain, Handshake, Rocket } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const services = [
    { title: 'Conectamos você a compradores', description: 'Ajudamos a compradores chegar até você e adquirir seus produtos.', icon: <Handshake className="w-12 h-12 text-amber-400" /> },
    { title: 'Dados estatísticos', description: 'Geramos dados estatísticos para você baseados em seus plantios ou colheitas.', icon: <BarChartBig className="w-12 h-12 text-amber-400" /> },
    { title: 'Alertas Climáticos', description: 'A cultive te informa sobre o clima e qual soluções para evitar percas.', icon: <CloudSunRain className="w-12 h-12 text-amber-400" /> },
    { title: 'Gerenciamento', description: 'Ajudaremos você a gerenciar seu negócio e assim crescer cada vez mais.', icon: <Rocket className="w-12 h-12 text-amber-400" /> },
];

export default function Service() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[500px] p-4 flex flex-col items-center justify-center bg-[#438f55]">
            <main className="w-4/5 h-auto py-6 flex flex-col items-center justify-center bg-[#0b5d43] rounded-2xl">
                <h2 className="text-4xl font-extrabold text-white ml-2">Nossos Serviços</h2>
                <section className="relative w-full flex items-center justify-center">
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="w-full flex flex-col items-center text-center"
                        >
                            <div className="p-6 flex flex-col items-center">
                                <div className="flex items-center gap-4">
                                    <div className="mb-4 sm:mb-6">
                                        {services[currentIndex].icon}
                                    </div>
                                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{services[currentIndex].title}</h3>
                                </div>
                                <p className="text-white text-base sm:text-lg font-light leading-relaxed max-w-2xl px-4 sm:px-0">
                                    {services[currentIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>
                <div>
                    <div className="mt-2 sm:mt-4 flex items-center justify-center space-x-2 sm:space-x-4">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${currentIndex === index ? "bg-amber-400" : "bg-emerald-400"}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}