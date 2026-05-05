# Prompt: Pay By Card and Rewards activity report — **Interactive date range (Sydney)** (PostHog → Confluence Live doc)

Use this prompt when generating a **Pay By Card and Rewards** activity report (Pay By Card lists **and** the Qantas / rewards slice in **List 4**) where the **reporting period is chosen at run time**. All boundaries, questions to the user, and HogQL filters use **`Australia/Sydney`** (use the **`Australia/Sydney`** zone ID in HogQL; in stakeholder-facing copy you may say "Sydney time" or **AEST/AEDT** only if accurate for the dates involved).

Use `person.properties.email` as the email address for all lists. Exclude customers whose email ends with `@prospa.com` or `@graphyte.net.au`.

**PostHog cohorts (mandatory):** Exclude anyone who belongs to either cohort — mirror the insight filters **User not in Internal Staff** and **User not in Test and Learn Users**. In HogQL on every query against `events`, add:

`person_id NOT IN COHORT 'Internal Staff' AND person_id NOT IN COHORT 'Test and Learn Users'`

If a cohort is renamed in PostHog, confirm the exact cohort name in **Persons → Cohorts** (or via PostHog search) and use that string in `NOT IN COHORT`. **Do not** duplicate internal-email exclusions as a substitute for cohorts.

**Australia-only scope (mandatory):** Restrict **every** HogQL query that feeds **Since launch** KPIs and **Lists 1–4** to **Australian customers only** (exclude non-AU markets, e.g. New Zealand). Unless analytics confirms a different person field, add **`person.properties.$geoip_country_code = 'AU'`** on each `events` row (use the nested-property accessor your PostHog / HogQL plane supports if the dotted form differs). **Before first run**, spot-check **Person properties** for Pay By Card users (and the **dashboard** insights if applicable) that **`$geoip_country_code`** is populated and means **Australia**; if the team uses **`country`**, **`countryCode`**, **`market`**, or an **Australia** cohort instead, substitute that predicate and document it verbatim under **`## Events used`** → global exclusions.

**List 2 lifetime Active:** **Still omit** Internal Staff / Test and Learn **cohort** filters from the historical **`paybycard_payer_onboarding`** lookup that decides **never Active**. **Do apply** the **same AU predicate** to those onboarding rows so lifetime **Active** is evaluated for **AU-scoped** profiles only.

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

Create **only** one Confluence **Live doc** for this run (see **Step 6**). Do **not** also create a classic published page unless explicitly asked. The Live doc **title** uses the **Step 2** prefix **`Pay By Card and Rewards — Daily Report —`** + **`win_end`** (Sydney).

---

## Step 1 — PostHog

After **`win_start`** and **`win_end`** are fixed in **Step 0**, query Pay By Card **and List 4 (Qantas)** events via PostHog MCP / HogQL.

Filter in-window events with the agreed rule, e.g.:

`toTimeZone(timestamp, 'Australia/Sydney') >= toTimeZone(<win_start_expression>, 'Australia/Sydney')`  
`AND toTimeZone(timestamp, 'Australia/Sydney') <= toTimeZone(<win_end_expression>, 'Australia/Sydney')`  

(Adjust operators if you documented an exclusive end.)

**Australia:** Combine **every** query in **Step 1** with the **AU-only** predicate from the opening instructions (in addition to email + cohort filters).

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

Customers who triggered `paybycard_payer_onboarding` with `status = Active` **within the window**. For each: `salesforceFinancialAccountId` from the Active row you standardise on (default: **earliest Active in the window**), email, time they reached **Active**, whether they recorded **either** confirm-payment event **strictly after** that Active time, and a **plain-English journey summary that states where they dropped off** in the post-**Active** payment journey (not a generic “no confirm” line).

**Journey summary (mandatory content):** After **earliest Active in the window**, through **`win_end`**, infer the **furthest product step** the customer is known to have reached from telemetry, then describe the **drop-off** in stakeholder language (still **no raw `event` strings** in the table cell). Use at least one of these **decision branches** (mobile + web pairs — **OR** within each bullet):

