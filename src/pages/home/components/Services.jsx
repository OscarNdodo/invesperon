import Dev from "./Dev";
import { PiArrowBendUpRight } from "react-icons/pi";



function Services() {

    return (
        <div id="services" className="w-full min-h-full  flex flex-col items-center justify-center bg-gradient-to-tr from-sky-100 to-sky-600 sm:p-20 px-4 sm:px-40 py-10">

            <h2 className="my-10 w-full sm:w-6/12 text-center text-4xl sm:text-5lx lg:text-6xl font-bold text-gray-900">
                Catálogo de Serviços de Desenvolvimento
            </h2>

            <Dev />

            <a target="_blank" href="https://wa.me/+258862585512" className="w-full justify-end items-end flex text-gray-900 mt-4 font-bold text-3xl animate-pulse"><small className="text-base font-mono">Mais info...</small><PiArrowBendUpRight /></a>
        </div>
    );

}


export default Services;