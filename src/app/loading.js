export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-300 border-t-black"></div>
      <p className="mt-4 text-zinc-500">Loading...</p>
    </div>
  );
}