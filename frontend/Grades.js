import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect } from 'react';


export default function Grades({route}) {

  const {email} = route.params;
  const [Grades, setGrades] = useState([]);
  console.log(Grades);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch('http://10.0.2.2:8000/grades', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }), // Assuming email is used as the username
        });
        if (response.ok) {
          const data = await response.json();
          setGrades(data);
        } else {
          console.error('Error fetching profile:', response.status);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchGrades();
  }, []);
  
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Grades</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DAA</Text>
        <Text style={styles.sectionContent}>Marks:{Grades["DAA"]}/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DBMS</Text>
        <Text style={styles.sectionContent}>Marks: {Grades["DBMS"]}/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>JAVA</Text>
        <Text style={styles.sectionContent}>Marks: {Grades["JAVA"]}/40</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Automata</Text>
        <Text style={styles.sectionContent}>Marks: {Grades["ACD"]}/40</Text>
      </View>
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
