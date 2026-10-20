---
id: KB-130
title: 'Offboarding: Benutzerzugriff sicher beenden'
category: Benutzer & Zugriff
level: L1–L2
updated: '2026-10-20'
description: Sicherheitsbewusster Leaver-Prozess inklusive Zugriffssperre und Datenaufbewahrung.
tags:
- Offboarding
- Security
- HR
---

# Offboarding: Benutzerzugriff sicher beenden

**Fall:** Ein Arbeitsverhältnis endet. Die IT muss Zugriffe termingerecht beenden und aufbewahrungspflichtige Daten erhalten.

## Freigaben

- Schriftlicher HR-/Management-Auftrag mit **wirksamem Zeitpunkt**.
- Liste der Geräte, Postfächer, Team-/Gruppenmitgliedschaften und Datenverantwortlichen.
- Rücksprache mit Datenschutz/Legal zu Retention, Litigation Hold und berechtigter Übergabe.

## Reihenfolge (gemäß internem Leaver-Prozess)

1. Zum genehmigten Zeitpunkt Konto-**Anmeldung blockieren** und vorhandene **Sitzungen widerrufen/abmelden** gemäß Security-Policy; Anmelde-Token können zeitverzögert unwirksam werden.
2. Gerätezugang und verwaltete Endgeräte mit zuständigem Endpoint-Team sichern.
3. Zuständige Owner klären, wer welche geschäftlichen Daten weiterhin benötigt.
4. Postfach-, OneDrive- und SharePoint-Daten **vor** Löschung oder Lizenzentzug nach Aufbewahrungsregeln behandeln.
5. Bei Bedarf Postfach in **Shared Mailbox** umwandeln und anschließend Lizenzanforderungen separat prüfen; Konto bei Shared-Mails nicht vorschnell löschen.
6. Team-/Gruppen-/App-Berechtigungen kontrolliert entziehen.
7. Lizenzen erst nach abgeschlossener Daten- und Compliance-Prüfung entfernen.
8. Finale Löschung nur nach verbindlicher Freigabe und Ablauf von Aufbewahrungsfristen.

## Kritische Fehler

- **Sofortiges Löschen** kann E-Mail-Weiterleitungen und umgewandelte gemeinsame Postfächer beschädigen.
- Lizenzentzug kann Einfluss auf Datenverfügbarkeit und Aufbewahrung haben.
- Bei Hybrid-/synchronisierten Identitäten ist der führende Verzeichnisdienst zu beachten; diese KB beschreibt keine Verwaltung eines lokalen Active Directory.

## Abnahmekriterien

- Zugang gesperrt, Sitzungsstatus und Zeitpunkt dokumentiert.
- Daten-Owner, Geräte, Berechtigungen und Lizenzstatus geprüft.
- Security-/HR-Freigabe archiviert, keine Passwörter in Ticketnotizen.

## Quelle

- [Microsoft: Remove a former employee – Übersicht](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee?view=o365-worldwide)
- [Microsoft: Former employee – account deletion](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee-step-7)
