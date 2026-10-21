# Microsoft 365 · Entra ID · Intune — simulated learning lab

**Status: scenario-based paper lab. No Microsoft 365 tenant, Entra role, Intune device enrollment or Graph API connection is provided or claimed.**

This learning module is designed for safe preparation for 1st/2nd-level IT Support interviews in Türkiye, Germany and Switzerland. It uses fictional identities from the `example.com` domain and does not request secrets or real employee records.

## Exercise sequence

1. [User onboarding and account readiness](01-entra-onboarding.md) — licensing, roles and joiner checks.
2. [MFA recovery and identity verification](02-mfa-recovery.md) — security-first escalation.
3. [Intune compliance and device readiness](03-intune-compliance.md) — illustrative policy states; no actual device management.
4. [Least-privilege role review](04-role-review.md) — approvals and audit evidence.
5. [Fictional lab fixture](fixtures/users.json) — safe synthetic records, no secrets.

## How to use / study mode

For each exercise, read the **symptom**, decide **what you may check as first-line support**, list **approvals/privileges needed**, then compare to the **expected escalation**. Keep the following distinctions explicit:

- **Microsoft 365 Admin Center experience**: a professional-history responsibility, but it does not prove Entra ID or Intune administration.
- **This repository**: offline documentation and simulated planning/checklists.
- **Actual hands-on practice**: requires a tenant, assigned roles, licensing, test devices and explicit authorisation, and is **not demonstrated here**.

## Datenschutz / Gizlilik

Never paste real tenant identifiers, device serials, recovery codes, passwords or authentication tokens into issues or public documents. All sample users are fictitious.
