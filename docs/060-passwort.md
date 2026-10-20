---
id: KB-060
title: Kennwort zurücksetzen und Identität prüfen
category: Identität & Sicherheit
level: L1
updated: '2026-10-20'
description: Sicherer Passwort-Reset ohne Geheimnisse in Support-Tickets.
tags:
- Passwort
- SSPR
- Sicherheit
---

# Kennwort zurücksetzen und Identität prüfen

**Fall:** Ein Benutzer hat sein Kennwort vergessen und kann sich nicht anmelden.

## Vorbereitung

- Identität über offiziell genehmigten Supportprozess verifizieren.
- Prüfen, ob **Self-Service Password Reset (SSPR)** für den Nutzer verfügbar ist.
- Ticket-/Freigabenummer und passende administrative Rolle nachweisen.
- Bei Verdacht auf kompromittiertes Konto unmittelbar Security-Prozess starten.

## Standardablauf

1. Wenn möglich **SSPR** über die genehmigte Self-Service-Seite verwenden lassen.
2. Falls Administrator-Eingriff nötig und freigegeben: `https://admin.microsoft.com` → **Benutzer → Aktive Benutzer**.
3. Konto auswählen → **Kennwort zurücksetzen**.
4. Neues temporäres Kennwort gemäß Richtlinie erzeugen und vorgeschriebenen Kennwortwechsel vorsehen.
5. Startkennwort **separat und sicher** übermitteln; nie in Ticketnotizen kopieren.
6. Erfolgreiche Anmeldung durch Nutzer bestätigen und Ticket ohne Kennwort abschließen.

## Sonderfälle

- Ein lokales bzw. synchronisiertes Identitätssystem kann den Passwortprozess steuern. Dort gilt der vorgegebene technische und organisatorische Ablauf.
- Konten mit privilegierten Administratorrollen benötigen unter Umständen andere Berechtigungen für den Reset.
- Wiederholte Passwort-Resets ohne Ursachenanalyse vermeiden; eventuell Anmelde- oder MFA-Problem.

## Prüfschritte

- Anmeldung funktioniert im vorgesehenen Browser/Client.
- Erforderliche MFA-Registrierung ist vollständig.
- Keine unberechtigten Sessions oder verdächtige Login-Events.

## Quellen

- [Microsoft: Reset passwords in Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/resend-user-password?view=o365-worldwide)
- [Microsoft: Self-service password reset](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/let-users-reset-passwords)
