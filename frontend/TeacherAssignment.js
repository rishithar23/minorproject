import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TeacherAssignment() {
  const [assignment, setAssignment] = useState('Submit DBMS notes by 27/07/2024');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', submitted: false },
    { id: 2, name: 'Jane Smith', submitted: false },
    { id: 3, name: 'Emily Johnson', submitted: false },
    { id: 4, name: 'Michael Brown', submitted: true },
    { id: 5, name: 'Sophia Lee', submitted: false },
    { id: 6, name: 'David Wilson', submitted: true },
    { id: 7, name: 'Emma Martinez', submitted: false },
    { id: 8, name: 'James Taylor', submitted: true },
    { id: 9, name: 'Olivia Thomas', submitted: false },
    { id: 10, name: 'Daniel Garcia', submitted: false },
  ]);

  
  const handleSubmission = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, submitted: !student.submitted } : student
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      <View style={styles.assignmentContainer}>
        <Text style={styles.assignmentText}>{assignment}</Text>
      </View>
      <View style={styles.studentsContainer}>
        {students.map(student => (
          <View key={student.id} style={styles.studentRow}>
            <Text style={styles.studentName}>{student.name}</Text>
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: student.submitted ? '#480DDB' : '#FFFFFF' }]}
              onPress={() => handleSubmission(student.id)}
            >
              <Text style={[styles.submitButtonText, { color: student.submitted ? '#FFFFFF' : '#480DDB' }]}>
                {student.submitted ? 'Submitted' : 'Not Submitted'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#480DDB', // Purple shade
  },
  assignmentContainer: {
    backgroundColor: '#EDE7F6', // Lighter shade background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  assignmentText: {
    fontSize: 18,
    color: '#333',
  },
  studentsContainer: {
    backgroundColor: '#EDE7F6', // Lighter shade background
    borderRadius: 10,
    padding: 20,
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  studentName: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#480DDB', // Purple shade
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});