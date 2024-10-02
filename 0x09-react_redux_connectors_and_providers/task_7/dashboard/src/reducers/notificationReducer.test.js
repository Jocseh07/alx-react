import { Map } from "immutable";
import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

describe("notificationReducer", () => {
  const initialState = Map({
    notifications: Map(),
    filter: "DEFAULT",
  });

  it("should return the initial state when an action type is not passed", () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, value: "Notification 1", isRead: false, type: "default" },
        { id: 2, value: "Notification 2", isRead: false, type: "urgent" },
      ],
    };
    const normalizedData = notificationsNormalizer(action.data);
    const expectedState = initialState.set("notifications", normalizedData);
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ", () => {
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const stateWithNotifications = initialState.set(
      "notifications",
      notificationsNormalizer([
        { id: 1, value: "Notification 1", isRead: false, type: "default" },
        { id: 2, value: "Notification 2", isRead: false, type: "urgent" },
      ])
    );
    const expectedState = stateWithNotifications.setIn(
      ["notifications", "1", "isRead"],
      true
    );
    const state = notificationReducer(stateWithNotifications, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };
    const expectedState = initialState.set("filter", "URGENT");
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
