import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchHumans } from 'actions';
import ErrorComponent from 'ErrorComponent';

// Компонент загрузки активации загрузки
// loadingUrl - ссылка по которой будет происходить загрузка
function HumansLoader({ loadingUrl, children }) {
  const error = useSelector(({ errorMessage }) => errorMessage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchHumans(loadingUrl));
  }, [dispatch, loadingUrl]);

  // Если во время запроса на сервер произошла ошибка,
  // то отображается компонент ошибки
  return error ? (
    <ErrorComponent errorMessage={error} buttonOnClick={() => dispatch(fetchHumans(loadingUrl))} />
  ) : (
    children
  );
}

export default HumansLoader;
