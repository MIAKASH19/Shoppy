"use client";

import Link from "next/link";
import ButtonGradient from "../ui/ButtonGradient";

export default function HeroSection() {
  const highlights = [
    { title: "Free Delivery", description: "On orders over ৳2000", icon: "🚚" },
    { title: "24/7 Support", description: "We’re here to help", icon: "🕑" },
  ];

  return (
    <section className="relative text-white overflow-hidden">
      <div className="max-w-7xl mx-auto py-32 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Find Products You'll <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">Love & Trust</span>
          </h1>
          <p className="text-md sm:text-lg text-white/80 max-w-lg">
            Shop premium items with fast delivery, secure payments, and unbeatable prices  all in one modern e-commerce experience.
          </p>
            <Link
              href="/products"
            >
              <ButtonGradient  text={"Browse Products"}/>
            </Link>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg hover:scale-105 transform transition"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
          <div className="w-full max-w-lg">
            <img
              src="/heroImage.jpg" 
              alt="Hero Image"
              className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform"
            />
            <div className="absolute -top-6 left-18 w-20 h-20 rounded-full bg-pink-400/30 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-400/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
