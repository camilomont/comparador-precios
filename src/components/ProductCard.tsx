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
    <div className="card mb-4 shadow-sm border">
      <div className="card-body">
        <h3 className="card-title fw-bold">{product.name}</h3>
        <p className="card-subtitle mb-2 text-muted">Categoría: {product.category}</p>
        <ul className="list-group list-group-flush">
          {entries.map(([store, price]) => (
            <li key={store} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{storeIcons[store] || "🏷️"} {store}</span>
              <span className={price === lowest ? "fw-bold text-success" : ""}>
                {currencyFormat.format(price)} {price === lowest && "🔥"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}
