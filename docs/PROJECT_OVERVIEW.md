
---

```md
# docs/PROJECT_OVERVIEW.md

# MYAII2025a – Projektübersicht

**Projekt:** MYAII2025a – Mobile-Prototyp „MYAII“ (iOS App)  
**Technologie:** Expo / React Native / TypeScript  
**Repository:** https://github.com/bmue76/myaii2025a.git  
**Stand:** 29.11.2025 (nach Abschluss Teilprojekt 1.4)

---

## 1. Ziel des Projekts

MYAII ist ein Mobile-Prototyp (primär iOS), der zwei zentrale Funktionen kombiniert:

1. **Coach-Tab**  
   - Integration eines Video-/Avatar-Coaches (z. B. HeyGen) via WebView.

2. **Diary-Tab**  
   - Einfaches, lokales „Mood & Text“-Tagebuch:
     - Stimmungsauswahl (Emojis).
     - Freitext-Eingaben.
     - Lokale Speicherung via AsyncStorage.

Das Projekt wird schrittweise in Teilprojekte gegliedert und mit Git & Dokumentation begleitet.

---

## 2. Projektstruktur

**Verzeichnisse:**

- Projekt-Root:  
  `C:\dev\myaii2025a`

- Mobile-App (Expo / React Native):  
  `C:\dev\myaii2025a\mobile`

- Dokumentation:  
  `C:\dev\myaii2025a\docs`

---

## 3. Teilprojekte

### 3.1 Teilprojekt 1.1 – Expo Setup & Grundnavigation

- Expo-TypeScript-App erstellt unter `mobile`.
- Basis-Navigation:
  - Bottom-Tab-Navigation mit Tabs **Coach** & **Diary**.
- Placeholder-Screens für beide Tabs.
- Git-Basis-Setup und erste Doku erstellt.

**Details:** siehe `docs/teilprojekt-1.1-expo-setup-grundnavigation.md`

---

### 3.2 Teilprojekt 1.2 – Coach-Tab – HeyGen-WebView

- Integration von `react-native-webview`.
- Konfigurationsdatei `mobile/src/config/coachConfig.ts` mit:
  - `HEYGEN_COACH_URL` (konfigurierbare URL für den HeyGen-Avatar/Coach).
- `CoachScreen`:
  - Lädt die HeyGen-URL in einer WebView.
  - Implementiert:
    - Header/Titel.
    - Loading-State (Spinner/ActivityIndicator).
    - Einfaches Error-Handling (Fehlermeldung bei Ladefehlern).

**Details:** siehe `docs/teilprojekt-1.2-coach-tab-heygen-webview.md`

---

### 3.3 Teilprojekt 1.3 – Diary-MVP – Mood & Text

- **AsyncStorage-Integration**:
  - Installation und Setup von `@react-native-async-storage/async-storage`.
  - Storage-Key-Konvention: `MYAII_DIARY_ENTRIES`.

- **Datenmodell & Types**:
  - `mobile/src/types/diary.ts`:
    - `Mood = 'awful' | 'bad' | 'ok' | 'good' | 'great'`
    - `DiaryEntry` mit Feldern:
      - `id`
      - `createdAt`
      - `mood`
      - `text`

- **Storage-Wrapper**:
  - `mobile/src/storage/diaryStorage.ts` mit Funktionen:
    - `loadDiaryEntries()`
    - `saveDiaryEntries(entries)`
    - `clearDiaryEntries()`

- **DiaryScreen**:
  - Mood-Picker (Buttons/Emojis für die Stimmungen).
  - Multiline-Textfeld für Notizen.
  - „Eintrag speichern“-Button mit Validierung (kein komplett leerer Eintrag).
  - Liste der gespeicherten Einträge (Datum, Mood-Icon, Textauszug).
  - „Alle löschen“-Funktion.
  - UX-Verbesserungen (z. B. Keyboard-Verhalten, Feedback nach Speichern).

**Details:** siehe `docs/teilprojekt-1.3-diary-mvp-mood-text.md`

---

### 3.4 Teilprojekt 1.4 – EAS Setup & iOS-Build (Dev & Vorbereitung TestFlight)

- **EAS-Integration:**
  - `eas init` im Projekt `mobile`.
  - Projekt mit Expo/EAS-Account verknüpft (Slug: `mobile`).

- **Expo-Konfiguration (`app.config.ts`):**
  - Neue zentrale Konfigurationsdatei `mobile/app.config.ts`.
  - Wichtige Felder:
    - `name: "MYAII"`
    - `slug: "mobile"` (EAS-konform)
    - `version: "1.0.0"`
    - `bundleIdentifier: "ch.atlex.myaii"` (iOS)
    - `package: "ch.atlex.myaii"` (Android, für später)
    - Splash-Fallback auf `./assets/icon.png`.
    - `ios.infoPlist.ITSAppUsesNonExemptEncryption = false`.

- **EAS-Build-Konfiguration (`eas.json`):**
  - Profile:
    - `development` → Dev Client, `distribution: "internal"`.
    - `preview` → interner Build für Previews.
    - `production` → `distribution: "store"` (für App Store/TestFlight).
  - `cli.appVersionSource = "remote"`.

- **Dependencies & Fixes:**
  - `expo-dev-client` automatisch installiert (SDK 54).
  - Fehlerbehebungen:
    - Missing Asset (`./assets/splash.png`) → Splash auf Icon umgestellt.
    - Slug-Konflikt (`mobile` vs `myaii`) → Slug lokal auf `mobile` gesetzt.
    - Encryption-Info (`ITSAppUsesNonExemptEncryption`) → explizit auf `false`.

- **Erster iOS-Development-Build:**
  - Build-Befehl:  
    `eas build --platform ios --profile development`
  - Build erfolgreich, Binary/Install-Link im EAS-Dashboard verfügbar (interne Distribution).

**Details:** siehe `docs/teilprojekt-1.4-eas-setup-ios-build.md`

---

## 4. Stand nach Teilprojekt 1.4 (29.11.2025)

- **Funktional:**
  - Grundnavigation mit Tabs **Coach** & **Diary** vorhanden.
  - Coach-Tab lädt HeyGen-Avatar/Coach via WebView.
  - Diary-Tab hat lauffähigen MVP:
    - Mood-Auswahl.
    - Freitext-Tagebuch.
    - Lokale Speicherung & Anzeige der Einträge.

- **Technisch:**
  - Expo/React-Native-Projekt stabil unter `mobile`.
  - TypeScript & strukturierte Projektorganisation (Screens, Config, Storage).
  - AsyncStorage für lokale Datenpersistenz integriert.
  - EAS-Build-Pipeline für iOS eingerichtet (Development-Profile getestet).
  - EAS-Projekt mit Expo Account verknüpft (Slug `mobile`).

- **Bereit für nächste Schritte:**
  - TestFlight-Distribution (Teilprojekt 1.5).
  - Optische Verfeinerung (Icons, Splash, Branding).
  - Weitere Features im Coach-Tab und Diary-Tab.

---

## 5. Nächste geplante Teilprojekte (Ausblick)

- **Teilprojekt 1.5 – TestFlight-Distribution**
  - EAS Submit für iOS (TestFlight).
  - App-Store-Metadaten (Name, Beschreibung, Screenshots).
  - Interne Tester-Gruppen und erste User-Tests.

- **Teilprojekt 1.x – UI/UX-Feinschliff**
  - Branding, Farben, Typografie (MYAII-Design).
  - Verbesserte Loading-/Error-Zustände.
  - ggf. zusätzliche Diary-Funktionen (Filter, Export).

Die konkrete Planung der nächsten Teilprojekte erfolgt im Master- & Roadmap-Chat.
