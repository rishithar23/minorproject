import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Attendance({route}) {


  const {email} = route.params;

  const [isSessionActive, setIsSessionActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [studentAttendance, setStudentAttendance] = useState(88); // Updated percentage to match the image


  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch('http://10.0.2.2:8000/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }), // Assuming email is used as the username
        });
        if (response.ok) {
          const data = await response.json();
          setStudentAttendance(data.attendance)

        } else {
          console.error('Error fetching profile:', response.status);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchGrades();
  }, []);
  

  useEffect(() => {
    let timer;
    if (isSessionActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsSessionActive(false);
    }
    return () => clearInterval(timer);
  }, [isSessionActive, timeRemaining]);

  const startAttendanceSession = () => {
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setIsSessionActive(true);
    setTimeRemaining(120); // 2 minutes
    setAttendanceMarked(false);

    Alert.alert(`OTP generated Your OTP is: ${otp}`);
  };

  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
  };

  const markAttendance = () => {
    if (isSessionActive && otp === generatedOtp) {
      setAttendanceMarked(true);
      Alert.alert('Attendance marked successfully');
      setStudentAttendance(parseInt(studentAttendance)+0.5);
    } else if (!isSessionActive) {
      Alert.alert('Attendance session is not active');
    } else {
      Alert.alert('Wrong OTP');
    }
  };

  return (
    <LinearGradient
      colors={['#480ddb', '#3a00a6']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Attendance</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mark Attendance</Text>
          <TouchableOpacity style={styles.button} onPress={startAttendanceSession}>
            <Text style={styles.buttonText}>
              {isSessionActive ? 'Attendance Session in Progress' : 'Start Attendance Session'}
            </Text>
          </TouchableOpacity>
          {isSessionActive && (
            <Text style={styles.timer}>Time Remaining: {timeRemaining} seconds</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#bbb"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isSessionActive ? '#fff' : '#aaa' }]} 
            onPress={markAttendance} 
            disabled={!isSessionActive || attendanceMarked}
          >
            <Text style={[styles.buttonText, { color: isSessionActive ? '#480ddb' : '#666' }]}>
              {attendanceMarked ? 'Attendance Marked' : 'Mark Attendance'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.attendanceContainer}>
          <Text style={styles.attendancePercentage}>{studentAttendance}%</Text>
          <Text style={styles.attendanceMessage}>You have a good attendance percentage. Keep it up!</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#480ddb', // Changed color to match the screenshot
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#480ddb', // Changed color to match the screenshot
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#480ddb', // Changed color to match the screenshot
    fontSize: 16,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 16,
    color: '#ff0000',
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  attendanceContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  attendancePercentage: {
    fontSize: 48,
    color: '#480ddb', // Changed color to match the screenshot
    fontWeight: 'bold',
  },
  attendanceMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
});
