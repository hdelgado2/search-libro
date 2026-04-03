import React from 'react'

const Loading = () => {
  return (
    <>
    <main className="flex-1 bg-surface-container-low min-h-screen px-16 py-12">

  {/* Main Browsing Grid Skeleton */}
  <section>
    <div className="flex items-center gap-8 mb-12 overflow-x-hidden">
      <div className="h-10 w-24 shimmer rounded-full flex-shrink-0" />
      <div className="h-10 w-24 shimmer rounded-full flex-shrink-0 opacity-60" />
      <div className="h-10 w-24 shimmer rounded-full flex-shrink-0 opacity-40" />
      <div className="h-10 w-24 shimmer rounded-full flex-shrink-0 opacity-20" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Book Card Skeleton 1 */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
          </div>
        </div>
      </div>
      {/* Book Card Skeleton 2 */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
          </div>
        </div>
      </div>
      {/* Book Card Skeleton 3 */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
          </div>
        </div>
      </div>
      {/* Book Card Skeleton 4 */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
            <div className="h-6 w-16 shimmer rounded-full opacity-40" />
          </div>
        </div>
      </div>
      {/* Row 2 Skeletons */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 mt-8">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 mt-8">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 mt-8">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 mt-8">
        <div className="aspect-[2/3] w-full rounded-lg shimmer -mt-8 shadow-lg" />
        <div className="space-y-3 mt-2">
          <div className="h-5 w-3/4 shimmer rounded-full" />
          <div className="h-3 w-1/2 shimmer rounded-full opacity-60" />
        </div>
      </div>
    </div>
  </section>
</main>

    </>
  )
}

export default Loading