import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

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
        <div className='Notifications'>
          <div className='menuItem'>Your notifications</div>
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
                <ul>
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

export default Notifications;