1. **No Pay By Card pay screen after Active:** no `paybycard_pay__viewed` **nor** `Pay by Card Pay Viewed` strictly after Active through `win_end` → say they **did not return to the Pay By Card pay screen** after becoming Active (or equivalent plain English).
2. **Pay screen after Active, no deeper payment steps:** pay screen pair fired after Active but **no** `paybycard_pay_form_next__click` / `Pay by Card Pay Form Next Button Clicked` / `Pay by Card Pay Form Next Clicked`, **and no** amount/description/reference click pair, **and no** confirm-payment screen pair → say they **left on the pay screen** without progressing the form.
3. **Form interaction but not confirm:** any of amount/description/reference click pairs or **form next** after Active, but **no** confirm-payment **screen viewed** pair and **no** confirm click → dropped off **before the confirm-payment step** (confirm-payment viewed pair = `paybycard_confirm_payment__viewed` **OR** the web `event` name you document under **`### List 1`** in **`## Events used`**).
4. **Confirm screen but no confirm tap:** confirm-payment **viewed** pair after Active but **no** payment confirm click pair through `win_end` → dropped off **on confirm payment** without tapping confirm.
5. **Errors:** payment error screen pair after Active → mention **payment error surfaced** (still no raw event names in the cell).
6. If telemetry is **ambiguous** (e.g. gaps across web vs mobile naming), say what **did** and **did not** fire in product terms and note **limited signal** briefly — **do not** default every row to the same one-line placeholder.

**List 1 Pattern blockquote (mandatory when List 1 has ≥2 rows):** Always include a **`>` Pattern** blockquote **above** the List 1 table when the table has **two or more** rows. Summarise **where the cohort drops off** post-**Active** (counts or “most customers …” / “split between …”), plain English only, **no snake_case** or raw PostHog event names. If one branch clearly dominates (e.g. ≥60% share the same furthest step), say so; if split, name both splits.

### List 2 — Started onboarding but did not complete

Customers who triggered `paybycard_application_started` **within the window** but **never** reached `paybycard_payer_onboarding` with `status = Active` (lifetime "never Active" if needed — define in footer). **Lifetime Active check:** use **any** matching onboarding rows for that `person_id` through `win_end` — **do not** apply cohort filters to this historical lookup (cohorts apply to **who appears** in List 2 candidates, not to whether **Active** ever occurred on the profile). Salesforce ID blank. **Submitted application** column (exact header); **Error code(s)** from `paybycard_eligibility_check` / `canApply` / `errorCode` with **15-minute** look-back before earliest submit error; Summary; **Notes** blank. If **two or more** have **Submitted application = Yes**, add **List 2 Pattern** blockquote **above** the List 2 table (**Step 2**).

### List 3 — Existing customers who opened Pay By Card

Customers who **opened Pay By Card** (the pay-screen event pair below) **within the window**; exclude Lists 1–2; Salesforce ID from **most recent** `paybycard_payer_onboarding` (any status); first in-window **Pay By Card** screen view; confirm-payment **strictly after** that view; Summary; **Notes** blank.

**Exec-facing wording:** Always describe this behaviour as **opened Pay By Card** (or **first Pay By Card view** / **Pay By Card screen** where you need a noun). Do **not** shorten to **opened Pay** or **Pay screen** alone in stakeholder copy — **Pay** alone is ambiguous (bill pay vs Pay By Card).

### List 4 — Qantas (in window)

**Population:** **Distinct `person_id`** who have **≥1** in-window event meaning **connected to Qantas** or **joined Qantas**, using the project’s **real** PostHog `event` strings. Use **mobile + web OR pairs** (same discipline as **Step 1** intro bullets). **Confirm event names in PostHog** (Definitions / live events) before locking stakeholder copy; until confirmed, use **`TBD`** placeholders in **`### List 4`** under **`## Events used`** and do **not** invent names in the exec table.

**Window:** **`win_start` → `win_end`**, **`Australia/Sydney`**, **inclusive** (same operators as the rest of the report unless Step 0 documented otherwise). **Global filters** on every `events` query for List 4 candidates and joins: **AU-only predicate** (same as Lists 1–3), internal email excludes **and** both **`NOT IN COHORT`** clauses.

**Deduping — one row per `person_id`:** If **both** connect-type and join-type events occur in the window for the same person, emit **one** table row (not two). **`Timestamp of event (Sydney)`** = the **earliest** timestamp among all qualifying connect/join events in the window (Sydney-formatted). **`Type of event`** = plain English only: **`Connected to Qantas`** and/or **`Joined Qantas`** — if both occurred, combine in one cell (e.g. **"Connected to Qantas; joined Qantas"** or product-approved equivalent). **Do not** emit duplicate rows for the same person to show both timestamps; put nuance in **`## Events used`** if needed.

