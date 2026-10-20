---
id: KB-020
title: 'Onboarding: Arbeitsplatz eines neuen Mitarbeitenden'
category: Benutzer & Zugriff
level: L1
updated: '2026-10-20'
description: Durchgängiger Joiner-Prozess von der HR-Freigabe bis zur dokumentierten
  Übergabe.
tags:
- Onboarding
- HR
- Checkliste
---

# Onboarding: Arbeitsplatz eines neuen Mitarbeitenden

**Ausgangslage:** Eine neue Mitarbeiterin beginnt am Montag. Ziel ist ein funktionsfähiger, sicher übergebener Arbeitsplatz am ersten Tag.

## Voraussetzungen

- Genehmigter HR-/Fachbereichsauftrag mit Eintrittsdatum, Arbeitsort, Vorgesetztem und benötigten Diensten.
- Freigegebene Lizenz- und Geräteklasse; geklärte Kostenstelle.
- Benötigte Rollen und Team-Zugehörigkeiten schriftlich durch den zuständigen Owner bestätigt.
- Berechtigtes IT-Konto für die Durchführung (kein Global Admin als Standard).

## Ablauf – T−5 bis Tag 1

| Zeitpunkt | Aktivität | Nachweis |
|---|---|---|
| T−5 | Ticket prüfen, Genehmigung und Gerät reservieren | Auftrag, Asset-ID |
| T−3 | Microsoft-365-Benutzer nach Namenskonvention anlegen | UPN, Status |
| T−3 | Richtige Lizenz und nur genehmigte Gruppen/Ressourcen zuweisen | Lizenzprüfung |
| T−2 | Gerät bereitstellen, Sicherheitsupdates, Schutzsoftware und erforderliche Apps installieren | Geräteliste |
| T−1 | Anmeldung und Outlook/Teams/OneDrive gemäß Firmenrichtlinie vorbereiten | Testcheckliste |
| Tag 1 | Erstlogin, MFA-Einrichtung und sicherer Umgang mit Daten erklären | Übergabebestätigung |

## Konkrete Durchführung

1. [Benutzerkonto anlegen](030-benutzeranlage.md); Standort und Anzeigenamen kontrollieren.
2. [Lizenzierung prüfen](040-lizenzen-rollen.md): Exchange-, Teams- und OneDrive-Berechtigungen hängen von zugewiesenen Diensten und Tenant-Konfiguration ab.
3. Geräteaufbau dokumentieren: Hostname, Inventarnummer, Betriebssystem, Verschlüsselung und Update-Stand gemäß interner Vorgaben.
4. Genehmigte Standardprogramme installieren; keine ungeprüften privaten Anwendungen.
5. Für den ersten Login eine **sichere Zustellmethode** für Startinformationen verwenden, niemals ein Passwort im Ticket.
6. Nutzer begleitet MFA mit eigenen Faktoren einrichten lassen; **keine MFA-Codes erfragen**.
7. Funktionstest: Microsoft 365 Anmeldung, E-Mail an Testpostfach, Teams-Chat, Testdatei in OneDrive.

## Abnahmekriterien

- [ ] Mitarbeitende kann sich mit eigenem Konto anmelden.
- [ ] Outlook und Teams funktionieren in den vorgesehenen Clients.
- [ ] OneDrive synchronisiert eine Testdatei; keine echten Kundendaten verwenden.
- [ ] MFA registriert; Backup-Methode nach Unternehmensrichtlinie eingerichtet.
- [ ] Gerät, Zubehör und Startunterweisung übergeben.
- [ ] Ticket mit Testprotokoll und Verantwortlichkeiten abgeschlossen.

## Fehler-/Eskalationspunkte

Lizenz nicht verfügbar → Einkauf/Lizenzadministrator. Fehlende Rollenfreigabe → Fachverantwortliche. Unerwarteter Authentifizierungsfehler → [Anmeldung & MFA](050-anmeldung-mfa.md). Geräte-Compliance nicht erfüllt → zuständiger Endpoint-/Security-Support.

## Quellen

- [Microsoft: Benutzer hinzufügen und Lizenzen zuweisen](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide)
- [Microsoft: Administratorrollen](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide)
