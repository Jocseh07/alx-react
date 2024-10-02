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

export const getUnreadNotificationsByType = createSelector(
  [getFilter, getNotificationsState],
  (filter, notifications) => {
    const unreadNotifications = notifications.filter(
      (notification) => !notification.isRead
    );
    if (filter === "urgent") {
      return unreadNotifications
        .filter((notification) => notification.type === "urgent")
        .toJS();
    }
    return unreadNotifications.toJS();
  }
);
