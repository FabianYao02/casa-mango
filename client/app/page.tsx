'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Coffee, Utensils, Instagram, Facebook, ChevronRight,ExternalLink } from 'lucide-react';

// Interface para tipar los productos
interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
}

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const googleMapsUrl = "https://maps.app.goo.gl/AMHdktbALHHjqfkY9";

  // Fetch dinámico al backend
  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching menu:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* MODIFICACIÓN 1: LOGO EN NAVBAR */}
          <div className="relative h-16 w-40 md:w-48 cursor-pointer flex items-center hover:scale-105 transition-transform duration-300">
             <a href="#inicio" className="relative w-full h-full block">
               <img 
                 src="/logo.png" 
                 alt="Casa Mango Logo"
                 className="w-full h-full object-contain object-left"
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

      {/* --- HERO SECTION --- */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
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

      {/* --- SOBRE NOSOTROS --- */}
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
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Interior de la cafetería"
            className="rounded-2xl shadow-2xl"
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

      {/* --- MENÚ DINÁMICO --- */}
      <section id="menu" className="py-24 bg-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800">
              Nuestra Selección Especial
            </h2>
            <p className="text-stone-500 mt-2 italic text-lg">
              Directo de la barra a tu mesa
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.length > 0 ? (
                productos.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          {prod.categoria}
                        </span>
                        <span className="text-xl font-mono font-bold text-stone-900 group-hover:text-orange-800 transition-colors">
                          ${prod.precio}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-800 mb-2">
                        {prod.nombre}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {prod.descripcion}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-stone-400 italic">
                  No hay productos disponibles en este momento.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACTO, UBICACIÓN Y HORARIOS --- */}
      <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Horarios */}
          <div className="bg-stone-800 text-white p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <Clock className="mb-6 text-orange-400" size={40} />
              <h3 className="text-2xl font-serif mb-6">Horarios de Atención</h3>
              <ul className="space-y-4 text-stone-300">
                <li className="flex justify-between border-b border-stone-700 pb-2">
                  <span>Lunes - Sabado</span>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-medium">
                      9:00 AM - 1:00 PM
                    </span>
                    <span className="text-white font-medium">
                      6:00 PM - 11:00 PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-16 pt-8 border-t border-stone-800 relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="text-orange-400 shrink-0 mt-1" size={24} />
                <p className="text-stone-300 text-sm leading-relaxed">
                  Blvd. Presa la Angostura 325, CFE, 29040 Tuxtla Gutiérrez,
                  Chis.
                </p>
              </div>
              
            </div>
            <div className="mt-10">
              <p className="text-stone-400 text-sm">¿Deseas reservar?</p>
              <p className="text-xl font-bold">+52 961 216 2787</p>
            </div>
          </div>

          {/* Mapa (Placeholder) */}
          
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 min-h-[600px] relative">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4563297836194!2d-93.09037138839112!3d16.753957383962664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2783de846725%3A0xfa9e4f667517cc14!2sCasa%20Mango%20Caf%C3%A9!5e0!3m2!1ses-419!2smx!4v1771230588054!5m2!1ses-419!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 200 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"            
            className="grayscale-[0.1] hover:grayscale-0 transition-all duration-700 brightness-[0.95] hover:brightness-100"
            title="Ubicacion de Casa Mango"></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-stone-400 text-sm">
          <div className="text-center md:text-left">
            <div className="relative h-10 w-32 mx-auto md:mx-0 mb-4 opacity-50 hover:opacity-100 transition-opacity">
                 <img 
                   src="/logo.png" 
                   alt="Casa Mango Logo"
                   className="w-full h-full object-contain object-left"
                 />
            </div>
            <p>© 2026 Casa Mango S.A. de C.V.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/casamango.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:text-orange-700 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/people/Casa-Mango-Café/100064071668985/"
              className="hover:text-orange-700 transition"
            >
              <Facebook size={24} />
            </a>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-stone-700 transition underline underline-offset-4"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-stone-700 transition underline underline-offset-4"
            >
              Términos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}