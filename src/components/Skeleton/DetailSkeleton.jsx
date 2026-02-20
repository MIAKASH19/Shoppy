export default function DetailSkeleton() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-16 animate-pulse">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl p-8">
          <div className="w-full h-96 bg-gray-200 dark:bg-zinc-700 rounded-2xl"></div>
        </div>

        <div className="space-y-6">

          <div className="w-24 h-6 bg-gray-200 dark:bg-zinc-700 rounded-full"></div>

          <div className="space-y-3">
            <div className="w-3/4 h-8 bg-gray-300 dark:bg-zinc-700 rounded-lg"></div>
            <div className="w-1/2 h-8 bg-gray-300 dark:bg-zinc-700 rounded-lg"></div>
          </div>

          <div className="w-32 h-8 bg-gray-300 dark:bg-zinc-700 rounded-lg"></div>

          <div className="space-y-3">
            <div className="w-full h-4 bg-gray-200 dark:bg-zinc-700 rounded"></div>
            <div className="w-full h-4 bg-gray-200 dark:bg-zinc-700 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 dark:bg-zinc-700 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-200 dark:bg-zinc-700 rounded"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="w-32 h-12 bg-gray-300 dark:bg-zinc-700 rounded-xl"></div>
            <div className="w-40 h-12 bg-gray-300 dark:bg-zinc-700 rounded-xl"></div>
            <div className="w-44 h-12 bg-gray-200 dark:bg-zinc-700 rounded-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}