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
      console.log('Logging in with:', email, password);
      const res = {
        token: email === defaultEmail && password === defaultPassword ? 'dummy-token' : null,
      };
      console.log('Login response:', res);
      if (res.token) {
        await AsyncStorage.setItem('userToken', res.token);
        console.log('Login successful. Token saved:', res.token);
        Alert.alert('Notice', 'Login successful !', [
          {
            text: 'Close',
            onPress: () => navigation.navigate('Main'),
          },
        ]);
      } else {
        Alert.alert('Notice', 'Invalid!', [{ text: 'Close' }]);
      }
    } catch (err) {
      console.error('Login error:', err.message);
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
