"use client";

import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  const values = [
    {
      title: "Fast & Reliable",
      description: "Lightning-fast delivery with real-time order tracking.",
      icon: <FaRocket />,
    },
    {
      title: "Secure Shopping",
      description: "Your payments and personal data are fully protected.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-24">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-4xl font-medium text-purple-500">
          About Shoppy
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Building the Future of Online Shopping
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
          We are redefining the e-commerce experience with a modern,
          user-friendly platform designed to make shopping faster, safer, and
          more enjoyable.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our goal is simple — provide high-quality products with a seamless
            shopping experience. We focus on speed, trust, and customer
            satisfaction to create a platform people love to use.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you're buying your first product or running your own online
            store, we make everything effortless and secure.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80"
            alt="About Us"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-gray-100 dark:bg-zinc-800 hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-3xl text-purple-500 mb-4">{value.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {value.title}
            </h4>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
