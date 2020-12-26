import React from 'react';
import { setFormOpen } from '../Table/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared';
import { buttonsText } from 'constants.js';
import './ToggleOpenForm.scss';

// Компонент переключения открытого и закрытого состояний таблицы
// добавления человека в список
function ToggleOpenForm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(setFormOpen(!isOpen));
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="toggle-form">
      <Button
        onClick={toggleOpen}
        text={isOpen ? buttonsText.closeForm : buttonsText.openForm}
        disabled={isLoading}
      />
    </div>
  );
}

export default ToggleOpenForm;
