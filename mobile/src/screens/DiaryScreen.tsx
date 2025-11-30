// mobile/src/screens/DiaryScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DiaryEntry = {
  id: string;
  mood: string;
  text: string;
  createdAt: string;
};

const STORAGE_KEY = 'MYAII_DIARY_ENTRIES';

const MOODS = ['😄', '😊', '😐', '😔', '😢'];

const DiaryScreen: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<string>('😊');
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json) {
        const parsed: DiaryEntry[] = JSON.parse(json);
        setEntries(parsed);
      }
    } catch (error) {
      console.warn('Fehler beim Laden der Diary-Einträge', error);
    }
  };

  const saveEntries = async (nextEntries: DiaryEntry[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries));
    } catch (error) {
      console.warn('Fehler beim Speichern der Diary-Einträge', error);
    }
  };

  const handleSave = async () => {
    if (!note.trim()) {
      Alert.alert('Hinweis', 'Bitte schreibe noch etwas in dein Tagebuch.');
      return;
    }

    const newEntry: DiaryEntry = {
      id: `${Date.now()}`,
      mood: selectedMood,
      text: note.trim(),
      createdAt: new Date().toISOString(),
    };

    const nextEntries = [newEntry, ...entries];
    setEntries(nextEntries);
    setNote('');
    await saveEntries(nextEntries);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('de-CH', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.root}>
      {/* Top Header */}
      <View style={styles.headerBackground}>
        <View style={styles.headerContent}>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>📔</Text>
          </View>
          <Text style={styles.headerTitle}>TAGEBUCH</Text>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>⭐</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Card: neuer Eintrag */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>DEINE HEUTIGE STIMMUNG</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.label}>Wie fühlst du dich?</Text>
              <View style={styles.moodRow}>
                {MOODS.map((mood) => (
                  <TouchableOpacity
                    key={mood}
                    style={[
                      styles.moodButton,
                      selectedMood === mood && styles.moodButtonActive,
                    ]}
                    onPress={() => setSelectedMood(mood)}
                  >
                    <Text style={styles.moodText}>{mood}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.label, { marginTop: 16 }]}>
                Was möchtest du festhalten?
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Schreib deinen Gedanken, Erlebnisse oder Erkenntnisse hier auf..."
                placeholderTextColor="#9ca3af"
                multiline
                value={note}
                onChangeText={setNote}
              />

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Eintrag speichern</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card: Einträge */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>DEINE EINTRÄGE</Text>
            </View>
            <View style={styles.cardBody}>
              {entries.length === 0 ? (
                <Text style={styles.emptyText}>
                  Noch keine Einträge. Starte oben mit deinem ersten Tagebucheintrag.
                </Text>
              ) : (
                entries.map((entry) => (
                  <View key={entry.id} style={styles.entryItem}>
                    <View style={styles.entryHeaderRow}>
                      <Text style={styles.entryMood}>{entry.mood}</Text>
                      <Text style={styles.entryDate}>
                        {formatDate(entry.createdAt)}
                      </Text>
                    </View>
                    <Text style={styles.entryText}>{entry.text}</Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  contentWrapper: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#e0ecff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  cardHeaderText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2f2f54',
    letterSpacing: 1,
  },
  cardBody: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  moodRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  moodButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c7d7f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  moodButtonActive: {
    backgroundColor: '#111827',
  },
  moodText: {
    fontSize: 22,
  },
  textInput: {
    marginTop: 6,
    minHeight: 90,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    textAlignVertical: 'top',
    backgroundColor: '#ffffff',
  },
  saveButton: {
    marginTop: 14,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  emptyText: {
    fontSize: 13,
    color: '#4b5563',
  },
  entryItem: {
    marginBottom: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
  },
  entryHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  entryMood: {
    fontSize: 20,
  },
  entryDate: {
    fontSize: 11,
    color: '#6b7280',
  },
  entryText: {
    fontSize: 13,
    color: '#111827',
  },
});

export default DiaryScreen;
