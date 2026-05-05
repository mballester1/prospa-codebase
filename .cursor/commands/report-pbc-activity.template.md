> **Live doc:** Working copy (Australia/Sydney window). Edits save in real time for anyone with access.

**Report run:** `<DD MMM YYYY, hh:mmam|pm> (Australia/Sydney)>`

**Window:** **`<win_start human>`** → **`<win_end human>`** (**Australia/Sydney**). **Inclusive end:** `<yes/no>` …

**Audience filters:** `person.properties.email` excluding `@prospa.com` and `@graphyte.net.au`; PostHog cohorts **Internal Staff** and **Test and Learn Users** excluded.

**PostHog dashboard:** `<project dashboard URL>`

---

## Since launch (running totals)

`<Intro: distinct people from 13 Apr 2026 09:00 Sydney through win_end>`

* **Onboarded:** …
* **Card added (verified):** …
* **Payments completed (distinct):** …
* **Successful among completed (distinct):** …
* **Customers with ≥2 successful payments:** …

---

## Headline summary

* `<List 1–3 bullets>`
* **When List 4 row count > 0:** **`<N>`** unique customers **connected to or joined Qantas** between **`win_start`** and **`win_end`** Sydney (see List 4).

---

## List 1 — Completed onboarding (in window)

`>` `<Optional List 1 Pattern — plain English, no raw event names>`

| Salesforce ID | Email | Reached Active (Sydney) | Payment confirmed after Active | Journey summary | Notes |
| --- | --- | --- | --- | --- | --- |
| … | … | … | No / **Yes** | One line: drop-off as `` `paybycard_*` / `Pay by Card …` `` backticks (see command doc) |  |

---

## List 2 — Started onboarding but did not complete (lifetime to report end)

`>` `<Optional List 2 Pattern>`

| Email | Salesforce ID | Started (Sydney) | Submitted application | Error code(s) | Summary | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| … |  | … | No / **⚠️Yes** | … | … |  |

---

## List 3 — Existing customers who opened Pay By Card (in window)

`>` `<Optional List 3 Pattern>`

| Email | Salesforce account (latest onboarding) | First Pay By Card view in window (Sydney) | Payment confirmed after that view | Summary | Notes |
| --- | --- | --- | --- | --- | --- |
| … | … | … | No / **Yes** | One line: furthest/drop-off `` `paybycard_*` / `Pay by Card …` `` (see command doc) |  |

---

## List 4 — Qantas (in window)

`>` `<Optional List 4 Pattern — if ≥2 rows and a clear pattern>`

| Salesforce ID | Email | Timestamp of event (Sydney) | Type of event | Opportunity | Notes |
| --- | --- | --- | --- | --- | --- |
| … | … | … | Connected to Qantas / Joined Qantas / both (one row per person_id) | Pay By Card: has Active account / does not have Active account |  |

---

## Actions / Updates

`<Carry-forward intro + table>`

---

## Events used

`<Global exclusions, win_start / win_end / win_launch>`

### List 1

`<raw events, pairs, HogQL notes>`

### List 2

`<raw events, pairs, HogQL notes>`

### List 3

`<raw events, pairs, HogQL notes>`

### List 4

`<Connect + join event pairs — TBD until PostHog/code confirm>`

* **Window:** inclusive **`win_start` → `win_end`** in Sydney.
* **Dedupe:** one row per **`person_id`**; **Timestamp** = earliest qualifying event; **Type** combines connect + join in one cell if both.
* **Salesforce ID:** default from latest `paybycard_payer_onboarding` row through `win_end` unless product specifies otherwise; blank if unknown.
* **Opportunity — Pay By Card:** ever **Active** `paybycard_payer_onboarding` through **`win_end`** (with global filters on the person). **No other products** in this column.

### Since launch KPIs

`<optional>`
