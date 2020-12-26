import React from 'react';
import PaginationButton from './PaginationItem';
import PropTypes from 'prop-types';

// Компоннет пагинации
// currentPage - номер активной страницы
// paginationValues - список номеров страниц для отображения
// buttonOnClick - функция вызываемая при нажатии на кнопку пагинации
function Pagination({ currentPage, paginationValues, buttonOnClick }) {
  return (
    <div className="pagination">
      {paginationValues.map((item, index) => (
        <PaginationButton
          key={index}
          isActive={item === currentPage}
          value={item}
          onClick={() => buttonOnClick(item)}
        />
      ))}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  paginationValues: PropTypes.array,
  buttonOnClick: PropTypes.func,
};

export default Pagination;
