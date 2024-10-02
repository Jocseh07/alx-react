import { Map } from "immutable";
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    const expectedState = initialState.set("isNotificationDrawerVisible", true);
    expect(
      uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })
    ).toEqual(expectedState);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    const initialState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
    const expectedState = initialState.set(
      "isNotificationDrawerVisible",
      false
    );
    expect(uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER })).toEqual(
      expectedState
    );
  });

  it("should handle LOGIN_SUCCESS", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    const expectedState = initialState.set("isUserLoggedIn", true);
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS })).toEqual(
      expectedState
    );
  });

  it("should handle LOGIN_FAILURE and LOGOUT", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    });
    const expectedState = initialState.set("isUserLoggedIn", false);
    expect(uiReducer(initialState, { type: LOGIN_FAILURE })).toEqual(
      expectedState
    );
    expect(uiReducer(initialState, { type: LOGOUT })).toEqual(expectedState);
  });
});
