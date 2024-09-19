import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { type = 'default', html, value, id, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li
            className={css(styles.notificationItem)}
            data-priority={type}
            onClick={() => markAsRead(id)}
          >
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

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
});

export default NotificationItem;
