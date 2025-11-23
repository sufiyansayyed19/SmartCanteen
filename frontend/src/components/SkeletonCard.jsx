const SkeletonCard = () => {
  return (
    <div className="font-bold w-[10rem] md:w-[15.625rem] bg-white p-5 flex flex-col justify-between rounded-2xl gap-2 shadow-xl border-[1px] animate-pulse">
      {/* Image skeleton */}
      <div className="flex justify-center">
        <div className="w-[6rem] h-[6rem] md:w-[8.75rem] md:h-[8.75rem] bg-gray-300 rounded-full"></div>
      </div>
      
      {/* Title and price skeleton */}
      <div className="flex justify-between text-sm">
        <div className="h-4 bg-gray-300 rounded w-20 md:w-32"></div>
        <div className="h-4 bg-gray-300 rounded w-12 md:w-16"></div>
      </div>
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
      
      {/* Rating and button skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-12"></div>
        <div className="h-8 bg-gray-300 rounded w-24 md:w-28"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
