
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { RxDoubleArrowUp } from "react-icons/rx";

function About() {
    return (
        <section id="about" className="w-full sm:h-4/6 flex flex-col sm:flex-row items-start sm:justify-between p-4 sm:p-20 bg-gray-900">
            <aside className="w-full sm:w-5/12">
                <h2 className="uppercase w-20 text-xl font-bold border-b-4 border-white/90 text-sky-500 mb-8">Sobre</h2>
                <p className="text-lg text-sky-100 font-light mb-10">
                    Somos uma empresa de desenvolvimento de Software, com o foco de sempre desenvolver os melhores Software do mercado moçambicano. Utilizando ferramentas modernas e seguras.
                </p>
                <ul className="w-8/12 sm:w-4/12 flex items-center justify-between">
                    <li><a href="#" className="text-xl text-blue-600 hover:text-white duration-300 ease-in-out">
                        <span><BsFacebook /></span>
                    </a></li>
                    <li><a href="#" className="text-xl text-red-500/80 hover:text-white duration-300 ease-in-out">
                        <span><BsInstagram /></span>
                    </a></li>
                    <li><a href="#" className="text-xl text-green-500 hover:text-white duration-300 ease-in-out">
                        <span><BsWhatsapp /></span>
                    </a></li>
                    <li>
                        <a href="#" className="text-xl text-blue-800 hover:text-white duration-300 ease-in-out">
                            <span><BsLinkedin /></span>
                        </a>
                    </li>
                </ul>
            </aside>

            <aside className="w-full sm:w-5/12 mt-10 sm:mt-0 flex flex-col items-center justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">Deixe-nos desenvolver o seu projecto!</h3>
                <a target="_blank" href="https://wa.me/+258862585512" className="w-full sm:w-8/12 flex items-center justify-center text-xl font-normal mt-6 bg-green-600/80 text-white py-5 rounded hover:opacity-80 hover:scale-95 ease-in-out duration-300">
                    Solicitar negociação
                    <span className="ml-5 text-3xl"><BsWhatsapp /></span>
                </a>

                <a href="#" className="mt-10 sm:mt-20 text-white/80 animate-bounce text-xl">
                    <span><RxDoubleArrowUp /></span>
                </a>
            </aside>
        </section>
    );
}

export default About;