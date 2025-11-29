// mobile/src/storage/diaryStorage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DiaryEntry } from '../types/diary';

// Klarer, zentraler Storage-Key für alle Diary-Einträge
const STORAGE_KEY = 'MYAII_DIARY_ENTRIES';

export async function loadDiaryEntries(): Promise<DiaryEntry[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (!json) {
      return [];
    }

    const parsed = JSON.parse(json);

    if (!Array.isArray(parsed)) {
      console.warn(
        '[DiaryStorage] Parsed value is not an array, resetting storage.',
      );
      return [];
    }

    // Minimaler Type-Check
    return parsed.filter((item) => {
      return (
        typeof item === 'object' &&
        item !== null &&
        typeof item.id === 'string' &&
        typeof item.createdAt === 'string' &&
        typeof item.mood === 'string' &&
        typeof item.text === 'string'
      );
    }) as DiaryEntry[];
  } catch (error) {
    console.warn('[DiaryStorage] loadDiaryEntries error', error);
    // Fallback: lieber leeres Array zurückgeben als App crashen lassen
    return [];
  }
}

export async function saveDiaryEntries(entries: DiaryEntry[]): Promise<void> {
  try {
    const json = JSON.stringify(entries);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.warn('[DiaryStorage] saveDiaryEntries error', error);
  }
}

/**
 * Dev-/Debug-Helfer: alle Diary-Einträge löschen.
 */
export async function clearDiaryEntries(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('[DiaryStorage] clearDiaryEntries error', error);
  }
}