**Table (mandatory heading):** `## List 4 — Qantas (in window)` — **after** **`## List 3 …`** and **before** **`## Actions / Updates`**.

**Columns (exact headers):** `Salesforce ID` · `Email` · `Timestamp of event (Sydney)` · `Type of event` · `Opportunity` · `Notes` (cells **blank**).

- **`Salesforce ID`:** **Default:** `salesforceFinancialAccountId` from **`argMax`** (or `argMaxIf`) over **`paybycard_payer_onboarding`** for that `person_id` through **`win_end`** (any status), **same spirit as List 3** unless product specifies a CRM-only field. If missing on telemetry, leave **blank** and say so under **`### List 4`** in **`## Events used`**.
- **`Opportunity`:** Plain English — **Pay By Card only:** **has** vs **does not have** an **Active** Pay By Card account using **≥1** `paybycard_payer_onboarding` with **`status = Active`** on that `person_id` **any time through `win_end`** (use **`JSONExtractString(properties, 'status') = 'Active'`** or equivalent; **apply AU + email + cohort filters** when determining whether the **person** is in scope — the **existence** check is lifetime-to-`win_end`, not limited to the list window). **Do not** add other products to this column or to List 4 stakeholder copy unless product re-opens scope with an agreed rule.

**Pattern blockquote:** If **≥2** rows **and** a clear shared pattern, add a **`>`** blockquote **above** the List 4 table (plain English, **no raw event names**).

**List 4 headline count:** Compute **`uniqExact(person_id)`** (or equivalent) for List 4 candidates **with the same filters** as the table. The **headline summary** must include **one bullet** stating how many **unique** customers **connected to or joined Qantas** in the window **when that count is > 0**; if **0**, omit a dedicated Qantas bullet or state none in one clause — keep the summary tight.

---

## Step 1b — Validate telemetry (mandatory before Confluence)

1. **Payment confirmed** (and similar "exists event" flags): use **`count() > 0`** (or equivalent) — **not** `LEFT JOIN` + `IS NOT NULL` alone on aggregates (empty join sides can show default UUID / epoch timestamps in HogQL/ClickHouse).
2. **Since launch KPIs:** re-use the same count / `uniq` discipline; internally verify **successful among completed ≤ completed** (distinct people) — **do not** surface this as exec copy.
3. **Spot-check** at least one **Yes** and one **No** for payment confirm (if both exist) against raw timelines vs Active / first Pay By Card screen view.
4. **Headline bullets must match** table aggregates **and** the **Since launch** numbers.
5. **List 4:** **`uniqExact(person_id)`** (or equivalent) over qualifying connect/join events in **`[win_start, win_end]`** with global filters **must equal** the number of rows in the List 4 table. Reconcile **Type** / **Timestamp** / **Opportunity** joins against at least one multi-event profile if any exist.

**Live doc (exec / stakeholder audience):** **Do not** add HogQL caveats, internal "sanity" lines (e.g. *successful ≤ completed*), italic footnotes about count-validation, or long explanations of why a window had zero events. Keep the body **outcome-oriented**; keep raw telemetry only in **`## Events used`** at the **end** of the doc (**after** **`## Actions / Updates`**).

---

## Step 2 — Live doc (markdown)

