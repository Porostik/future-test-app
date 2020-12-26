import React from 'react';
import { mount } from 'enzyme';
import HumanDetails from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Filter component', () => {
  test('should render human details from redux', () => {
    const store = mockStore({
      openDetailsItem: {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
          streetAddress: '9792 Mattis Ct',
          city: 'Waukesha',
          state: 'WI',
          zip: '22178',
        },
        description: 'et lacus magna dolor...',
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <HumanDetails />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
