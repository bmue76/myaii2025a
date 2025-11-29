# MYAII2025a – Projektübersicht

## 1. Projektbeschreibung

MYAII ist ein Mobile-Prototyp (iOS-App) für einen persönlichen AI-Coach mit Tagebuchfunktion.  
Ziel ist ein **Showcase-Prototyp**, der über **TestFlight** verteilt werden kann und folgende Kernbereiche abdeckt:

- **Coach**: AI-Coach mit Avatar (HeyGen-Integration via WebView).
- **Diary**: Stimmungs- und Texteingaben (Mood + Text), lokal gespeichert.
- Weitere Bereiche (z. B. Freunde, Profil, Auswertungen) sind für spätere Phasen vorgesehen.

Der Fokus von Phase 1 liegt auf einer **stabilen technischen Basis**, einer klaren Navigation und einer sauberen Projektstruktur (Code & Doku).

---

## 2. Architektur & Tech-Stack (Stand nach Teilprojekt 1.1)

- **Plattform:** iOS (Expo / React Native, TypeScript)
- **Mobile-Framework:** Expo (blank TypeScript-Template)
- **Navigation:** React Navigation mit Bottom Tab Navigator
- **Sprachen:** TypeScript, JavaScript (unter der Haube)
- **Entwicklungsumgebung:**
  - OS: Windows 10/11
  - Editor: VS Code
  - Terminal: Git Bash
- **Versionsverwaltung:** Git + GitHub  
  - Repo: `https://github.com/bmue76/myaii2025a.git`

Noch nicht integriert (aber geplant):

- WebView für HeyGen-Avatar (Coach-Tab).
- AsyncStorage für Diary-Daten.
- LLM-Integration für Coaching-Text & Tagebuch-Auswertung (Phase 2).

---

## 3. Projektstruktur (Stand nach Teilprojekt 1.1)

**Root:**

- `C:\dev\myaii2025a`
  - `mobile/` – Expo-/React-Native-App
  - `docs/` – Projektdokumentation (Markdown)

**Mobile-App (`mobile/`):**

- `App.tsx`  
  – Einstiegspunkt der App, setzt `NavigationContainer` und `RootTabs`.

- `src/`
  - `navigation/`
    - `RootTabs.tsx`  
      – BottomTabNavigator mit Tabs **Coach** und **Diary**.
  - `screens/`
    - `CoachScreen.tsx`  
      – Placeholder-Screen für AI-Coach/HeyGen.
    - `DiaryScreen.tsx`  
      – Placeholder-Screen für Tagebuch.

Diese Struktur wird in kommenden Teilprojekten um weitere Bereiche wie `components/`, `hooks/`, `types/` usw. ergänzt.

---

## 4. Teilprojekte – Übersicht & Status

### 4.1 Phase 1 – Showcase-Prototyp (Mobile iOS)

1. **Teilprojekt 1.1 – Expo Setup & Grundnavigation**  
   **Status:** abgeschlossen (29.11.2025)  
   **Inhalte:**
   - Expo-Projekt (TypeScript) unter `mobile/` erstellt.
   - Grundstruktur mit `src/`, `navigation/` und `screens/`.
   - React Navigation mit Bottom Tabs „Coach“ & „Diary“ eingerichtet.
   - Placeholder-Screens für Coach & Diary.
   - Git-Repo angelegt und mit GitHub verknüpft.
   - Basis-Dokumentation erstellt (`PROJECT_OVERVIEW.md`, `teilprojekt-1.1-...`).

2. **Teilprojekt 1.2 – Coach-Tab: HeyGen-WebView-Integration**  
   **Status:** geplant  
   **Ziel:**
   - Einbindung des HeyGen-Avatars im Coach-Tab via WebView.
   - Konfiguration über eine zentrale URL/Config.
   - Test auf iOS (Expo Go / TestFlight-Vorbereitung).

3. **Teilprojekt 1.3 – Diary-Tab: MVP Mood & Text (lokal)**  
   **Status:** geplant  
   **Ziel:**
   - Erfassung von Mood + Text im Diary-Tab.
   - Speicherung der Einträge mit AsyncStorage.
   - Anzeige einer Liste der bisherigen Einträge.

4. **Teilprojekt 1.4 – UI-Finetuning & weitere Navigation**  
   **Status:** geplant  
   **Ziel:**
   - Anpassung der UI gemäss GUI/Branding.
   - Vorbereitung weiterer Tabs/Stacks (z. B. „Friends“, „Profile“, Settings).

---

## 5. How to Run (Stand 1.1)

### 5.1 Voraussetzungen

- Node.js installiert
- npm verfügbar
- Expo CLI via `npx` verwendbar
- Expo Go App auf iPhone (für Tests auf realem Device)

### 5.2 App starten

```bash
cd /c/dev/myaii2025a/mobile
npm install        # nur beim ersten Mal nötig
npx expo start
