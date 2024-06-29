import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function Main({route}) {

  

  // Hardcoded student details (example)
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [department, setDepartment] = useState('');
  const {email} = route.params

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://10.0.2.2:8000/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }), // Assuming email is used as the username
        });
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
          setRollNo(data.roll_no);
          setYear(data.year);
          setSection(data.section);
          setDepartment(data.dept);
        } else {
          console.error('Error fetching profile:', response.status);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchProfile();
  }, [email]);
  


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
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Roll Number"
          value={rollNo}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          value={year}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Section"
          value={section}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          value={department}
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
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