
---

## `docs/teilprojekt-1.1-expo-setup-grundnavigation.md`

```md
# MYAII2025a – Teilprojekt 1.1: Expo Setup & Grundnavigation

**Datum:** 29.11.2025  
**Status:** abgeschlossen  
**Projekt:** MYAII2025a – Mobile-Prototyp (iOS)  
**Repo:** https://github.com/bmue76/myaii2025a.git  

---

## 1. Zielsetzung

In Teilprojekt 1.1 sollte die technische Basis für die MYAII-Mobile-App geschaffen werden:

- Expo-Projekt mit TypeScript unter `C:\dev\myaii2025a\mobile`.
- Klare Projektstruktur mit `src/`, `navigation/` und `screens/`.
- Einrichtung einer Grundnavigation via React Navigation:
  - Bottom Tabs mit den Tabs **Coach** und **Diary**.
- Placeholder-Screens für:
  - **Coach**: später HeyGen-Avatar via WebView.
  - **Diary**: später Mood + Text-Einträge mit lokaler Speicherung.
- Git-Repo initialisieren und mit GitHub verbinden.
- Doku-Basis für Projekt-Overview und Teilprojekt-Protokolle.

---

## 2. Ausgangslage & Rahmenbedingungen

- OS: Windows 10/11  
- Editor: VS Code  
- Terminal: Git Bash  
- Projekt-Root: `C:\dev\myaii2025a`  
- Mobile-App: `C:\dev\myaii2025a\mobile`  
- Zielplattform: iOS (Test über Expo Go, längerfristig TestFlight)
- GitHub: `https://github.com/bmue76/myaii2025a.git`

---

## 3. Umsetzungsschritte

### 3.1 Projekt-Root & Ordnerstruktur

Im Git Bash:

```bash
cd /c/dev
mkdir myaii2025a    # falls noch nicht vorhanden
cd myaii2025a
mkdir -p docs
