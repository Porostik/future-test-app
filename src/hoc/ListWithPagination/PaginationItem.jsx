import React from 'react';
import cn from 'class-names';

// Компонент кнопки пагинации
// value - значение отображаемое на кнопке
// isActive - активна ли кнопка в данный момент
// onClick - функция вызываемая при нажатии на кнопку
function PaginationButton({ value, isActive, onClick }) {
  const classes = cn('pagination-button', { active: isActive || '' });

  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  );
}

export default PaginationButton;
