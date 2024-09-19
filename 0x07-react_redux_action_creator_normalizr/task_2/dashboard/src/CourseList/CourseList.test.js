import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders 2 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(2);
  });

  it('renders correctly with an empty array', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(3);
  });

  it('renders correctly when listCourses is not passed', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(2);
  });

  it('renders the list of courses correctly', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(courses.length + 2);
  });
});
