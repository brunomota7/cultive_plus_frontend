"use client";
import Image from "next/image";
import WaveImg from "../../../../public/images/wave.svg";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        userType: "Escolha",
        buyerType: "",
    })

    const toggleForm = () => setIsLogin(!isLogin);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Image 
                src={WaveImg}
                alt="Imagem background"
                className="absolute w-full bottom-0"
            />
            <h1 className="absolute top-5 text-[150px] font-extrabold text-gray-200/50">CULTIVE<span>+</span></h1>

            <section className="relative w-[400px] p-8 bg-gray-900/10 rounded-md shadow-md">
                <h2 className="text-2xl text-[#438f55] text-center font-bold mb-6">
                    { isLogin ? "LOGIN" : "CADASTRE-SE" }
                </h2>
                <form className="space-y-4">
                    { !isLogin && (
                        <input 
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            onChange={handleChange}
                            required
                            className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md focus:ring-green-500"
                        />
                    )}
                    <input 
                        type="email"
                        name="email"
                        placeholder="Ex: exemplo@exemplo.com"
                        onChange={handleChange}
                        required
                        className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md focus:ring-green-500"
                    />
                    <div className="relative w-full flex flex-col gap-1">
                        <input 
                            type={ showPassword ? "text" : "password" }
                            name="password"
                            placeholder="Sua senha"
                            onChange={handleChange}
                            required
                            className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md focus:ring-green-500"
                        />
                        <button
                            type="button"
                            onClick={ toggleShowPassword }
                            className="absolute right-4 top-7 -translate-y-1/2 text-gray-500"
                        >
                            { showPassword ? <EyeOff /> : <Eye /> }
                        </button>
                    </div>
                    {!isLogin && (
                        <>
                            <select
                                name="userType"
                                onChange={handleChange}
                                required
                                className="w-full p-4 outline-none rounded-md drop-shadow-md"
                            >
                                <option value="" className='text-green-70 font-normal'>Selecione um tipo de usuário</option>
                                <option value="agricultor" className='text-green-700 font-normal'>Agricultor</option>
                                <option value="cliente" className='text-green-700 font-normal'>Cliente</option>
                            </select>
                            {formData.userType === "cliente" && (                               
                                <select
                                    name="buyerType"
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 outline-none rounded-md drop-shadow-md"
                                >
                                    <option value="" className='text-green-700 font-normal'>Selecione o tipo</option>
                                    <option value="empresa" className='text-green-700 font-normal'>Empresa</option>
                                    <option value="pessoa_fisica" className='text-green-700 font-normal'>Pessoa Física</option>
                                </select>
                            )}
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold p-3 rounded hover:bg-green-700 transition duration-200"
                    >
                        { isLogin ? "Entrar" : "Cadastrar" }
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-900">
                    { isLogin ? "Não tem conta?" : "Já tem conta?" }
                    <span 
                        onClick={toggleForm}
                        className="underline cursor-pointer ml-1 font-semibold"
                    >   
                        { isLogin ? "Cadastre-se" : "Entrar" }
                    </span>
                </p>
            </section>
        </div>
    );
}