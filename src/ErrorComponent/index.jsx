import React from 'react';
import { Button } from 'shared';
import { buttonsText } from 'constants.js';
import './ErrorComponent.scss';
import PropTypes from 'prop-types';

// Компонент отображения ошибки
// errorMessage - текст ошики
// buttomInClick - функция для перезагрузки страницы
function ErrorComponent({ errorMessage, buttonOnClick }) {
  return (
    <div className="error">
      <span className="error-message">{errorMessage}</span>
      <Button text={buttonsText.error} onClick={buttonOnClick} />
    </div>
  );
}

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
  buttonOnClick: PropTypes.func.isRequired,
};

ErrorComponent.defaultProps = {
  errorMessage: 'Произошла ошибка при загрузке',
};

export default ErrorComponent;
