import { actions } from 'constants.js';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null,
  sorting: {},
  filter: '',
  openDetailsItem: null,
  isFormOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.loading:
      return {
        ...state,
        errorMessage: null,
        isLoading: true,
      };
    case actions.success:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case actions.error:
      return {
        ...state,
        errorMessage: action.payload,
        isLodaing: false,
      };
    case actions.setSorting:
      return {
        ...state,
        sorting: action.payload,
      };
    case actions.setFilter:
      return {
        ...state,
        filter: action.payload,
      };
    case actions.setDetailsItem:
      return {
        ...state,
        openDetailsItem: action.payload,
      };
    case actions.addHuman:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actions.setFormOpen:
      return {
        ...state,
        isFormOpen: action.payload,
      };
    default:
      return state;
  }
};
