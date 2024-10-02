import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css, keyframes } from "aphrodite";
import {
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
} from "../actions/notificationActions"; // Import your actions
import { getUnreadNotificationsByFilter } from "../selectors/notificationSelectors"; // Import the new selector

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications(); // Call fetchNotifications when the component mounts
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  setFilter(filter) {
    this.props.setNotificationFilter(filter);
  }

  render() {
    const { listNotifications, markNotificationAsRead } = this.props;
    const { displayDrawer } = this.state;

    // Define keyframes for opacity animation
    const fadeIn = keyframes({
      "0%": { opacity: 0.5 },
      "100%": { opacity: 1 },
    });

    // Define keyframes for bounce animation
    const bounce = keyframes({
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-5px)" },
      "100%": { transform: "translateY(5px)" },
    });

    return (
      <>
        <div
          className={css(
            styles.Notifications,
            displayDrawer && styles.fullScreen,
            displayDrawer && styles.fadeInAnimation
          )}
        >
          <div
            className={css(styles.menuItem)}
            onClick={this.handleDisplayDrawer}
          >
            Your notifications
          </div>
          {displayDrawer && (
            <>
              <p>Here is the list of notifications</p>
              <button onClick={() => this.setFilter("URGENT")}>‼️</button>
              <button onClick={() => this.setFilter("DEFAULT")}>💠</button>
              <button
                style={{ float: "right" }}
                aria-label="Close"
                onClick={this.handleHideDrawer}
              >
                <img src="../assets/close-icon.png" alt="Close" />
              </button>
              {listNotifications && listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <ul className={css(styles.noPadding)}>
                  {listNotifications &&
                    listNotifications.map((notification, index) => (
                      <NotificationItem
                        key={index}
                        {...notification}
                        markAsRead={markNotificationAsRead}
                        className={css(styles.bounceAnimation)}
                      />
                    ))}
                </ul>
              )}
            </>
          )}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func.isRequired, // Add fetchNotifications to prop types
  setNotificationFilter: PropTypes.func.isRequired, // Add setNotificationFilter to prop types
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: (id) => {
    console.log(`Notification ${id} has been marked as read`);
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "1px dashed var(--primary-color)",
    padding: "20px",
  },
  fullScreen: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: "white",
  },
  menuItem: {
    position: "fixed",
    top: 0,
    right: 0,
    padding: "10px",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    animationName: [fadeIn, bounce],
    animationDuration: "1s, 0.5s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "3, 3",
    zIndex: 9999,
  },
  noPadding: {
    padding: 0,
  },
  fadeInAnimation: {
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
  },
  bounceAnimation: {
    animationName: bounce,
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  "@global": {
    ":root": {
      "--primary-color": "#e0354b",
    },
    '.Notifications [data-priority="default"]': {
      color: "blue",
    },
    '.Notifications [data-priority="urgent"]': {
      color: "var(--primary-color)",
    },
    ".Notifications p": {
      fontSize: "20px",
    },
  },
});

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByFilter(state), // Use the new selector
});

const mapDispatchToProps = {
  fetchNotifications, // Map fetchNotifications action to props
  markNotificationAsRead: markAsRead, // Map markAsRead action to props
  setNotificationFilter, // Map setNotificationFilter action to props
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
