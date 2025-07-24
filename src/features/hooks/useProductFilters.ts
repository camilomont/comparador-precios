import { useMemo } from 'react';
import type { Product } from '../../types/Product';


export function useProductFilters(products: Product[], filter: string) {
  return useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);
}