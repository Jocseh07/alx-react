import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='Notifications'>
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
    </div>
  );
}
