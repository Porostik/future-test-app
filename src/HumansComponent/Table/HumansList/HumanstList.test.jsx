import React from 'react';
import { shallow } from 'enzyme';
import HumansList from '.';

describe('Humans list component', () => {
  test('Humans list snapshot', () => {
    const humans = [
      {
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
      {
        id: 102,
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
      {
        id: 103,
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
    ];
    const wrapper = shallow(<HumansList items={humans} itemOnClick={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });
});
