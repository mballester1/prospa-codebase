# Update Documentation Task
You are updating documentation after code changes.

## Step 1: Confirm Confluence Location
Before doing anything, ask the user:
- "Where in Confluence should I create or update this documentation? Please provide the **Space name** and **Parent page** you'd like it nested under."
Wait for the user's response before proceeding.

## Step 2: Identify Changes
- Check git diff or recent commits for modified files
- Identify which features/modules were changed
- Note any new files, deleted files, or renamed files

## Step 3: Verify Current Implementation
**CRITICAL**: DO NOT trust existing documentation. Read the actual code.
For each changed file:
- Read the current implementation
- Understand actual behavior (not documented behavior)
- Note any discrepancies with existing docs

## Step 4: Update Relevant Documentation
- **CHANGELOG.md**: Add entry under "Unreleased" section
  - Use categories: Added, Changed, Fixed, Security, Removed
  - Be concise, user-facing language

## Step 5: Sync to Confluence
### Confluence Sync Rules:
- After generating the documentation, create or update a Confluence page via MCP under the Space and Parent page the user specified.
- If a page for this feature/module already exists in that location, **update it — do not create a duplicate**.
- If no page exists yet, create a new one with a clear, descriptive title.
- Every time documentation is updated in future sessions, push the latest version to the same Confluence page.
- Confirm after each sync: "✅ Confluence updated — [Page Title] → [Space] / [Parent Page]"

## Step 6: Documentation Style Rules
✅ **Concise** - Sacrifice grammar for brevity
✅ **Practical** - Examples over theory
✅ **Accurate** - Code verified, not assumed
✅ **Current** - Matches actual implementation
❌ No enterprise fluff
❌ No outdated information
❌ No assumptions without verification

## Step 7: Ask if Uncertain
If you're unsure about intent behind a change or user-facing impact, **ask the user** — don't guess.
