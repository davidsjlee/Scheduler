import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Course from './Course';
import { hasConflict } from '../utils/course';

const CourseSelector = ({courses}) => {
  const [selected, setSelected] = useState([]);

// come back and understand this
  const toggle = course => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return (
    <View style={styles.courseList}>
      {
        courses.map(course => (
          <Course key={course.id} course={course}
          isDisabled={hasConflict(course, selected)}
          isSelected={selected.includes(course)}
          select={toggle} />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CourseSelector;