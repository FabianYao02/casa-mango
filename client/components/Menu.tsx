// client/components/Menu.tsx
'use client'; // Volvemos a poner el use client porque aquí está la lógica

import React, { useState, useEffect } from "react";
import { Producto } from "@/types";
import { obtenerProductos } from "@/services/api";
import TarjetaProducto from "./TarjetaProducto"; // Importamos tu mapeador

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
          /* Aquí está la magia: le pasamos la lista al componente TarjetaProducto por medio de Props */
          <TarjetaProducto productos={productos} />
        )}

      </div>
    </section>
  );
}