import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Main from './Main';
import Grades from './Grades';
import Attendance from './Attendance';
import AnnouncementStack from './AnnouncementStack';



const Tab = createBottomTabNavigator();

export default function NavMain({route}) {


  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Announcement') {
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
       <Tab.Screen name="Announcement" component={AnnouncementStack}  options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Main} initialParams={{ email:email }} />
      <Tab.Screen name="Attendance" component={Attendance} initialParams={{ email:email }} />
      <Tab.Screen name="Grades" component={Grades}  initialParams={{ email:email }}/>
    </Tab.Navigator>
  );
}
