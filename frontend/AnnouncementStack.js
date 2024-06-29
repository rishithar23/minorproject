import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamTimetable from './TimeTable';
import Announcements from './Announcements';
import Notes from './Notes';
import Messages from './Messages';
import StudentAssignments from './StudentAssignments';


const Stack = createNativeStackNavigator();

export default function AnnouncementStack() {
    return (
          <Stack.Navigator initialRouteName="Announcements">
            <Stack.Screen name="Announcements" component={Announcements} options={{ headerShown: false }} />
            <Stack.Screen name="TimeTable" component={ExamTimetable} options={{ headerShown: false }} />
            <Stack.Screen name="Notes" component={Notes} options={{ headerShown: false }} />
            <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
            <Stack.Screen name="StudentAssignments" component={StudentAssignments} options={{ headerShown: false }} />
          </Stack.Navigator>
    );
}

