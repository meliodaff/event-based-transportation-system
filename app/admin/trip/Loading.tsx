// components/Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden bg-gray-200 animate-pulse"
        >
          <div className="h-48 bg-gray-300" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-1/4" />
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="flex justify-between mt-4">
              <div className="h-4 bg-gray-300 rounded w-1/4" />
              <div className="h-4 bg-gray-300 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
