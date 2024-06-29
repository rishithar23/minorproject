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