"use client";
import ProductGrids from "@/components/product/ProductGrids";
import { getAllProducts, getCategories } from "@/services/productService";
import { useEffect, useState } from "react";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import FilterSidebar from "@/components/filters/FilterSidebar";
import { filterProducts } from "@/utils/filterProducts";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    async function fetchData() {
      try {
        const prod = await getAllProducts();
        const cats = await getCategories();
        setProducts(prod);
        setFilteredProducts(prod);
        setCategories(cats);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      filterProducts(products, selectedCategory, minPrice, maxPrice),
    );
  }, [products, selectedCategory, minPrice, maxPrice]);

  if (error) return <div> There is an {error} </div>;

  return (
    <div>
      <h1 className="text-4xl uppercase text-center text-zinc-700 dark:text-zinc-200 py-10 font-semibold tracking-tighter">
        All Products
      </h1>
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      {loading ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
        </div>
      ) : (
        <ProductGrids products={filteredProducts} />
      )}
    </div>
  );
}
