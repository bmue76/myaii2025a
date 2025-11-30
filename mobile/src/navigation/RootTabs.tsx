// mobile/src/navigation/RootTabs.tsx
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AIAvatarScreen from '../screens/AIAvatarScreen';
import TopicsScreen from '../screens/TopicsScreen';
import ChatScreen from '../screens/ChatScreen';
import DiaryScreen from '../screens/DiaryScreen';
import FriendsScreen from '../screens/FriendsScreen';

export type RootTabParamList = {
  AIAvatar: undefined;
  Topics: undefined;
  Chat: undefined;
  Diary: undefined;
  Friends: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// Farben an GUI-Draft angelehnt
const TAB_BG = '#cfe3ff';   // hellblau Tab-Bar
const ACTIVE = '#2f2f54';   // dunkelblau
const INACTIVE = '#ffffff'; // weiss

const RootTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          Platform.OS === 'android' ? { elevation: 0 } : { shadowOpacity: 0 },
        ],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        tabBarIcon: ({ focused, color, size }) => {
          // Spezieller zentraler, runder Button für Chat
          if (route.name === 'Chat') {
            return (
              <View
                style={[
                  styles.chatTabIconWrapper,
                  focused && styles.chatTabIconWrapperActive,
                ]}
              >
                {/* Chat-Icon im gleichen Hellblau wie die Tab-Bar */}
                <Ionicons
                  name="chatbubbles-outline"
                  size={26}
                  color={TAB_BG}
                />
              </View>
            );
          }

          let iconName: keyof typeof Ionicons.glyphMap = 'person-circle-outline';

          if (route.name === 'AIAvatar') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Topics') {
            iconName = 'flame-outline';
          } else if (route.name === 'Diary') {
            iconName = 'book-outline';
          } else if (route.name === 'Friends') {
            iconName = 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="AIAvatar"
        component={AIAvatarScreen}
        options={{ title: 'AI AVATAR' }}
      />
      <Tab.Screen
        name="Topics"
        component={TopicsScreen}
        options={{ title: 'THEMEN' }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          // kein Label unter dem Chat-Button
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{ title: 'TAGEBUCH' }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ title: 'FREUNDE' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: TAB_BG,
    height: 80,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 6,   // Inhalte etwas nach unten
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 0,
    marginBottom: 2,
  },
  tabBarIcon: {
    marginTop: 0,
    marginBottom: 0,
  },
  chatTabIconWrapper: {
    width: 62,
    height: 62,
    borderRadius: 31,
    marginTop: -24, // nach oben „schweben“
    borderWidth: 4,
    borderColor: TAB_BG, // hellblauer Ring im Farbton der Tab-Bar
    backgroundColor: '#ffffff', // weisser Button-Hintergrund
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  chatTabIconWrapperActive: {
    shadowOpacity: 0.25,
  },
});

export default RootTabs;
