import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const data = {
  '1-1': [
    { date: '2024-07-01', subject: 'COA' },
    { date: '2024-07-02', subject: 'ADS' },
    { date: '2024-07-03', subject: 'FOS' },
    { date: '2024-07-04', subject: 'AI' },
  ],
  '1-2': [
    { date: '2024-07-01', subject: 'CHEM' },
    { date: '2024-07-02', subject: 'PY' },
    { date: '2024-07-03', subject: 'AC' },
    { date: '2024-07-04', subject: 'ENG' },
  ],
  '2-1': [
    { date: '2024-07-01', subject: 'LAC' },
    { date: '2024-07-02', subject: 'EP' },
    { date: '2024-07-03', subject: 'CPT' },
    { date: '2024-07-04', subject: 'PHY' },
  ],
  '2-2': [
    { date: '2024-07-01', subject: 'DAA' },
    { date: '2024-07-02', subject: 'ACD' },
    { date: '2024-07-03', subject: 'JAVA' },
    { date: '2024-07-04', subject: 'DBMS' },
  ],
};

export default function ExamTimetable() {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const toggleDropdown = (semester) => {
    setSelectedSemester(selectedSemester === semester ? null : semester);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exam Timetable</Text>
      {Object.keys(data).map((semester) => (
        <View key={semester}>
          <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleDropdown(semester)}>
            <Text style={styles.dropdownHeaderText}>Year {semester}</Text>
          </TouchableOpacity>
          {selectedSemester === semester && (
            <View style={styles.dropdownContent}>
              {data[semester].map((exam, index) => (
                <View key={index} style={styles.examItem}>
                  <Text style={styles.examText}>{exam.date} - {exam.subject}</Text>
                </View>
              ))}
            </View>
          )}
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
    color: '#480DDB',
  },
  dropdownHeader: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  dropdownHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#480DDB',
  },
  dropdownContent: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  examItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  examText: {
    fontSize: 18,
    color: '#480DDB',
  },
});
