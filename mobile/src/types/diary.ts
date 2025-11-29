// mobile/src/types/diary.ts

export type Mood = 'awful' | 'bad' | 'ok' | 'good' | 'great';

export type DiaryEntry = {
  id: string;
  createdAt: string; // ISO-String (z. B. new Date().toISOString())
  mood: Mood;
  text: string;
};
