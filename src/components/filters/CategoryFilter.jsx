export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className=" w-1/3 mb-4">
      <h3 className="font-semibold mb-2">Category</h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-400 rounded-lg p-2 px-4 w-full"
      >
        <option value="all">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}