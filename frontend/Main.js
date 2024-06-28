import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Main() {
  // Hardcoded student details (example)
  const [name, setName] = useState('Ravi Kumar');
  const [rollNo, setRollNo] = useState('B12345');
  const [year, setYear] = useState('2nd Year');
  const [section, setSection] = useState('B');
  const [department, setDepartment] = useState('Information Technology');
  const [email, setEmail] = useState('ravi.kumar@bvrit.edu.in');

  return (
    <LinearGradient
      colors={['#480ddb', '#3a00a6']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Student Profile</Text>
        <Image 
          source={require('st.jpeg')} 
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Roll Number"
          value={rollNo}
          onChangeText={setRollNo}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          value={year}
          onChangeText={setYear}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Section"
          value={section}
          onChangeText={setSection}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ddd"
        />
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
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
});
