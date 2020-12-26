import React from 'react';
import { displayedProps } from 'constants.js';
import TableHeaderItem from './TableHeaderItem';

// itemOnClick - функция нажатия на элемент сортироки
// activeItemObj - объект активной сортиовки
// isLoading - происходит ли сейчас загрузка (для блокирования кнопок во время загрзки)
function TableHeaderComponent({ itemOnClick, activeItemObj, isLoading }) {
  return (
    <div className="header">
      {displayedProps.map((item, index) => (
        <TableHeaderItem
          key={`${index}_${index}`}
          value={item}
          isActive={activeItemObj.name === item}
          type={activeItemObj.name === item ? activeItemObj.type : ''}
          onClick={() => itemOnClick(item)}
          disabled={isLoading}
        />
      ))}
    </div>
  );
}

export default TableHeaderComponent;
