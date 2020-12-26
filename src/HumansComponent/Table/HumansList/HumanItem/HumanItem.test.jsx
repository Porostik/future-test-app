import React from 'react';
import { shallow } from 'enzyme';
import HumanItem from './index';

describe('HumanItem component', () => {
  test('HumanItem should render human item', () => {
    const item = {
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
    };
    const wrapper = shallow(<HumanItem humanObj={item} onClick={jest.fn()} />);

    expect(wrapper.find('.human-item')).toHaveLength(1);
  });
});
