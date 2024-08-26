import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(5);
  });
});
