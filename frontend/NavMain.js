//NavMain.js
import React from 'react'
import Main from './Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Announcements from './Announcements';
import {MaterialIcons} from '@expo/vector-icons';
import Attendance from './Attendance_1';
import Grades from './Grades';
//import Announcements from './Announcements';
import TimeTable from './TimeTable';
import Attendance from './Attendance_1';
import Notes from './Notes';
import Messages from './Messages'

export default function NavMain() {
  
    const Tab = createBottomTabNavigator();
  
    return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Announcements') {
            iconName = focused ? 'announcement' : 'announcement';
          } else if (route.name === 'grade') {
            iconName = focused ? 'grade' : 'grade';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      "tabBarActiveTintColor": "black",
      "tabBarInactiveTintColor": "gray",
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
      ]
      })}
      
    >
      <Tab.Screen name="Profile" component={Main} options={{headerShown:false}}/>
      <Tab.Screen name="Announcements" component={Announcements}  />
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Grades" component={Grades} />

    </Tab.Navigator>
  )

  
}

export default function navannouncements() {
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
