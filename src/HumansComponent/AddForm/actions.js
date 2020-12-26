import { actions } from 'constants.js';

export const addHuman = (human) => ({
  type: actions.addHuman,
  payload: human,
});
