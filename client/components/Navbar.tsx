import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* MODIFICACIÓN 1: LOGO EN NAVBAR */}
          <div className="relative h-16 w-40 md:w-48 cursor-pointer flex items-center hover:scale-105 transition-transform duration-300">
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

          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-stone-600">
            <a href="#inicio" className="hover:text-orange-700 transition">Inicio</a>
            <a href="#nosotros" className="hover:text-orange-700 transition">Nosotros</a>
            <a href="#menu" className="hover:text-orange-700 transition">Menú</a>
            <a href="#contacto" className="hover:text-orange-700 transition">Ubicación</a>
          </div>
          <button className="bg-orange-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-orange-800 transition shadow-lg tracking-widest">
            ORDENAR
          </button>
        </div>
      </nav>
    )}