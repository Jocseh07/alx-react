import React from 'react';
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  return (
    <>
      {type && value ? <li data-priority={type}>{value}</li> : null}
      {html ? (
        <li dangerouslySetInnerHTML={{ __html: html.__html }}></li>
      ) : null}
    </>
  );
};

export default NotificationItem;
