---
id: KB-120
title: 'E-Mail nicht angekommen: Exchange Online Message Trace'
category: E-Mail & Zusammenarbeit
level: L2
updated: '2026-10-20'
description: Mailfluss zwischen Absender und Empfänger anhand von Message Trace prüfen.
tags:
- Exchange Online
- Message Trace
- Mailflow
---

# E-Mail nicht angekommen: Exchange Online Message Trace

**Fall:** Ein wichtiges E-Mail ist beim internen Empfänger nicht sichtbar.

## Erste Eingrenzung

- Absender-/Empfängeradresse, Datum/Uhrzeit mit Zeitzone, Betrefffragment und mögliche Unzustellbarkeitsmeldung (NDR) erfassen.
- Junk-E-Mail, Quarantäne-/Spam-Prozess, Posteingangsregeln und Suche unter Beachtung interner Berechtigungen prüfen.
- Nicht zur Fehleranalyse pauschal Spam-/Sicherheitsfilter deaktivieren.

## Message Trace (nur mit Berechtigung)

1. Exchange Admin Center unter `https://admin.exchange.microsoft.com` aufrufen.
2. **Mail flow → Message trace** wählen.
3. Zeitraum und betreffende Absender-/Empfängeradressen eingrenzen, Suche starten.
4. Ergebnisse interpretieren: **Received**, **Delivered**, **Failed** oder **Deferred** – die konkrete Oberfläche zeigt weitere Details.
5. Für den Fall relevante **Nachrichten-ID**, Zeitstempel und Status im Ticket dokumentieren, ohne Nachrichteninhalte oder private Daten unnötig zu exportieren.
6. Bei Policy-/Mailflow-Hinweisen an Exchange-/Security-Owner eskalieren.

## Entscheidungstabelle

| Trace-Ergebnis | Nächste Maßnahme |
|---|---|
| Delivered | Postfachregeln, Spamordner, Ansicht und Endgerät prüfen |
| Failed/NDR | Fehlercode und Empfänger-/Domänenzustand prüfen |
| Deferred | Verzögerung dokumentieren und Verlauf verfolgen |
| Kein Treffer | Suchparameter, Tenant, Zeitfenster und beteiligte Systeme prüfen |

## Abnahme

Versand und Empfang eines **neutralen Test-E-Mails** bestätigen. Ursachenkategorie dokumentieren; NDR und Zeitstempel referenzieren.

## Quelle

- [Microsoft: Message trace im Exchange Admin Center](https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac)
