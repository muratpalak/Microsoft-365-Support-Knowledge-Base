# m365.desk — support workflow scenarios

**Scope:** fictional Microsoft 365 service-desk training cases. This repository is a **knowledge base**, not an integrated Microsoft 365 tenant administration tool. These examples do not demonstrate direct Active Directory/Entra administration or production permissions.

## Scenario 1 — A new employee starts on Monday

**Problem:** IT receives an approved onboarding request with a start date, manager and permitted services.

**Documented response:**
1. Validate the request, approvals, device category and licensing requirements.
2. Follow the [`Onboarding` article](020-onboarding.md) for an auditable timeline and checklist.
3. Use the [`User creation`](030-benutzeranlage.md) and [`Licenses & roles`](040-lizenzen-rollen.md) guides to identify **authorized administrator** actions, not to execute changes inside this demo.
4. Verify first-login, MFA enrollment, test message, Teams and OneDrive access when the relevant authorized environment is available.
5. Record evidence and close the support ticket only after end-user acceptance.

**What is verifiable here:** navigation, checklist and workflow documentation; not a live tenant deployment.

## Scenario 2 — Lost MFA device

**Problem:** An employee changed phones and can no longer complete the second factor.

**Documented response:**
1. Record the exact sign-in symptom, affected application and time; never request MFA codes or passwords.
2. Independently verify identity according to organizational policy and obtain required authorization.
3. Consult [`Sign-in and MFA troubleshooting`](050-anmeldung-mfa.md) to check alternative methods, sign-in logs and controlled re-registration or Temporary Access Pass, if permitted.
4. Escalate suspected account takeover or unusual unsolicited prompts to the security team immediately.
5. Verify successful authorized sign-in and document the sensitive change without exposing credentials.

**What is verifiable here:** published guidance and source references. This project does not perform a reset.

**Live documentation:** https://muratpalak.github.io/Microsoft-365-Support-Knowledge-Base/
**Build:** `python3 scripts/build_site.py` after installing `requirements.txt`. The generator only builds numbered `docs/NNN-*.md` knowledge articles; this portfolio document remains separate from the generated knowledge base.

## Kurzfassung / Türkçe özet

**DE:** Zwei fiktive Microsoft-365-Supportfälle behandeln den genehmigten Onboarding-Prozess und die sichere MFA-Wiederherstellung. Diese Knowledge Base führt keine administrativen Tenant-Änderungen aus.

**TR:** Yeni çalışan hazırlığı ve kayıp MFA cihazı için iki örnek destek süreci anlatılır. Dokümanlar gerçek Microsoft 365 ortamında hesap işlemi yapmaz.

**Security:** Never request or store passwords, MFA codes, recovery codes or live customer data in this demo.
