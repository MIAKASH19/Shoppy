import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shoppy
          </h2>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Your trusted modern e-commerce platform. Shop smart, shop fast,
            shop secure.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-purple-500 hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-purple-500 hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-purple-500 hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-purple-500 hover:text-white transition"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Support
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Subscribe to get special offers and product updates.
          </p>

          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 focus:outline-none text-sm"
            />
            <button className="px-4 py-2 rounded-r-lg bg-purple-500 hover:bg-pink-500 text-white text-sm transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Shoppy. All rights reserved.
      </div>
    </footer>
  );
}