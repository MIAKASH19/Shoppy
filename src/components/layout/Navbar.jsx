"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX, HiOutlineShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Shoppy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative rounded-full w-fit text-sm transition-all duration-300 px-4 py-2"
            >
              {pathname === link.href && (
                <span className="w-2 h-2 rounded-full bg-green-400 absolute top-1/2 left-1 -translate-x-full -translate-y-1/2"></span>
              )}
              <span
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-pink-500 dark:text-pink-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}

          {/* Cart Icon */}
          <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
            <HiOutlineShoppingCart className="w-6 h-6 text-gray-900 dark:text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Avatar Icon */}
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
            <FaUserCircle className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Cart Icon for mobile */}
          <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
            <HiOutlineShoppingCart className="w-6 h-6 text-gray-900 dark:text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Avatar Icon for mobile */}
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
            <FaUserCircle className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
          >
            {mobileOpen ? <HiOutlineX className="w-6 h-6 text-gray-900 dark:text-white" /> : <HiOutlineMenu className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-2 shadow-inner">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative block font-medium transition-colors px-4 py-2 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              {pathname === link.href && (
                <span className="w-2 h-2 rounded-full bg-green-400 absolute top-1/2 left-0 -translate-x-full -translate-y-1/2"></span>
              )}
              <span
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-pink-500 dark:text-pink-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
