// TimeTable.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TimeTable() {
  const timetable = [
    { day: 'Monday', subjects: ['Python', 'Java', 'Human Communications', 'Minor Projects'] },
    { day: 'Tuesday', subjects: ['Java', 'Python', 'Minor Projects', 'Human Communications'] },
    { day: 'Wednesday', subjects: ['Human Communications', 'Minor Projects', 'Python', 'Java'] },
    { day: 'Thursday', subjects: ['Minor Projects', 'Human Communications', 'Java', 'Python'] },
    { day: 'Friday', subjects: ['Python', 'Java', 'Human Communications', 'Minor Projects'] },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>BVRIT IT-B 2nd Year</Text>
      {timetable.map((day, index) => (
        <View key={index} style={styles.dayCard}>
          <Text style={styles.dayTitle}>{day.day}</Text>
          {day.subjects.map((subject, subIndex) => (
            <Text key={subIndex} style={styles.subjectText}>{subject}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  dayCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#480ddb',
    marginBottom: 10,
  },
  subjectText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
});
