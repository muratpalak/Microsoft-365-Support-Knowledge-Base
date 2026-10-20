---
id: KB-070
title: Outlook startet nicht oder meldet Anmeldefehler
category: E-Mail & Zusammenarbeit
level: L1
updated: '2026-10-20'
description: Outlook Desktop vs. Web unterscheiden und Clientfehler systematisch isolieren.
tags:
- Outlook
- Exchange
- Client
---

# Outlook startet nicht oder meldet Anmeldefehler

**Symptom:** Outlook fragt ständig nach Anmeldung, lädt nicht oder zeigt keinen aktuellen Posteingang.

## Diagnosefolge

1. Betroffenen Client ermitteln: **neues Outlook**, **klassisches Outlook**, Outlook für Mac oder **Outlook im Web**. Die Oberflächen und Reparaturschritte unterscheiden sich.
2. Prüfen, ob Webmail unter `https://outlook.office.com` funktioniert.
3. Wenn Webmail ebenfalls scheitert: [Konto, MFA und Lizenz](050-anmeldung-mfa.md) sowie Service Health prüfen.
4. Wenn nur die Desktop-App betroffen ist: Betriebssystem-/Outlook-Version, Updates, Netzwerk, VPN/Proxy und Fehlerzeitpunkt ermitteln.
5. Eine neue Anmeldung nach den Unternehmensvorgaben testen. Profile **nicht** ohne Datensicherung bzw. Kenntnis über lokale Daten löschen.
6. Bei wiederholtem Authentifizierungsfehler: konkrete Fehler-ID im Ticket speichern und an den zuständigen Spezialisten eskalieren.

## Mögliche Ursachen

| Test | Interpretation |
|---|---|
| Webmail funktioniert, App nicht | Client/Profil/Token/Netzwerk naheliegend |
| Webmail und App scheitern | Konto, Lizenz, Dienst oder Richtlinie prüfen |
| Nur freigegebenes Postfach fehlt | Berechtigungen und Einbindungsart prüfen |
| Nur externe Mails fehlen | Junk, Regeln oder Exchange Message Trace prüfen |

## Validierung

- Neues Test-E-Mail an interne Adresse senden und Antwort empfangen.
- Posteingang und Kalender synchronisieren; keine fremden oder vertraulichen Nachrichten kopieren.
- Clienttyp und konkrete Lösung dokumentieren.

## Quellen

- [Microsoft: New Outlook troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/outlook/new-outlook-windows-welcome)
- [Microsoft: Exchange Online message trace](https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac)
