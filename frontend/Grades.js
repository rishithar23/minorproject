import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Grades() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Grades</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DAA</Text>
        <Text style={styles.sectionContent}>Marks: 35/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DBMS</Text>
        <Text style={styles.sectionContent}>Marks: 38/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>JAVA</Text>
        <Text style={styles.sectionContent}>Marks: 40/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Automata</Text>
        <Text style={styles.sectionContent}>Marks: 37/40</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#462cb0', // Purple color for title
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#462cb0', // Light purple background
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aa8ee6', // Purple border
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#aa8ee6', // Purple color for section titles
  },
  sectionContent: {
    fontSize: 18,
    color: '#aa8ee6', // Slightly darker purple for content
  },
});