import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function StudentAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, subject: 'DBMS', assignment: 'Submit the class notes by 05/09/2024', status: 'Submitted' },
    { id: 2, subject: 'DAA', assignment: 'Submit the class notes by 05/09/2024', status: 'Pending' },
    { id: 3, subject: 'JAVA', assignment: 'Submit the class notes by 05/09/2024', status: 'Pending' },
    { id: 4, subject: 'ACD', assignment: 'Submit the class notes by 05/09/2024', status: 'Pending' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Assignments</Text>
      <View style={styles.assignmentsContainer}>
        {assignments.map(assignment => (
          <View key={assignment.id} style={styles.assignmentCard}>
            <Text style={styles.assignmentSubject}>{assignment.subject}</Text>
            <Text style={styles.assignmentText}>{assignment.assignment}</Text>
            <Text style={styles.assignmentStatus}>
              Status: 
              <Text style={assignment.status === 'Submitted' ? styles.submittedStatus : styles.pendingStatus}>
                {' ' + assignment.status}
              </Text>
            </Text>
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
  assignmentsContainer: {
    backgroundColor: '#EDE7F6', // Lighter shade background
    borderRadius: 10,
    padding: 20,
  },
  assignmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  assignmentSubject: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#480DDB',
    marginBottom: 10,
  },
  assignmentText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    // fontWeight: 'bold',
  },
  assignmentStatus: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  submittedStatus: {
    fontWeight: 'bold',
    color: '#000', // Black color
  },
  pendingStatus: {
    fontWeight: 'bold',
    color: '#FF5722', // Orange color for pending status
  },
});