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
    <div className="min-vh-100 bg-light py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">
          🛒 Comparador de Precios Inteligente
        </h1>
        <p className="text-secondary fs-5">
          Encuentra el mejor precio para tu producto favorito entre diferentes tiendas.
        </p>
      </header>
<div className="container">
  <div className="mx-auto" style={{ maxWidth: '700px' }}>
    <ProductForm onAdd={addProduct} products={products} />
    
    <div className="mt-5">
      <ProductComparison products={products} />
    </div>
  </div>
</div>

    </div>
  );
}