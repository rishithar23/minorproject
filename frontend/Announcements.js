import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Announcements() {
  return (
    <LinearGradient colors={['#480ddb', '#3a00a6']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Announcements</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time Table</Text>
          <Text style={styles.sectionContent}>Here is the time table...</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Holidays</Text>
          <Text style={styles.sectionContent}>List of upcoming holidays...</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Assignments</Text>
          <Text style={styles.sectionContent}>Details about current assignments...</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.sectionContent}>Class notes and materials...</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Messages</Text>
          <Text style={styles.sectionContent}>Important messages and notifications...</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff', // White color for title
    fontWeight: 'bold',
  },
  section: {
    width: '90%',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#7a5fff', // Light purple background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: '#fff', // White color for section titles
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 18,
    color: '#f0e6ff', // Light color for content
  },
});
