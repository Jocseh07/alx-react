import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
  getUnreadUrgentNotifications,
} from "./notificationSelector";
import { fromJS } from "immutable";

describe("notificationSelector tests", () => {
  const state = {
    filter: "DEFAULT",
    notifications: fromJS([
      { id: 1, isRead: true, value: "Notification 1", type: "default" },
      { id: 2, isRead: false, value: "Notification 2", type: "urgent" },
      { id: 3, isRead: false, value: "Notification 3", type: "default" },
      { id: 4, isRead: false, value: "Notification 4", type: "urgent" },
    ]),
  };

  it("filterTypeSelected works as expected", () => {
    const selectedFilter = filterTypeSelected(state);
    expect(selectedFilter).toEqual("DEFAULT");
  });

  it("getNotifications returns a list of the message entities within the reducer", () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual([
      { id: 1, isRead: true, value: "Notification 1", type: "default" },
      { id: 2, isRead: false, value: "Notification 2", type: "urgent" },
      { id: 3, isRead: false, value: "Notification 3", type: "default" },
      { id: 4, isRead: false, value: "Notification 4", type: "urgent" },
    ]);
  });

  it("getUnreadNotifications returns a list of the unread message entities within the reducer", () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual([
      { id: 2, isRead: false, value: "Notification 2", type: "urgent" },
      { id: 3, isRead: false, value: "Notification 3", type: "default" },
      { id: 4, isRead: false, value: "Notification 4", type: "urgent" },
    ]);
  });

  it("getUnreadUrgentNotifications returns a list of the unread urgent message entities within the reducer", () => {
    const unreadUrgentNotifications = getUnreadUrgentNotifications(state);
    expect(unreadUrgentNotifications.toJS()).toEqual([
      { id: 2, isRead: false, value: "Notification 2", type: "urgent" },
      { id: 4, isRead: false, value: "Notification 4", type: "urgent" },
    ]);
  });
});
