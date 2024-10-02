import {
  selectCourse,
  unSelectCourse,
  setCourses,
  fetchCourses,
} from "./courseActionCreators";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  SET_COURSES,
} from "./courseActionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("courseActionCreators", () => {
  it("selectCourse should create an action to select a course", () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index,
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it("unSelectCourse should create an action to unselect a course", () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index,
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });

  it("setCourses should create an action to set courses", () => {
    const courses = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
    ];
    const expectedAction = {
      type: SET_COURSES,
      courses,
    };
    expect(setCourses(courses)).toEqual(expectedAction);
  });

  describe("fetchCourses", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("creates SET_COURSES when fetching courses has been done", () => {
      const courses = [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
      ];
      fetchMock.getOnce("/dist/courses.json", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [{ type: SET_COURSES, courses }];
      const store = mockStore({ courses: [] });

      return store.dispatch(fetchCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("handles errors when fetching courses", () => {
      fetchMock.getOnce("/dist/courses.json", {
        throws: new Error("Error fetching courses"),
      });

      const store = mockStore({ courses: [] });

      return store.dispatch(fetchCourses()).catch(() => {
        expect(store.getActions()).toEqual([]);
      });
    });
  });
});
