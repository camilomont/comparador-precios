import { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductComparison from './features/products/components/ProductComparison';
import type { Product } from './types/Product';


export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2 animate-fade-in">
          🛒 Comparador de Precios Inteligente
        </h1>
        <p className="text-gray-600 text-lg">
          Encuentra el mejor precio para tu producto favorito entre diferentes tiendas.
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8">
        <ProductForm onAdd={addProduct} />
        <ProductComparison products={products} />
      </div>
    </div>
    
  );
}