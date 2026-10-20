---
id: KB-010
title: 'Service Desk: Ticketannahme bis Abschluss'
category: Service Desk
level: L1
updated: '2026-10-20'
description: Standardisiertes Incident- und Service-Request-Verfahren inklusive Priorisierung.
tags:
- Tickets
- SLA
- Incident
---

# Service Desk: Ticketannahme bis Abschluss

**Ziel:** Wiederholbare und überprüfbare Bearbeitung von Incidents und Service Requests.

## 1. Ticket klassifizieren

- **Incident:** Bereits vorhandene Funktion gestört (z. B. Outlook-Anmeldung scheitert).
- **Service Request:** Geplante Leistung (z. B. neuer Mitarbeitender, Rechteantrag).
- **Security Incident:** Verdächtige Anmeldung, Kompromittierung oder Datenverlust – sofort nach Security-Prozess eskalieren.

Erfasse mindestens: Ticket-ID, Zeitpunkt und Zeitzone, meldende Person, Service, Gerät/OS, exakte Fehlermeldung, Umfang, Auswirkung, bereits getestete Schritte und gewünschten Zustand. **Keine vertraulichen Zugangsdaten.**

## 2. Beispiel-Priorisierung

| Priorität | Beispiel | Erstreaktion (Demo-Ziel) |
|---|---|---|
| P1 Kritisch | Unternehmensweite Anmeldung ausgefallen oder aktiver Sicherheitsvorfall | 15 Minuten |
| P2 Hoch | Team kann nicht arbeiten, kein Workaround | 1 Stunde |
| P3 Normal | Einzelperson, eingeschränkter Workaround | 4 Stunden |
| P4 Niedrig | Anleitung, Komfortproblem, Standardanfrage | 1 Arbeitstag |

*Diese Zeiten sind beispielhafte interne Ziele und keine Microsoft-SLA-Zusagen.* Die endgültige Priorität ergibt sich aus **Auswirkung × Dringlichkeit**.

## 3. Eingrenzung

1. Benutzerkonto, Zeitpunkt, Plattform und Betroffenenzahl prüfen.
2. Reproduzierbarkeit abfragen: Web und Desktop getrennt testen.
3. Microsoft 365 **Health → Service health** auf bekannte Störungen prüfen (mit erforderlichen Rechten).
4. Nur risikoarme, reversible Checks vorziehen; keine pauschalen Rechteerhöhungen.
5. Maßnahme mit erwartetem Effekt und potenzieller Nebenwirkung ankündigen.

## 4. Lösung und Abschluss

- Ursachenkategorie festhalten (Konto, Lizenz, Client, Netzwerk, Service, Berechtigung).
- Funktion mit Anwender anhand eines konkreten Tests prüfen.
- Ergebnis, Uhrzeit, Wissensartikel, Rest-Risiken, Workaround und ggf. Eskalation notieren.
- Ticket nach Rückmeldung oder dokumentierter Abschlussregel schließen.

## Muster-Kommunikation

> Guten Tag, wir haben die Meldung unter **INC-2026-0042** aufgenommen. Wir prüfen aktuell, ob die Einschränkung lokal oder dienstseitig verursacht wird. Rückmeldung folgt entsprechend der vereinbarten Priorität.

## Verknüpfungen

- [Service Health und Eskalation](140-service-health.md)
- [Ticketbeispiele](160-fallbeispiele.md)
