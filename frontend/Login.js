import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
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
      console.log('Logging in with:', email, password); // Log email and password
      // Simulate API response
      const res = {
        token: email === defaultEmail && password === defaultPassword ? 'dummy-token' : null,
      };
      console.log('Login response:', res); // Log the response from the simulated API
      if (res.token) {
        await AsyncStorage.setItem('userToken', res.token);
        console.log('Login successful. Token saved:', res.token); // Log the saved token
        Alert.alert('Notice', 'Login successful !', [
          {
            text: 'Close',
            onPress: () => navigation.navigate('Main'),
          },
        ]);
      } else {
        Alert.alert('Notice', 'Invalid Logins!', [{ text: 'Close' }]);
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#462cb0', // Changed background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Changed text color to white
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff', // Changed input background color to white
  },
});
