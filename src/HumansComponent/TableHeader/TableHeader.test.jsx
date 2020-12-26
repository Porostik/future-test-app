import React from 'react';
import { mount } from 'enzyme';
import TableHeaderComponent from './TableHeaderComponent';
import { sortTypes } from 'constants.js';

describe('Filter component', () => {
  test('should not render sorting items whith active state if sorting is empty', () => {
    const wrapper = mount(<TableHeaderComponent activeItemObj={{}} />);
    expect(wrapper.find('.header-button.active')).toHaveLength(0);
  });

  test('should render one active sorting value', () => {
    const activeItemObj = {
      name: 'id',
      type: sortTypes.decreace,
    };

    const wrapper = mount(<TableHeaderComponent activeItemObj={activeItemObj} />);
    expect(wrapper.find(`.header-button.active.${sortTypes.decreace}`).text()).toBe(
      activeItemObj.name,
    );
  });
});
