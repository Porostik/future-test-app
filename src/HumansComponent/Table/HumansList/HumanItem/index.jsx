import React from 'react';
import './HumanItem.scss';
import ItemBlock from './ItemBlock';

// Компонент отображающий данные о человеке
// humanObj - объект с данными о человеке
// onClick - функция нажатия на компонент
function HumanItem({ humanObj, onClick }) {
  return (
    <div className="human-item" onClick={onClick}>
      {Object.values(humanObj).map((item, index) => (
        <ItemBlock key={index} value={item} />
      ))}
    </div>
  );
}

export default HumanItem;
