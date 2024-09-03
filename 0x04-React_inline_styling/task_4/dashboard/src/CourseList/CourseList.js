import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses && listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell='No course available yet'
            isHeader={false}
          />
        ) : (
          listCourses &&
          listCourses.map((course, index) => (
            <CourseListRow
              key={index}
              textFirstCell={course.name}
              textSecondCell={course.credits}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({});

export default CourseList;
