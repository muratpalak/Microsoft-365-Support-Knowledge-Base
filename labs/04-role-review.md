# Lab 04 — Entra/Microsoft 365 least-privilege review

**Simulation only · No admin role assignments**

**Fictional request:** A team asks to grant broad admin access to `samir.koenig@example.com` so they can edit one shared mailbox.

## Review checklist

1. Confirm an authorised business request and who approved it.
2. Identify the **smallest** required task and a scoped permission alternative; do not grant tenant-wide roles merely for convenience.
3. Determine whether the action concerns an Exchange shared mailbox, Entra directory role, or another service; the owner and permission model may differ.
4. Confirm segregation of duties, time limits, existing access and change-ticket documentation according to organisational policy.
5. For privileged operations, use approved processes and authorised personnel. Do not instruct an unprivileged employee to bypass controls.
6. Define completion evidence: ticket reference, approver, scope, role/permission type, expiry/review date, verification and rollback owner. Omit credentials and private IDs.

## Example response

> This request does not justify Global Administrator by default. Please identify the intended shared-mailbox operation and obtain approval from the designated Exchange/identity administrators for the least-privilege option.

**Outcome:** A compliant decision document, **not** a real permission change.

Reference: [Microsoft Learn — least privilege](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices).
