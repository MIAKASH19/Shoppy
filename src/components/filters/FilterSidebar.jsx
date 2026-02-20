import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function FilterSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <CategoryFilter  categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
    </div>
  );
}