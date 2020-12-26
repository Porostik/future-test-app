import React from 'react';
import { shallow, mount } from 'enzyme';
import AddFormComponent from './AddFormComponent';

describe('AddForm component', () => {
  test('AddForm snashot', () => {
    const initObj = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    const wrapper = shallow(<AddFormComponent handleSubmit={jest.fn()} initObj={initObj} />);
    expect(wrapper).toMatchSnapshot();
  });
});
