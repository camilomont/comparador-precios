export type Store = 'Amazon' | 'MercadoLibre' | 'Alkosto';

export interface Product {
  id: string;
  name: string;
  category: string;
  prices: Record<Store, number>;
}