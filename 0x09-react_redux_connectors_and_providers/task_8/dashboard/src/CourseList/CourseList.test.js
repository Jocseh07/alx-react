import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";

jest.mock("../actions/courseActionCreators");

describe("CourseList component", () => {
  beforeEach(() => {
    fetchCourses.mockClear();
    selectCourse.mockClear();
    unSelectCourse.mockClear();
  });

  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders 2 different rows", () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(2);
  });

  it("renders correctly with an empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(3);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(2);
  });

  it("renders the list of courses correctly", () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(courses.length + 2);
  });

  it("dispatches fetchCourses action when the component is mounted", () => {
    shallow(<CourseList fetchCourses={fetchCourses} />);
    expect(fetchCourses).toHaveBeenCalled();
  });

  it("dispatches selectCourse and unSelectCourse actions correctly when onChangeRow is called", () => {
    const wrapper = shallow(
      <CourseList selectCourse={selectCourse} unSelectCourse={unSelectCourse} />
    );
    const instance = wrapper.instance();

    // Simulate selecting a course
    instance.onChangeRow(1, true);
    expect(selectCourse).toHaveBeenCalledWith(1);

    // Simulate unselecting a course
    instance.onChangeRow(1, false);
    expect(unSelectCourse).toHaveBeenCalledWith(1);
  });
});
