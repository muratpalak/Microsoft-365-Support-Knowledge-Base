# Lab 01 — Joiner onboarding with Microsoft 365 and Entra ID

**Simulation only · L1/L2 planning exercise · No live tenant**

**Ticket (fictional):** HR approves onboarding for `ada.yilmaz@example.com`, start next Monday. The user needs email, Teams, OneDrive and an approved laptop.

## Triage and checks

1. Confirm HR/manager approval, identity, start date, legal name, department and cost center. Do not expose personal details in the public issue tracker.
2. Identify which team owns identity creation, approved licensing and device provisioning. Do not assume global admin rights.
3. In a *hypothetical authorised tenant*, check whether the user has a valid cloud identity and intended username, the correct Microsoft 365 licence, service availability and approved group membership.
4. Prepare an endpoint inventory entry and approved applications; validate OS patching and disk encryption according to local policy.
5. Arrange first sign-in and MFA enrolment through approved user-facing flows. Never capture passwords or OTP codes in a support ticket.
6. Test Outlook, Teams and a safe sample OneDrive file with the user. Record results without storing credentials.

## Decision / escalation

- No HR approval → return for approval, no account action.
- Insufficient licences → contact licensed administrator/procurement.
- Missing permission or conditional-access block → escalate to Entra/identity owner with time, error and correlation ID.
- Endpoint not compliant → refer to authorised endpoint/Intune team; do not bypass policy.

## Evidence template

`Ticket ID: DEMO-JOIN-001` · `Request approved?` · `Account ready?` · `Licence confirmed?` · `Endpoint ready?` · `User test completed?` · `Escalation needed?`

## Expected learning outcome

Explain the difference between preparing/supporting a new starter and exercising privileged tenant permissions. No tenant operation is performed by this lab.

Further reading: [Microsoft Learn — Add users and assign licences](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide).
