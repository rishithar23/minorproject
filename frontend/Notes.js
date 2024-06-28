// Notes.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Notes() {
  const notes = [
    {
      id: 1,
      title: 'Lecture Notes: Introduction to AI',
      content: 'In this lecture, we covered the basics of Artificial Intelligence, including machine learning and neural networks...',
      date: '2024-06-27',
    },
    {
      id: 2,
      title: 'Lecture Notes: Data Structures',
      content: 'Today’s lecture focused on data structures such as arrays, linked lists, and binary trees. Important points include...',
      date: '2024-06-26',
    },
    {
      id: 3,
      title: 'Lecture Notes: Digital Electronics',
      content: 'We explored the fundamentals of digital electronics, including logic gates, flip-flops, and multiplexers...',
      date: '2024-06-25',
    },
    {
      id: 4,
      title: 'Lecture Notes: Operating Systems',
      content: 'This lecture covered the basics of operating systems, including process management, memory management, and file systems...',
      date: '2024-06-24',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      {notes.map((note) => (
        <View key={note.id} style={styles.noteCard}>
          <Text style={styles.noteTitle}>{note.title}</Text>
          <Text style={styles.noteContent}>{note.content}</Text>
          <Text style={styles.noteDate}>{note.date}</Text>
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
    color: '#3a00a6',
  },
  noteCard: {
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
  noteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#480ddb',
    marginBottom: 10,
  },
  noteContent: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  noteDate: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
});
