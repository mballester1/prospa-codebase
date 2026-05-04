# Prompt: PBC Activity Report — **Interactive date range (Sydney)** (PostHog → Confluence Live doc)

Use this prompt when generating a **Pay By Card activity report** where the **reporting period is chosen at run time**. All boundaries, questions to the user, and HogQL filters use **`Australia/Sydney`** (use the **`Australia/Sydney`** zone ID in HogQL; in stakeholder-facing copy you may say "Sydney time" or **AEST/AEDT** only if accurate for the dates involved).

Use `person.properties.email` as the email address for all lists. Exclude customers whose email ends with `@prospa.com` or `@graphyte.net.au`.

**PostHog cohorts (mandatory):** Exclude anyone who belongs to either cohort — mirror the insight filters **User not in Internal Staff** and **User not in Test and Learn Users**. In HogQL on every query against `events`, add:

`person_id NOT IN COHORT 'Internal Staff' AND person_id NOT IN COHORT 'Test and Learn Users'`

If a cohort is renamed in PostHog, confirm the exact cohort name in **Persons → Cohorts** (or via PostHog search) and use that string in `NOT IN COHORT`. **Do not** duplicate internal-email exclusions as a substitute for cohorts.

---

## Step 0 — Ask for the data range (mandatory first step)

**Before** any PostHog queries, Confluence reads, or drafting:

1. **Ask the user** to specify the reporting window in **Australia/Sydney**, giving **both**:
   - **`win_start`:** date **and** time (start of the inclusive range, unless you agree otherwise).
   - **`win_end`:** date **and** time (end of the range — default **inclusive** of events up to and including `win_end`; if you use an **exclusive** end, say so explicitly and use it consistently in HogQL and in the report subtitle).

2. **Confirm back** the interpreted instant in one line, e.g.:  
   **"Reporting period: [start] → [end] (Australia/Sydney). Inclusive end: yes/no."**

3. **Validate** that **`win_start` ≤ `win_end`**. If not, ask again.

4. **Do not proceed** to Step 1 until the user has confirmed (or corrected) that range.

**Optional clarifications** (ask only if unclear):

- Time precision (e.g. whole minutes vs seconds).
- Whether "end" means **last event timestamp allowed** or "run the report as if `win_end` were now" (usually the former once the user picks an end).

---

## Product launch anchor (mandatory for "Since launch" KPIs)

Use a **fixed** go-live instant in Sydney (all "since launch" aggregates share this lower bound):

- **`win_launch`** = **2026-04-13 09:00:00.000** **`Australia/Sydney`**.

**Upper bound for launch KPIs:** use the **same** **`win_end`** as the report window (**Step 0**). Every launch KPI filters:

`toTimeZone(timestamp, 'Australia/Sydney') >= toTimeZone(<win_launch>, 'Australia/Sydney')`  
`AND toTimeZone(timestamp, 'Australia/Sydney') <= toTimeZone(<win_end>, 'Australia/Sydney')`  

(unless you documented an exclusive end — then align the operator.)

**Cardinality:** unless a bullet says otherwise, each KPI is **distinct `person_id`** (one row per human, not per event).

---

## Deliverable

Create **only** one Confluence **Live doc** for this run (see **Step 6**). Do **not** also create a classic published page unless explicitly asked.

---

## Step 1 — PostHog

After **`win_start`** and **`win_end`** are fixed in **Step 0**, query Pay By Card events via PostHog MCP / HogQL.

Filter in-window events with the agreed rule, e.g.:

`toTimeZone(timestamp, 'Australia/Sydney') >= toTimeZone(<win_start_expression>, 'Australia/Sydney')`  
`AND toTimeZone(timestamp, 'Australia/Sydney') <= toTimeZone(<win_end_expression>, 'Australia/Sydney')`  

(Adjust operators if you documented an exclusive end.)

