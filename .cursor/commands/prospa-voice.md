# prospa-voice.md
# Prospa Tone of Voice — UI copy and in-app messaging

> **For teammates:** This file lives in the [`prospa-group/ai`](https://github.com/prospa-group/ai) repo under `.cursor/commands/`. Copy or sync it into your own repo’s `.cursor/commands/` folder, then point Cursor at it (e.g. a project rule: *When writing or reviewing UI copy and in-app messaging, follow `.cursor/commands/prospa-voice.md`.*) or `@`-mention the command in chat.

---

## Voice
**Straight up human.** Simple, open, direct. Sound like a helpful friend — not a bank, not a bot.

---

## Always do
- Lead with what matters most to the customer
- Use active voice: "We've sent your confirmation" not "Your confirmation has been sent"
- Use "you" / "your" and contractions: "we're", "you'll", "can't"
- One idea per sentence. Short beats long.
- Sentence case everywhere — headings, buttons, labels (capitalise first word only)
- Plain language — break down complexity without dumbing it down
- Tell the customer what happens next
- Use personal pronouns to indicate responsibility — "We couldn't complete your payment" not "Payment could not be completed"

## Never do
- Jargon, acronyms, or financial terms without explanation
- Passive voice
- Vague or wishy-washy language
- Padding — every word must earn its place
- Exclamation marks in errors or warnings (success moments only, one max)
- Marketing language in service messages
- Blame the user — never phrase errors as the customer's fault
- Jovial language in errors — no "Oops!", "Oh no!", "Whoops!"

---

## Tone map
Different components sit at different points on two axes: **concise ↔ detailed** and **lighthearted ↔ serious**. Use this as a quick guide when writing for a specific component.

| Component | Tone |
|---|---|
| Toasts / snackbars | Concise + neutral |
| Inline alerts | Concise + serious |
| Tool tips | Concise + neutral |
| Buttons | Concise + neutral to positive |
| Labels | Concise + neutral |
| Banner alerts | Concise to mid + neutral to serious |
| Headings | Concise + positive/friendly |
| Empty states | Concise + neutral to positive |
| Forms | Mid + neutral |
| Error modals | Mid + serious |
| Service messages | Mid to detailed + serious |
| Disclaimers | Mid to detailed + serious |
| Confirmation modals | Mid + lighthearted (for big moments) |
| Push notifications | Concise + serious (service) or lighthearted (announcements) |
| Content cards | Concise + lighthearted |
| CVP pages | Detailed + lighthearted |
| Blog / social | Detailed + lighthearted |

---

## By message type

### Errors
What went wrong + what to do next. Never blame the customer. Use personal pronouns to show Prospa takes responsibility.
- Use precise language: what happened, what it means, what the customer can do
- Use etiquette ("Please try again") when the customer is inconvenienced by something on our end
- Never use: "Oops", "failed", "wrong", "error" in headings
- ✅ "We couldn't verify your details. Double-check and try again."
- ✅ "We ran into a technical problem"
- ❌ "Verification failed. Error code 403."
- ❌ "Oops! Something went wrong!"

### Service messages
Urgent or important updates about outages, maintenance, or system issues. Delivered via banner alerts, push notifications, in-app messages, or email.
- Be specific about timing: "unavailable until 9:15pm AEDT" not "unavailable for a while"
- Use etiquette to acknowledge inconvenience caused by Prospa
- Never be jovial or minimise the issue
- ✅ "Sorry, we are running maintenance right now. Your Business Account will be unavailable until 9:15pm."
- ❌ "Business account unavailable due to scheduled maintenance."

### Disclaimers
Important information the customer needs before taking an irreversible or consequential action.
- Be clear and specific — full sentences, proper punctuation
- Avoid overly negative framing: "payments can't be reversed" not "cannot be undone"
- Consent checkboxes: write in first person ("I agree to…"), 1–2 sentences max, always include a full stop
- ✅ "Please check these details are correct as payments can't be reversed."
- ❌ "Make absolutely sure you double check the details are correct as payments cannot be undone."

### Confirmations / toasts
Confirms an action has occurred or is in progress. Keep it to a few words. No celebration, no exclamation marks.
- Use appropriate tense: past for completed ("Changes saved"), present continuous for in-progress ("Downloading...")
- Use ellipses to indicate an ongoing action ("Downloading your statement...")
- Use personal pronouns: "your bill" not "the bill"
- ✅ "Changes saved" / "Your bill has been confirmed" / "Downloading..."
- ❌ "Your changes have been saved" / "Success! Your bill is confirmed!"

### Announcements
New features, products, or promotions. Lead with the benefit, not the feature name.
- Lighthearted and enthusiastic — this is the most marketing-adjacent tone in-product
- Prioritise what the customer gains, not what the feature is called
- ✅ "Keep track of your bills in one simple place"
- ✅ "Accept contactless payments wherever your business takes you"
- ❌ "Introducing Bill Pay" / "Introducing Tap to Pay"

### Success
Warm but efficient.
- ✅ "You're all set. We'll be in touch shortly."
- ❌ "Transaction completed successfully."

### Empty states
Helpful, not a dead end. Tell the customer what's missing and what they can do about it.
- 1–2 sentences max; no end punctuation for single sentences
- Where space allows, give a specific action ("Tap the + button in the top right corner")
- Where space is tight, imply the action ("You haven't added any payees yet")
- ✅ "You haven't paid any bills yet"
- ✅ "To add a payee, simply tap the + button in the top right hand corner"
- ❌ "No bills found" / "No data available."

### Loading
Reassure something is happening.
- ✅ "Hang tight, we're pulling your details."
- ❌ "Loading..."

### Outages
Own it immediately. Be specific about timing and next steps.
- ✅ "We're so sorry, this is all us. We'll be back up as soon as humanly possible."
- ❌ "We are currently experiencing technical difficulties."

### Missed payment
Lead with empathy.
- ✅ "You missed a payment, but we're here to help."
- ❌ "Your account is in arrears."

---

## UI components

### Banner alerts
Colour signals meaning — always match the message to the right colour:
- **Green** — success or confirmation, no action required
- **Blue** — important insight or neutral alert, action may be needed but not urgent
- **Yellow** — warning, action usually required soon
- **Red** — error or outage, urgent action likely required
- **Grey** — non-actionable alerts or disclaimers

Rules:
- 1–2 sentences max
- Full sentences, sentence case
- No end punctuation for single-sentence banners
- Include etiquette when asking the customer to do something because of a Prospa-side issue
- ✅ "We attempted to pay this bill on 23 Jan but payment failed. Please check your account and try again."
- ❌ "Your payment on 23 Jan failed... check your account and try again."

### Buttons
Specific, action-oriented, 3 words or fewer. Verb + noun structure where possible.
- Sentence case, no end punctuation
- Drop articles ("a", "an", "the") and pronouns ("your", "my") unless needed for clarity
- One primary button per screen — it should reflect the most important action
- ✅ "Confirm bill" / "Schedule payment" / "Check eligibility"
- ❌ "Confirm Bill" / "Schedule the payment" / "Click here to check eligibility"

Approved button labels (reuse these where applicable):
`Confirm` · `Next` · `Got it` · `Okay, thanks` · `Let's do it` · `Continue` · `Agree and continue` · `Submit` · `Cancel` · `Not now` · `Add payee` · `Make another payment` · `Set date` · `Email bill` · `Copy email address` · `Confirm and schedule payment` · `Confirm and schedule later`

### Headings and subheadings
Guide the customer through the journey. Concise, scannable, active.
- Sentence case, no end punctuation (unless a question)
- Use actionable language and present tense where possible
- Headings: a few words. Subheadings can be slightly longer.
- ✅ "Schedule a payment" / "Confirm your details"
- ❌ "Payment Scheduler" / "Please Confirm Your Details"

### Inline alerts
Appear beneath form fields when input is invalid or missing. Brief and action-focused.
- Tell the customer what to do to fix it, not just what went wrong
- No etiquette unless the error is on Prospa's end
- No end punctuation unless 2+ sentences
- Never blame the customer
- ✅ "Enter a valid email address" / "Select an option"
- ❌ "You've entered an invalid email" / "Whoops! Don't forget to select one of the options"

### Modals
Overlays used for errors, confirmations, announcements, or additional information.
Structure: **Heading** (what the customer needs to know at a glance) + **Body** (1–2 sentences with context and next steps) + **Button** (optional, directs action) + **Icon/image** (optional)
- Error modals: neutral, direct, Prospa takes responsibility
- Confirmation modals: can be warmer/celebratory for big moments (e.g. application submitted)
- Announcement modals: benefit-led, lighthearted
- ✅ Heading: "Not enough funds" / Body: "There aren't enough funds available in your account to complete this payment. Please add funds and try again."
- ❌ Heading: "You have insufficient funds" / Body that blames the customer

### Toasts / snackbars
Brief confirmation that pops up at the bottom of the screen. A few words only.
- Neutral tone, no exclamation marks, no etiquette
- Use ellipses for in-progress actions
- ✅ "Changes saved" / "Your bill has been confirmed" / "Downloading..."
- ❌ "Your changes have been saved!" / "Success! Bill confirmed!"

### Tool tips
Triggered by a ? or ! icon. Adds context without cluttering the UI.
- One short sentence, plain language, no jargon
- No etiquette, no end punctuation unless 2+ sentences
- ✅ "Only include middle name(s) that appear on your driver licence"
- ❌ "Please only add in to this form the middle names that you can see on your driver licence."

### Labels
Short descriptive text for checkboxes, radio buttons, and form fields.
- A few words, sentence case, no end punctuation
- Exception: consent checkboxes always end with a full stop and use first person ("I agree to Prospa's privacy policy.")
- Mark optional fields with **(Optional)** at the end of the label
- Never truncate with ellipses — reword to fit

---

## Naming conventions

### Products (always title case; full name on first reference, short name in-product)
| Full name | In-product / second reference |
|---|---|
| Prospa Small Business Loan | Small Business Loan |
| Prospa Business Loan Plus | Business Loan Plus |
| Prospa Business Line of Credit | Business Line of Credit |
| Prospa Business Account | Business Account |
| Prospa Visa Business Debit Card | Business Debit Card (in-product) / Prospa Card (secondary) |

### Platforms (always title case; use external name in customer-facing copy)
| External name | Internal name (do not use externally) |
|---|---|
| Prospa Online | Customer Web Portal / Business Account Portal |
| Prospa App | Mobile App |
| Prospa Partner Portal | Partner Portal |

### Features (correct styling for in-product use)
- ✅ Account · Bills / Bill Pay · Help Centre · Pay · Prospa Intelligent Quoting · Prospa IQ · Settings · Statements · Tap to Pay
- ❌ My account · BillPay · Help centre · Pay anyone · Intelligent quoting · ProspaIQ · My settings · My statements · TTP

---

## Key wording rules

| ✅ Use | ❌ Don't use |
|---|---|
| Overdue | In arrears (jargon) |
| Repayments (loans) | Payments |
| Log in (verb) | Login (verb) |
| Cash flow | Cashflow |
| Online | On-line |
| SMEs | SME's |
| Reward Points / Points / Pts | Prospa Points (never customer-facing) |
| Qantas Points (full, title case) | Qantas pts, qantas points |
| Prospa Rewards | Prospa rewards |

- Australian English spelling throughout
- Numerals always (not "two" — use "2"), except "one-time password"
- Currency: $1,500 — no decimal unless cents
- Dates: 19 March 2026 / Times: 8am, 3.30pm

---

## Prospa Rewards — terminology and messaging

**Platform**
- Use **Prospa Rewards** for the loyalty program. CTA example: "Explore Prospa Rewards".
- Prospa Rewards is the container where customers earn Reward Points and can convert to Qantas Points.

**Currency — Reward Points / Points / Pts**
- **Reward Points** when clarity is needed (e.g. to distinguish from Qantas Points).
- **Points** when context is clear (e.g. logged-in rewards experience).
- **Pts** (or **PTS**) for constrained spaces only.
- Never use "Prospa Points" in customer-facing copy.
- Capitalise "Points" when it refers to the currency; sentence case is ok for readability where needed.

**Approved phrases — customers can:** Earn Reward Points · Earn bonus Reward Points · Redeem Reward Points · Convert Reward Points.

**Currency — Qantas Points**
- Always write **Qantas Points** in full, title case.
- Any copy referencing Qantas, Qantas Points, or Qantas programs (QBR, QFF) requires marketing/legal approval.

**Earning — approved usage**
- *Pay:* "Pay by Card and earn points" · "Tap to Pay and earn points" · "Earn points every time you Pay by Card" · "Turn BAS into Points".
- *Borrow:* Small Business Loan / Business Loan Plus / Business Loans with Qantas Points · "Earn 1 Qantas Point for every $1 funded" (max. 500,000 Qantas Points).
- *Join/Refer:* "Join and earn points today with Prospa Rewards" · "Refer and earn points".

**Redemption**
- "Redeem points for business essentials".
- "Convert your rewards points for Qantas Points" — use only if approved (check current marketing/legal).

**Product names**
- Small Business Loan & Business Loan Plus with Qantas Points = direct earn.
- Prospa Rewards = indirect earn (Reward Points).

---

## Gut-check
1. Would a busy small business owner immediately get this?
2. Does it sound human?
3. Can it be shorter?
4. Does it tell them what happens next?
5. Does it match the right tone for this component? (Check the tone map)
6. Am I using the correct product/platform/feature name?
