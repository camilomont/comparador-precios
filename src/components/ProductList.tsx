import type { Product } from "../types/Product";
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  if (products.length === 0) return <p>No hay productos.</p>;
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}