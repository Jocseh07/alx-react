import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  return List(page1).concat(List(page2));
};

export const mergeElements = (page1, page2) => {
  return Map(page1).concat(Map(page2));
};
