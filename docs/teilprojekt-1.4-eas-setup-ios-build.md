# docs/teilprojekt-1.4-eas-setup-ios-build.md

# MYAII2025a – Teilprojekt 1.4: EAS Setup & iOS-Build

**Datum:** 29.11.2025  
**Responsible:** Beat Müller / ChatGPT (Projektmanagement & Tech-Lead)

---

## 1. Ziel des Teilprojekts

Das Ziel von Teilprojekt **1.4 – EAS Setup & iOS-Build** war:

- Das MYAII-Mobile-Projekt für **EAS Cloud Builds** vorzubereiten.
- Die App-Konfiguration (Expo) zu vereinheitlichen:
  - Name & Slug klar definieren.
  - iOS **Bundle Identifier** setzen.
- EAS-Build-Profile für **Development / Preview / Production** anlegen.
- Einen ersten **iOS-Development-Build** erfolgreich durchzuführen als Vorbereitung für spätere TestFlight-Distribution.

---

## 2. Ausgangslage

- MYAII-Mobile-App liegt unter:  
  `C:\dev\myaii2025a\mobile`
- Bisherige Teilprojekte:
  - **1.1 – Expo Setup & Grundnavigation**
  - **1.2 – Coach-Tab – HeyGen-WebView**
  - **1.3 – Diary-MVP – Mood & Text**
- Expo-Projekt war bereits lauffähig mit Tabs **Coach** & **Diary**.
- EAS war noch nicht konfiguriert, kein iOS-Build vorhanden.

---

## 3. EAS CLI & Projekt-Initialisierung

### 3.1 EAS CLI Installation

In Git Bash:

```bash
cd /c/dev/myaii2025a/mobile

# falls noch nicht installiert:
npm install -g eas-cli
