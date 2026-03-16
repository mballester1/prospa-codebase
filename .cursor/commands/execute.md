# implement-and-ship.md

You are about to implement a planned piece of work and ship it for review. Follow every step below in order. Do not skip steps.

---

## Step 1 — Confirm Before You Start

Before writing any code, confirm with me:
- What is the Jira ticket ID for this work? (e.g. SME-123)
- Is there a planning or tracking document I should update as we go? If yes, where is it?

---

## Step 2 — Implement the Work

Now implement precisely as planned, in full.

**Implementation requirements:**
- Write elegant, minimal, modular code
- Adhere strictly to existing code patterns, conventions, and best practices already present in this codebase
- Include clear comments within the code explaining what each section does and why
- As you complete each step, update the markdown tracking document with an emoji status indicator and an overall progress percentage

---

## Step 3 — Self-Review Before Anything Else

Before any testing or PR preparation, stop and critically review every file you just changed.

Work through this checklist and report back to me on each point:

**Code quality**
- Does this code match the style and patterns already used in this project?
- Is anything unnecessarily complex or duplicated?
- Are there any obvious edge cases (unexpected situations the code might not handle)?

**Borg-ds alignment**
- Do all UI components (the visual building blocks of the interface) use Borg-ds?
- Are there any hardcoded values (e.g. colours, spacing, font sizes typed directly into the code) that should instead reference a Borg-ds design token (a named variable from the design system, like `color.primary`)?
- Flag any deviations clearly — do not silently leave them in

**Risk & confidence**
- Is there anything in these changes you are uncertain about?
- Could any of these changes break something else in the app that wasn't part of this ticket?

**Summary format — give me:**
- ✅ Things you're confident are correct
- ⚠️ Things that need my attention or a second opinion
- ❌ Anything you'd recommend fixing before this goes any further

If there are any ❌ items, fix them now and re-run this review before moving on.

---

## Step 4 — Local Testing Check

Once the self-review is clean, ask me:

> "Would you like to test these changes locally (on your own machine, before anyone else sees them) before submitting for review?"

**If yes:**
- Identify the relevant terminal commands needed to spin up the affected part of the application
- Run those commands and tell me what to look for to confirm it's working
- Wait for me to confirm before moving on

**If no:**
- Skip to Step 5

---

## Step 5 — Prepare the Pull Request

Before creating it, generate the following and show it to me for approval:

**Branch name:**
- Format: `SME-[ticket-id]/short-description-of-change`

**PR title:**
- Format: `[SME-[ticket-id]] Short description of what changed`

**PR description:**
```
## What changed
[Summarise the changes made in plain language]

## Why
[Explain the business reason — what problem this solves or feature this delivers]

## Self-review notes
[Paste a short version of the ✅ / ⚠️ summary from Step 3]

## Jira ticket
[Link to the Jira ticket: https://prospa.atlassian.net/browse/SME-[ticket-id]]
```

Ask me: "Does this look right? Should I go ahead and create the PR?"

---

## Step 6 — Create the Pull Request on GitHub

Once I approve:
- Commit all changed files with a clear message following the existing commit style in this repo
- Push the branch to GitHub
- Create the PR using the title and description above
- Set the base branch to `main` unless I specify otherwise
- Leave the reviewers section blank — I will assign reviewers manually in GitHub

---

## Step 7 — Wrap Up

Once the PR is created:
- Share the direct GitHub link to the PR
- Mark the tracking document as complete with a final status and progress at 100%
- Give me a one-line plain English summary of what was shipped and why it matters