// client/components/TarjetaProducto.tsx
import { Producto } from "@/types";

// Fíjate que ahora es "producto" (singular)
interface TarjetaProductoProps {
  producto: Producto;
}

export default function TarjetaProducto({ producto }: TarjetaProductoProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-mango-900 transition-shadow flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-mango-700 bg-cafe-50 px-2 py-1 rounded">
            {producto.categoria}
          </span>
          <span className="text-xl font-mono font-bold text-cafe-900 group-hover:text-mango-700 transition-colors">
            ${producto.precio}
          </span>
        </div>
        <h3 className="text-xl font-bold text-cafe-800 mb-2">
          {producto.nombre}
        </h3>
        <p className="text-cafe-600 text-sm leading-relaxed">
          {producto.descripcion}
        </p>
      </div>
    </div>
  );
}