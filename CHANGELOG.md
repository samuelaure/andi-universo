# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-03-01

### Added
- **Astrología Hub**: New Linktree-style entry point for Astrology sessions.
- **Biografía Hub**: New central hub summarizing Andi Universo's pillars.
- **Familia Hub**: New entry point consolidating family-oriented services.
- **Diseño Humano Hub**: New dedicated Linktree-style page for Human Design.
- **Diseño Humano Sesión**: Comprehensive sales and information page for Human Design sessions with FAQ and pricing.
- **Global Components**: Implemented a global `Footer`, a standardized `HubLayout` for Linktree-style pages, `ServiceCards`, and an `AboutAndiUniverso` component.

### Changed
- **Styles**: Refactored `index.css` and `variables.css` for better system-wide layout consistency, responsive spacings, and color tokens.
- **Routing**: Updated `App.tsx` routes to integrate the new Hubs and link paths dynamically.
- **Aesthetic enhancements**: Improved visual hierarchy across sections (e.g., `Hero`, `AnimatedSection`, `ValueProps`, `Pricing`).
