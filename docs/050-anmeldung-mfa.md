---
id: KB-050
title: Anmeldeprobleme & Multi-Faktor-Authentifizierung
category: Identität & Sicherheit
level: L1–L2
updated: '2026-10-20'
description: Systematische Anmeldediagnose und kontrollierte Wiederregistrierung von
  MFA.
tags:
- MFA
- Entra
- Sign-In
---

# Anmeldeprobleme & Multi-Faktor-Authentifizierung

**Fall:** Ein Mitarbeitender kann Microsoft 365 nicht nutzen oder hat sein MFA-Gerät gewechselt.

## Zuerst eingrenzen

1. Exakten Fehlertext, Zeitpunkt inklusive Zeitzone, Benutzername, Browser/App und betroffenes Gerät erfragen.
2. Kontrollieren, ob der Nutzer auf die **richtige Organisations-Domäne** und den vorgesehenen Tenant zugreift.
3. Ohne Kennwörter oder Codes zu erfragen, Browser-/Privatfenster und einen anderen Client vergleichen.
4. Prüfen, ob Benutzerkonto blockiert, Lizenz oder Dienst gestört ist.
5. Berechtigte Administratoren prüfen die **Anmeldeprotokolle** in Microsoft Entra auf Fehlergrund, Conditional Access und Correlation ID. Verfügbare Daten richten sich nach Lizenz und Rolle.

## MFA nach verlorenem Gerät wiederherstellen

**Nur nach Identitätsprüfung und Sicherheitsfreigabe.** Ein MFA-Reset ist ein sensibles Kontoereignis.

1. Benutzer über festgelegten alternativen Verifikationsweg authentifizieren (nicht bloß über die meldende E-Mail).
2. Prüfen, ob eine weitere sichere Anmeldemethode bereits registriert ist.
3. Autorisierte Administratoren können in `https://entra.microsoft.com` unter **Benutzer → betroffene Person → Authentifizierungsmethoden** eine **erneute MFA-Registrierung verlangen**; Berechtigungsanforderungen beachten.
4. Falls die Unternehmensrichtlinie es vorsieht, alternativ einen **Temporary Access Pass (TAP)** nach definiertem Verfahren nutzen.
5. Nutzer richtet Methoden selbst ein und bestätigt die neue Anmeldung.
6. Sicherheitsrelevante Änderungen nachvollziehbar dokumentieren; Verdacht auf Fremdzugriff gesondert melden.

## Entscheidungshilfe

| Beobachtung | Nächster Schritt |
|---|---|
| Nur Desktop-App scheitert | Weblogin testen; Client-/Tokenproblem eingrenzen |
| Viele Nutzer gleichzeitig | Service Health und Security Incident prüfen |
| Neues Smartphone, alter Faktor verloren | Identitätsprüfung → geregelter Recovery-Prozess |
| MFA-Anfrage nicht selbst ausgelöst | **Nicht bestätigen**; Security-Team sofort informieren |

## Nicht tun

**Keine MFA-Codes abfragen, keine Schutzrichtlinien spontan deaktivieren, keine Session- oder Login-Sperren ohne Freigabe umgehen.**

## Quellen

- [Microsoft Entra: Sign-in errors](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-troubleshoot-sign-in-errors)
- [Microsoft Entra: Re-register MFA](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-registration-mfa-sspr-combined-troubleshoot)
- [Microsoft Entra: Temporary Access Pass](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-temporary-access-pass)
