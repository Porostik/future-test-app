import { actions } from 'constants.js';

export const setOpenDetailsItem = (item) => ({
  type: actions.setDetailsItem,
  payload: item,
});

export const setFormOpen = (isOpen) => ({
  type: actions.setFormOpen,
  payload: isOpen,
});
