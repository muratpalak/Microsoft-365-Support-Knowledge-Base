---
id: KB-030
title: Benutzerkonto im Microsoft 365 Admin Center anlegen
category: Benutzer & Zugriff
level: L1
updated: '2026-10-20'
description: Benutzer anlegen, Anmeldedaten sicher übergeben und Ergebnis prüfen.
tags:
- Benutzer
- Admin Center
- UPN
---

# Benutzerkonto im Microsoft 365 Admin Center anlegen

**Fall:** Für einen genehmigten Eintritt wird ein Cloud-Benutzer benötigt.

## Voraussetzungen und Freigaben

- HR-Auftrag, Namensschema, UPN-Domäne und Lizenzbestellung freigegeben.
- Berechtigung als **Benutzeradministrator** bzw. passende Admin-Rolle; Lizenzadministration je nach Aktion erforderlich.
- Klären, ob Konten in diesem Tenant **cloud-only** oder über ein anderes Identitätssystem synchronisiert werden. Bei synchronisierten Konten die zuständige Stelle einbeziehen; hier wird nur das Cloud-Verfahren beschrieben.

## Arbeitsschritte

1. Mit dem **separaten administrativen Konto** `https://admin.microsoft.com` öffnen.
2. **Benutzer → Aktive Benutzer → Benutzer hinzufügen** auswählen (Ansicht kann abweichen).
3. Vor- und Nachname, Anzeigename, Benutzername und korrekte Domäne eintragen.
4. Initiales Kennwort generieren lassen und Kennwortwechsel bei erster Anmeldung gemäß Unternehmensrichtlinie konfigurieren.
5. Nutzungsstandort auswählen; falls vorgesehen passende Microsoft-365-Lizenz wählen.
6. Administratorrolle **nur bei dokumentierter Freigabe** zuweisen; normale Nutzer erhalten keine Admin-Rolle.
7. Eingaben prüfen und Konto erstellen.
8. Einmalige Anmeldedaten ausschließlich über genehmigten sicheren Kanal bereitstellen; **nicht im Ticket oder in unverschlüsselten E-Mails**.

## Prüfen

- Benutzer erscheint unter **Aktive Benutzer** mit korrektem UPN und Domäne.
- Nutzungsstandort, Lizenz, Konto-Status und nötige Dienstpläne stimmen.
- Nutzer meldet erfolgreiche Anmeldung (ohne Geheimnisse zu teilen).

## Häufige Fehler

| Symptom | Mögliche Ursache | Prüfschritt |
|---|---|---|
| Benutzername belegt | UPN existiert bereits | Doppelte Anlage stoppen und Bestand prüfen |
| Keine Lizenz wählbar | Bestand erschöpft oder falsche Rolle | Lizenzadministrator einbeziehen |
| Anmeldung trotz Konto unmöglich | MFA, Richtlinie, falscher Tenant, nicht fertig bereitgestellt | Sign-in und Service Health prüfen |

## Quelle

- [Microsoft Learn: Add users and assign licenses](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide)
