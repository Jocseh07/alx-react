import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationItem extends PureComponent {
  render() {
    const { type = 'default', html, value, id, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li data-priority={type} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li dangerouslySetInnerHTML={{ __html: html.__html }}></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
