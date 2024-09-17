import { useState } from "react";

import { PiArrowBendUpRight } from "react-icons/pi";

import Dev from "./Dev";

function Float() {


    const [total, SetTotal] = useState(0);
    const [developement, setDevelopement] = useState(true);


    return(
        <div className="fixed top-0 left-0 bg-transparent w-screen h-screen flex items-center justify-center opacity-95">
        <div className="w-9/12 h-3/4 mt-20 rounded-lg flex items-center justify-between">
            <div className="w-4/12 bg-gray-900 text-white flex flex-col items-center justify-center border-r-8 border-white h-full  rounded-lg">
                <div className="flex flex-col items-center justify-center w-60 h-60 border rounded-full">
                    <strong className="text-4xl font-bold text-sky-500 w-full text-center">{total}</strong>
                    <p className="w-full text-center text-sm font-bold">MZN</p>
                </div>
                {/* <a href="https://wa.me/+258862585512" className="w-10/12 rounded py-3 mt-10 text-sky-500 text-center font-medium uppercase bg-white hover:scale-95 duration-300 ease-linear hover:bg-transparent border border-white hover:opacity-95">Proximo passo</a> */}
            </div>

            <div className="w-8/12 h-full flex flex-col justify-center px-10 py-10 bg-gray-900  rounded-tr-lg rounded-br-lg">
                {/* <h2 className="w-fullv text-center uppercase text-2xl font-bold text-sky-500 mb-5">Escolha o tipo de projecto</h2> */}
                {developement && (
                    <Dev developement={developement} />)
                }

                <button className="w-full justify-end items-end flex text-sky-500 mt-4 font-bold text-3xl animate-pulse"><small className="text-sm">next</small><PiArrowBendUpRight /></button>
            </div>
        </div>
    </div>
    );
}

export default Float;