// mobile/src/screens/DiaryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diary Screen</Text>
      <Text style={styles.subtitle}>
        Placeholder für das Tagebuch (Mood + Text-Einträge, lokal mit
        AsyncStorage in einem späteren Teilprojekt).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020617', // sehr dunkler Hintergrund
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default DiaryScreen;
