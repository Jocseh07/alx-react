import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell='cell' />);
  });

  it('renders header row correctly', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='Header 1'
        textSecondCell='Header 2'
      />,
    );
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Header 1');
    expect(wrapper.find('th').at(1).text()).toEqual('Header 2');
  });

  it('renders one cell correctly', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='Header 1'
        textSecondCell={null}
      />,
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').text()).toEqual('Header 1');
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('renders regular row correctly', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='Cell 1'
        textSecondCell='Cell 2'
      />,
    );
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Cell 1');
    expect(wrapper.find('td').at(1).text()).toEqual('Cell 2');
  });
});
