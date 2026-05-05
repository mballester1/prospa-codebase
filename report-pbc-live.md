> **Live doc:** Working copy (Australia/Sydney window). Edits save in real time for anyone with access.

**Confluence title:** Pay By Card and Rewards — Daily Report — 4 May 2026 (07:43am) Sydney

**Report run:** 4 May 2026, 07:43am (Australia/Sydney)

**Window:** **1 May 2026, 06:21am** → **4 May 2026, 07:43am** (**Australia/Sydney**). **Inclusive end:** events on or before **07:43am** on the end date are included (upper bound aligned to PostHog `now()` in Sydney at query time).

**Audience filters:** `person.properties.email` excluding `@prospa.com` and `@graphyte.net.au`; **plus** PostHog cohort excludes matching dashboard filters (**not** in **Internal Staff**, **not** in **Test and Learn Users**).

**PostHog dashboard:** [https://us.posthog.com/project/254419/dashboard/830799](https://us.posthog.com/project/254419/dashboard/830799)

---

## Since launch (running totals)

Distinct people from **13 Apr 2026, 9:00am (Sydney)** through **4 May 2026, 07:43am (Sydney)** (same upper bound as this report’s end), **after** the audience filters above.

- **Onboarded:** **100** customers (Active payer onboarding at least once in range).
- **Card added (verified):** **34** customers (verified card surfaced via web UI events, **or** mobile `paybycard_card_verify_status` where `isVerified` is true, in range).
- **Payments completed (distinct):** **1** customer (at least one **payment confirm** in range).
- **Successful among completed (distinct):** **1** customer (at least one **confirm** and at least one **payment success** in range; order not required).
- **Customers with ≥2 successful payments:** **1** customer (repeat payers in range).

---

## Headline summary

- **Thirty** customers newly reached **Active** Pay By Card onboarding between **1 May 2026, 06:21am** and **4 May 2026, 07:43am Sydney**.
- **Thirty-seven** distinct customers **started** onboarding in that window; **eight** matched **started in window** and **never Active** through report end (see List 2).
- **Four** existing customers **opened Pay By Card** in the window after excluding new **Active** completions and in-window starters; **none** shows a **payment confirmation** strictly after their **first** in-window **Pay By Card** screen view through report end.
- **Payment confirmation** after **Active** for List 1: **none** of the thirty profiles show a confirm strictly after their earliest **Active** in the window through report end.
- **Twenty-three** unique customers **connected to or joined Qantas** (Rewards connect/join submit or success) between **1 May 2026, 06:21am** and **4 May 2026, 07:43am Sydney** (see List 4).

---

## List 1 — Completed onboarding (in window)

> **Post-Active pattern:** **Twenty-three** of **thirty** customers show **no Pay By Card pay screen** opened **after** they reached **Active** through report end—drop-off **before** returning to pay. **Seven** opened the pay screen at least once after **Active** (**four** a single time, **three** multiple times); **none** logged pay-form next, payment-field clicks, confirm-payment screen, payment confirm, or payment error—drop-off stays **on or right after** the pay screen, not deeper in checkout.


| Salesforce ID      | Email                                                                         | Reached Active (Sydney) | Payment confirmed after Active | Journey summary                                                                                                                                                                 | Notes |
| ------------------ | ----------------------------------------------------------------------------- | ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| a08Mo00000w7VgoIAE | [info@localseo.shop](mailto:info@localseo.shop)                               | 1 May 2026, 2:32pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w6zXJIAY | [luxeindulgencecouture@gmail.com](mailto:luxeindulgencecouture@gmail.com)     | 1 May 2026, 2:56pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**.           |       |
| a08Mo00000w7SPcIAM | [elnazk58@gmail.com](mailto:elnazk58@gmail.com)                               | 1 May 2026, 2:56pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w7pFhIAI | [riverinaagdrones@gmail.com](mailto:riverinaagdrones@gmail.com)               | 1 May 2026, 3:00pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w7MQeIAM | [davysingh111@gmail.com](mailto:davysingh111@gmail.com)                       | 1 May 2026, 3:14pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**.           |       |
| a08Mo00000w7wnRIAQ | [lukemckill@gmail.com](mailto:lukemckill@gmail.com)                           | 1 May 2026, 3:16pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w87NtIAI | [isaacnoble83@gmail.com](mailto:isaacnoble83@gmail.com)                       | 1 May 2026, 3:38pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w87J4IAI | [mayshalala@hotmail.com](mailto:mayshalala@hotmail.com)                       | 1 May 2026, 3:38pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w7nFZIAY | [info@gisbornemotel.com.au](mailto:info@gisbornemotel.com.au)                 | 1 May 2026, 3:48pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**.           |       |
| a08Mo00000w8BRVIA2 | [sayeedreyez@gmail.com](mailto:sayeedreyez@gmail.com)                         | 1 May 2026, 3:48pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen more than once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**. |       |
| a08Mo00000w7y2tIAA | [kenli.permana@gmail.com](mailto:kenli.permana@gmail.com)                     | 1 May 2026, 3:56pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w84Q6IAI | [southerncrossproperty@outlook.com](mailto:southerncrossproperty@outlook.com) | 1 May 2026, 4:39pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w8myvIAA | [r.rafed32@yahoo.com](mailto:r.rafed32@yahoo.com)                             | 1 May 2026, 5:24pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w90SRIAY | [riosremovals@gmail.com](mailto:riosremovals@gmail.com)                       | 1 May 2026, 7:09pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w8rAgIAI | [fekrat14@gmail.com](mailto:fekrat14@gmail.com)                               | 1 May 2026, 7:10pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w918MIAQ | [pandherpaintingservices@gmail.com](mailto:pandherpaintingservices@gmail.com) | 1 May 2026, 7:17pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000w99IpIAI | [haiphumartlalor@outlook.com](mailto:haiphumartlalor@outlook.com)             | 1 May 2026, 7:46pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wA9i9IAC | [isabellakaya@live.com.au](mailto:isabellakaya@live.com.au)                   | 2 May 2026, 5:03am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wA8B0IAK | [rosine.aspeotis@gmail.com](mailto:rosine.aspeotis@gmail.com)                 | 2 May 2026, 5:39am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wAGq5IAG | [alex.rizzo@me.com](mailto:alex.rizzo@me.com)                                 | 2 May 2026, 6:30am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wAJZRIA4 | [darren@hicaliber.com.au](mailto:darren@hicaliber.com.au)                     | 2 May 2026, 7:03am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wAadXIAS | [efraim_dasalla@yahoo.com](mailto:efraim_dasalla@yahoo.com)                   | 2 May 2026, 11:09am     | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wBEMRIA4 | [viktoria@paritysl.com](mailto:viktoria@paritysl.com)                         | 2 May 2026, 3:27pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wC1JtIAK | [besselect@gmail.com](mailto:besselect@gmail.com)                             | 2 May 2026, 8:18pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**.           |       |
| a08Mo00000wC5k5IAC | [passioncafe3197@gmail.com](mailto:passioncafe3197@gmail.com)                 | 2 May 2026, 9:06pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wCrryIAC | [smokedtoserve@gmail.com](mailto:smokedtoserve@gmail.com)                     | 3 May 2026, 7:42am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wDATCIA4 | [wiegardelectrical@hotmail.com](mailto:wiegardelectrical@hotmail.com)         | 3 May 2026, 8:23am      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |
| a08Mo00000wDJOPIA4 | [info@instyledecor.com.au](mailto:info@instyledecor.com.au)                   | 3 May 2026, 9:35am      | No                             | Reached **Active**; **opened the Pay By Card pay screen more than once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**. |       |
| a08Mo00000wEUHlIAO | [ksdhillon03@gmail.com](mailto:ksdhillon03@gmail.com)                         | 3 May 2026, 8:38pm      | No                             | Reached **Active**; **opened the Pay By Card pay screen more than once** after that; **no** form next, field clicks, confirm screen, or confirm—drop-off **on the pay screen**. |       |
| a08Mo00000wEYObIAO | [redcherryphotography@me.com](mailto:redcherryphotography@me.com)             | 3 May 2026, 9:13pm      | No                             | Reached **Active**; **no Pay By Card pay screen** telemetry after that through report end—drop-off **before** returning to pay.                                                 |       |


---

## List 2 — Started onboarding but did not complete (lifetime to report end)

“Never **Active**” = no `paybycard_payer_onboarding` with `status = Active` in project history through **4 May 2026, 07:43am Sydney**, for that profile on the **lifetime Active** lookup (**cohort filters are not applied** to that history check). Salesforce is blank on List 2 rows.


| Email                                                                 | Salesforce ID | Started (Sydney)   | Submitted application | Error code(s) | Summary                                                                                                                                          | Notes |
| --------------------------------------------------------------------- | ------------- | ------------------ | --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| [ccbbgardening@hotmail.com](mailto:ccbbgardening@hotmail.com)         |               | 1 May 2026, 7:46am | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [aangeles1994@gmail.com](mailto:aangeles1994@gmail.com)               |               | 1 May 2026, 2:55pm | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [ohmay_25@hotmail.com](mailto:ohmay_25@hotmail.com)                   |               | 1 May 2026, 3:32pm | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [andrew_walmsley42@outlook.com](mailto:andrew_walmsley42@outlook.com) |               | 2 May 2026, 9:03am | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [info@jalapagardening.com.au](mailto:info@jalapagardening.com.au)     |               | 2 May 2026, 9:06am | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [dfulford2005@gmail.com](mailto:dfulford2005@gmail.com)               |               | 3 May 2026, 6:26am | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [barberzone.au@gmail.com](mailto:barberzone.au@gmail.com)             |               | 3 May 2026, 3:45pm | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |
| [zonyolaes@gmail.com](mailto:zonyolaes@gmail.com)                     |               | 4 May 2026, 1:57am | No                    | Not captured  | Started Pay By Card onboarding in the window; has not reached **Active** through report end; no submitted application logged through report end. |       |


---

## List 3 — Existing customers who opened Pay By Card (in window)

> These customers **opened Pay By Card** during the window as existing customers (excludes List 1 and in-window starters); telemetry does not show a **payment confirmation** after their **first** in-window **Pay By Card** screen view before report end.


| Email                                                                 | Salesforce account (latest onboarding) | First Pay By Card view in window (Sydney) | Payment confirmed after that view | Summary                                                                                                                                 | Notes |
| --------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| [david@loqium.com.au](mailto:david@loqium.com.au)                     | a08Mo00000uwX1lIAE                     | 1 May 2026, 8:16am                        | No                                | Opened the **Pay By Card** pay screen in the window; no payment confirmation logged after that first in-window view through report end. |       |
| [innovativetraders6@gmail.com](mailto:innovativetraders6@gmail.com)   | a08Mo00000vWyl1IAC                     | 1 May 2026, 2:49pm                        | No                                | Opened the **Pay By Card** pay screen in the window; no payment confirmation logged after that first in-window view through report end. |       |
| [intutosecurity@iprimus.com.au](mailto:intutosecurity@iprimus.com.au) | a08Mo00000ur5SjIAI                     | 2 May 2026, 4:12pm                        | No                                | Opened the **Pay By Card** pay screen in the window; no payment confirmation logged after that first in-window view through report end. |       |
| [valleycoffeeblend@gmail.com](mailto:valleycoffeeblend@gmail.com)     | a08Mo00000w1HexIAE                     | 3 May 2026, 6:28pm                        | No                                | Opened the **Pay By Card** pay screen in the window; no payment confirmation logged after that first in-window view through report end. |       |


---

## List 4 — Qantas (in window)

> **Pattern:** Customers split between **connect** and **join** Qantas in this window (**twelve** first touched **connect**, **eleven** **join**). **Five** of **twenty-three** already have an **Active** Pay By Card account on telemetry.


| Salesforce ID      | Email                                                                               | Timestamp of event (Sydney) | Type of event       | Opportunity                                   | Notes |
| ------------------ | ----------------------------------------------------------------------------------- | --------------------------- | ------------------- | --------------------------------------------- | ----- |
|                    | [kieran@colemanplumbing.net.au](mailto:kieran@colemanplumbing.net.au)               | 1 May 2026, 9:56am          | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [nav.mahajan@gmail.com](mailto:nav.mahajan@gmail.com)                               | 1 May 2026, 11:40am         | Connected to Qantas | **Pay By Card:** does not have Active account |       |
| a08Mo00000w6zXJIAY | [luxeindulgencecouture@gmail.com](mailto:luxeindulgencecouture@gmail.com)           | 1 May 2026, 3:04pm          | Connected to Qantas | **Pay By Card:** has Active account           |       |
| a08Mo00000uYyuNIAS | [matt@wisewindowcleaning.com.au](mailto:matt@wisewindowcleaning.com.au)             | 1 May 2026, 3:09pm          | Connected to Qantas | **Pay By Card:** has Active account           |       |
|                    | [jaycairns83@gmail.com](mailto:jaycairns83@gmail.com)                               | 1 May 2026, 3:14pm          | Connected to Qantas | **Pay By Card:** does not have Active account |       |
| a08Mo00000w87J4IAI | [mayshalala@hotmail.com](mailto:mayshalala@hotmail.com)                             | 1 May 2026, 3:37pm          | Connected to Qantas | **Pay By Card:** has Active account           |       |
|                    | [info@graciebjj.com.au](mailto:info@graciebjj.com.au)                               | 1 May 2026, 3:40pm          | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [startfreshfruitmarket@outlook.com.au](mailto:startfreshfruitmarket@outlook.com.au) | 1 May 2026, 4:16pm          | Joined Qantas       | **Pay By Card:** does not have Active account |       |
| a08Mo00000w90SRIAY | [riosremovals@gmail.com](mailto:riosremovals@gmail.com)                             | 1 May 2026, 7:11pm          | Joined Qantas       | **Pay By Card:** has Active account           |       |
|                    | [maddie@lessmessmaddie.com](mailto:maddie@lessmessmaddie.com)                       | 1 May 2026, 10:47pm         | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [phillips19@live.com](mailto:phillips19@live.com)                                   | 2 May 2026, 6:49am          | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [michael@bxdprojects.com.au](mailto:michael@bxdprojects.com.au)                     | 2 May 2026, 6:56am          | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [carmel.r@katescareconnect.com](mailto:carmel.r@katescareconnect.com)               | 2 May 2026, 8:38am          | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [tim.brouff@gmail.com](mailto:tim.brouff@gmail.com)                                 | 2 May 2026, 9:18am          | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [manish9770@yahoo.in](mailto:manish9770@yahoo.in)                                   | 2 May 2026, 1:55pm          | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [htupu@vinecare.com.au](mailto:htupu@vinecare.com.au)                               | 2 May 2026, 10:12pm         | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [doug@progressiveplumbing.co.nz](mailto:doug@progressiveplumbing.co.nz)             | 2 May 2026, 11:56pm         | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [soundplumbingandgas@gmail.com](mailto:soundplumbingandgas@gmail.com)               | 3 May 2026, 4:48am          | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [operations@skldsecurity.com.au](mailto:operations@skldsecurity.com.au)             | 3 May 2026, 12:18pm         | Connected to Qantas | **Pay By Card:** does not have Active account |       |
| a08Mo00000wEYObIAO | [redcherryphotography@me.com](mailto:redcherryphotography@me.com)                   | 3 May 2026, 9:14pm          | Joined Qantas       | **Pay By Card:** has Active account           |       |
|                    | [info@mikaandmax.com](mailto:info@mikaandmax.com)                                   | 3 May 2026, 10:10pm         | Joined Qantas       | **Pay By Card:** does not have Active account |       |
|                    | [admin@urbanmanbarber.com](mailto:admin@urbanmanbarber.com)                         | 3 May 2026, 11:56pm         | Connected to Qantas | **Pay By Card:** does not have Active account |       |
|                    | [dean.lestal@gmail.com](mailto:dean.lestal@gmail.com)                               | 4 May 2026, 1:11am          | Joined Qantas       | **Pay By Card:** does not have Active account |       |


---

## Actions / Updates

*Carried forward (non-**Done**) from* [PBC Daily Report — 01 May 2026 (06:21am) Sydney](https://prospa.atlassian.net/wiki/spaces/PRODUCT/pages/4764303368); headers matched.


| **Owner**                | **Item**                                                                               | **Context**                                                                                                                                                                                                      | **Status**                            |
| ------------------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| @Marc Ballester Canellas | TTP account — customer asked about TTP                                                 | TTP had `initialise` error **5010**; **LivePayments** noted account likely shut down after prior **dispute**; [merchantsecurity@livepayments.com](mailto:merchantsecurity@livepayments.com) contacted for detail | In progress - ask for additional info |
| @Alysha Laupama          | SMS - Cohort 1: Reminder of 20k offer Email Reminder - Cohort 2: Reminder of 20k offer |                                                                                                                                                                                                                  | In progress                           |
| @Alysha Laupama          | **optimise nurture**                                                                   | [Slack thread](https://prospa.slack.com/archives/C0AGFQXFNAW/p1777439467058829)                                                                                                                                  | In progress                           |
| @Keng Jin Chew           | **Release to cohort 3**                                                                |                                                                                                                                                                                                                  | In progress                           |
| Lorenzo                  | data clarify                                                                           |                                                                                                                                                                                                                  |                                       |


---

## Events used

*HogQL bounds compare Sydney-local instants to stored UTC timestamps via* `toTimeZone(timestamp, 'Australia/Sydney')` *and* `toDateTime(..., 'Australia/Sydney')` *. Upper bound for this run uses PostHog* `now()` *evaluated in Sydney on the query plane.*

**Global exclusions on** `events`: `person.properties.email` excludes `@prospa.com` / `@graphyte.net.au`; `person_id NOT IN COHORT 'Internal Staff'` and `person_id NOT IN COHORT 'Test and Learn Users'`.

**List window:** from **1 May 2026 06:21:00** Sydney through **4 May 2026** upper bound from PostHog `now()` in Sydney (inclusive). **Since launch:** from **13 Apr 2026 09:00:00** Sydney through the same inclusive upper bound.

**List 2 lifetime Active:** the “never Active” subquery uses **all** historical `paybycard_payer_onboarding` rows with `status = Active` through the Sydney upper bound **without** cohort or internal-email filters on that lookup, per playbook.

### List 1

- **Active onboarding:** `paybycard_payer_onboarding` + `JSONExtractString(properties, 'status') = 'Active'` (or equivalent); window filter on Sydney timestamps between list `win_start` and `win_end`; global exclusions on candidate rows.
- **Salesforce ID:** `argMinIf` / earliest **Active** row in the list window for `salesforceFinancialAccountId`.
- **Payment confirm after Active:** `paybycard_payment_confirm__click` **or** `Pay by Card Payment Confirm Button Clicked`, strictly **after** earliest **Active** in window through `win_end`.
- **Journey / drop-off (post-Active):** furthest step inferred from events **strictly after** earliest **Active** in window through `win_end`: pay screen viewed pair (`paybycard_pay__viewed` / `Pay by Card Pay Viewed`); pay form next (mobile + web names); amount / description / reference clicks; confirm-payment **viewed** pair; payment **confirm** click pair; payment **error** pair. **Pattern** and per-row summaries use product language only in the Live doc body.

### List 2

- **Started (candidates):** `paybycard_application_started` in list window with cohort + email filters.
- **Strict List 2:** candidates whose `person_id` is **not** in lifetime Active set (subquery above).
- **Submitted application:** any `paybycard_application_submitted` **or** `Pay by Card Application Submitted` through `win_end` (`max(if(...))`). **Error code(s)** not batch-derived this run (**Not captured**).

### List 3

- **Pay By Card screen:** `paybycard_pay__viewed` **or** `Pay by Card Pay Viewed` between list `win_start` and `win_end`; exclude List 1 person_ids (Active in window with filters) and exclude distinct in-window `paybycard_application_started` person_ids (with filters).
- **Salesforce:** separate `argMax(properties.salesforceFinancialAccountId, timestamp)` over `paybycard_payer_onboarding` for the listed `person_id` set (any status).
- **Confirm after first in-window Pay By Card view:** confirm pair strictly after `min(timestamp)` of in-window pay-view events through `win_end`.

### List 4

- **Window:** inclusive `**win_start` → `win_end`** in `**Australia/Sydney**` (same bounds as Lists 1–3 for this run).
- **Qualifying events (Rewards / Qantas — web `event` names from `ai/apps/rewards` analytics constants):** `**Rewards Connect Submitted`** **or** `**Rewards Connect Succeeded`** counts as **connect**; `**Rewards Join Submitted`** **or** `**Rewards Join Succeeded`** counts as **join**. **Excluded from List 4 population:** page views only (`Rewards Connect Viewed`, `Rewards Join Viewed`) — not used for “connected or joined” rows.
- **Deduping:** **one row per `person_id`**. `**Timestamp of event (Sydney)**` = **earliest** qualifying event timestamp in the window (displayed in Sydney local time). `**Type of event`:** **Connected to Qantas** if any connect qualifying event fired; **Joined Qantas** if any join qualifying event fired; **both** phrases in one cell if both fired.
- **Global filters:** internal email excludes; `**person_id NOT IN COHORT 'Internal Staff'`** and `**person_id NOT IN COHORT 'Test and Learn Users'**` (HogQL run used cohort ids **220416** / **224035** where name resolution required).
- **Salesforce ID:** `argMax(JSONExtractString(properties, 'salesforceFinancialAccountId'), timestamp)` over `**paybycard_payer_onboarding`** for that `person_id` through `**win_end**` (any status); **blank** if no onboarding row carries an id.
- **Opportunity — Pay By Card:** **has Active account** if **≥1** `paybycard_payer_onboarding` with `**JSONExtractString(properties, 'status') = 'Active'`** on that `person_id` at any time **through `win_end`** (Sydney upper bound); otherwise **does not have Active account**. Cohort/email filters apply to **who** appears in List 4; the **Active** existence check scans that person’s onboarding history through `**win_end`**. **Opportunity** is Pay By Card only (no other products in this report).
- **Validation:** `**uniqExact(person_id)`** over qualifying events in window **= 23** = table row count.

### Since launch KPIs

- **Onboarded:** distinct `person_id` with Active onboarding in launch range.
- **Verified card:** `Pay by Card Verified Card Viewed`, `Pay by Card Verified Card Clicked`, **or** `paybycard_card_verify_status` with `properties.isVerified = true`.
- **Payments:** confirm pair; success pair `paybycard_payment__success` **or** `Pay By Card Payment Succeeded`; intersection and ≥2-success use the same launch window and global exclusions.