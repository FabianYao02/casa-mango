import {Producto} from '@/types';
export async function obtenerProductos(): Promise<Producto[]> {
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos`);
        if (!res.ok) {
            throw new Error('Error al obtener productos');
        }
        return await res.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}