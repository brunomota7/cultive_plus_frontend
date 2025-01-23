"use client"
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
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
    );
}