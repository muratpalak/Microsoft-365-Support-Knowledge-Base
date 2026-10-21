# Verification matrix — m365.desk

| ID | Scenario | What can be checked here | Evidence / limitation |
| --- | --- | --- | --- |
| M365-01 | New employee joins | Article/checklist existence and links | `docs/020-onboarding.md`, `labs/01-entra-onboarding.md` |
| M365-02 | Lost MFA phone | Identity check, escalation and role boundaries are documented | `docs/050-anmeldung-mfa.md`, `labs/02-mfa-recovery.md`; **no actual reset performed** |
| M365-03 | Uncompliant managed laptop | Intune policy-decision simulation, escalation | `labs/03-intune-compliance.md`; **no tenant/device enrolled** |
| M365-04 | Role assignment request | Least privilege, approval and evidence collection | `labs/04-role-review.md`; **no live role assigned** |
| M365-05 | Markdown article rendering | 17 numbered KB articles become HTML | `python scripts/build_site.py` and Pages Action |
| M365-06 | Training lab integrity | All referenced lab files and fictional inputs exist | `python -m unittest discover -s tests -v` |
| M365-07 | Actual Microsoft admin actions | Outside this repository | **Not tested / no environment** |

The test suite checks documentation structure only; it is not evidence of permission to administer or access a tenant.
