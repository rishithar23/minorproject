import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Main from './Main';
import AnnouncementsStack from './AnnouncementsStack';  // Import the stack navigator
import Grades from './Grades';

const Tab = createBottomTabNavigator();

export default function NavMain() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Announcements') {
            iconName = focused ? 'announcement' : 'announcement';
          } else if (route.name === 'Attendance') {
            iconName = focused ? 'assignment' : 'assignment';
          } else if (route.name === 'Grades') {
            iconName = focused ? 'grade' : 'grade';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex'
        }
      })}
    >
      <Tab.Screen name="Profile" component={Main} options={{ headerShown: false }} />
      <Tab.Screen name="Announcements" component={AnnouncementsStack} />  {/* Use the stack navigator here */}
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Grades" component={Grades} />
    </Tab.Navigator>
  );
}
