// mobile/src/navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AIAvatarScreen from '../screens/AIAvatarScreen';
import TopicsScreen from '../screens/TopicsScreen';
import ChatScreen from '../screens/ChatScreen';

export type HomeStackParamList = {
  Home: undefined;
  AIAvatar: undefined;
  Topics: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="AIAvatar"
        component={AIAvatarScreen}
        options={{ title: 'Mein AI Avatar' }}
      />
      <Stack.Screen
        name="Topics"
        component={TopicsScreen}
        options={{ title: 'Themen' }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: 'Chat' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
