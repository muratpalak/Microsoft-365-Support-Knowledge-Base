---
id: KB-040
title: Lizenzen und Administratorrollen verwalten
category: Benutzer & Zugriff
level: L1–L2
updated: '2026-10-20'
description: Lizenzzuweisung, Funktionsprüfung und Least-Privilege-Prinzip.
tags:
- Lizenz
- Rollen
- Least Privilege
---

# Lizenzen und Administratorrollen verwalten

**Ziel:** Mitarbeitenden exakt die benötigten Dienste und so wenig Administrationsrechte wie möglich zuweisen.

## Lizenzprüfung

1. Auftrag und erforderliche Anwendungen (z. B. Exchange Online, Teams, OneDrive) prüfen.
2. `https://admin.microsoft.com` → **Benutzer → Aktive Benutzer** → Person auswählen.
3. **Lizenzen und Apps** öffnen, Nutzungsstandort und bestehende Zuweisung prüfen.
4. Gegebenenfalls genehmigtes Produkt wählen und **Änderungen speichern**.
5. Bei **gruppenbasierter Lizenzierung** zunächst die zuständige Gruppe und deren Regeln prüfen; doppelte/konfliktierende Zuweisungen vermeiden.
6. Provisionierung abwarten und konkrete Funktion validieren (z. B. Postfachzugriff).

## Admin-Rollen

| Tätigkeit | Typischer Berechtigungsansatz |
|---|---|
| Benutzeranlage | User Administrator |
| Lizenzzuweisung | License Administrator |
| Kennwort-Reset | Password Administrator (abhängig vom Zielkonto) |
| Exchange-Konfiguration | Exchange Administrator |
| MFA-Richtlinien | Authentication Policy Administrator |

**Merke:** Die tatsächliche Rolle hängt von Zielkonto, Tenant-Einstellung und Produkt ab. **Global Administrator** ist kein normaler Helpdesk-Standard.

## Fehleranalyse

- Fehlender Dienst: Ist die Produktlizenz zugewiesen und der betroffene **Serviceplan** aktiviert?
- Lizenzen nicht verfügbar: Gibt es freie Plätze und eine interne Bestellfreigabe?
- Zuweisung lässt sich nicht ändern: Prüfen, ob die Lizenz **über eine Gruppe** zugewiesen wurde.
- Fehlende Oberfläche: Stimmen Admin-Rolle und Mandant?

## Validierung

Der Nutzer kann die benötigte Funktion in einem frischen Sitzungstest öffnen. Im Ticket: ursprüngliche Lizenz, neue Lizenz, Freigabe, Zeitpunkt und Testresultat protokollieren – keine Lizenzänderung ohne Genehmigung.

## Quellen

- [Microsoft: Assign or unassign licenses](https://learn.microsoft.com/en-us/entra/fundamentals/license-users-groups)
- [Microsoft: Gruppenbasierte Lizenzierung](https://learn.microsoft.com/en-us/entra/identity/users/licensing-group-advanced)
- [Microsoft: Administratorrollen](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide)
