// Attendance.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Attendance() {
  const randomAttendance = Math.floor(Math.random() * (98 - 60 + 1)) + 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <View style={styles.attendanceCard}>
        <Text style={styles.attendanceText}>{randomAttendance}%</Text>
        <Text style={styles.comment}>
          {randomAttendance < 75
            ? 'Attend classes regularly to improve your attendance.'
            : 'You have a good attendance percentage. Keep it up!'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3a00a6',
  },
  attendanceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  attendanceText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#480ddb',
    marginBottom: 10,
  },
  comment: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
