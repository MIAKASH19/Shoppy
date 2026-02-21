"use client";

export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        Something went wrong!
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>

      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-90 transition"
      >
        Try Again
      </button>
    </div>
  );
}