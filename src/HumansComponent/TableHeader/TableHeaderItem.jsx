import React from 'react';
import cn from 'class-names';

function TableHeaderItem({ value, onClick, isActive, type, disabled }) {
  const classes = cn('header-button', type, { active: isActive || '' });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      <span className="header-item">{value}</span>
    </button>
  );
}

export default React.memo(TableHeaderItem);
