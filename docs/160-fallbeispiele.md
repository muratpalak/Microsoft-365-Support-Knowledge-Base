---
id: KB-160
title: 'Praxisbeispiele: vier fiktive Support-Tickets'
category: Service Desk
level: L1–L2
updated: '2026-10-20'
description: Realistische, anonymisierte Demo-Fälle mit Diagnose, Maßnahme und Abschluss.
tags:
- Fallbeispiel
- Ticket
- Portfolio
---

# Praxisbeispiele: vier fiktive Support-Tickets

> **Hinweis:** Alle Vorgänge, Personen und Ergebnisse sind **frei erfundene Demonstrationsfälle**. Die Beispiele dienen ausschließlich der Illustration von Arbeitsmethoden und dürfen nicht als reale Berufserfahrung ausgegeben werden.

## DEMO-001 · Onboarding / Neuer Mitarbeiter

**Kategorie:** Service Request · **Priorität:** P3 · **Zustand:** Gelöst (simuliert)

- **Anforderung:** Neue Person benötigt Microsoft-365-Konto, Teams und Outlook ab Eintrittstag.
- **Analyse:** HR-Freigabe, Gerät, Lizenz und Gruppen-Owner dokumentiert.
- **Maßnahme:** Benutzerkonto per genehmigtem Prozess erstellt, passende Lizenz zugeordnet, Gerät vorbereitet, MFA durch Nutzer registriert.
- **Test:** Benutzeranmeldung, Test-Mail, Teams-Chat und OneDrive-Testdatei erfolgreich (simuliert).
- **Abschluss:** Übergabeprotokoll und Inventarnummer im Ticket hinterlegt.

## DEMO-002 · Teams-Login am Desktop

**Kategorie:** Incident · **Priorität:** P3 · **Zustand:** Gelöst (simuliert)

- **Symptom:** Teams-Webanmeldung klappt, Desktop-Client bleibt beim Laden hängen.
- **Analyse:** Kein Service-Health-Incident, Konto und Lizenz unauffällig; Problem nur auf einem Gerät.
- **Maßnahme:** App-Update und Neustart; erst danach gezielter Client-Reset nach Version/Freigabe.
- **Test:** Anmeldung und Testmeeting funktionieren wieder (simuliert).
- **Lerneffekt:** Cache nicht pauschal löschen; erst Ursache eingrenzen.

## DEMO-003 · Shared Mailbox: Versand verweigert

**Kategorie:** Incident · **Priorität:** P3 · **Zustand:** Gelöst (simuliert)

- **Symptom:** Gemeinsames Postfach lässt sich lesen, jedoch kann nicht „Senden als“ gewählt werden.
- **Analyse:** Full Access vorhanden, Send-As-Recht fehlt.
- **Maßnahme:** Owner-Freigabe geprüft, zuständiger Administrator vergibt explizite Send-As-Berechtigung.
- **Test:** Neutrales Test-E-Mail mit korrektem Absender (simuliert).
- **Abschluss:** Freigabe und Rechteänderung im Ticket referenziert.

## DEMO-004 · OneDrive Mac: Sync-Stopp

**Kategorie:** Incident · **Priorität:** P3 · **Zustand:** Gelöst (simuliert)

- **Symptom:** Dateien lokal nicht aktuell; im Browser aber vorhanden.
- **Analyse:** Netzwerk stabil, Account korrekt, Fehler auf lokalem Client eingegrenzt.
- **Maßnahme:** Ungesynchronisierte lokale Dateien gesichert, nach Freigabe Konto kontrolliert neu verknüpft.
- **Test:** Testdatei auf Mac und in OneDrive-Webansicht synchron (simuliert).
- **Abschluss:** Ursache als Client-Synchronisierung kategorisiert.

## Weiterverwendung

Die gleichen Beispiele liegen unter `examples/demo-tickets.csv` strukturiert vor. Im Lebenslauf dürfen sie nur als **Portfolio-/Demoprojekt** geführt werden, nicht als abgeschlossene echte Kundentickets.
