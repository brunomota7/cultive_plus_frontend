import Image from "next/image";
import { Button } from "@/components/ui/button";
import AboutUs from "@/components/landingpage/AboutUs";
import ImgHeaderBg from "../../public/images/fundoHeader.svg";
import ImgLogo from "../../public/images/logo.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Service from "@/components/landingpage/Services";

export default function LandingPage() {
  const itemsNavbar = [
    { label: "Home", url: "#" },
    { label: "Sobre Nós", url: "#" },
    { label: "Contato", url: "#" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header */}
      <header className="relative w-full h-[650px] flex items-center justify-center bg-[#438f55] overflow-hidden">
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
            <AspectRatio ratio={16 / 9}>
              <Image 
                src={ImgLogo}
                alt="Logo Cultive+"
                width={40}
                height={40}
              />
            </AspectRatio>
            <h2 className="ml-2 flex items-center font-extrabold text-xl text-white">Cultive<span className="font-extrabold text-green-500">+</span></h2>
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
              href="#"
              className="w-20 h-auto p-2 flex items-center justify-center text-white text-normal font-bold bg-amber-400 rounded-lg hover:bg-amber-500 duration-300 ease-in-out">
              Login
            </a>
          </nav>
        </section>

        {/* Cadastre-se Btn */}
        <section className="absolute bottom-20 left-64 w-44 h-12 ml-2 flex"> 
          <Button className="w-full h-full flex items-center justify-center text-lg font-bold text-white rounded-lg shadow-xl bg-amber-400 hover:bg-amber-500 duration-300 ease-in-out">
            Cadastre-se
          </Button>
        </section>
      </header>

      <main className="w-full flex flex-col items-center justify-center bg-slate-100">
        <AboutUs />
        <Service />
      </main>
    </div>
  );
}
