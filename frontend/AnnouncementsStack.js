import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Announcements from './Announcements';
import TimeTable from './TimeTable';
import Attendance from './Attendance';

const Stack = createStackNavigator();

export default function AnnouncementsStack() {
  return (
    <Stack.Navigator initialRouteName="Announcements">
      <Stack.Screen name="Announcements" component={Announcements} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Attendance" component={Attendance} />
    </Stack.Navigator>
  );
}
