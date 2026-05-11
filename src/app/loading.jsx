import React from 'react';

const Loading = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">

      {/* Header Skeleton */}
      <div className="mb-10">
        <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-4 w-72 bg-gray-100 rounded-lg mt-3 animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
          >

            {/* Image skeleton */}
            <div className="h-52 sm:h-56 bg-gray-200 animate-pulse" />

            {/* Content */}
            <div className="p-4 sm:p-5 space-y-3">

              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />

              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />

              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />

              {/* Price */}
              <div className="flex items-center justify-between mt-4">
                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 rounded-xl animate-pulse" />
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Loading;