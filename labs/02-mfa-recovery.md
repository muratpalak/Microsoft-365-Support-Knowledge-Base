# Lab 02 — MFA device loss: secure recovery triage

**Simulation only · No identity changes or credentials processed**

**Ticket (fictional):** `lina.weber@example.com` has replaced a phone and can no longer complete Microsoft 365 sign-in.

## Security-first approach

1. Obtain the specific sign-in error, time/timezone, target application and device details. Do not request a password, OTP code or screen capture of a recovery code.
2. Verify identity using the organisation's **approved independent** process. A request from the employee's email address is not by itself sufficient.
3. Ask whether another previously registered authorised method is available; do not advise bypassing security controls.
4. For an authorised admin only: review sign-in logs and Conditional Access evidence in the appropriate console, subject to permissions/licence.
5. If approved, follow the organisation's reset/re-registration or Temporary Access Pass procedure (where enabled) and audit the action. L1 without privileges must escalate.
6. Have the user register approved factors and complete a safe sign-in test; record confirmation without confidential data.

## Red flags

Unexpected push notifications, multiple failed attempts or suspicious location → security incident workflow. Never dismiss suspicious requests as routine reset activity.

## Expected L1 output

An escalation summary including request scope, verified identity status, exact error/correlation ID where available, and the team authorised to act — **no secret values**.

See: [Microsoft Learn — authentication methods](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods).
