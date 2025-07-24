import ProductList from '../../../components/ProductList';
import Filters from '../../../components/Filters';
import { useState } from 'react';
import { useProductFilters } from '../../hooks/useProductFilters';
import type { Product } from '../../../types/Product';


interface Props {
  products: Product[];
}

export default function ProductComparison({ products }: Props) {
  const [filter, setFilter] = useState('');
  const filtered = useProductFilters(products, filter);
  return (
    <div>
      <Filters filter={filter} onChange={setFilter} />
      <ProductList products={filtered} />
    </div>
  );
}