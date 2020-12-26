import React from 'react';
import ContentLoader from 'react-content-loader';

// Загрузочный элемент
function LoadingItem() {
  return (
    <ContentLoader
      speed={2}
      width={772.5}
      height={55}
      viewBox="0 0 772 55"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="10" y="10" rx="5" ry="5" width="46.5" height="35" />
      <rect x="64" y="10" rx="5" ry="5" width="114" height="35" />
      <rect x="187" y="10" rx="5" ry="5" width="114" height="35" />
      <rect x="311" y="10" rx="5" ry="5" width="228" height="35" />
      <rect x="549" y="10" rx="5" ry="5" width="160" height="35" />
    </ContentLoader>
  );
}

export default LoadingItem;
