import { Separator } from "@/components/ui/separator";
import { Bell, PersonStanding, Settings, User } from "lucide-react";

const navbarUser = [
    { label: "Perfil público", url: "#", icon: User },
    { label: "Conta", url: "#", icon: Settings },
    { label: "Acessibilidade", url: "#", icon: PersonStanding },
    { label: "Notificações", url: "#", icon: Bell },
]

export default function Profile() {
    return (
        <main className="w-full h-full bg-gray-900/10 flex snap-y ">
            <aside className="w-[15%] h-full p-4 flex flex-col items-center bg-gray-500">
                <section className="w-full flex flex-col">
                    <div className="flex items-center gap-2"> {/* User */}
                        <div className="w-14 h-14 bg-gray-600 rounded-full">
                            {/* Imagem user */}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl text-white font-semibold">Bruno mota</h3>
                            <span className="text-sm text-white/80">Sua conta pessoal</span>
                        </div>
                    </div>
                </section>
                <section className="w-full h-auto flex flex-col items-center justify-center mt-2 mb-2"> {/* Navbar */}
                    {navbarUser.map((items) => (
                        <div
                            key={items.label}
                            className="w-full h-10 flex flex-col gap-2 items-left justify-center"
                        >
                            <a 
                                href={items.url}
                                className="w-full h-full flex items-center gap-1 text-white text-base hover:bg-white/10 hover:rounded-lg"
                            >
                                <items.icon className="w-[20px] h-[20px]"/>
                                {items.label}
                            </a>
                        </div>
                    ))}
                </section>
                <Separator />
            </aside>
        </main>
    );
}