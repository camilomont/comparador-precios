interface Props {
  filter: string;
  onChange: (val: string) => void;
}

export default function Filters({ filter, onChange }: Props) {
  return (
    <div className="mb-4">
      <input
        placeholder="Buscar producto..."
        value={filter}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 outline-blue-500"
      />
    </div>
  );
}
