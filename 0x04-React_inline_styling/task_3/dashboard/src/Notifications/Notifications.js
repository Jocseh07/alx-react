import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div
          className={css(
            styles.Notifications,
            displayDrawer && styles.fullScreen,
          )}
        >
          <div className={css(styles.menuItem)}>Your notifications</div>
          {displayDrawer && (
            <>
              <p>Here is the list of notifications</p>
              <button
                style={{ float: 'right' }}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
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
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
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
    textAlign: 'right',
  },
  noPadding: {
    padding: 0,
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
