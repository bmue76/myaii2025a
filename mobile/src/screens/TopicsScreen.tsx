// mobile/src/screens/TopicsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

type Topic = {
  id: string;
  label: string;
};

const TOPICS: Topic[] = [
  { id: 'love', label: 'LIEBE & DATING' },
  { id: 'selfconfidence', label: 'SELBSTVERTRAUEN' },
  { id: 'school', label: 'SCHULE' },
  { id: 'career', label: 'STUDIUM & KARRIEREPLANUNG' },
  { id: 'money', label: 'NEBENJOBS & GELDMANAGEMENT' },
  { id: 'leisure', label: 'FREIZEIT & REISEN' },
  { id: 'fitness', label: 'FITNESS & ERNÄHRUNG' },
  { id: 'social', label: 'SOCIAL SKILLS & NETWORKING' },
  { id: 'creativity', label: 'KREATIVITÄT & PROJEKTE' },
  { id: 'everyday', label: 'ALLTAGSORGANISATION' },
];

const TopicsScreen: React.FC = () => {
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([
    'love',
    'selfconfidence',
  ]);

  const handleToggleTopic = (topicId: string) => {
    const isSelected = selectedTopicIds.includes(topicId);

    if (isSelected) {
      setSelectedTopicIds((prev) => prev.filter((id) => id !== topicId));
    } else {
      const currentlyActive = selectedTopicIds.length;

      if (currentlyActive >= 1) {
        Alert.alert(
          'Mehrere Themen aktiv',
          'In der finalen Version kannst du ein Thema kostenlos nutzen. ' +
            'Sobald du mehrere Themen gleichzeitig aktivierst, brauchst du ein Abo.'
        );
      }

      setSelectedTopicIds((prev) => [...prev, topicId]);
    }

    // später: hier Filter/KI-Modellauswahl andocken
  };

  return (
    <View style={styles.root}>
      {/* Top Header */}
      <View style={styles.headerBackground}>
        <View style={styles.headerContent}>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>👤</Text>
          </View>
          <Text style={styles.headerTitle}>MEINE THEMEN</Text>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>⬆️</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {TOPICS.map((topic) => {
          const isSelected = selectedTopicIds.includes(topic.id);
          return (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicTileWrapper}
              activeOpacity={0.85}
              onPress={() => handleToggleTopic(topic.id)}
            >
              <View style={styles.topicTile}>
                <View style={styles.radioOuter}>
                  {isSelected && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.topicLabel}>{topic.label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Ein Thema ist kostenlos nutzbar. Sobald du mehrere Themen aktivierst,
            benötigst du ein monatliches Abomodell. Hinter jedem Bereich steht
            ein spezialisiertes KI-Coach-Modell, das deine Antworten noch
            relevanter macht.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f7f7fb',
  },
  headerBackground: {
    backgroundColor: '#cfe3ff',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconText: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: '#2f2f54',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  topicTileWrapper: {
    marginBottom: 12,
  },
  topicTile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16, // <— weniger rund
    paddingVertical: 14,
    paddingHorizontal: 18,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  radioOuter: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 3,
    borderColor: '#2f2f54',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2f2f54',
  },
  topicLabel: {
    marginLeft: 14,
    fontSize: 14,
    fontWeight: '800',
    color: '#2f2f54',
    letterSpacing: 0.6,
  },
  infoBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#e5edff',
  },
  infoText: {
    fontSize: 12,
    color: '#1f2933',
    lineHeight: 16,
  },
});

export default TopicsScreen;
