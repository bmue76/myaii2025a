// mobile/src/screens/FriendsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Freunde</Text>
      <Text style={styles.text}>
        Hier entsteht später die Freunde-Übersicht mit Freundschaftsanfragen und Chats.
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

export default FriendsScreen;
