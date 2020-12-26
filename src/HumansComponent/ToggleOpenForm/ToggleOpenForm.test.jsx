import React from 'react';
import { mount } from 'enzyme';
import ToggleOpenForm from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Filter component', () => {
  test('should disable button when isLoading is true', () => {
    const store = mockStore({
      isLoading: true,
    });
    const wrapper = mount(
      <Provider store={store}>
        <ToggleOpenForm />
      </Provider>,
    );
    const button = wrapper.find('button');
    expect(button.props().disabled).toBeTruthy();
  });
});
