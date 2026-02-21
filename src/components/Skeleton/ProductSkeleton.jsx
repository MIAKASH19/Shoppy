export default function ProductSkeleton() {
  return (
    <div className="border border-zinc-200 border-zinc-600 rounded-lg p-4 animate-pulse">
      <div className="bg-gray-300 h-48 mb-4"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
      <div className="h-3 bg-gray-200 w-3/4"></div>
    </div>
  );
}
