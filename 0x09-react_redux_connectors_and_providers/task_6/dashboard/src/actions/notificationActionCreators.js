import {
  MARK_AS_READ,
  SET_NOTIFICATION_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";
import { bindActionCreators } from "redux";
import { store } from "../store";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_NOTIFICATION_FILTER,
    filter,
  };
};

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  };
};

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch("/notifications.json");
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

export const boundMarkAsRead = bindActionCreators(markAsRead, store.dispatch);
export const boundSetNotificationFilter = bindActionCreators(
  setNotificationFilter,
  store.dispatch
);
export const boundSetLoadingState = bindActionCreators(
  setLoadingState,
  store.dispatch
);
export const boundSetNotifications = bindActionCreators(
  setNotifications,
  store.dispatch
);
export const boundFetchNotifications = bindActionCreators(
  fetchNotifications,
  store.dispatch
);
