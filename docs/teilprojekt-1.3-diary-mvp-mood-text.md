# MYAII2025a – Teilprojekt 1.3: Diary-MVP – Mood & Text mit AsyncStorage

**Datum:** 29.11.2025  
**Status:** Abgeschlossen

---

## 1. Zielsetzung

Im Diary-Tab der MYAII-Mobile-App soll ein erstes MVP-Tagebuch entstehen:

- Nutzer:in wählt eine Stimmung (Mood) über Emojis.
- Nutzer:in kann einen freien Text (Notizen, Gedanken) erfassen.
- Eintrag wird lokal auf dem Gerät gespeichert (AsyncStorage), ohne Backend.
- Unterhalb des Formulars wird eine Liste der bisherigen Einträge angezeigt.

Der Fokus liegt auf einem stabilen lokalen MVP, nicht auf Sync oder Auswertungen.

---

## 2. Technische Umsetzung

### 2.1 Datenmodell & Types

**Datei:** `mobile/src/types/diary.ts`

- `Mood` als Union-Type:  
  `'awful' | 'bad' | 'ok' | 'good' | 'great'`
- `DiaryEntry` mit:
  - `id: string` – eindeutige ID (Zeitstempel + Zufall).
  - `createdAt: string` – ISO-String, z. B. `new Date().toISOString()`.
  - `mood: Mood` – referenziert den oben definierten Mood-Type.
  - `text: string` – Tagebuchtext.

---

### 2.2 AsyncStorage-Integration

Installation des Pakets:

```bash
cd /c/dev/myaii2025a/mobile
npx expo install @react-native-async-storage/async-storage
