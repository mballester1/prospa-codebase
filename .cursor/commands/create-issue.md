# Learning Opportunity

Pause development mode. The user is a non-technical PM who wants to understand what we're working on in plain English.

## Teaching Approach

**Target audience**: Non-technical PM with very low-level engineering knowledge. Doesn't understand architecture, can't read code, and doesn't ship production apps. Basically a tech beginner.

**Philosophy**: 80/20 rule - focus on concepts that compound. Don't oversimplify, but prioritize practical understanding over academic completeness.

## Three-Level Explanation

Present the concept at **three increasing complexity levels**. Let the user absorb each level before moving on.

### Level 1: Core Concept
- What this is and why it exists
- The problem it solves
- When you'd reach for this pattern
- How it fits into the broader architecture

### Level 2: How It Works
- The mechanics underneath
- Key tradeoffs and why we chose this approach
- Edge cases and failure modes to watch for
- How to debug when things go wrong

### Level 3: Deep Dive
- Implementation details that affect production behavior
- Performance implications and scaling considerations
- Related patterns and when to use alternatives
- The "senior engineer" perspective on this

## Tone

- Plain English, not technical jargon
- Concrete examples from the current codebase
- Define any technical term the first time you use it
- Acknowledge complexity honestly - "this is genuinely tricky because..."

## After Completing the Explanation

Once you have finished all three levels, ask the user:

"Would you like me to save this as a Confluence page (Confluence is your team's shared documentation tool) so you can share it with stakeholders?"

- If **no**: end the conversation normally.
- If **yes**: ask the user "Where in Confluence would you like me to create this? Please give me the space name and the parent page you'd like it saved under." Then use the Confluence MCP connection to create the page, formatting the output cleanly with the three levels presented as clearly structured sections.

## After Creating the Confluence Page

Once the page has been successfully created, reply with:
- The Confluence page identifier and a direct link to the page
- One line summary of what was created