// mobile/src/screens/CoachScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoachScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coach Screen</Text>
      <Text style={styles.subtitle}>
        Placeholder für den AI-Coach mit HeyGen-Avatar (WebView folgt in
        Teilprojekt 1.2).
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
    backgroundColor: '#0f172a', // dunkler Hintergrund (Navy/Dark)
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

export default CoachScreen;
