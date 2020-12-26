import React from 'react';
import './TableHeader.scss';
import { changeSortValueObj } from 'utils';
import { setSorting } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import TableHeaderComponent from './TableHeaderComponent';

// Контейнерный компонент отображающий список колонок таблицы
function TableHeader() {
  const dispatch = useDispatch();
  const { sortingValue, isLoading } = useSelector(({ sorting, isLoading }) => ({
    sortingValue: sorting,
    isLoading,
  }));

  // Смена активной сортировки
  const changeSorting = (sortingName) => {
    const newSortObj = changeSortValueObj(sortingValue, sortingName);
    dispatch(setSorting(newSortObj));
  };

  return (
    <TableHeaderComponent
      itemOnClick={changeSorting}
      activeItemObj={sortingValue}
      isLoading={isLoading}
    />
  );
}

export default TableHeader;
