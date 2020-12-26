import React from 'react';
import './HumanList.scss';
import HumanItem from './HumanItem';
import { displayedProps } from 'constants.js';
import { getDisplayedObj } from 'utils';

// Список компонентов "человека"
function HumansList({ items, itemOnClick }) {
  return (
    <div className="human-list">
      {items.map((item, index) => (
        <HumanItem
          key={index}
          humanObj={getDisplayedObj(item, displayedProps)}
          onClick={() => itemOnClick(item)}
        />
      ))}
    </div>
  );
}

export default HumansList;
