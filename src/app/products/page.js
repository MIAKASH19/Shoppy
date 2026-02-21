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

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const prod = await getAlProducts();
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
    setCurrentPage(1);
  }, [products, selectedCategory, minPrice, maxPrice]);

  if (error) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        Failed to load products
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        {error}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-5 py-2 bg-black text-white rounded-lg hover:opacity-90"
      >
        Retry
      </button>
    </div>
  );
}

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="text-6xl capitalize text-center text-zinc-700 dark:text-zinc-200 py-10 font-semibold tracking-tighter">
        All Products
      </h1>
      <p className="text-center text-zinc-700 dark:text-zinc-400 mb-10">
        Explore our wide range of products and find your favorites easily quality items, great prices, and fast delivery all in one place.
      </p>

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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:gap-6 gap-3">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
        </div>
      ) : (
        <>
          <ProductGrids products={currentProducts} />

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-8">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  Prev
                </button>
              )}

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white border-purple-600"
                      : "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200"
                  } hover:bg-gray-100 dark:hover:bg-zinc-800 transition`}
                >
                  {i + 1}
                </button>
              ))}

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