**Mobile + web event pairs — always OR** when testing "did this happen?" unless a list says otherwise:

- **Payment confirm:** `paybycard_payment_confirm__click` **OR** `Pay by Card Payment Confirm Button Clicked`
- **Opened Pay By Card / Pay By Card screen (List 3):** `paybycard_pay__viewed` **OR** `Pay by Card Pay Viewed`
- **Submit error (List 2):** `paybycard_application_submit_error` **OR** `Pay by Card Application Submission Error`
- **Payment success (launch + payment KPIs):** `paybycard_payment__success` **OR** `Pay by Card Payment Success` — **confirm the web `event` string in PostHog** on first run; if it differs, note it under the matching **`### List N`** inside **`## Events used`** at the doc end (or internal notes), **not** in exec-facing body copy.

### Since launch — aggregate KPIs (distinct people)

Run these **after** **`win_launch`** / **`win_end`** are fixed. Use **`count() > 0`** / `uniqExact(person_id)` patterns — **do not** infer membership from **`LEFT JOIN` + `IS NOT NULL`** on empty aggregate sides (same failure mode as **Step 1b**).

1. **Onboarded (distinct):** `person_id` with **≥1** `paybycard_payer_onboarding` where **`status = Active`** (same rule as **List 1**) in **[`win_launch`, `win_end`]**.

2. **Card added — verified (distinct):** `person_id` with **≥1** of:
   - `Pay by Card Verified Card Viewed` **OR**
   - `Pay by Card Verified Card Clicked` **OR**
   - `paybycard_card_verify_status` — **only if** you can filter to **terminal success** in HogQL (e.g. a `status` / `success` / `errorCode` field — **verify in PostHog**). If the mobile event fires on non-terminal states and the property is unclear, **omit** it from the headline until analytics confirms the filter; the two **web** events above still count as "verified card surfaced in UI."

3. **Payments — "completed" vs "successful" (two numbers):**
   - **Completed (distinct):** `person_id` with **≥1** **payment confirm** pair in **[`win_launch`, `win_end`]**:  
     `paybycard_payment_confirm__click` **OR** `Pay by Card Payment Confirm Button Clicked`.
   - **Successful among completed (distinct):** `person_id` that satisfies **both** **≥1** confirm (same pair) **and** **≥1** **payment success** pair (see bullet above) in **[`win_launch`, `win_end`]** (order not required unless the team later tightens to "success after last confirm").
   - *Internal QA only (not for the Live doc):* optionally compare **total successful payers (distinct)** regardless of confirm vs the intersection above — use only to catch telemetry gaps, **never** as stakeholder copy.

4. **≥2 successful payments (distinct):** `person_id` where **count** of **payment success** events (same pair as §3) in **[`win_launch`, `win_end`]** is **≥ 2**.

### List 1 — Completed onboarding

Customers who triggered `paybycard_payer_onboarding` with `status = Active` **within the window**. For each: `salesforceFinancialAccountId` from the Active row you standardise on (default: **earliest Active in the window**), email, time they reached **Active**, whether they recorded **either** confirm-payment event **strictly after** that Active time, plain-English journey summary. If **two or more** share a clear post-Active drop-off pattern, add the **List 1 Pattern** blockquote **in the Live doc** (plain English only in Pattern — no raw event names) **above** the List 1 table (**Step 2**).

### List 2 — Started onboarding but did not complete

Customers who triggered `paybycard_application_started` **within the window** but **never** reached `paybycard_payer_onboarding` with `status = Active` (lifetime "never Active" if needed — define in footer). **Lifetime Active check:** use **any** matching onboarding rows for that `person_id` through `win_end` — **do not** apply cohort filters to this historical lookup (cohorts apply to **who appears** in List 2 candidates, not to whether **Active** ever occurred on the profile). Salesforce ID blank. **Submitted application** column (exact header); **Error code(s)** from `paybycard_eligibility_check` / `canApply` / `errorCode` with **15-minute** look-back before earliest submit error; Summary; **Notes** blank. If **two or more** have **Submitted application = Yes**, add **List 2 Pattern** blockquote **above** the List 2 table (**Step 2**).

