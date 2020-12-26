import React from 'react';
import Pagination from './Pagination';
import './Pagination.scss';
import { getPaginationValues } from 'utils';

// Компонент высшего порядка добавляющий к списку пагинацию.
function ListWithPagination(Component) {
  return function WithPaginationWrapper(props) {
    // list - отображаемый спиок
    // itemsCountOnPage - максимальное колличество элементов на страницу
    // maxPageOnList - максимальное колличество отображаемых кнопок для переключения страниц
    // pageStep - "шаг" с которым будут сменяться кнопки пагинации
    const { list, itemsCountOnPage, maxPageOnList, pageStep, ...componentProps } = props;
    const [currentPage, setCurrentPage] = React.useState(1);

    const setPage = (pageValue) => {
      setCurrentPage(pageValue);
    };

    return (
      <div className="with-pagination">
        <Component
          {...componentProps}
          items={list.slice(
            currentPage * itemsCountOnPage - itemsCountOnPage,
            currentPage * itemsCountOnPage,
          )}
        />
        {list.length > itemsCountOnPage && (
          <Pagination
            currentPage={currentPage}
            paginationValues={getPaginationValues(
              currentPage,
              maxPageOnList,
              pageStep,
              Math.ceil(list.length / itemsCountOnPage),
            )}
            buttonOnClick={setPage}
            pageStep={pageStep}
          />
        )}
      </div>
    );
  };
}

export default ListWithPagination;
