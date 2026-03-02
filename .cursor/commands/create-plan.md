# Plan Creation Stage
Based on our full exchange, produce a markdown plan document AND push it to Confluence via MCP.

## Step 1: Confirm Confluence Location
Before generating the plan, ask the user:
- "Where in Confluence should I create this page? Please provide the **Space name** and **Parent page** you'd like it nested under."
Wait for the user's response before proceeding.

## Step 2: Generate & Sync the Plan

### Requirements for the plan:
- Include clear, minimal, concise steps.
- Track the status of each step using these emojis:
  - 🟩 Done
  - 🟨 In Progress
  - 🟥 To Do
- Include dynamic tracking of overall progress percentage (at top).
- Do NOT add extra scope or unnecessary complexity beyond explicitly clarified details.
- Steps should be modular, elegant, minimal, and integrate seamlessly within the existing codebase.

### Confluence Sync Rules:
- After generating the plan, immediately create a Confluence page via MCP under the Space and Parent page the user specified.
- Every time the plan is updated (any step status changes, new subtasks added, or progress % changes), push the updated version to the same Confluence page — do not create a new page.
- Confirm after each sync: "✅ Confluence updated — [Page Title] → [Space] / [Parent Page]"

## Markdown Template:
# Feature Implementation Plan
**Overall Progress:** `0%`

## TLDR
Short summary of what we're building and why.

## Critical Decisions
Key architectural/implementation choices made during exploration:
- Decision 1: [choice] - [brief rationale]
- Decision 2: [choice] - [brief rationale]

## Tasks:
- [ ] 🟥 **Step 1: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2
- [ ] 🟥 **Step 2: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2

It's still not time to build yet. Just confirm the Confluence location, write the clear plan document, and sync it. No extra complexity or scope beyond what we discussed.
