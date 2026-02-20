"use client";

import { useEffect, useState } from "react";
import { getProductById } from "@/services/productService";
import DetailSkeleton from "@/components/Skeleton/DetailSkeleton";
import { useParams } from "next/navigation";
import Link from "next/link";
import ButtonFilled from './../../../components/ui/ButtonFilled';
import ButtonGradient from "@/components/ui/ButtonGradient";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <DetailSkeleton />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-16">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="bg-white rounded-3xl shadow-xl p-8 transition-transform duration-300">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-100 object-contain"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              ${product.price}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
            <ButtonGradient text={"Buy"}/>
            <ButtonFilled text={"Add to Cart"}/>

            <Link
              href="/products"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}