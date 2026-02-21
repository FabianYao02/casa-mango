import { Coffee, Utensils } from "lucide-react";
import Image from "next/image";
export default function Nosotros() {
    return (
      <section
        id="nosotros"
        className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span className="text-orange-700 font-bold uppercase tracking-widest text-sm">
            Nuestra Historia
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mt-4 mb-6">
            Un refugio acogedor en el corazón de la ciudad.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Casa Mango nació de la idea de crear un espacio donde el tiempo se
            detiene. No solo servimos café; seleccionamos granos de altura y
            horneamos nuestra propia repostería cada mañana.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex flex-col gap-2">
              <Coffee className="text-orange-800" size={32} />
              <h4 className="font-bold">Granos de Origen</h4>
              <p className="text-sm text-stone-500">
                Seleccionamos los mejores granos de fincas locales.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Utensils className="text-orange-800" size={32} />
              <h4 className="font-bold">Repostería Artesanal</h4>
              <p className="text-sm text-stone-500">
                Hecho en casa con ingredientes naturales.
              </p>
            </div>
          </div>
        </div>
        <div className="relative ">
          <Image
            width={600}
            height={500}
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Interior de la cafetería"
            className="rounded-2xl shadow-2xl object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-stone-100 hidden md:block">
            <p className="text-3xl font-serif font-bold text-orange-900">
              100%
            </p>
            <p className="text-sm font-bold text-stone-500 uppercase tracking-tighter">
              Orgánico y Local
            </p>
          </div>
        </div>
      </section>
    );
}