import { useState } from 'react';
import { generateRandomPrices } from '../features/products/lib/priceUtils';
import { v4 as uuidv4 } from 'uuid';
import type { Product } from '../types/Product';

interface Props {
  onAdd: (product: Product) => void;
  products: Product[];
}


export default function ProductForm({ onAdd, products }: Props) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !category) {
      setError(true);
      return;
    }

    const alreadyExists = products.some(p => p.name.trim().toLowerCase() === name.trim().toLowerCase());

    if (alreadyExists) {
      alert("⚠️ ¡Ups! Al parecer ya buscaste este producto.");
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
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      {error && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
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
        className="form-control mb-3"
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          if (error) setError(false);
        }}
        className="form-select mb-3"
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

      <button type="submit" className="btn btn-custom w-100">
        Agregar Producto
      </button>
    </form>
  );
}