### List 3 — Existing customers who opened Pay By Card

Customers who **opened Pay By Card** (the pay-screen event pair below) **within the window**; exclude Lists 1–2; Salesforce ID from **most recent** `paybycard_payer_onboarding` (any status); first in-window **Pay By Card** screen view; confirm-payment **strictly after** that view; Summary; **Notes** blank.

**Exec-facing wording:** Always describe this behaviour as **opened Pay By Card** (or **first Pay By Card view** / **Pay By Card screen** where you need a noun). Do **not** shorten to **opened Pay** or **Pay screen** alone in stakeholder copy — **Pay** alone is ambiguous (bill pay vs Pay By Card).

---

## Step 1b — Validate telemetry (mandatory before Confluence)

1. **Payment confirmed** (and similar "exists event" flags): use **`count() > 0`** (or equivalent) — **not** `LEFT JOIN` + `IS NOT NULL` alone on aggregates (empty join sides can show default UUID / epoch timestamps in HogQL/ClickHouse).
2. **Since launch KPIs:** re-use the same count / `uniq` discipline; internally verify **successful among completed ≤ completed** (distinct people) — **do not** surface this as exec copy.
3. **Spot-check** at least one **Yes** and one **No** for payment confirm (if both exist) against raw timelines vs Active / first Pay By Card screen view.
4. **Headline bullets must match** table aggregates **and** the **Since launch** numbers.

**Live doc (exec / stakeholder audience):** **Do not** add HogQL caveats, internal "sanity" lines (e.g. *successful ≤ completed*), italic footnotes about count-validation, or long explanations of why a window had zero events. Keep the body **outcome-oriented**; keep raw telemetry only in **`## Events used`** at the **end** of the doc (**after** **`## Actions / Updates`**).

---

## Step 2 — Live doc (markdown)

