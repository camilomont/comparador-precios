import type { Store } from "../../../types/Product";


export const stores: Store[] = ['Amazon', 'MercadoLibre', 'Alkosto'];

export function generateRandomPrices(): Record<Store, number> {
  const prices: Record<Store, number> = {
    Amazon: Math.floor(Math.random() * 100000 + 10000),
    MercadoLibre: Math.floor(Math.random() * 100000 + 10000),
    Alkosto: Math.floor(Math.random() * 100000 + 10000),
  };
  return prices;
}