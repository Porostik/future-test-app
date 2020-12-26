import React from 'react';

// Компонент строки данных (заголовк + значение)
function DetailsItem({ title, value }) {
  return (
    <div className="details-item">
      <span className="title">{title}</span>
      <p className="value">{value}</p>
    </div>
  );
}

export default DetailsItem;
