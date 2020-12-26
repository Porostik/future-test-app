import { createSelector } from 'reselect';
import { createDetailsObj } from 'utils';
import { detailsDefaultProps } from 'constants.js';

const detailsObj = (store) => store.openDetailsItem;

export const selectDetailsItem = createSelector([detailsObj], (item) => {
  //   console.log(item);
  //   console.log(detailsDefaultProps);
  return createDetailsObj(item, detailsDefaultProps);
});
