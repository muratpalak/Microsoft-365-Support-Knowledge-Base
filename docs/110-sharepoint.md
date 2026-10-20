---
id: KB-110
title: 'SharePoint: Fehlender Zugriff auf Ordner oder Website'
category: E-Mail & Zusammenarbeit
level: L1–L2
updated: '2026-10-20'
description: Berechtigungsprobleme analysieren, ohne ungewollt breit zu teilen.
tags:
- SharePoint
- Berechtigungen
- Dateifreigabe
---

# SharePoint: Fehlender Zugriff auf Ordner oder Website

**Fall:** Ein Teammitglied sieht „Zugriff verweigert“ bei einer SharePoint-Datei.

## Prüfschritte

1. Exakte URL, angemeldetes Konto, Browser und Fehlermeldung erfassen. **Keine vertraulichen Datei-Inhalte** in Tickets kopieren.
2. Vergleich: Ist nur ein Dokument, eine Bibliothek oder die gesamte Website betroffen?
3. Prüfen, ob die betreffende Person der **richtigen Microsoft-365-Gruppe/SharePoint-Gruppe** angehört.
4. Site-Typ feststellen: **teamverbundene Site**, Kommunikationssite oder ggf. Kanal-Site; Berechtigungsvererbung unterscheidet sich.
5. Website-Owner um Bestätigung für benötigte **Lesen/Bearbeiten**-Rechte bitten.
6. Nur nach Freigabe die engste passende Berechtigung zuweisen (häufig **Visitors = Lesen**, **Members = Bearbeiten**, **Owners = volle Steuerung** – je nach Site-Einstellung).
7. Erneut mit der Nutzeridentität testen und eventuell geänderte Share-Links prüfen.

## Fehler vermeiden

- Kein „Jeder mit dem Link“ als schneller Workaround.
- Keine siteweiten Owner-Rechte für einzelne Dateioperationen.
- Keine Externfreigabe ohne Tenant-Richtlinie, Datenschutzprüfung und Zustimmung.
- Gruppenmitgliedschaft in teamverbundenen Websites kann auch andere Microsoft-365-Dienste beeinflussen.

## Validierung

Der Nutzer kann genau die **genehmigten** Ressourcen öffnen, aber keine weitergehenden Inhalte bearbeiten, wenn nur Lesezugriff beantragt wurde.

## Quelle

- [Microsoft: SharePoint modern sharing and permissions](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions)
- [Microsoft: Default SharePoint permissions](https://learn.microsoft.com/en-us/sharepoint/understanding-permission-levels)
