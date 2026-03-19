# implement-and-ship.md

You are about to implement a planned piece of work and ship it for review. Follow every step below in order. Do not skip steps.

---

## Step 1 — Confirm Before You Start

Before writing any code, confirm with me:
- What is the Jira ticket ID for this work? (e.g. SME-123)
- Is there a planning or tracking document I should update as we go? If yes, where is it?

---

## Step 2 — Create feature branch

Before making any code changes:
- Ensure you have the latest `main` (e.g. `git fetch origin main` then `git checkout main` and `git pull` if appropriate).
- Create and checkout a new branch from `main` using the format: `SME-[ticket-id]/short-description-of-change` (use the ticket ID and a brief slug; avoid spaces).
- If the user is already on a branch that matches this ticket (e.g. same ticket ID in the branch name), skip creating a new branch and continue on that branch.

Do not implement any work until this branch is created and checked out.

---

## Step 3 — Implement the Work

Now implement precisely as planned, in full.

**Implementation requirements:**
- Write elegant, minimal, modular code
- Adhere strictly to existing code patterns, conventions, and best practices already present in this codebase
- Include clear comments within the code explaining what each section does and why
- As you complete each step, update the markdown tracking document with an emoji status indicator and an overall progress percentage

---

## Step 4 — Self-Review Before Anything Else

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

**Prospa voice alignment**
- Does all UI copy and in-app messaging (labels, buttons, errors, success messages, empty states, loading text) follow the Prospa tone of voice? (See `.cursor/commands/prospa-voice.md`.)
- Is it straight-up human, direct, and helpful — active voice, "you"/"your", contractions, sentence case, plain language?
- Have you avoided jargon, passive voice, vague language, and exclamation marks in errors or warnings?
- For each message type (errors, success, buttons, empty states, loading, outages, etc.), does the copy match the examples and rules in prospa-voice?
- Flag any deviations clearly — do not silently leave them in

**Risk & confidence**
- Is there anything in these changes you are uncertain about?
- Could any of these changes break something else in the app that wasn't part of this ticket?

**Summary format — give me:**
- ✅ Things you're confident are correct
- ⚠️ Things that need my attention or a second opinion
- ❌ Anything you'd recommend fixing before this goes any further

If there are any ❌ items, fix them now and re-run this review before moving on to Step 5.

---

## Step 5 — Local Testing Check

Once the self-review is clean, ask me:

> "Would you like to test these changes locally (on your own machine, before anyone else sees them) before submitting for review?"

**If yes:**
- Identify the relevant terminal commands needed to spin up the affected part of the application
- Run those commands and tell me what to look for to confirm it's working
- Wait for me to confirm before moving on

**If no:**
- Skip to Step 6

---

## Step 6 — Prepare the Pull Request

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
[Paste a short version of the ✅ / ⚠️ summary from Step 4]

## Jira ticket
[Link to the Jira ticket: https://prospa.atlassian.net/browse/SME-[ticket-id]]
```

Ask me: "Does this look right? Should I go ahead and create the PR?"

---

## Step 7 — Create the Pull Request on GitHub

Once I approve:
- Commit all changed files with a clear message following the existing commit style in this repo
- Push the branch to GitHub
- Create the PR using the title and description above
- Set the base branch to `main` unless I specify otherwise (the branch was created from `main` in Step 2)
- Leave the reviewers section blank — I will assign reviewers manually in GitHub

---

## Step 8 — Wrap Up

Once the PR is created:
- Share the direct GitHub link to the PR
- Mark the tracking document as complete with a final status and progress at 100%
- Give me a one-line plain English summary of what was shipped and why it matters