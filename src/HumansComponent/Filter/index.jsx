import React from 'react';
import './Filter.scss';
import { setFilterValue } from './actions';
import { Input, Button } from 'shared';
import { inputPlaceholders, buttonsText } from 'constants.js';
import { useDispatch, useSelector } from 'react-redux';

// Компонент установки значения фильтра
function Filter() {
  const [inputValue, setInputValue] = React.useState('');
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const dispatch = useDispatch();

  const inputHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onButtonClick = () => {
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div className="filter">
      <Input
        value={inputValue}
        onChange={inputHandleChange}
        placeholder={inputPlaceholders.filter}
      />
      <Button text={buttonsText.filter} onClick={onButtonClick} disabled={isLoading} />
    </div>
  );
}

export default Filter;
