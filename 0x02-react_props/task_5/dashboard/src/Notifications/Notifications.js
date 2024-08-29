import React from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({
  displayDrawer = false,
  listNotifications,
}) {
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
                    <NotificationItem key={index} {...notification} />
                  ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
