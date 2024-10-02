import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNotifications } from "../actions/notificationActions";
import Notifications from "./Notifications";

const NotificationsContainer = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} />;
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.items,
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);
