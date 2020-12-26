import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Tabel from '.';

const mockStore = configureStore([]);

describe('Table component', () => {
  test('should render loader placeholder if isLoading is true', () => {
    const store = mockStore({
      isLoading: true,
      sorting: {},
      filter: '',
    });

    const wrapper = mount(
      <Provider store={store}>
        <Tabel />
      </Provider>,
    );

    expect(wrapper.find('.loading-placeholder')).toHaveLength(1);
  });
});
