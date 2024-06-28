/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Attendance() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  useEffect(() => {
    let timer;
    if (isSessionActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsSessionActive(false);
    }
    return () => clearInterval(timer);
  }, [isSessionActive, timeRemaining]);

  const startAttendanceSession = () => {
    setIsSessionActive(true);
    setTimeRemaining(120); // 2 minutes
    setAttendanceMarked(false);
  };

  const markAttendance = () => {
    if (isSessionActive) {
      setAttendanceMarked(true);
      Alert.alert('Attendance marked successfully');
    } else {
      Alert.alert('Attendance session is not active');
    }
  };

  return (
    <LinearGradient
      colors={['#480ddb', '#3a00a6']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Attendance</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Student Profile</Text>
          <Text style={styles.sectionContent}>Name: Radha</Text>
          <Text style={styles.sectionContent}>Roll Number: 22211A1215</Text>
          <Text style={styles.sectionContent}>Year: I</Text>
          <Text style={styles.sectionContent}>Section: A</Text>
          <Text style={styles.sectionContent}>Department: Computer Science</Text>
          <Text style={styles.sectionContent}>Email: radha@example.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attendance</Text>
          <Text style={styles.sectionContent}>Total Attendance: 85%</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mark Attendance</Text>
          <TouchableOpacity style={styles.button} onPress={startAttendanceSession}>
            <Text style={styles.buttonText}>Start Attendance Session</Text>
          </TouchableOpacity>
          {isSessionActive && (
            <Text style={styles.timer}>Time Remaining: {timeRemaining} seconds</Text>
          )}
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isSessionActive ? '#fff' : '#aaa' }]} 
            onPress={markAttendance} 
            disabled={!isSessionActive || attendanceMarked}
          >
            <Text style={[styles.buttonText, { color: isSessionActive ? '#480ddb' : '#666' }]}>
              Mark Attendance
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    color: '#eee',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#480ddb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 16,
    color: '#ff0000',
    marginVertical: 10,
    textAlign: 'center',
  },
});*/

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

