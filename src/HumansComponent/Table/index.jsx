import React from 'react';
import { loadingItemsCount } from 'constants.js';
import { setOpenDetailsItem } from './actions';
import TabelComponent from './TabelComponent';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortingList } from './selectors';
import LoadingPlaceholder from 'HumansComponent/ListPlaceholders/LoadingPlaceholder';

// Контейнерный компонент таблицы
function Tabel() {
  const dispatch = useDispatch();
  const humans = useSelector(selectSortingList);
  const isLoading = useSelector(({ isLoading }) => isLoading);

  const setOpenItem = (item) => {
    dispatch(setOpenDetailsItem(item));
  };

  // Отображает загрузочные элементы во время загрузки.
  // Если загрузка выполнена, отображает список людей
  return isLoading ? (
    <LoadingPlaceholder loadingItemsCount={loadingItemsCount} />
  ) : (
    <TabelComponent humans={humans} itemOnClick={setOpenItem} />
  );
}

export default Tabel;
