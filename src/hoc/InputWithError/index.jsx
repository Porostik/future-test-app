import React from 'react';
import './InputWithError.scss';

// Компонент высшего порядка добавляющий к компоненту Input
// текст ошибки, который отображается в том случае, если Input
// ранее был активирован
function InputWithError(Component) {
  return function InputWithErrorWrapper(props) {
    // errorMessage - текст ошибки
    // isToche - был ли компонент активирован раньше
    const { errorMessage, isToched, ...componentProps } = props;

    return (
      <div className="with-error">
        <Component {...componentProps} />
        {isToched && <span className="error-message">{errorMessage}</span>}
      </div>
    );
  };
}

export default InputWithError;
