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
        className="form-control"
      />
    </div>
  );
}
