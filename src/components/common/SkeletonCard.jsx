import React from 'react';

export default function SkeletonCard({ variant = 'program', count = 1 }) {
  const items = Array.from({ length: count });

  const renderSkeleton = (key) => {
    switch (variant) {
      case 'trainer':
        return (
          <div key={key} className="rounded-xl overflow-hidden bg-bg-card border border-white/5 animate-pulse flex flex-col justify-between h-[420px]">
            <div className="aspect-[3/4] bg-white/5 w-full" />
            <div className="p-6 space-y-3">
              <div className="h-3 bg-white/10 rounded w-1/3" />
              <div className="h-6 bg-white/10 rounded w-2/3" />
              <div className="h-3 bg-white/5 rounded w-full" />
              <div className="h-3 bg-white/5 rounded w-4/5" />
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <div className="h-3 bg-white/10 rounded w-1/4" />
                <div className="h-8 bg-white/10 rounded w-1/3" />
              </div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div key={key} className="rounded-xl overflow-hidden bg-bg-card border border-white/5 animate-pulse space-y-4">
            <div className="aspect-video bg-white/5 w-full" />
            <div className="p-5 space-y-2">
              <div className="h-3 bg-white/10 rounded w-1/4" />
              <div className="h-5 bg-white/10 rounded w-3/4" />
              <div className="h-3 bg-white/5 rounded w-full" />
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div key={key} className="rounded-xl overflow-hidden bg-bg-card border border-white/5 animate-pulse aspect-[4/3]">
            <div className="w-full h-full bg-white/5" />
          </div>
        );

      case 'facility':
      case 'program':
      default:
        return (
          <div key={key} className="rounded-xl overflow-hidden bg-bg-card border border-white/5 animate-pulse flex flex-col justify-between h-[380px]">
            <div className="p-6 flex justify-between">
              <div className="h-4 bg-white/10 rounded w-1/4" />
              <div className="h-6 bg-white/10 rounded w-8" />
            </div>
            <div className="p-6 space-y-3 mt-auto">
              <div className="h-6 bg-white/10 rounded w-3/4" />
              <div className="h-3 bg-white/5 rounded w-full" />
              <div className="h-3 bg-white/5 rounded w-4/5" />
              <div className="pt-3 border-t border-white/5 flex justify-between">
                <div className="h-4 bg-white/10 rounded w-1/3" />
                <div className="h-6 w-6 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {items.map((_, i) => renderSkeleton(i))}
    </>
  );
}

