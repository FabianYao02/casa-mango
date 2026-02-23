import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="fixed  z-50 bg-cafe-50/60 backdrop-blur-md top-4 w-[98%] max-w-7xl left-1/2 -translate-x-1/2 rounded-full">
        <div className=" max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* MODIFICACIÓN 1: LOGO EN NAVBAR */}
          <div className="relative h-16 w-[115.42px] cursor-pointer flex items-center hover:scale-105 transition-transform duration-300">
             <a href="#inicio" className="relative w-full h-full block">
               <Image 
                 width={372}
                 height={312}
                 src="/logo.png" 
                 alt="Casa Mango Logo"
                 className="w-full h-full object-contain object-center"
               />
             </a>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-cafe-800 ">
            <a href="#inicio" className="hover:text-mango-500 transition">Inicio</a>
            <a href="#nosotros" className="hover:text-mango-500 transition">Nosotros</a>
            <a href="#menu" className="hover:text-mango-500 transition">Menú</a>
            <a href="#contacto" className="hover:text-mango-500 transition">Ubicación</a>
          </div> 
          <button className="bg-mango-500 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-mango-700 transition shadow-lg tracking-widest">
            ORDENAR
          </button>
        </div>
      </nav>
    )}