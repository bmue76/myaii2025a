// mobile/src/screens/AIAvatarScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AIAvatarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mein AI Avatar</Text>
      <Text style={styles.text}>
        Hier wird in einem späteren Teilprojekt (2.3) der Avatar-Editor integriert.
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

export default AIAvatarScreen;
