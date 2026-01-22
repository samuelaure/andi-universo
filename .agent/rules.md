# Andi Universo Project Rules

## 🌍 Language and Internationalization
- **Internal Development**: All code (variables, functions, classes), comments, and documentation must be in **English**.
- **Public Interface**: All user-facing content, UI labels, and copy must be in **Spanish**.

## 🎨 Design System & Aesthetics
- **Core Colors**:
  - Background (Crème): `#f8f4e8`
  - Primary (Burgundy): `#802b48`
  - Accents (Amber Gold): `#e1a239`
  - Text (Earthy Brown): `#4c2b08`
  - Secondary (Cream Pink): Soft highlight variations
- **Typography**: Use modern, premium fonts. Default to Google Fonts like *Outfit* for headers and *Inter* for body text.
- **Visual Style**: Premium SaaS-style. Use smooth transitions, subtle box shadows, and responsive layouts. Avoid CSS frameworks; use Vanilla CSS with CSS Variables for the design system.

## 🏗 Component Guidelines
- **Functional Components**: All components should be functional components using React Hooks.
- **Styling**: Each component should have its own CSS module or be part of a well-defined global design system using CSS variables.
- **Accessibility**: Ensure all interactive elements have proper `aria-labels` and are keyboard-accessible.

## 🧪 Testing Standards
- **Logic**: Use Vitest for unit tests of core business logic or data transformations.
- **UI**: Ensure components are tested for key user interactions.

## 📦 Versioning & Commits
- Follow **Conventional Commits**.
- Bump version in `package.json` on every commit.
- Use `Samuel Aure` as the author in `package.json`.
