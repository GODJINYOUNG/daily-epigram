export default function EpigramCardSkeleton() {
  return (
    <div className="rounded-lg border border-gray-100 p-6 shadow-sm animate-pulse">
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
      <div className="flex items-center justify-between">
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="h-4 w-10 bg-gray-100 rounded-full"></div>
          <div className="h-4 w-10 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
