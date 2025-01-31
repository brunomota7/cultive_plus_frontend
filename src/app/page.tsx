"use client";
import Image from "next/image";
import ImgHeaderBg from "../../public/images/fundoHeader.png";
import ImgFeatures from "../../public/images/fundoFeatures.png";
import ImgFundoAbout from "../../public/images/fundoAbout.png";
import ImgLogo from "../../public/images/logo.png";
import { Check, Copyright, BarChartBig, CloudSunRain, Handshake, Rocket, Mail, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const itemsNavbar = [
  { label: "Sobre Nós", url: "#AboutUs" },
  { label: "Serviços", url: "#Services" },
  { label: "Contato", url: "#Contact" },
];

const features = [
  { label: "Planeje sua plantação com informações sobre o clima;", icon: Check },
  { label: "Aprenda dicas para melhorar seu plantio e colheita;", icon: Check },
  { label: "Venda seus produtos de forma simples;", icon: Check },
  { label: "Organize e acompanhe suas vendas;", icon: Check },
  { label: "Acesse tudo de forma fácil e rápida;", icon: Check },
  { label: "Conect-se com seus clientes.", icon: Check },
]

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

export default function LandingPage() {
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
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header */}
      <header className="relative w-full h-[650px] flex items-center justify-center bg-gradient-to-b from-emerald-700 to-emerald-900 overflow-hidden">
        <Image 
          src={ImgHeaderBg}
          alt="Imagem de fundo do header"
          className="absolute w-[80%] h-[600px] object-cover rounded-2xl"
        />

        {/* Section Navabar */}
        <section className="absolute top-10 w-3/5 h-14 px-8 flex items-center justify-between bg-black/60 rounded-lg">
          <a
            href="#"
            className="flex items-center"> {/* Logo Image */}
              <Image 
                src={ImgLogo}
                alt="Logo Cultive+"
                width={40}
                height={40}
              />
            <h2 className="ml-2 flex items-center font-extrabold text-xl text-white">Cultive<span className="font-extrabold text-yellow-300">+</span></h2>
          </a>

          <nav className="flex items-center justify-center gap-4"> {/* Navbar */}
            {itemsNavbar.map((item) => (
              <a 
                href={item.url}
                key={item.label}
                className="text-lg font-normal text-white hover:text-amber-400 transition duration-300 ease-in-out">
                {item.label}
              </a>
            ))}

            <a 
              href="/auth"
              className="w-20 h-auto p-2 flex items-center justify-center text-white text-normal font-bold bg-amber-400 rounded-lg hover:bg-amber-500 duration-300 ease-in-out">
              Login
            </a>
          </nav>
        </section>

        {/* Cadastre-se Btn */}
        <section className="absolute bottom-20 left-64 w-44 h-12 ml-2 flex"> 
          <a
            href="/auth"
            className="w-full h-full flex items-center justify-center text-lg font-bold text-white rounded-lg shadow-xl bg-amber-400 hover:bg-amber-500 duration-300 ease-in-out"
          >
            Cadastre-se
          </a>
        </section>
      </header>

      <main className="w-full flex flex-col items-center justify-center bg-slate-100">
        {/* Section About Us */}
        <div className="w-full flex flex-col" id="AboutUs"> 
            <main className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                <Image 
                    src={ImgFundoAbout}
                    alt="Image fundo About Us"
                    className="absolute w-full h-[500px] object-cover"
                />

                <section className="absolute left-52 w-2/5 h-80"> {/* Section Infos */}
                    <h2 className="text-4xl font-extrabold mb-4 text-emerald-800">Sobre nós</h2>
                    <p className="text-lg font-light leading-relaxed mb-2">
                        Somos uma empresa dedicada a transformar o setor agrícola através da tecnologia.
                        Com nossa plataforma inovadora, ajudamos agricultores a aumentar a produtividade e otimizar recursos,
                        facilitando o gerenciamento do campo de forma eficiente e sustentável.
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                        Nossa missão é impulsionar a agricultura através da inovação tecnológica.
                        Buscamos oferecer soluções que facilitam o trabalho no campo, promovendo a sustentabilidade e a eficiência em cada etapa do processo produtivo.
                    </p>
                </section>
            </main>
        </div>

        {/* Service Slides */}
        <section className="w-full h-auto p-6 flex flex-col items-center justify-center bg-gradient-to-b from-emerald-700 to-emerald-900" id="Services">
          <div className="w-full max-w-5xl p-8 flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 to-green-600 shadow-lg rounded-3xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
              Nossos Serviços
            </h2>
            <div className="relative w-full flex items-center justify-center">
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
            </div>
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
          </div>
        </section>

        {/* Section Features */}
        <section className="w-full flex flex-col"> 
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                <Image 
                    src={ImgFeatures}
                    alt="Fundo de Advantages"
                    className="absolute w-full h-[500px] object-cover"
                />

                <div className="absolute left-52 w-2/5 h-90">
                    <h2 className="text-4xl font-extrabold mb-4 text-emerald-800">Porque a Cultive+ ?</h2>
                    {features.map((item) => (
                        <div className="flex items-center mb-1" key={item.label}>
                            <item.icon className="mr-2 text-amber-400"/>
                            <span className="text-xl font-normal leading-relaxed mb-2">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact section */}
        <section className="w-full h-[650px] flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-emerald-700 to-emerald-900" id="Contact">
            <div className="w-[600px] h-[450px] p-4 bg-emerald-900/80 flex flex-col justify-center gap-4"> {/* Infos */}
                <div className='text-center md:text-left mb-4'>
                    <h2 className='text-3xl font-bold text-white'>Entre em contato</h2>
                    <p className='text-lg font-light text-emerald-200'>Para mais informações, entre em contato com nossa equipe.</p>
                </div>

                <div className='flex flex-col gap-2'> {/* Email */}
                    <div className='flex items-center gap-2'>
                        <Mail className="text-amber-400" />
                        <h3 className='text-2xl font-bold text-white'>Envie-nos um email</h3>
                    </div>
                    <p className='text-lg font-semibold text-emerald-200'>Nossa equipe amigável está aqui para ajudar.</p>
                    <a 
                        href="mailto:cultive@ourcompany.com" 
                        className='text-lg font-semibold text-amber-400 hover:underline'
                    >
                        cultive@ourcompany.com
                    </a>
                </div>

                <div className='flex flex-col gap-2'> {/* Phone */}
                    <div className='flex items-center gap-1'>
                        <Phone className="text-amber-400" />
                        <h3 className='text-2xl font-bold text-white'>Telefone</h3>
                    </div>
                    <p className='text-lg font-semibold text-emerald-200'>Seg a Sex das 8h às 5h</p>
                    <a 
                        href="tel:+5598991002578" 
                        className='text-lg font-semibold text-amber-400 hover:underline'
                    >
                        +55 (98) 00000-0000
                    </a>
                </div>
            </div>

            <div className="w-[800px] h-[600px] p-2 flex flex-col justify-center gap-1 bg-emerald-800"> {/* Form */}
                <div className='text-center md:text-left mb-2'>
                    <h2 className='text-4xl font-bold text-white'>Tire suas dúvidas</h2>
                    <p className='text-lg font-light text-emerald-200'>
                        Você pode entrar em contato conosco a qualquer momento via 
                        <a href="mailto:cultive@ourcompany.com" className='font-semibold text-amber-400 hover:underline ml-1'>cultive@ourcompany.com</a>
                    </p>
                </div>
                <form className='flex flex-col gap-2'>
                    <div>
                        <label htmlFor='nome' className='block text-lg font-semibold text-white'>Nome</label>
                        <input type="text" name='nome' id='nome' placeholder='Seu nome' required 
                            className='w-full p-2 mt-1 rounded-md bg-emerald-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400' />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-lg font-semibold text-white'>Email</label>
                        <input type="email" name="email" id="email" placeholder='Seu email' required 
                            className='w-full p-2 mt-1 rounded-md bg-emerald-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400' />
                    </div>
                    <div>
                        <label htmlFor='telefone' className='block text-lg font-semibold text-white'>Telefone</label>
                        <input type="tel" name="telefone" id="telefone" placeholder='Ex: +00(00)00000-0000' 
                            className='w-full p-2 mt-1 rounded-md bg-emerald-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400' />
                    </div>
                    <div>
                        <label htmlFor='duvida' className='block text-lg font-semibold text-white'>Como podemos ajudar você?</label>
                        <textarea name="duvida" id="duvida" placeholder='Sua dúvida ...' 
                            className='w-full p-2 mt-1 rounded-md bg-emerald-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 h-24 resize-none' />
                    </div>
                    <button type="submit" className='w-full p-3 mt-4 bg-amber-400 text-white font-semibold rounded-md hover:bg-amber-500 transition duration-300'>Enviar</button>
                </form>
            </div>
        </section>

        {/* Footer section */}
        <footer className="w-full flex flex-col items-center bg-emerald-950 text-white"> 
          <div className="w-full px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start md:w-1/3"> 
              <div className="flex items-center gap-3">
                <Image src={ImgLogo} alt="Logo" width={40} height={40} />
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
          <section className="w-full flex flex-col md:flex-row items-center justify-between border-t-2 border-emerald-800 px-6 py-6">
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
          </section>
        </footer>
      </main>
    </div>
  );
}
