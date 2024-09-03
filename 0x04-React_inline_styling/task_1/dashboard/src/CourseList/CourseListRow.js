import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  let bgColor;
  if (isHeader) {
    bgColor = '#deb5b545';
  } else {
    bgColor = '#f5f5f5ab';
  }
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={{ backgroundColor: bgColor }}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={{ backgroundColor: bgColor }}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={{ backgroundColor: bgColor }}>
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
