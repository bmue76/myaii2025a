// mobile/src/screens/TopicsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopicsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Themen</Text>
      <Text style={styles.text}>
        Themenverwaltung und Focus Pods folgen in Teilprojekt 2.4.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
});

export default TopicsScreen;
