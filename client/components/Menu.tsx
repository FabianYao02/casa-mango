'use client'; 

import { useState, useEffect } from "react";
import { Producto } from "@/types";
import { obtenerProductos } from "@/services/api";
import TarjetaProducto from "./TarjetaProducto"; 

export default function Menu() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="menu" className="py-24 bg-cafe-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-mango-900 font-bold uppercase tracking-widest text-xs">Nuestra Carta</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cafe-800 mt-3">Selección Especial</h2>
          <div className="w-24 h-1 bg-mango-700 mx-auto mt-6 rounded-full opacity-20"></div>
        </div>

        {/* LÓGICA DE CARGA Y RENDERIZADO */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mango-900"></div>
          </div>
        ) :productos.length === 0 ? (
          /* NUEVO: ESTADO VACÍO */
          <div className="text-center py-20">
            <p className="text-xl text-cafe-600 font-serif">
              Estamos preparando nuestro menú. ¡Vuelve pronto!
            </p>
          </div>
        ) : (
          /* AQUÍ MENU HACE LA CUADRÍCULA Y EL MAP */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((prod) => (
              // Y llamamos a la tarjeta pasándole UN SOLO producto a la vez
              <TarjetaProducto key={prod.id} producto={prod} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}