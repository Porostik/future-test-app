import { actions } from 'constants.js';

export const setFilterValue = (newFilterValue) => ({
  type: actions.setFilter,
  payload: newFilterValue,
});
