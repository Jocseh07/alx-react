import React from "react";
import { shallow } from "enzyme";
import { NotificationsContainer } from "./NotificationsContainer"; // Adjust the import if necessary

describe("NotificationsContainer", () => {
  let fetchNotificationsMock;

  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
  });

  it("should call fetchNotifications on mount", () => {
    shallow(
      <NotificationsContainer
        fetchNotifications={fetchNotificationsMock}
        notifications={[]}
      />
    );
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it("should render Notifications component with notifications prop", () => {
    const notifications = [{ id: 1, message: "Test notification" }];
    const wrapper = shallow(
      <NotificationsContainer
        fetchNotifications={fetchNotificationsMock}
        notifications={notifications}
      />
    );
    const notificationsComponent = wrapper.find("Notifications");
    expect(notificationsComponent.exists()).toBe(true);
    expect(notificationsComponent.prop("notifications")).toEqual(notifications);
  });
});
