import {ChevronRight} from 'lucide-react'
import Image from "next/image";

export default function Hero() {
    return (
        <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="Café recién hecho"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 drop-shadow-lg">
            El alma del grano,
            <br />
            el sabor del mango.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto italic">
            Descubre el punto exacto donde la pasión por el café se encuentra
            con la calidez del hogar.
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
          >
            Explorar Menú <ChevronRight size={20} />
          </a>
        </div>
      </section>
    )
}