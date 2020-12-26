import { actions, errorMessage } from 'constants.js';

export const fetchHumans = (url) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const responce = await fetch(url);
    if (!responce.ok) {
      dispatch(setError(errorMessage));
    } else {
      const value = await responce.json();
      dispatch(setSuccess(value));
    }
  } catch (e) {
    dispatch(setError(errorMessage));
  }
};

const setLoading = () => ({
  type: actions.loading,
});

const setSuccess = (humans) => ({
  type: actions.success,
  payload: humans,
});

const setError = (errorMessage) => ({
  type: actions.error,
  payload: errorMessage,
});
