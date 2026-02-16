'use client';
import { useState, useEffect } from 'react';

// Definimos qué forma tiene un Producto (TypeScript nos ayuda aquí)
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

  useEffect(() => {
    fetch('http://localhost:4000/api/productos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20">Cargando menú...</div>;

  return (
    <main className="min-h-screen bg-stone-100 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-serif text-orange-900 mb-2">Casa Mango 🥭</h1>
        <p className="text-stone-600 italic">Café artesanal y repostería</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {productos.map((prod) => (
          <div key={prod.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">{prod.categoria}</span>
              <h3 className="text-xl font-bold text-stone-800">{prod.nombre}</h3>
              <p className="text-stone-500 text-sm">{prod.descripcion}</p>
            </div>
            <div className="text-xl font-mono font-bold text-stone-900">
              ${prod.precio}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}