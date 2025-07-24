import { useState } from 'react';
import { generateRandomPrices } from '../features/products/lib/priceUtils';
import { v4 as uuidv4 } from 'uuid';
import type { Product } from '../types/Product';

interface Props {
  onAdd: (product: Product) => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) {
      setError(true);
      return;
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      category,
      prices: generateRandomPrices(),
    };

    onAdd(newProduct);
    setName('');
    setCategory('');
    setError(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 animate-fade-in"
    >
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded flex items-center gap-2 animate-bounce">
          ❌ Debes ingresar el nombre del producto y seleccionar una categoría.
        </div>
      )}

      <input
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (error) setError(false);
        }}
        className="w-full border border-gray-300 rounded px-3 py-2 outline-blue-500"
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          if (error) setError(false);
        }}
        className="w-full border border-gray-300 rounded px-3 py-2 outline-blue-500"
      >
        <option value="">Selecciona una categoría</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Ropa">Ropa</option>
        <option value="Muebles">Muebles</option>
        <option value="Hogar">Hogar</option>
        <option value="Juguetes">Juguetes</option>
        <option value="Deportes">Deportes</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Otros">Otros</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all"
      >
        Agregar Producto
      </button>
    </form>
  );
}