---
id: KB-140
title: Service Health, Störungen und Eskalation
category: Service Desk
level: L1–L2
updated: '2026-10-20'
description: Cloud-Störungen gegenüber lokalen Ursachen abgrenzen und Kommunikation
  organisieren.
tags:
- Service Health
- Incident
- Eskalation
---

# Service Health, Störungen und Eskalation

**Fall:** Mehrere Kolleginnen und Kollegen melden gleichzeitig Teams-/Outlook-Probleme.

## Erste 10 Minuten

1. Umfang quantifizieren: Wie viele Benutzer, Standorte, Dienste und Clients sind betroffen?
2. Beginn, Zeitzone, genaue Fehlermeldung, Auswirkungen und Änderungen erheben.
3. Mit berechtigtem Konto unter `https://admin.microsoft.com` → **Health → Service health** prüfen, ob ein bekannter Incident veröffentlicht wurde.
4. Interne Netzwerk-/VPN-/DNS-Probleme eingrenzen, wenn nur ein Standort betroffen ist.
5. Security-Signale (z. B. viele verdächtige Logins) unmittelbar gesondert eskalieren.

## Kommunikation

- Incident-ID und Microsoft-Service-Mitteilung unterscheiden (interne und externe Referenz).
- Bekannten Workaround nur weitergeben, wenn er freigegeben und getestet ist.
- Anwender über aktuelle **Auswirkung**, **Status**, **nächste Aktualisierung** und verfügbare Alternativen informieren.
- Keine ungesicherten Wiederherstellungszeiten erfinden.

## Eskalationsmatrix (Demo)

| Bedingung | Zielteam |
|---|---|
| Kontoanmeldung oder MFA-Regel betrifft viele | Identity / Security |
| E-Mail-Zustellung / Exchange-Konfiguration | Messaging / Exchange |
| Teams-/OneDrive-Dienststörung | Microsoft-365-Administration / Provider |
| Verdacht auf Datenschutzvorfall | Security / Datenschutzbeauftragte |
| Einzelner Windows-/Mac-Client betroffen | Endpoint-/Desktop-Support |

## Nach dem Incident

Root-Cause-Zusammenfassung, Zeitachse, betroffene Systeme, Maßnahmen, endgültigen Test und Verbesserungsmaßnahme dokumentieren. Für echte Produktivvorfälle zusätzlich interne Kommunikation und SLA einhalten.

## Verwandte Artikel

- [Ticketprozess](010-ticketprozess.md)
- [Teams-Probleme](090-teams.md)
- [Anmeldediagnose](050-anmeldung-mfa.md)
