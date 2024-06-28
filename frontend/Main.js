// Main.js
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Main() {
  // Hardcoded student details
  const studentDetails = {
    name: 'Ravi Kumar',
    rollNo: 'B12345',
    year: '2nd Year',
    section: 'B',
    department: 'Information Technology',
    email: 'ravi.kumar@bvrit.edu.in',
  };

  return (
    <LinearGradient
      colors={['#480ddb', '#3a00a6']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Student Profile</Text>
        <Image 
          source={{ uri: 'st.jpeg' }} 
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Name: {studentDetails.name}</Text>
          <Text style={styles.detailText}>Roll Number: {studentDetails.rollNo}</Text>
          <Text style={styles.detailText}>Year: {studentDetails.year}</Text>
          <Text style={styles.detailText}>Section: {studentDetails.section}</Text>
          <Text style={styles.detailText}>Department: {studentDetails.department}</Text>
          <Text style={styles.detailText}>Email: {studentDetails.email}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    borderColor: '#fff',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  detailsContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30,
  },
  detailText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
});
