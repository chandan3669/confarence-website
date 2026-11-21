# ICESICSC

## Mission
Create implementation-ready, token-driven UI guidance for ICESICSC that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: ICESICSC
- URL: https://www.esicconference.com/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Verdana`, `font.family.stack=Verdana, sans-serif`, `font.size.base=15px`, `font.weight.base=300`, `font.lineHeight.base=22.5px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=13px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=16.5px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=30px`
- Color palette: `color.text.primary=#234262`, `color.text.secondary=#ffffff`, `color.text.tertiary=#8b8b9a`, `color.text.inverse=#5da834`, `color.surface.base=#000000`, `color.surface.raised=#15162b`, `color.surface.strong=#02590f`
- Spacing scale: `space.1=5px`, `space.2=7.5px`, `space.3=8px`, `space.4=10px`, `space.5=12px`, `space.6=15px`, `space.7=20px`, `space.8=22.5px`
- Radius/shadow/motion tokens: `radius.xs=15px`, `radius.sm=20px`, `radius.md=25px`, `radius.lg=50px` | `shadow.1=rgba(0, 0, 0, 0.08) 0px 10px 30px 0px` | `motion.duration.instant=300ms`, `motion.duration.fast=400ms`, `motion.duration.normal=1000ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (36), cards (12), buttons (6), navigation (2), lists (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
