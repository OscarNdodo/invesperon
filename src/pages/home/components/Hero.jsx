
function Hero() {





    return (
        <section className="w-full flex flex-col sm:flex-row items-center sm:justify-between px-2 py-20 sm:py-0 sm:px-20 bg-sky-80 sm:h-full">
            <aside className="w-full sm:w-6/12 flex flex-col items-start justify-center h-full">
                <p className="text-4xl sm:text-4xl lg:text-5xl font-black uppercse text-gray-900/90 pt-5 sm:py-10" style={{ lineHeight: 1.6 }}>
                  
                    <span className="border-b-4 border-sky-400/80">Desenvolvi</span>mento do <span className="bg-sky-500 text-white px-5 rounded-tr-3xl rounded-bl-xl">Software</span> ideal para te ou teu <strong>negócio</strong>...  
                </p>
                <div className="w-full sm:w-10/12 mt-8 sm:mt-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                    <a target="_blank" href="https://wa.me/+258862585512" className="w-full sm:w-6/12 text-center sm:mr-2 bg-sky-500 hover:scale-95 hover:opacity-80 duration-300 ease-in-out rounded-lg py-3 text-xl text-white border ">Contacte-nos</a>

                    <button className="w-full sm:w-6/12 sm:ml-2 border sm:border-2 border-sky-500 hover:scale-95 hover:opacity-80 duration-300 ease-in-out rounded-lg mt-4 sm:mt-0 py-3 text-sky-500 text-xl" onClick={() => alert("Em Desenvolvimento!")}>Calcular Orçamento</button>
                </div>
            </aside>
            <img src="./images/logot.png" className="animate-spin ease-linear hidden sm:flex items-center w-96 mt-20 border-2 border-sky-500 rounded-full" />

            {/* <Float /> */}

        </section>
    );

}

export default Hero;