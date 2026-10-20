---
id: KB-150
title: Datenschutz, Rollen und sichere Support-Praxis
category: Grundlagen
level: L1–L2
updated: '2026-10-20'
description: Support-Standard für minimale Rechte, vertrauliche Daten und Audit-Trails.
tags:
- Datenschutz
- DSGVO
- Least Privilege
---

# Datenschutz, Rollen und sichere Support-Praxis

## Datenschutz im Ticket

Dokumentiere nur notwendige personenbezogene Daten: Kontokennung, Fehlerbild, Zeitstempel, autorisierte Freigabe und reproduzierbare Diagnoseschritte. **Nicht speichern:** Passwörter, MFA-Codes, Recovery Keys, private E-Mail-Inhalte, sensible personenbezogene Daten oder vollständige Sign-in-Logs ohne Rechtsgrundlage.

## Admin-Rollen

- Admin-Konten nur für administrative Tätigkeiten nutzen, nicht für den normalen Arbeitsalltag.
- **Least Privilege** und zeitlich begrenzte Rechte bevorzugen, sofern im Tenant möglich.
- Zugriffsänderungen an Benutzerkonten, SharePoint-Sites und Shared Mailboxes benötigen eine Eigentümer-/Fachfreigabe.
- Sicherheitsaudit und Protokollierung beachten.

## Support-Sicherheitscheck

- [ ] Identität und Genehmigung geprüft
- [ ] Nur notwendige Daten erhoben
- [ ] Risikograd der Änderung bewertet
- [ ] Kein Passwort oder MFA-Code im Ticket
- [ ] Berechtigungen möglichst eng gesetzt
- [ ] Rückweg/Rollback bzw. Eskalation geklärt
- [ ] Änderung und Funktionstest dokumentiert

## DSGVO-Praxis

Bei realen personenbezogenen Daten gelten die Richtlinien des Arbeitgebers und das anwendbare Datenschutzrecht (z. B. DSGVO). Dieses Projekt bietet keine Rechtsberatung. Verdacht auf Datenschutz- oder Sicherheitsvorfall **sofort** an die benannten Verantwortlichen melden.

## Referenzen

- [Microsoft: Admin-Rollen und Sicherheitsgrundsätze](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide)
- [Microsoft: SharePoint sharing and permissions](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions)
