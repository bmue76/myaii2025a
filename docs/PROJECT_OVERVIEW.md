
---

## 📄 docs/PROJECT_OVERVIEW.md (aktueller Stand nach 1.3)

Bitte diese Datei **vollständig so** speichern:

```md
# MYAII2025a – Projektübersicht

## 1. Überblick

**Projekt:** MYAII – Mobile-Prototyp (iOS App) mit Expo / React Native und TypeScript.  
Ziel ist ein begleitender Coach- und Diary-Prototyp, der in einem Showcase (z. B. mit HeyGen-Avatar) demonstriert werden kann.

**Projektstruktur (relevant für Mobile-Prototyp):**

- Projekt-Root: `C:\dev\myaii2025a`
- Mobile-App: `C:\dev\myaii2025a\mobile`
- GitHub-Repo: `https://github.com/bmue76/myaii2025a.git`

---

## 2. Teilprojekte Mobile-App

### 2.1 Teilprojekt 1.1 – Expo Setup & Grundnavigation

**Ziel:**

- Basis-App mit Expo/TypeScript aufsetzen.
- Bottom-Tab-Navigation mit Tabs **Coach** und **Diary**.

**Umsetzung:**

- Expo-TypeScript-App im Ordner `mobile` erstellt.
- React Navigation (Bottom Tabs) eingerichtet.
- Tabs:
  - **Coach** → `CoachScreen` (zunächst Placeholder).
  - **Diary** → `DiaryScreen` (zunächst Placeholder).
- Grundstruktur für Screens, Navigation und Config angelegt.

**Status:** Abgeschlossen  
**Doku:** `docs/teilprojekt-1.1-expo-setup-grundnavigation.md`

---

### 2.2 Teilprojekt 1.2 – Coach-Tab – HeyGen-WebView

**Ziel:**

- Coach-Tab mit HeyGen-Avatar-Seite via WebView realisieren.
- Loading-State, Error-Handling und einfacher Header.

**Umsetzung:**

- `react-native-webview` integriert.
- Konfigurationsdatei: `mobile/src/config/coachConfig.ts` mit `HEYGEN_COACH_URL`.
- `CoachScreen` lädt die HeyGen-URL in einer WebView:
  - Header mit Titel („MYAII Coach“) und Hinweis („Prototyp – HeyGen-Avatar“).
  - Loading-Overlay („Coach wird geladen …“).
  - Fehleranzeige mit Retry-Button.
- Doku für das Teilprojekt ergänzt.

**Relevante Dateien:**

- `mobile/src/screens/CoachScreen.tsx`
- `mobile/src/config/coachConfig.ts`

**Status:** Abgeschlossen  
**Doku:** `docs/teilprojekt-1.2-coach-webview-heygen.md`

---

### 2.3 Teilprojekt 1.3 – Diary-MVP – Mood & Text mit AsyncStorage

**Ziel:**

- Diary-Tab zu einem ersten MVP ausbauen:
  - Mood-Picker (Emojis).
  - Freitext-Eingabe für persönliche Notizen.
  - Lokale Speicherung mit AsyncStorage.
  - Anzeige der gespeicherten Einträge in einer Liste.

**Umsetzung:**

- **AsyncStorage-Integration:**
  - Installation via:
    ```bash
    cd /c/dev/myaii2025a/mobile
    npx expo install @react-native-async-storage/async-storage
    ```
  - Zentraler Storage-Key: `MYAII_DIARY_ENTRIES`.

- **Datenmodell & Types:**
  - Datei: `mobile/src/types/diary.ts`
  - Typen:
    - `Mood = 'awful' | 'bad' | 'ok' | 'good' | 'great'`
    - `DiaryEntry` (id, createdAt, mood, text).

- **Storage-Wrapper:**
  - Datei: `mobile/src/storage/diaryStorage.ts`
  - Funktionen:
    - `loadDiaryEntries()` – lädt bestehende Einträge aus AsyncStorage.
    - `saveDiaryEntries(entries)` – speichert Einträge wieder ab.
    - `clearDiaryEntries()` – löscht alle Einträge (Dev/Debug).

- **DiaryScreen (MVP-UI):**
  - Datei: `mobile/src/screens/DiaryScreen.tsx`
  - Features:
    - Mood-Picker mit 5 Emojis (von „sehr schlecht“ bis „super“).
    - Multiline-Textfeld für freie Notizen.
    - Button „Eintrag speichern“ mit Validierung:
      - Mood muss gewählt sein.
      - Text darf nicht leer sein.
    - Lokale Speicherung aller Einträge in AsyncStorage.
    - Liste der bisherigen Einträge:
      - Mood-Emoji, Datum/Zeit, Kurztext (max. ~160 Zeichen).
    - „Alle löschen“-Button mit Sicherheitsdialog.
    - Kurzes Feedback nach dem Speichern („Eintrag gespeichert ✨“).
    - Tastatur schließt nach Speichern automatisch, Taps auf den Hintergrund schließen sie ebenfalls.

**Relevante Dateien:**

- `mobile/src/screens/DiaryScreen.tsx`
- `mobile/src/types/diary.ts`
- `mobile/src/storage/diaryStorage.ts`

**Status:** Abgeschlossen (29.11.2025)  
**Doku:** `docs/teilprojekt-1.3-diary-mvp-mood-text.md`

---

## 3. Nächste mögliche Schritte (Roadmap-Ideen)

- **1.x – UI/UX-Finishing:**
  - Gemeinsames Styling-Konzept für Coach- und Diary-Tab.
  - Kleine Animationen, bessere States (z. B. leere Diary-Liste).

- **2.x – Erweiterungen Diary:**
  - Filter und Zeiträume (z. B. „Nur heute“, „Letzte Woche“).
  - Mood-Statistiken und einfache Charts.
  - Export- / Share-Funktion (z. B. CSV/JSON).

- **3.x – Backend & Sync (optional):**
  - Zentrale Speicherung im PDS / Backend.
  - Login/Accounts, wenn für Showcase sinnvoll.
  - Verschlüsselung / Privacy-Features.

Diese Roadmap ist vorläufig und kann mit den Anforderungen aus dem Showcase weiter verfeinert werden.
