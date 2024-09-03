import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    padding: '10px',
    fontWeight: 'bold',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const thStyle = css(styles.th);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(rowStyle)}>
          <th colSpan={2} className={thStyle}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={css(rowStyle)}>
          <th className={thStyle}>{textFirstCell}</th>
          <th className={thStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(rowStyle)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

export default CourseListRow;

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
