// mobile/src/screens/DiaryScreen.tsx

import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { DiaryEntry, Mood } from '../types/diary';
import {
  clearDiaryEntries,
  loadDiaryEntries,
  saveDiaryEntries,
} from '../storage/diaryStorage';

type MoodOption = {
  value: Mood;
  label: string;
  emoji: string;
};

const MOOD_OPTIONS: MoodOption[] = [
  { value: 'awful', label: 'Sehr schlecht', emoji: '😢' },
  { value: 'bad', label: 'Eher schlecht', emoji: '😕' },
  { value: 'ok', label: 'Neutral', emoji: '😐' },
  { value: 'good', label: 'Gut', emoji: '🙂' },
  { value: 'great', label: 'Super', emoji: '🤩' },
];

function generateEntryId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export default function DiaryScreen() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [text, setText] = useState('');
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  const loadEntries = useCallback(async () => {
    setLoading(true);
    const loaded = await loadDiaryEntries();
    // Neueste Einträge zuerst
    const sorted = [...loaded].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    setEntries(sorted);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Beim Mount Einträge laden
    loadEntries();
  }, [loadEntries]);

  async function handleSaveEntry() {
    if (!selectedMood) {
      Alert.alert('Mood wählen', 'Bitte wähle zuerst deine Stimmung aus.');
      return;
    }

    const trimmedText = text.trim();
    if (!trimmedText) {
      Alert.alert(
        'Text fehlt',
        'Bitte schreibe zumindest einen kurzen Satz in dein Tagebuch.',
      );
      return;
    }

    setSaving(true);

    try {
      const newEntry: DiaryEntry = {
        id: generateEntryId(),
        createdAt: new Date().toISOString(),
        mood: selectedMood,
        text: trimmedText,
      };

      const updatedEntries = [newEntry, ...entries];
      setEntries(updatedEntries);
      await saveDiaryEntries(updatedEntries);

      // UX: Felder zurücksetzen + kurzes Feedback
      setText('');
      setSelectedMood(null);
      setSaveFeedback('Eintrag gespeichert ✨');
      setTimeout(() => setSaveFeedback(null), 2000);

      // WICHTIG: Tastatur nach dem Speichern schliessen
      Keyboard.dismiss();
    } catch (error) {
      console.warn('[DiaryScreen] handleSaveEntry error', error);
      Alert.alert(
        'Fehler',
        'Der Eintrag konnte nicht gespeichert werden. Bitte versuche es später erneut.',
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleClearAll() {
    Alert.alert(
      'Alle Einträge löschen?',
      'Dieser Schritt kann nicht rückgängig gemacht werden.',
      [
        { text: 'Abbrechen', style: 'cancel' },
        {
          text: 'Löschen',
          style: 'destructive',
          onPress: async () => {
            try {
              await clearDiaryEntries();
              setEntries([]);
            } catch (error) {
              console.warn('[DiaryScreen] handleClearAll error', error);
              Alert.alert(
                'Fehler',
                'Die Einträge konnten nicht gelöscht werden.',
              );
            }
          },
        },
      ],
    );
  }

  function renderMoodOption(option: MoodOption) {
    const isActive = selectedMood === option.value;

    return (
      <TouchableOpacity
        key={option.value}
        style={[styles.moodButton, isActive && styles.moodButtonActive]}
        onPress={() => setSelectedMood(option.value)}
      >
        <Text style={styles.moodEmoji}>{option.emoji}</Text>
        <Text style={[styles.moodLabel, isActive && styles.moodLabelActive]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  }

  function renderEntry({ item }: { item: DiaryEntry }) {
    const moodEmoji =
      MOOD_OPTIONS.find((m) => m.value === item.mood)?.emoji ?? '📝';
    const dateString = new Date(item.createdAt).toLocaleString();

    const maxLen = 160;
    const previewText =
      item.text.length > maxLen
        ? `${item.text.slice(0, maxLen)}…`
        : item.text;

    return (
      <View style={styles.entryCard}>
        <View style={styles.entryHeader}>
          <Text style={styles.entryEmoji}>{moodEmoji}</Text>
          <View style={styles.entryHeaderText}>
            <Text style={styles.entryDate}>{dateString}</Text>
            <Text style={styles.entryMood}>{item.mood.toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.entryText}>{previewText}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.inner}>
          <Text style={styles.title}>Dein Tagebuch</Text>
          <Text style={styles.subtitle}>
            Wie fühlst du dich heute? Wähle ein Emoji und schreibe ein paar
            Gedanken auf.
          </Text>

          <View style={styles.moodRow}>
            {MOOD_OPTIONS.map((option) => renderMoodOption(option))}
          </View>

          <View style={styles.textBoxContainer}>
            <Text style={styles.textLabel}>Dein Eintrag</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Was geht dir gerade durch den Kopf?"
              placeholderTextColor="#999999"
              multiline
              value={text}
              onChangeText={setText}
              textAlignVertical="top"
              // Optional: Enter-Key soll eher neue Zeilen erlauben als Keyboard schliessen
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSaveEntry}
              disabled={saving}
            >
              {saving ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Eintrag speichern</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={handleClearAll}
            >
              <Text style={styles.clearButtonText}>Alle löschen</Text>
            </TouchableOpacity>
          </View>

          {saveFeedback && (
            <Text style={styles.feedbackText}>{saveFeedback}</Text>
          )}

          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Vergangene Einträge</Text>
            {loading && <ActivityIndicator />}
          </View>

          {!loading && entries.length === 0 ? (
            <Text style={styles.emptyText}>
              Noch keine Einträge. Starte mit deinem ersten Tagebucheintrag
              oben.
            </Text>
          ) : (
            <FlatList
              data={entries}
              keyExtractor={(item) => item.id}
              renderItem={renderEntry}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#c3c7e0',
    marginBottom: 16,
  },
  moodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  moodButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: '#141a33',
    alignItems: 'center',
  },
  moodButtonActive: {
    backgroundColor: '#4558ff',
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  moodLabel: {
    fontSize: 11,
    color: '#c3c7e0',
    textAlign: 'center',
  },
  moodLabelActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
  textBoxContainer: {
    marginBottom: 12,
  },
  textLabel: {
    fontSize: 13,
    color: '#c3c7e0',
    marginBottom: 4,
  },
  textInput: {
    minHeight: 100,
    maxHeight: 160,
    borderRadius: 12,
    backgroundColor: '#141a33',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#ffffff',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  button: {
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  saveButton: {
    backgroundColor: '#4558ff',
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  clearButton: {
    borderWidth: 1,
    borderColor: '#4558ff',
  },
  clearButtonText: {
    color: '#c3c7e0',
    fontSize: 13,
  },
  feedbackText: {
    fontSize: 12,
    color: '#8ae6b0',
    marginBottom: 4,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  listTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  emptyText: {
    fontSize: 13,
    color: '#8a8fad',
    marginTop: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
  entryCard: {
    backgroundColor: '#141a33',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  entryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  entryEmoji: {
    fontSize: 22,
    marginRight: 8,
  },
  entryHeaderText: {
    flex: 1,
  },
  entryDate: {
    fontSize: 12,
    color: '#c3c7e0',
  },
  entryMood: {
    fontSize: 11,
    color: '#8a8fad',
  },
  entryText: {
    fontSize: 14,
    color: '#ffffff',
  },
});
