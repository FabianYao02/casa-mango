'use client'; 

import React, { useState, useEffect } from "react";
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
    <section id="menu" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-orange-800 font-bold uppercase tracking-widest text-xs">Nuestra Carta</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mt-3">Selección Especial</h2>
          <div className="w-24 h-1 bg-orange-700 mx-auto mt-6 rounded-full opacity-20"></div>
        </div>

        {/* LÓGICA DE CARGA Y RENDERIZADO */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-900"></div>
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