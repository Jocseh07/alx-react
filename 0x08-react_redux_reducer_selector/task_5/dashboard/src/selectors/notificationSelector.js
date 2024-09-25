import { createSelector } from "reselect";

const getFilter = (state) => state.filter;
const getNotificationsState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [getFilter],
  (filter) => filter
);

export const getNotifications = createSelector(
  [getNotificationsState],
  (notifications) => notifications.toJS()
);

export const getUnreadNotifications = createSelector(
  [getNotificationsState],
  (notifications) =>
    notifications.filter((notification) => !notification.isRead).toJS()
);
