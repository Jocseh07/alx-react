import { createSelector } from "reselect";
import { List } from "immutable";

const getCourses = (state) => state.courses;

export const courseSelector = createSelector([getCourses], (courses) =>
  courses.valueSeq().toList()
);
