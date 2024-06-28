import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Grades() {
  // Example data (can be replaced with dynamic data)
  const subjects = [
    { name: 'DAA', marks: '35/40' },
    { name: 'DBMS', marks: '38/40' },
    { name: 'JAVA', marks: '40/40' },
    { name: 'ACD', marks: '37/40' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Grades</Text>

      {subjects.map((subject, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{subject.name}</Text>
          <Text style={styles.sectionContent}>Marks: {subject.marks}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3B1BBF', // Dark purple background
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for title
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#6D49EF', // Light purple background for sections
    borderRadius: 10, // Rounded corners
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#FFFFFF', // White color for section titles
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 18,
    color: '#FFFFFF', // White color for content
  },
});
