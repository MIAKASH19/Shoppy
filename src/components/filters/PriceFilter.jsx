export default function PriceFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price</h3>
      <div className="flex gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min"
          className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-2 px-4 w-1/2"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max"
          className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-2 px-4 w-1/2"
        />
      </div>
    </div>
  );
}