import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  SET_COURSES,
} from "./courseActionTypes";
import { bindActionCreators } from "redux";
import store from "../store"; // Uncomment this line to import the store

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export function setCourses(courses) {
  return {
    type: SET_COURSES,
    courses,
  };
}

export function fetchCourses() {
  return (dispatch) => {
    fetch("/dist/courses.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  };
}

export const boundSelectCourse = bindActionCreators(
  selectCourse,
  store.dispatch
);
export const boundUnSelectCourse = bindActionCreators(
  unSelectCourse,
  store.dispatch
);
export const boundFetchCourses = bindActionCreators(
  fetchCourses,
  store.dispatch
);
