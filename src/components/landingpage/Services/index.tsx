"use client";
import { BarChartBig, CloudSunRain, Handshake, Rocket } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Conectamos você a compradores",
    description: "Ajudamos a compradores chegar até você e adquirir seus produtos.",
    icon: <Handshake className="w-16 h-16 text-amber-400" />,
  },
  {
    title: "Dados estatísticos",
    description: "Geramos dados estatísticos para você baseados em seus plantios ou colheitas.",
    icon: <BarChartBig className="w-16 h-16 text-amber-400" />,
  },
  {
    title: "Alertas Climáticos",
    description: "A cultive te informa sobre o clima e qual soluções para evitar percas.",
    icon: <CloudSunRain className="w-16 h-16 text-amber-400" />,
  },
  {
    title: "Gerenciamento",
    description: "Ajudaremos você a gerenciar seu negócio e assim crescer cada vez mais.",
    icon: <Rocket className="w-16 h-16 text-amber-400" />,
  },
];

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-auto p-6 flex flex-col items-center justify-center bg-gradient-to-b from-emerald-700 to-emerald-900"
      id="Services"
    >
      <main className="w-full max-w-5xl p-8 flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 to-green-600 shadow-lg rounded-3xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
          Nossos Serviços
        </h2>
        <section className="relative w-full flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center text-center"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="mb-4">{services[currentIndex].icon}</div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                  {services[currentIndex].title}
                </h3>
                <p className="text-white text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                  {services[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
        <div className="mt-6 flex items-center justify-center space-x-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-amber-400 scale-110"
                  : "bg-emerald-400"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
