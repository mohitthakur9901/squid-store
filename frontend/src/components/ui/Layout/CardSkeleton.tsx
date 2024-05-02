import React from 'react';

const CardSkeleton = ({ numItems = 16 }) => {
  const skeletonItems = Array.from({ length: numItems }, (_, index) => (
    <div key={index} className="h-32 rounded-lg bg-gray-200"></div>
  ));

  return (
    <div className="grid grid-cols-4 gap-4 lg:grid-cols-16 lg:gap-8 py-5">
      {skeletonItems}
    </div>
  );
};

export default CardSkeleton;
