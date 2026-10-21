# Lab 03 — Intune compliance decision tree

**Simulation only · No device enrollment, policy creation, remote wipe or tenant access**

**Symptom (fictional):** Company-managed `WIN11-DEMO-02` is reported noncompliant and the user's access to a service is restricted.

## Questions before action

- Is the device actually enrolled and visible to the **authorised** endpoint team? (In this paper lab, no.)
- What is the policy name, last check-in and noncompliance reason? Avoid assuming that one failed signal represents the entire device state.
- Is the issue OS version, encryption, security protection, lock-screen configuration or stale sync? Policy and licensing differ by tenant.
- Is there a Conditional Access result linking device compliance to service denial? Requires appropriate permissions and logs.

## Example decision path

| Hypothetical observation | L1 response | Owner / approval |
| --- | --- | --- |
| No recent check-in | Confirm device connectivity, sign-in and approved sync procedure | Endpoint support |
| Encryption required | Verify status without asking for recovery key in a ticket | Device/security owner |
| OS update required | Plan approved update in maintenance window | Endpoint support |
| Policy unclear | Record screenshot with sensitive details redacted | Intune admin |
| Wipe/reset suggested | **Do not act** | Authorised admin, separate explicit approval and backups |

## What this lab proves

Ability to describe safe investigation and escalation boundaries. It **does not** demonstrate Intune admin-console proficiency, device registration, MDM licence entitlement or a successful production remediation.

Reference: [Microsoft Learn — Intune device compliance](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview).
