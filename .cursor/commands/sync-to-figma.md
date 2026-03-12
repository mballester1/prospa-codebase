# Sync Figma from Code

User wants to update Figma designs to reflect what's actually in production. No designs should be invented — everything must come directly from reading the code.

## Context — Prospa Design System

**Always reference Borg-ds first before creating anything in Figma.**

Borg-ds is Prospa's shared design system — it contains the official UI components (buttons, inputs, cards, etc.) and design tokens (the defined colours, spacing sizes, font sizes, etc.) that all Prospa apps use.

Before creating any Figma frame:
- Look up the relevant components in Borg-ds to understand their correct appearance
- Use Borg-ds design tokens for all colours, spacing, and typography — never hardcode or guess these values
- If a component in the app being synced imports from Borg-ds, treat the Borg-ds definition as the source of truth for how it looks
- If something in the app overrides a Borg-ds style locally, flag it to the user — it may be intentional or it may be a bug

This ensures every Figma output is aligned with Prospa's official design language.

## Your Goal

Read the live code for a specific feature or screen, extract exactly what's there (layout, components, copy, states), and recreate it accurately in Figma using the Figma MCP connection — using Borg-ds as the visual foundation.

## Step 1 — Ask Clarifying Questions First

Always ask these questions in a single message before touching any code or Figma:

- What feature or screen do you want synced? (e.g. "the loan application form", "the dashboard header")
- Do you know which files or folders in the codebase contain this? (if not, say so — I'll search for them)
- **Where in Figma should I create this?**
  - A brand new Figma file?
  - An existing Figma file? (if yes, which one?)
    - If existing: should I **replace** the current design, or create the updated version **side by side** so you can compare?

Keep it to one message. Don't start reading code until you have these answers.

## Step 2 — Read the Code

Once you know what to sync:

- Search the codebase to find the relevant files for that screen or feature
- **Also read Borg-ds** to find any components or tokens the screen uses — check what the imports reference
- Read what's actually there:
  - Layout and structure (what sections, rows, columns exist)
  - Every UI element (buttons, inputs, labels, dropdowns, modals, etc.)
  - All copy (exact text, placeholder text, error messages)
  - All visible states (empty state, loading, error, success, disabled)
  - Colours, spacing, and typography — pulled from Borg-ds tokens, not guessed
- Note anything unclear or that has multiple possible states — flag these to the user before proceeding

**Never invent anything.** If it's not in the code or Borg-ds, don't add it to Figma.

## Step 3 — Confirm Before Creating

Before touching Figma, give the user a plain-English summary:

- What screen/feature you found
- Which Borg-ds components and tokens are being used
- What you're about to create in Figma (list of sections/components)
- Any gaps or ambiguities (e.g. "this button overrides the Borg-ds default colour — flagging in case it's unintentional")
- Confirm the Figma destination and approach (new file / replace / side by side)

Only proceed once the user says yes.

## Step 4 — Create in Figma via MCP

Using the Figma MCP connection, create the design based strictly on the code and Borg-ds:

- Recreate the layout and structure as frames in Figma
- Use Borg-ds component definitions for all shared components
- Apply Borg-ds design tokens for all colours, spacing, and typography
- Use exact copy from the codebase
- Label frames and layers clearly (e.g. "Dashboard Header — synced from code, March 2026")
- If creating side by side: label the existing one "Current Design" and the new one "Code Sync [date]"
- If replacing: move or delete the old version as the user requested
- Flag any places where the app deviates from Borg-ds so the user is aware

After creating, reply with:
- A link to the Figma frame or file
- A short summary of what was created, which Borg-ds components were used, and anything flagged as a deviation

## Behavior Rules

- Always check Borg-ds before creating anything visual — no exceptions
- Always ask clarifying questions first — never skip Step 1
- Never design anything not found in the code or Borg-ds
- If something is ambiguous in the code, flag it — don't guess
- Keep the user informed at each step before acting
- Prefer bullet points over paragraphs
- If the codebase is large, focus only on the screen/feature the user specified — don't over-scope
