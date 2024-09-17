import { CgWebsite } from "react-icons/cg";
import { IoStorefront } from "react-icons/io5";
import { IoLogoAndroid, IoIosAppstore } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";


function Dev({ developement }) {



    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-5">
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <CgWebsite size={200} />
                <button className="font-bold text-2xl text-sky-500">Website Estático</button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <BsFillBuildingsFill size={200}Fill />
                <button className="font-bold text-2xl text-sky-500">Website Empresarial</button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <IoStorefront size={200} />
                <button className="font-bold text-2xl text-sky-500">E-Commerce</button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <IoLogoAndroid size={200} />
                <button className="font-bold text-2xl text-sky-500">App Android</button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <IoIosAppstore size={200} />
                <button className="font-bold text-2xl text-sky-500">App IOS</button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center bg-white p-5 rounded-xl text-gray-800 hover:scale-95 cursor-pointer duration-300 ease-in-out hover:opacity-90">
                <GrSystem size={200} />
                <button className="font-bold text-2xl text-sky-500">Sistema Web</button>
            </div>
        </div>

    );
}


export default Dev;