- **Title (mandatory, single format):** `Pay By Card and Rewards — Daily Report — ` + **`win_end`** in **`Australia/Sydney`** as calendar **`DD MMM YYYY`**, then **` (`** + **12-hour** **`hh:mm`** + **`am`** or **`pm`** (always lowercase) + **`) Sydney`** — spacing and punctuation exactly like: **`Pay By Card and Rewards — Daily Report — 21 Apr 2026 (07:40am) Sydney`**. **Two-digit minutes** always; hour **01–12** with **leading zero** for hours 1–9 (e.g. `07:40am`, `09:05am`; `12:00pm`, `11:59pm` are fine as shown). **Never** put **`win_start`** in the title. **Never** drop **`Pay By Card and Rewards — Daily Report`**, the **em dashes** (prefix **and** separator before **`win_end`**), or the closing **`Sydney`**. **Never** use **"Daily Daily"** — exactly one **Daily** in the stakeholder title.
- **Subtitle:** **Report run** time (Sydney) **and** the **exact `win_start` → `win_end`** the user confirmed in **Step 0**.
- **Audience filters line (Live doc body):** Keep **`person.properties.email`** exclusions and cohort exclusions as today; add **Australian customers only** in plain English (same scope as the AU HogQL predicate). Put the exact AU filter fragment only under **`## Events used`**, not as raw SQL in the exec summary.
- **Audience:** executives and stakeholders — short, scan-friendly, outcome-led; minimal raw event names outside the final **`## Events used`** block; no internal QA or telemetry essays in the body (**Step 1b**).
- **`## Since launch (running totals)`** — place this section **immediately after** subtitle **and before** the headline summary. One short intro line: **distinct Australian customers** (same AU scope as audience filters), **from 13 Apr 2026 09:00 Sydney** through **`win_end`**. Then **product-language** bullets only for: **Onboarded**; **Card added (verified)**; **Payments completed (distinct)** and **Successful among completed (distinct)**; **Customers with ≥2 successful payments**. **Do not** add **`### Events used (Since launch)`** or any separate "Events used" under Since launch.
- **Headline summary:** **one bullet per sentence** (~4–5 bullets), product language first, about **this report's `win_start` → `win_end`** (the lists window). When referring to List 3 behaviour, say **opened Pay By Card** — not **opened Pay** alone. When **List 4** row count **> 0**, include **one bullet** with **`uniqExact(person_id)`** (or equivalent) for **unique customers who connected to or joined Qantas** in the window (product language; **no** raw `event` names).
- **List 3 section heading (mandatory):** `## List 3 — Existing customers who opened Pay By Card (in window)` — table column headers should use **Pay By Card** where they describe that screen (e.g. **First Pay By Card view in window (Sydney)**), not generic **pay view**.
- **Four list sections (Lists 1–4):** **Per list:** list heading → **`>` Pattern blockquote** when rules say so (**List 1:** mandatory when **≥2** rows; **List 2 / 3 / 4:** if **≥2** rows **and** a clear pattern — **before** the table; omit Pattern when fewer than 2 rows or no pattern; **no snake_case** in Pattern) → **table only** — **do not** place **`### Events used`** (or raw event lists) immediately under any list.
- **Tables:** pipe tables; **Notes** column required, cells **blank**; **Submitted application** header exact; **Payment confirmed** / **Submitted application** use **`**Yes**`** / `No` and **⚠️** on **Yes** for submit column only; List 2 error column **—** / **`Not captured`** per your rules.
- **Do not** use `{info}` in markdown (does not render as a Confluence info panel).
- **`## Actions / Updates`:** same header order as the **prior** report the team uses as template (see **Step 3**); this section comes **after** the **four** list tables (List 4 immediately above it).
- **`## Events used` (last section in the doc):** **After** **`## Actions / Updates`**, append one consolidated telemetry appendix: **`### List 1`**, **`### List 2`**, **`### List 3`**, **`### List 4`** — in each, spell out raw `event` names, mobile/web pairs, key properties, and the **exact `win_start` / `win_end`** (and **`win_launch`** where relevant to that list's logic) used in HogQL. **`### List 4`** must document: connect/join **event** pairs (or **`TBD`** + how you will confirm in PostHog), dedupe rule (one row per `person_id`; earliest timestamp; combined **Type**), **Salesforce ID** source, **Opportunity** logic (**Active** Pay By Card lifetime-to-`win_end` only — no other products). Include a short **global exclusions** line: **AU-only** predicate (property or cohort — exact HogQL fragment), email domain excludes **and** the two **`NOT IN COHORT`** clauses (cohort names as in PostHog). **Optional:** **`### Since launch KPIs`** here only if the team wants the launch aggregate query notes in the doc (still **not** under the Since launch headline body).

---

## Step 3 — Carry forward Actions / Updates

Locate the appropriate **prior** report under **Pay By Card Reports** (same folder; titles now begin **`Pay By Card and Rewards — Daily Report —`**; team rule: often **calendar yesterday** in Sydney for daily cadence; for ad-hoc ranges, use the **most recent** report with an **Actions / Updates** table unless the user specifies otherwise). **Do not** assume the prior page title matches only a calendar date — titles follow **`win_end`** clock time (**Step 2**). Copy the first table under **`## Actions / Updates`**; match headers; carry non-**Done** rows; append new rows if needed.

---

## Step 4 — Draft markdown

Only after **Step 1b**, assemble full **Step 2** body including **Step 3** (**Actions / Updates**) **and** the final **`## Events used`** appendix. When bootstrapping a new file, start from **`.cursor/commands/report-pbc-activity.template.md`** (copy to e.g. `report-pbc-live.md` in the workspace root) and fill placeholders.

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
