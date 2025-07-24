import type { Product } from "../types/Product";

const storeIcons: Record<string, string> = {
  Amazon: "🛍️",
  MercadoLibre: "📦",
  Alkosto: "🏬",
};

export default function ProductCard({ product }: { product: Product }) {
  const entries = Object.entries(product.prices);
  const lowest = Math.min(...entries.map(([, price]) => price));

  const currencyFormat = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 animate-fade-in">
      <h3 className="text-xl font-semibold text-blue-700">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">Categoría: {product.category}</p>
      <ul className="space-y-1">
        {entries.map(([store, price]) => (
          <li key={store} className="flex justify-between items-center">
            <span>
              {storeIcons[store] || "🏷️"} {store}
            </span>
            <span className={price === lowest ? "font-bold text-green-600" : ""}>
              {currencyFormat.format(price)} {price === lowest && "🔥"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
