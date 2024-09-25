import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  it("should return the default state", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
      ],
    };
    const expectedState = [
      { id: 1, name: "Course 1", isSelected: false },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle SELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "Course 1", isSelected: false },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 1,
    };
    const expectedState = [
      { id: 1, name: "Course 1", isSelected: true },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle UNSELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "Course 1", isSelected: true },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    const expectedState = [
      { id: 1, name: "Course 1", isSelected: false },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
