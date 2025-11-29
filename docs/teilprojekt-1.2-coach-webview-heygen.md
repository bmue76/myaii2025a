# MYAII2025a – Teilprojekt 1.2: Coach-Tab – HeyGen-WebView

**Datum:** 29.11.2025  
**Verantwortlich:** Beat Müller / ChatGPT (MYAII2025a)  

## 1. Zielsetzung

- Integration eines WebViews in den Coach-Tab der MYAII-Mobile-App.
- Einbindung einer (zukünftigen) HeyGen-Avatar-Seite über eine zentrale Konfiguration.
- Anzeige eines Loading-Zustands während des Ladens der Seite.
- Sinnvolles Error-Handling mit Fehlermeldung und Retry-Button.
- Leichter visuelle Rahmen (Header) für den Coach-Tab.
- Aktualisierung der Projektdokumentation.

## 2. Ausgangslage

- Teilprojekt 1.1 (Expo Setup & Grundnavigation) war bereits abgeschlossen:
  - Expo-TypeScript-App unter `C:\dev\myaii2025a\mobile`.
  - Bottom-Tab-Navigation mit Tabs **Coach** & **Diary**.
  - Placeholder-Screens für Coach & Diary.
  - Git-Repo: `https://github.com/bmue76/myaii2025a.git`.
- Im Coach-Tab existierte bislang nur ein einfacher Placeholder ohne WebView.

## 3. Technische Umsetzung

### 3.1 Installation WebView-Library

Im Ordner `C:\dev\myaii2025a\mobile`:

```bash
npx expo install react-native-webview