- **Title (mandatory, single format):** `PBC Daily Report — ` + **`win_end`** in **`Australia/Sydney`** as calendar **`DD MMM YYYY`**, then **` (`** + **12-hour** **`hh:mm`** + **`am`** or **`pm`** (always lowercase) + **`) Sydney`** — spacing and punctuation exactly like: **`PBC Daily Report — 21 Apr 2026 (07:40am) Sydney`**. **Two-digit minutes** always; hour **01–12** with **leading zero** for hours 1–9 (e.g. `07:40am`, `09:05am`; `12:00pm`, `11:59pm` are fine as shown). **Never** put **`win_start`** in the title. **Never** change **`PBC Daily Report`**, the **em dash**, or the closing **`Sydney`**.
- **Subtitle:** **Report run** time (Sydney) **and** the **exact `win_start` → `win_end`** the user confirmed in **Step 0**.
- **Audience:** executives and stakeholders — short, scan-friendly, outcome-led; minimal raw event names outside the final **`## Events used`** block; no internal QA or telemetry essays in the body (**Step 1b**).
- **`## Since launch (running totals)`** — place this section **immediately after** subtitle **and before** the headline summary. One short intro line: **distinct people**, **from 13 Apr 2026 09:00 Sydney** through **`win_end`**. Then **product-language** bullets only for: **Onboarded**; **Card added (verified)**; **Payments completed (distinct)** and **Successful among completed (distinct)**; **Customers with ≥2 successful payments**. **Do not** add **`### Events used (Since launch)`** or any separate "Events used" under Since launch.
- **Headline summary:** **one bullet per sentence** (~4 bullets), product language first, about **this report's `win_start` → `win_end`** (the lists window). When referring to List 3 behaviour, say **opened Pay By Card** — not **opened Pay** alone.
- **List 3 section heading (mandatory):** `## List 3 — Existing customers who opened Pay By Card (in window)` — table column headers should use **Pay By Card** where they describe that screen (e.g. **First Pay By Card view in window (Sydney)**), not generic **pay view**.
- **Three list sections:** **Per list:** list heading → **`>` Pattern blockquote** (if applicable — **before** the table; omit if fewer than 2 rows or no pattern; **no snake_case** in Pattern) → **table only** — **do not** place **`### Events used`** (or raw event lists) immediately under any list.
- **Tables:** pipe tables; **Notes** column required, cells **blank**; **Submitted application** header exact; **Payment confirmed** / **Submitted application** use **`**Yes**`** / `No` and **⚠️** on **Yes** for submit column only; List 2 error column **—** / **`Not captured`** per your rules.
- **Do not** use `{info}` in markdown (does not render as a Confluence info panel).
- **`## Actions / Updates`:** same header order as the **prior** report the team uses as template (see **Step 3**); this section comes **after** the three list tables.
- **`## Events used` (last section in the doc):** **After** **`## Actions / Updates`**, append one consolidated telemetry appendix: **`### List 1`**, **`### List 2`**, **`### List 3`** — in each, spell out raw `event` names, mobile/web pairs, key properties, and the **exact `win_start` / `win_end`** (and **`win_launch`** where relevant to that list's logic) used in HogQL. Include a short **global exclusions** line: email domain excludes **and** the two **`NOT IN COHORT`** clauses (cohort names as in PostHog). **Optional:** **`### Since launch KPIs`** here only if the team wants the launch aggregate query notes in the doc (still **not** under the Since launch headline body).

---

## Step 3 — Carry forward Actions / Updates

Locate the appropriate **prior** PBC report under **Pay By Card Reports** (team rule: often **calendar yesterday** in Sydney for daily cadence; for ad-hoc ranges, use the **most recent** report with an **Actions / Updates** table unless the user specifies otherwise). **Do not** assume the prior page title matches only a calendar date — titles follow **`win_end`** clock time (**Step 2**). Copy the first table under **`## Actions / Updates`**; match headers; carry non-**Done** rows; append new rows if needed.

---

## Step 4 — Draft markdown

Only after **Step 1b**, assemble full **Step 2** body including **Step 3** (**Actions / Updates**) **and** the final **`## Events used`** appendix.

---

## Step 5 — Title check (optional)

The **title** is fully determined by **`win_end`** (**Step 2**). If it looks wrong, fix **timezone / formatting logic** — **do not** change **`win_start` / `win_end`** without re-asking the user.

---

## Step 6 — Publish (Live doc only)

`createConfluencePage`: parent **Pay By Card Reports**, **`subtype: "live"`**, **`contentFormat: "markdown"`**, **title** = the **Step 2** mandatory title (from **`win_end`**), body = full markdown. Return **Live doc URL**.

**Archived Live docs:** if `updateConfluencePage` returns **404**, restore in Confluence UI then retry.

**Confluence markdown via MCP / JSON (avoid broken pages):**

- Put the full report body in a **UTF-8** `.md` file using **literal** punctuation (e.g. →, —, “”, ≥, ≤, …). Do **not** ship markdown that only exists as JSON `\uXXXX` escapes — if those get double-encoded, Confluence shows garbage (`\\u2192`, etc.).
- Build the API payload with **`jq -n --rawfile body ./report.md '…'`** (or equivalent) so **`body`** is taken from file bytes; avoid hand-pasting escaped Unicode strings into JSON.
- In **`## Events used`**, prefer plain language for intervals (e.g. **from launch through win_end**) instead of ambiguous **`[launch, win_end]`** bracket patterns that Confluence may treat as links or escape oddly.
- Avoid **nested inline code** on one line (e.g. trailing prose **inside** a parenthetical after closed backticks like ``(`event`, `event` on web)``) — split into separate clauses or drop the extra words inside the parens.
