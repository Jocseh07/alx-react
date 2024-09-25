import { Map } from "immutable";
import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { normalizeCourses } from "../utils/normalize";

describe("courseReducer", () => {
  it("should return the default state", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Map());
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
      ],
    };
    const normalizedData = normalizeCourses(action.data);
    const expectedState = Map(normalizedData);
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle SELECT_COURSE", () => {
    const initialState = Map({
      1: { id: 1, name: "Course 1", isSelected: false },
      2: { id: 2, name: "Course 2", isSelected: false },
    });
    const action = {
      type: SELECT_COURSE,
      index: 1,
    };
    const expectedState = initialState.setIn([1, "isSelected"], true);
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle UNSELECT_COURSE", () => {
    const initialState = Map({
      1: { id: 1, name: "Course 1", isSelected: true },
      2: { id: 2, name: "Course 2", isSelected: false },
    });
    const action = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    const expectedState = initialState.setIn([1, "isSelected"], false);
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
