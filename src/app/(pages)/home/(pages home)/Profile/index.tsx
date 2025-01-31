import { Separator } from "@/components/ui/separator";
import { Bell, Mail, PersonStanding, Radio, Settings, ShieldAlert, User, LogOut } from "lucide-react";
import Image from "next/image";

const navbarUser = [
    {
        title: "Configurações do Usuário",
        items: [
            { label: "Perfil público", url: "#", icon: User },
            { label: "Conta", url: "#", icon: Settings },
            { label: "Acessibilidade", url: "#", icon: PersonStanding },
            { label: "Notificações", url: "#", icon: Bell },
        ],
    },
    {
        title: "Acesso Rápido",
        items: [
            { label: "Emails", url: "#", icon: Mail },
            { label: "Sessões", url: "#", icon: Radio },
        ],
    },
    {
        title: "Segurança",
        items: [
            { label: "Senha e autenticação", url: "#", icon: ShieldAlert },
            { label: "Sair", url: "#", icon: LogOut },
        ],
    },
];

export default function Profile() {
    return (
        <main className="w-full h-full flex bg-emerald-900">
            <aside className="w-[15%] h-full p-6 flex flex-col text-white">
                {/* Perfil do Usuário */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-500">
                        <Image src="/user-avatar.png" alt="User Avatar" width={56} height={56} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">Bruno Mota</h3>
                        <span className="text-sm text-gray-400">Sua conta pessoal</span>
                    </div>
                </div>
                <Separator className="mb-4" />

                {/* Navegação */}
                <nav className="flex flex-col gap-4">
                    {navbarUser.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-xs uppercase text-gray-400 mb-2">{section.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.url}
                                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
                                        >
                                            <item.icon className="w-5 h-5" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
            <section className="flex-1 p-6 bg-gray-100">
                <h1 className="text-xl font-semibold">Configurações</h1>
            </section>
        </main>
    );
}
