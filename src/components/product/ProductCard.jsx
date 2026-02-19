import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="group block  rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            {/* Image */}
            <div className="overflow-hidden h-64 flex items-center justify-center bg-gray-50">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-full w-full transition-transform scale-80 duration-300 group-hover:scale-90"
                />
            </div>

            {/* Content */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 flex flex-col justify-between h-56">
                <div>
                    <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-2">{product.title}</h2>
                    <p className="mt-1 text-yellow-500 dark:text-yellow-300 font-medium text-xl">${product.price}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400  text-sm line-clamp-3">{product.description}</p>
                </div>

            </div>
        </Link>
    );
}
