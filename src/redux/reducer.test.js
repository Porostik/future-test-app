import { reducer } from './reducer';
import { actions } from 'constants.js';

describe('reducer', () => {
  describe('loading action', () => {
    test('should set isLoading true', () => {
      const state = reducer(undefined, { type: actions.loading });
      expect(state.isLoading).toBeTruthy();
    });

    test('should set errorMessage to null', () => {
      const state = reducer(undefined, { type: actions.loading });
      expect(state.errorMessage).toEqual(null);
    });
  });

  describe('error action', () => {
    test('should set isLoading to false', () => {
      const state = reducer(undefined, { type: actions.error });
      expect(state.isLoading).toBeFalsy();
    });

    test('should new error message', () => {
      const state = reducer(undefined, { type: actions.error, payload: 'Error' });
      expect(state.errorMessage).toEqual('Error');
    });
  });

  describe('success action', () => {
    test('should set isLoading to false', () => {
      const state = reducer(undefined, { type: actions.success });
      expect(state.isLoading).toBeFalsy();
    });

    test('should set new list', () => {
      const state = reducer(undefined, { type: actions.success, payload: [1, 2, 3] });
      expect(state.list).toEqual([1, 2, 3]);
    });
  });

  describe('addHuman action', () => {
    test('should add new human to list', () => {
      const initState = {
        list: ['Human1', 'Human2'],
      };

      const state = reducer(initState, { type: actions.addHuman, payload: 'Human3' });

      expect(state.list).toEqual([...initState.list, 'Human3']);
    });
  });
});
