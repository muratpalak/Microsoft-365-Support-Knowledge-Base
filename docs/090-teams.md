---
id: KB-090
title: 'Microsoft Teams: Anmeldung, Audio und Clientfehler'
category: E-Mail & Zusammenarbeit
level: L1
updated: '2026-10-20'
description: Teams-Probleme gezielt eingrenzen, ohne Diagnosedaten unnötig zu löschen.
tags:
- Teams
- Cache
- Meetings
---

# Microsoft Teams: Anmeldung, Audio und Clientfehler

**Symptom:** Teams startet nicht, hängt beim Login oder Audio funktioniert in Meetings nicht.

## Erste Prüfung

1. Microsoft Teams im Browser testen und **Dienststatus** kontrollieren.
2. Prüfen, ob nur ein Gerät, nur eine Person oder viele Personen betroffen sind.
3. Für Audio: richtiges Mikrofon/Lautsprechergerät im Teams-Testanruf auswählen; Systemberechtigungen prüfen; Headset/Bluetooth neu verbinden.
4. Bei Login: [MFA und Entra-Anmeldung](050-anmeldung-mfa.md) prüfen.
5. Teams-App-Version und Betriebssystem ermitteln; Client kontrolliert neu starten/aktualisieren.

## Wann Teams-Cache zurücksetzen?

**Nicht pauschal.** Microsoft warnt ausdrücklich davor, Cache-Löschung als Standardmaßnahme bei **fehlenden Chats, Kanälen, Nachrichtenverlauf oder fehlerhaften Benachrichtigungen** zu verwenden, weil Diagnoseprotokolle verloren gehen können.

Bei klar eingegrenzten **lokalen Clientproblemen** kann nach Dokumentation bzw. Freigabe ein App-Reset sinnvoll sein:

- **Neues Teams unter Windows:** Einstellungen → Apps → Installierte Apps → Microsoft Teams → Erweiterte Optionen → **Zurücksetzen**.
- **Mac:** Microsoft beschreibt getrennte Cache-Pfade für Classic und New Teams; Version prüfen und ausschließlich die aktuell offizielle Anleitung verwenden. Vorher Support-Logs sichern, falls eine Eskalation wahrscheinlich ist.

**Kein blindes Löschen ganzer App-Datenordner.** App-Reset kann persönliche Einstellungen entfernen.

## Abschlusskontrolle

- Teams startet und meldet sich an.
- Testchat oder geplantes Testmeeting zeigt erwartete Funktion.
- Bei Audiofehler: Ein- und Ausgabegerät im Testmeeting protokollieren.

## Quelle

- [Microsoft: Clear the Teams client cache – Einschränkungen und Vorgehen](https://learn.microsoft.com/en-us/MicrosoftTeams/troubleshoot/teams-administration/clear-teams-cache)
