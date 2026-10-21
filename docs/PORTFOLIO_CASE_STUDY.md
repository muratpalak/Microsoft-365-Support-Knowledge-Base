# m365.desk — Microsoft 365 Support Knowledge Base — Portfolio Case Study

**Repository:** https://github.com/muratpalak/Microsoft-365-Support-Knowledge-Base  
**Status:** Local demonstration / portfolio project  
**Technical focus:** Microsoft 365 workflows · German documentation · HTML/JS  
**Automated workflow:** [GitHub Actions](https://github.com/muratpalak/Microsoft-365-Support-Knowledge-Base/actions/workflows/pages.yml)

## Context and problem

This project explores **documentation, onboarding and microsoft 365 troubleshooting guidance** through a reproducible portfolio exercise. Its examples are not represented as an employer deployment or production customer implementation.

## Implemented capabilities

- German support articles for Microsoft 365 service scenarios
- Onboarding checklist and service desk ticket template
- Local full-text filtering and knowledge navigation
- Static site build and GitHub Pages publication

## Reproducible review

Read the repository [README](../README.md) for supported platforms and installation prerequisites. Where the necessary runtime tools are installed, reproduce the checks using:

```bash
python3 scripts/build_site.py  # Documentation build; publication validated by GitHub Pages workflow
```

The associated CI workflow provides evidence of the configured automated checks; it is **not** a guarantee of full feature coverage, security accreditation or production availability.

## Boundaries and honest limitations

Documentation/demo only: no Microsoft tenant connection and no real Microsoft 365 administration actions.

## Relevance to IT roles

User enablement, technical documentation, onboarding and structured Microsoft 365 support.

## Deutsche Kurzfassung

**Projekt:** Deutschsprachige, offline nutzbare Knowledge Base mit Supportleitfäden, Suche, Checklisten und Fallbeispielen.  
**Schwerpunkt:** Documentation, onboarding and Microsoft 365 troubleshooting guidance.  
**Nachweis:** Quellcode, Installationsanleitung, definierte Tests und GitHub-Actions-Protokolle.  
**Einordnung:** Portfolio-/Demonstrationsprojekt; keine Behauptung eines Produktiveinsatzes.
