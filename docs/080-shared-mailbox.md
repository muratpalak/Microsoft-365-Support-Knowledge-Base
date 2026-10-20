---
id: KB-080
title: 'Freigegebenes Postfach: Zugriff und Senden als'
category: E-Mail & Zusammenarbeit
level: L1–L2
updated: '2026-10-20'
description: 'Shared Mailbox prüfen: Mitgliedschaft, Full Access und Send As.'
tags:
- Shared Mailbox
- Exchange
- Rechte
---

# Freigegebenes Postfach: Zugriff und Senden als

**Fall:** Eine Mitarbeiterin soll im Namen von `support@beispielwerk.example` arbeiten.

## Voraussetzungen

- Genehmigte Anfrage des Postfach-Owners.
- Passende Exchange-Administratorberechtigung bei Änderungen.
- Die zugreifende Person hat eine passende Exchange-Online-Lizenz; das gemeinsame Postfach ist **nicht** für direktes Einloggen gedacht.

## Arbeitsschritte

1. Microsoft 365 Admin Center → **Teams und Gruppen → Freigegebene Postfächer**.
2. Richtige Mailbox auswählen; Adresse und Eigentümerschaft prüfen.
3. **Mitglieder** für Zugriff und **Postfachberechtigungen** für benötigte Aktionen kontrollieren.
4. Unterschied beachten: **Vollzugriff (Full Access)** erlaubt das Öffnen/Bearbeiten, aber **nicht automatisch** das Senden als Postfach.
5. Für den Versand explizit genehmigtes **Senden als (Send As)** oder **Senden im Auftrag von (Send on Behalf)** zuweisen.
6. Replikationsverzögerungen berücksichtigen; anschließend Outlook im Web bzw. entsprechenden Client testen.

## Troubleshooting

| Symptom | Prüfschritt |
|---|---|
| Mailbox fehlt | Ist die Mitgliedschaft korrekt und Änderung propagiert? |
| Lesen geht, Senden nicht | Send-As- oder Send-on-Behalf-Recht gesondert prüfen |
| Falsche Absenderanzeige | Tatsächliche Sendeberechtigung und gewählte Absenderadresse prüfen |

## Sicherheitsregeln

Mailbox-Konto nicht an Mitarbeitende zum Direktlogin verteilen; Anmeldung für zugehöriges Shared-Mailbox-Konto blockiert halten. Lizenzpflicht für Zusatzfunktionen, Aufbewahrung und Postfachgröße gesondert bewerten.

## Quelle

- [Microsoft: Shared mailbox settings](https://learn.microsoft.com/en-us/microsoft-365/admin/email/configure-a-shared-mailbox?view=o365-worldwide)
- [Microsoft: About shared mailboxes](https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes)
