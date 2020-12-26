import React from 'react';
import { shallow } from 'enzyme';
import ErrorComponent from 'ErrorComponent';

describe('ErrorComponent', () => {
  test('should render error message from props', () => {
    const wrapper = shallow(<ErrorComponent errorMessage={'Error'} buttonOnClick={jest.fn()} />);
    expect(wrapper.find('.error-message').text()).toBe('Error');
  });
});
