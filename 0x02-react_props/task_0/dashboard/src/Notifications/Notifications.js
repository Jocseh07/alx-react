import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
