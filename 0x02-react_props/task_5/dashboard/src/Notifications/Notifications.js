import React from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';

export default function Notifications({ displayDrawer = false }) {
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
            <ul>
              <NotificationItem type='default' value='New course available' />
              <NotificationItem type='urgent' value='New resume available' />
              <NotificationItem html={{ __html: getLatestNotification() }} />
            </ul>
          </>
        )}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
