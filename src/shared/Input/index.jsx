import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

function Input({ value, onChange, placeholder, ...anotherProps }) {
  return (
    <input
      type="text"
      className="input"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...anotherProps}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
