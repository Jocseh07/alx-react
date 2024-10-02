import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import { fromJS } from "immutable";

describe("notificationSelector tests", () => {
  const state = {
    filter: "DEFAULT",
    notifications: fromJS([
      { id: 1, isRead: true, value: "Notification 1" },
      { id: 2, isRead: false, value: "Notification 2" },
      { id: 3, isRead: false, value: "Notification 3" },
    ]),
  };

  it("filterTypeSelected works as expected", () => {
    const selectedFilter = filterTypeSelected(state);
    expect(selectedFilter).toEqual("DEFAULT");
  });

  it("getNotifications returns a list of the message entities within the reducer", () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual([
      { id: 1, isRead: true, value: "Notification 1" },
      { id: 2, isRead: false, value: "Notification 2" },
      { id: 3, isRead: false, value: "Notification 3" },
    ]);
  });

  it("getUnreadNotifications returns a list of the unread message entities within the reducer", () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toEqual([
      { id: 2, isRead: false, value: "Notification 2" },
      { id: 3, isRead: false, value: "Notification 3" },
    ]);
  });
});
