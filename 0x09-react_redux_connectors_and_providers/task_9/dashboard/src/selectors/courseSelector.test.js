import { createSelector } from "reselect";
import { getCourses } from "./courseSelector";

describe("courseSelector", () => {
  it("should return the list of courses", () => {
    const state = {
      courses: [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
      ],
    };

    const selectedCourses = getCourses(state);
    expect(selectedCourses).toEqual(state.courses);
  });

  it("should return an empty array if no courses are available", () => {
    const state = {
      courses: [],
    };

    const selectedCourses = getCourses(state);
    expect(selectedCourses).toEqual([]);
  });
});
