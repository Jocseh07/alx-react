import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';
// import store from '../store';

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

export const boundSelectCourse = bindActionCreators(
  selectCourse,
  store.dispatch,
);
export const boundUnSelectCourse = bindActionCreators(
  unSelectCourse,
  store.dispatch,
);
