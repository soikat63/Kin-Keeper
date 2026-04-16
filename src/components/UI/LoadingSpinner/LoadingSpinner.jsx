import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-brand-500 rounded-full animate-spin" />
      <p className="text-sm text-gray-400 animate-pulse">
        Loading your friends...
      </p>
    </div>
  );
}

export default LoadingSpinner