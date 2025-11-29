// mobile/src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const TOPICS = ['Karriere', 'Beziehungen', 'Mental Health', 'Fitness', 'Finanzen'];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleOpenAvatar = () => {
    navigation.navigate('AIAvatar');
  };

  const handleOpenTopics = () => {
    navigation.navigate('Topics');
  };

  const handleStartChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingTitle}>Hi there</Text>
        <Text style={styles.greetingSubtitle}>
          Willkommen bei MyAII – your co-pilot in life.
        </Text>
      </View>

      <TouchableOpacity style={styles.avatarCard} onPress={handleOpenAvatar}>
        <Text style={styles.cardLabel}>Mein AI Avatar</Text>
        <Text style={styles.cardTitle}>Dein digitaler Twin</Text>
        <Text style={styles.cardDescription}>
          Wähle einen vorgefertigten Avatar oder erstelle deinen individuellen AI Twin.
        </Text>
      </TouchableOpacity>

      <View style={styles.topicsHeader}>
        <Text style={styles.sectionTitle}>Themen</Text>
        <TouchableOpacity onPress={handleOpenTopics}>
          <Text style={styles.sectionLink}>Alle Themen</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topicsRow}
      >
        {TOPICS.map((topic) => (
          <View key={topic} style={styles.topicChip}>
            <Text style={styles.topicChipText}>{topic}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.chatButton} onPress={handleStartChat}>
        <Text style={styles.chatButtonText}>Chat starten</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  greetingTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  avatarCard: {
    backgroundColor: '#f4f5fb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
    color: '#666',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#555',
  },
  topicsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionLink: {
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  topicsRow: {
    paddingVertical: 4,
    marginBottom: 24,
  },
  topicChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#eef0f7',
    borderRadius: 999,
    marginRight: 8,
  },
  topicChipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  chatButton: {
    marginTop: 8,
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default HomeScreen;
