// mobile/src/navigation/RootTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoachScreen from '../screens/CoachScreen';
import DiaryScreen from '../screens/DiaryScreen';

export type RootTabParamList = {
  Coach: undefined;
  Diary: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Coach"
        component={CoachScreen}
        options={{ title: 'Coach' }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{ title: 'Diary' }}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;
