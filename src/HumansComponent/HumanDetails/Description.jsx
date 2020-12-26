import React from 'react';

function Description({ title, value }) {
  return (
    <div>
      <span className="title">{title}</span>
      <textarea className="description" value={value} disabled />
    </div>
  );
}

export default Description;
