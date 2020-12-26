import React from 'react';
import HumansList from './HumansList';
import { ListWithPagination } from 'hoc';
import { paginationObj } from 'constants.js';

// Презентационный компонент таблицы
// humans - отображаемый список людей
// itemOnClick - функция нажатия на компонент "человека"
function TabelComponent({ humans, itemOnClick }) {
  const List = ListWithPagination(HumansList);
  return (
    <div className="tabel">
      <List
        list={humans}
        itemsCountOnPage={paginationObj.itemsCountOnPage}
        maxPageOnList={paginationObj.maxPageOnList}
        pageStep={paginationObj.pageStep}
        itemOnClick={itemOnClick}
      />
    </div>
  );
}

export default TabelComponent;
