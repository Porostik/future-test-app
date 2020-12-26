import { createSelector } from 'reselect';
import { sortTypes, displayedProps } from 'constants.js';
import { isObjValid } from 'utils';
import { orderBy } from 'lodash';

const humans = (store) => store.list;
const sorting = (store) => store.sorting;
const filter = (store) => store.filter;

const selectFilteredList = createSelector([humans, filter], (items, filter) => {
  if (!filter) return items;
  return items.reduce(
    (acc, item) => (isObjValid(item, displayedProps, filter) ? [...acc, item] : acc),
    [],
  );
});

export const selectSortingList = createSelector([selectFilteredList, sorting], (items, sort) => {
  if (!sort.type) return items;
  let sortingHumans;
  if (sort.type === sortTypes.increace) {
    sortingHumans = orderBy(items, sort.name, 'asc');
  } else {
    sortingHumans = orderBy(items, sort.name, 'desc');
  }

  return sortingHumans;
});
