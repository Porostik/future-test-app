import { actions } from 'constants.js';

export const setSorting = (sortingObj) => ({
  type: actions.setSorting,
  payload: sortingObj,
});
