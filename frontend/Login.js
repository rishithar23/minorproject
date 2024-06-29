import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultEmail = 'test@example.com';
const defaultPassword = 'password123';

export default function Login() {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const navigation = useNavigation();


  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', "Login Success")
        if(data.message === 'student')
          {
            navigation.navigate("Main", {
              email: email,
            })
          }
          else
          {
            navigation.navigate("TeacherAssignment");
          }
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.detail);
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Notice', 'Login Failed!', [{ text: 'Close' }]);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#bbb"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#bbb"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B1BBF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    paddingBottom: 20,
  
  },
  input: {
    backgroundColor: '#6D49EF',
    color: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3B1BBF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});