
import { TbMenu2, TbMenuDeep } from "react-icons/tb";
import { useState } from "react";


function Header() {

    const [menu, setMenu] = useState(false);
    return (
        <header className="bg-gray-900 fixed top-0 z-10 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-2 sm:px-20 border-b py-2 sm:py-4 border-gray-700">
            <h1 className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <img src="./images/logot.png" className="w-12" alt="" />
                    <a href="#" className="text-sky-500 font-bold text-xl">invespera</a>
                </div>
                {
                    menu ?
                        <button onClick={() => setMenu(false)} className="text-3xl text-white font-bold sm:hidden"><TbMenuDeep /></button>
                        :
                        <button onClick={() => setMenu(true)} className="text-3xl text-white font-bold sm:hidden"><TbMenu2 /></button>
                }


            </h1>

            {
                menu && (

                    <ul className="flex flex-col sm:flex-row sm:items-center text-white/90 pb-10 sm:py-0">
                        <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#" >Home</a></li>
                        <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#services" >Serviços</a></li>
                        <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#about" >Sobre</a></li>
                    </ul>
                )
            }

            <ul className="hidden sm:flex flex-col sm:flex-row sm:items-center text-white/90 pb-10 sm:py-0">
                <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#" >Home</a></li>
                <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#services" >Serviços</a></li>
                <li className="mt-4 ml-2 sm:mx-2 text-base font-normal hover:opacity-70 sm:uppercase sm:text-sm"><a href="#about" >Sobre</a></li>
            </ul>
        </header>
    );
}


export default Header;