import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Announcements from './Announcements';
import TimeTable from './TimeTable';
import Attendance from './Attendance';
import Notes from './Notes';
import Messages from './Messages'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Announcements">
        <Stack.Screen name="Announcements" component={Announcements} />
        <Stack.Screen name="TimeTable" component={TimeTable} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
