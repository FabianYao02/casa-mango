// client/components/Productos.tsx
import { Producto } from "@/types";

// 1. Definimos qué "paquete" (props) espera recibir este componente
interface TarjetaProductoProps {
  productos: Producto[];
}

// 2. Recibimos ese paquete en los parámetros de la función
export default function TarjetaProducto({ productos }: TarjetaProductoProps) {
  
  // Si la lista está vacía, mostramos el mensaje de que no hay nada
  if (productos.length === 0) {
    return (
      <div className="col-span-full text-center py-10 text-stone-400 italic">
        No hay productos disponibles en este momento.
      </div>
    );
  }

  // Si hay productos, simplemente los mapeamos y dibujamos
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((prod) => (
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
      ))}
    </div>
  );
}