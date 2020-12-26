import React from 'react';
import LoadingItem from './LoadingItem';

// Компонент отображающий загрузочные элементы
function LoadingPlaceholder({ loadingItemsCount }) {
  return (
    <div>
      {Array(loadingItemsCount)
        .fill(0)
        .map((_, index) => (
          <LoadingItem key={index} />
        ))}
    </div>
  );
}

export default LoadingPlaceholder;
