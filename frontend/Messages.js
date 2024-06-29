import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Messages() {
  const messages = [
    {
      id: 1,
      title: 'Workshop Reminder',
      content: 'Reminder: Workshop on AI and Machine Learning is scheduled for tomorrow at 10 AM in the Seminar Hall.',
      date: '2024-06-27',
    },
    {
      id: 2,
      title: 'Assignment Deadline',
      content: 'The deadline for the Electronics assignment is this Friday. Please submit your work in the LMS.',
      date: '2024-06-26',
    },
    {
      id: 3,
      title: 'Holiday Notice',
      content: 'BVRIT will be closed next Monday for the public holiday. Please plan accordingly.',
      date: '2024-06-25',
    },
    {
      id: 4,
      title: 'Exam Schedule',
      content: 'The end-term exam schedule has been released. Check the notice board or the BVRIT website for details.',
      date: '2024-06-24',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      {messages.map((message) => (
        <View key={message.id} style={styles.messageCard}>
          <Text style={styles.messageTitle}>{message.title}</Text>
          <Text style={styles.messageContent}>{message.content}</Text>
          <Text style={styles.messageDate}>{message.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#480DDB',
  },
  messageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#480DDB',
    marginBottom: 10,
  },
  messageContent: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  messageDate: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
});
