import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = ({ type = 'default', html, value }) => {
  return (
    <>
      {type && value ? <li data-priority={type}>{value}</li> : null}
      {html ? (
        <li dangerouslySetInnerHTML={{ __html: html.__html }}></li>
      ) : null}
    </>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export default NotificationItem;
