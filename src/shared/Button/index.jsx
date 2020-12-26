import React from 'react';
import './Button.scss';

function Button({ text, onClick, disabled }) {
  return (
    <button className="button" type="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
