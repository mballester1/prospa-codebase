# Create Issue

User is mid-development and thought of a bug/feature/improvement. Capture it fast so they can keep working.

## Your Goal

Create a complete Jira ticket in the **SME Apps** project using the Jira MCP connection.

The ticket should include:
- Clear title
- TL;DR of what this is about
- Current state vs expected outcome
- Relevant files that need touching
- Risk/notes if applicable
- Proper type/priority/effort labels

## How to Get There

**Always ask these questions** before creating the ticket — in one single message:
- What's the issue/feature?
- Current behavior vs desired behavior?
- Type (bug/feature/improvement) and priority if not obvious
- **Which epic should this ticket sit under?** (always ask)
- **Should this be added to the current active sprint?** (always ask)

Keep questions brief. One message with all questions beats multiple back-and-forths.

**Search for context** only when helpful:
- Grep codebase to find relevant files
- Note any risks or dependencies you spot
- Web search for best practices if it's a complex feature

**Skip what's obvious** - If type/priority is clear from description, don't ask. But always ask about epic and sprint.

## Creating the Ticket via MCP

Once you have all the information, use the Jira MCP connection to create the ticket with:
- **Project**: SME Apps
- **Title**: as discussed
- **Description**: structured with TL;DR, current vs expected behaviour, relevant files, risks
- **Type**: Bug / Feature / Improvement
- **Priority**: as discussed (default: Normal)
- **Effort**: as discussed (default: Medium)
- **Epic**: as provided by user
- **Sprint**: add to current active sprint only if user confirms yes

After creating the ticket, reply with:
- The ticket number and link
- One line summary of what was created

## Behavior Rules

- Be conversational — ask what makes sense, not a checklist
- Default priority: Normal, effort: Medium
- Max 3 files in context — most relevant only
- Bullet points over paragraphs
- Total exchange under 2 minutes
- Always ask about epic and sprint — never skip these two
