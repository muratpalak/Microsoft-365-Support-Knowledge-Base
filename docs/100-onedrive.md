---
id: KB-100
title: OneDrive synchronisiert Dateien nicht
category: E-Mail & Zusammenarbeit
level: L1
updated: '2026-10-20'
description: Synchronisierungsfehler nachvollziehbar analysieren und datenbewusst
  beheben.
tags:
- OneDrive
- Sync
- Dateien
---

# OneDrive synchronisiert Dateien nicht

**Symptom:** Die Statusanzeige bleibt bei „Änderungen werden verarbeitet“ oder Dateien fehlen lokal.

## Untersuchung

1. Prüfen, ob Datei in **OneDrive im Web** vorhanden und aktuell ist; damit Cloudbestand und lokales Problem unterscheiden.
2. Synchronisierungssymbol und konkrete Fehlermeldung dokumentieren.
3. Internetverbindung, freien Speicher, OneDrive-Anmeldung und etwaige Service-Health-Störung prüfen.
4. Konflikte durch geöffnete Dateien, sehr große/zahlreiche Uploads oder unzulässige Dateinamen prüfen.
5. Gegebenenfalls Synchronisierung pausieren und wieder starten; **niemals Ordner mit ungesicherten lokalen Daten ungeprüft löschen**.

## Mac: gezielte Behebung

- Bei fortbestehendem Problem dokumentiert Microsoft das **Trennen und erneute Verbinden** des Accounts (OneDrive-Menü → Einstellungen/Preferences → Konto → **Diesen Mac trennen**), anschließend erneut anmelden.
- Das Trennen der Verbindung soll keine Cloud-Dateien löschen; dennoch vor jedem Eingriff prüfen, ob **nur lokal vorliegende, noch nicht hochgeladene Dateien** existieren.
- Reset oder erneute Verknüpfung löst vollständige erneute Synchronisierung aus; Dauer abhängig von Datenvolumen.

## Windows: gezielte Behebung

- Konto-/Sync-Zustand und aktuelle OneDrive-Version erheben.
- Microsoft-spezifische Reset-Anweisung nur nach Abgleich mit der aktuellen Support-Dokumentation und geeigneter Datensicherung ausführen.

## Validierung

- Neutrale Testdatei lokal anlegen und erfolgreiche Synchronisation in der Weboberfläche bestätigen.
- Auf einem zweiten Gerät prüfen, ob die aktuelle Dateiversion verfügbar ist.

## Quellen

- [Microsoft: OneDrive auf Mac reparieren](https://support.microsoft.com/en-us/onedrive/fix-onedrive-sync-problems-on-mac)
- [Microsoft: OneDrive Sync – Processing changes](https://support.microsoft.com/en-us/onedrive/troubleshoot-onedrive-sync-issues-stuck-on-processing-changes)
