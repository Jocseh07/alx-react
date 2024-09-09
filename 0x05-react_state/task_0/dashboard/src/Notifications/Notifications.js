import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css, keyframes } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextState.displayDrawer !== this.state.displayDrawer
    );
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;

    // Define keyframes for opacity animation
    const fadeIn = keyframes({
      '0%': { opacity: 0.5 },
      '100%': { opacity: 1 },
    });

    // Define keyframes for bounce animation
    const bounce = keyframes({
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-5px)' },
      '100%': { transform: 'translateY(5px)' },
    });

    return (
      <>
        <div
          className={css(
            styles.Notifications,
            displayDrawer && styles.fullScreen,
            displayDrawer && styles.fadeInAnimation,
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
              <button
                style={{ float: 'right' }}
                aria-label='Close'
                onClick={this.handleHideDrawer}
              >
                <img src='../assets/close-icon.png' alt='Close' />
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
                        markAsRead={this.markAsRead}
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
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed var(--primary-color)',
    padding: '20px',
  },
  fullScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: 'white',
  },
  menuItem: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '10px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: [fadeIn, bounce],
    animationDuration: '1s, 0.5s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: '3, 3',
    zIndex: 9999,
  },
  noPadding: {
    padding: 0,
  },
  fadeInAnimation: {
    animationName: fadeIn,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in-out',
  },
  bounceAnimation: {
    animationName: bounce,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  '@global': {
    ':root': {
      '--primary-color': '#e0354b',
    },
    '.Notifications [data-priority="default"]': {
      color: 'blue',
    },
    '.Notifications [data-priority="urgent"]': {
      color: 'var(--primary-color)',
    },
    '.Notifications p': {
      fontSize: '20px',
    },
  },
});

export default Notifications;
