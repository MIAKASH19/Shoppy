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
    <div className="w-full bg-white dark:bg-zinc-900 rounded-lg shadow mb-5 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <PriceFilter 
        minPrice={minPrice} 
        maxPrice={maxPrice} 
        setMinPrice={setMinPrice} 
        setMaxPrice={setMaxPrice} 
      />
    </div>
  );
}