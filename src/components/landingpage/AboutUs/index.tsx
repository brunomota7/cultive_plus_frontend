import Image from "next/image";
import ImgFundoAbout from "../../../../public/images/fundoAbout.png";

export default function AboutUs() {
    return (
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
    );
}