import React from 'react';
import Main from './Main';
import Announcements from './Announcements';
import Attendance from './first_Attendance'; // Adjusted import
import Grades from './Grades';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function NavMain() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Announcements') {
            iconName = focused ? 'announcement' : 'announcement';
          } else if (route.name === 'Attendance') {
            iconName = focused ? 'event' : 'event';
          } else if (route.name === 'Grades') {
            iconName = focused ? 'grade' : 'grade';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:[ {
          display: 'flex' ,// Adjusted tabBarStyle
        },
        null]
      }}
    >
      <Tab.Screen name="Profile" component={Main} options={{ headerShown: true }} />
      <Tab.Screen name="Announcements" component={Announcements} />
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Grades" component={Grades} />
    </Tab.Navigator>
  );
}
