"use client";
import ProjectGrids from "@/components/product/ProjectGrids";
import { getAllProducts } from "@/services/productService";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const prod = await getAllProducts();
        setProducts(prod);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (error) return <div> There is an {error} </div>;

  return (
    <div>
      <h1 className="text-4xl uppercase text-center text-zinc-700 dark:text-zinc-200 py-10 font-semibold tracking-tighter">
        All Products
      </h1>
      {loading ? (
        <div> Loading ... </div>
      ) : (
        <ProjectGrids products={products} />
      )}
    </div>
  );
}
