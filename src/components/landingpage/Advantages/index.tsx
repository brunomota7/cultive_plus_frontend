import Image from "next/image";
import ImgFundoAdvantages from "../../../../public/images/fundoAdvantages.png";
import { Check } from "lucide-react";

const advantages = [
    { label: "Planeje sua plantação com informações sobre o clima;", icon: Check },
    { label: "Aprenda dicas para melhorar seu plantio e colheita;", icon: Check },
    { label: "Venda seus produtos de forma simples;", icon: Check },
    { label: "Organize e acompanhe suas vendas;", icon: Check },
    { label: "Acesse tudo de forma fácil e rápida;", icon: Check },
    { label: "Conect-se com seus clientes.", icon: Check },
]

export default function Advantages() {
    return (
        <div className="w-full flex flex-col">
            <main className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                <Image 
                    src={ImgFundoAdvantages}
                    alt="Fundo de Advantages"
                    className="absolute w-full h-[500px] object-cover"
                />

                <section className="absolute left-52 w-2/5 h-90">
                    <h2 className="text-4xl font-extrabold mb-4 text-emerald-800">Porque a Cultive+ ?</h2>
                    {advantages.map((item) => (
                        <div className="flex items-center mb-1" key={item.label}>
                            <item.icon className="mr-2 text-amber-400"/>
                            <span className="text-xl font-normal leading-relaxed mb-2">{item.label}</span>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}