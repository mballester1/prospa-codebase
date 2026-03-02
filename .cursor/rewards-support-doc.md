# Rewards – Spec Sheet & FAQs

## 1. Product Overview

* Prospa Rewards (the "Rewards program") lets customers with a Prospa Account earn **Reward Points** on eligible activity (e.g. eligible payments when rewards are enabled).
* The first product to earn points at launch is **[Pay By Card](https://prospa.atlassian.net/wiki/x/DIDADgE)**, awarding **1 Reward Point per full $1 of eligible transaction value.**
* In-app toggle during Pay By Card payment lets customers opt in to earn points per transaction.
* Points can be redeemed for **Qantas Points** (via Qantas Business Rewards [QBR]) at a rate of **2 Reward Points = 1 Qantas Point**.
* Additional redemption options (e.g. gift cards) may be offered in future.
* The program is product-agnostic at the account level: earning and redemption rules can vary by product (e.g. Pay By Card, Line of Credit, Business Account).

## 2. Key Features

* **Earning:** 1 Reward Point per full $1 of eligible transaction value (rounded down, excluding GST and taxes). A **reward fee** of 1% (+ GST) generally applies when rewards are enabled on a payment product (e.g. Pay By Card).
* **Redemption:** Minimum **2,000 Reward Points** to redeem. Redemption in **increments of 2 Reward Points** (because 2 Reward Points = 1 Qantas Point; partial Qantas points are not issued). No service fee on redemption.
* **Qantas:** Redemption to Qantas Points requires an eligible Qantas Business Rewards (QBR) membership. On successful redemption, Reward Points are converted **instantly** into Qantas Points and appear in the customer's QBR account. Customers can join the Qantas Business Rewards program for free through our digital channels (Prospa App and customer portal).
* **Pending / adjustments:** Points may be pending until settlement and any verification or dispute window. Prospa may reverse or cancel points for refunds, chargebacks, errors, or ineligible activity.
* **Expiry:** Points expire after **18 months of inactivity** (no qualifying earning activity). Points are forfeited on account closure, ABN deregistration, insolvency, breach of terms, or misuse.

## 3. How It Works (Step-by-Step)

**Earning**
1. Customer has an active Prospa Account and (where required) opts in to rewards for the product (e.g. Pay By Card).
2. Customer completes eligible activity (e.g. makes an eligible payment with rewards enabled). The reward fee (e.g. 1% + GST) is charged at the time of the transaction.
3. Points accrue on **successful settlement** of the transaction, not on authorisation. They may show as pending until settlement and any verification period.
4. Earn rate: 1 Reward Point per full $1 of eligible transaction value (rounded down; GST and taxes excluded). Excluded transaction types and MCC list apply as defined by Prospa.

**Redemption to Qantas**
1. Customer must have at least **2,000 Reward Points** and an eligible QBR membership (or join QBR where offered through Prospa).
2. Customer chooses to redeem in increments of 2 Reward Points. Conversion: **2 Reward Points = 1 Qantas Point**.
3. On successful redemption, Prospa converts the Reward Points to Qantas Points and transfers them to QBR. **The points appear in the customer's QBR account instantly** after successful conversion.
4. Qantas' terms govern the use and expiry of Qantas Points after conversion. Prospa is not responsible for QBR account access or Qantas-side issues once the transfer is complete.

## 4. Eligibility & Requirements

* **Account:** Active Prospa Account (per Australian ABN). Points are at entity level; individual users act as authorised users for the business.
* **Earning:** Eligible products and transaction types as defined by Prospa. Excluded transactions (including certain MCCs) do not earn points. Rewards must be enabled for the product/transaction where required (e.g. Pay By Card). **Excluded industries:** Payments to certain industries (by MCC) are not permitted in our digital channels—see [Pay By Card – Spec & FAQs](https://prospa.atlassian.net/wiki/x/DIDADgE) (Excluded industries (MCC) section) for the list. Customers cannot submit a payment to those billers in the app or web app (hard stop), so no points can be earned on them.
* **Redemption:** Minimum 2,000 Reward Points; redemption in increments of 2. For Qantas: must be an eligible QBR member (or join via Prospa where available). Account in good standing; no breach of Prospa product or Rewards terms.
* **Forfeiture:** Points are forfeited on account closure, ABN deregistration, insolvency, breach of terms, fraud/misuse, or 18 months of inactivity.

## 5. Pricing & Fees

* **Earning:** A **reward fee** of 1% (+ GST) applies when rewards are enabled on eligible payments (e.g. Pay By Card). The customer is informed of the fee and earning potential before the transaction. No fee for redemption.
* **Redemption:** No service fee for redeeming Reward Points. Third-party partners (e.g. Qantas) may have their own fees or conditions; Prospa is not responsible for those.

## 6. Customer Value Proposition

* Earn Reward Points on eligible spending (1 pt per $1 on eligible transactions when rewards are enabled).
* Redeem for Qantas Points (2 Reward Points = 1 Qantas Point) and use them for travel or other QBR rewards. Conversion is instant on successful redemption.
* With Pay By Card, "double dip": keep card points and earn Reward Points for an additional 1% reward fee.
* Points are non-transferable and have no cash value; value depends on how they're redeemed.

## 7. Process / Transaction Flow

* **Earning:** Transaction with rewards enabled → settlement → points calculated (1 pt per $1, rounded down, ex GST) → points recorded (may be pending) → after any verification/reconciliation period, points become available. Refund/chargeback → points reversed or adjusted.
  * See [Pay By Card & Earn UX](https://www.figma.com/design/z1AjqVqYuqdVSuuf2pGhZ6/Pay---Rewards?node-id=872-16967&t=UucTEyTYhOqfGXBb-4)
* **Redemption:** Customer has ≥2,000 points and (for Qantas) eligible QBR → selects amount in increments of 2 Reward Points → submits redemption → Prospa converts (2:1) and transfers to QBR → **Qantas Points appear in QBR account instantly** on success. Prospa's responsibility ends on successful transfer. For membership issues, contact Qantas directly at 13 74 78.
  * See [Qantas Redemption UX](https://www.figma.com/design/z1AjqVqYuqdVSuuf2pGhZ6/Pay---Rewards?node-id=103-32983&t=UucTEyTYhOqfGXBb-4)

## 8. Edge Cases & Exceptions

* **Excluded transactions / MCC:** Certain transaction types or merchant categories do not earn points; see excluded industries list in [Pay By Card spec](https://prospa.atlassian.net/wiki/x/DIDADgE). Payments to excluded industries are blocked in app and web app (hard stop)—customers cannot submit a payment to those billers, so no points can be earned. Support should refer to the internal list; do not guess.
* **Pending points:** Points may show as pending until settlement and any partner reconciliation (e.g. Qantas). Customer-facing message: after successful redemption, Qantas Points appear in QBR instantly.
* **Refunds / chargebacks:** Points earned on the original transaction may be reversed or reduced. No compensation for forfeited or reversed points.
* **Below minimum:** Redemption below 2,000 points is not allowed. Customer must earn more points first.
* **QBR ineligible:** If the customer is not an eligible QBR member, they must join QBR (or use another redemption option when available) before redeeming to Qantas.
* **Account closed / breach:** All points are forfeited; no payout or replacement.

## 9. Common Issues + Agent Response Steps

Please use #sme-apps-support to escalate any questions or issues.

| Issue | What to do |
| --- | --- |
| "My points are missing or wrong." | Ask customer to check transaction history and whether the transaction settled. Confirm rewards were enabled for that payment. Explain pending period if applicable. If refund/chargeback occurred, explain that points may have been reversed. |
| "I don't have enough to redeem." | Minimum is 2,000 Reward Points. Customer must earn more via eligible activity. Redemption is in increments of 2 points. |
| "Qantas Points didn't arrive." | Confirm redemption completed successfully in our system. If yes, tell the customer the points are transferred instantly and should appear in their QBR account; suggest checking QBR balance and Qantas' processing. For QBR or Qantas-side issues, direct to Qantas. |
| "I was charged a reward fee but didn't get points." | Confirm the payment settled and rewards were enabled. If the transaction was refunded or charged back, points would be reversed. Escalate if our records show eligible settled spend but no points. |
| "Points expired." | Points expire after 18 months of no earning activity. Expired points cannot be reinstated. Encourage customer to earn and redeem before expiry next time. |
| "Can I get cash for my points?" | No. Points cannot be exchanged for cash. They can be redeemed for Qantas Points (or other options when available). |

## 10. Known Limitations / Constraints

* **Excluded industries:** Payments to billers in excluded industries (MCC list in Pay By Card spec) are not permitted in our digital channels—hard stop in app and web app before payment can be submitted. No points can be earned on those payments.
* **MCC / excluded transactions:** The list of excluded transaction types and MCCs is maintained by Prospa; support should refer to the internal list when published. Do not assume which merchants or categories earn points.
* **Earn rate:** 1 pt per $1 (rounded down, ex GST) unless a different rate is clearly stated for a specific product or promotion.
* **Redemption:** Only in increments of 2 Reward Points (2:1 Qantas). Minimum 2,000 points. No cash redemption unless stated by Prospa.
* **Liability:** After successful conversion and transfer to a partner (e.g. Qantas), Prospa is not responsible for partner availability, blackout dates, or use of the partner's rewards. Disputes after transfer are with the partner.
* **Program changes:** Earn rates, redemption options, and rules can change with notice per the Rewards T&Cs.

---

# Rewards – FAQs

1. **What are Reward Points?**  
   Points you earn on eligible activity (e.g. payments when rewards are on). Redeem for Qantas Points (2 Reward Points = 1 Qantas Point) or other options we offer.

2. **How do I earn Reward Points?**  
   When rewards are on for an eligible product (e.g. Pay By Card), you earn 1 Reward Point per $1 of eligible spend (rounded down). A 1% reward fee + GST applies when you opt in for that payment.

3. **What is the reward fee?**  
   When you opt in on a payment, we charge 1% reward fee (+ GST) on that transaction. We'll show you the fee and points before you confirm.

4. **Do I earn points on every payment?**  
   No. Only eligible transactions with rewards on earn points. The first product at launch is [**Pay By Card**](https://prospa.atlassian.net/wiki/x/DIDADgE)—1 Reward Point per full $1 of eligible value. Some types or merchants are excluded (see Pay By Card spec). Amount rounded down; GST excluded.

5. **When do my points show up?**  
   When the transaction **settles**, not when you authorise. They may show as pending briefly. For Qantas, once redemption succeeds, Qantas Points appear in your QBR account straight away.

6. **What is the minimum to redeem?**  
   You need at least **2,000 Reward Points** to redeem. You redeem in **increments of 2 Reward Points** (2 Reward Points = 1 Qantas Point).

7. **How do I redeem for Qantas Points?**  
   You need a Qantas Business Rewards (QBR) membership—join free through our app or portal if you're not a member. Choose how many points to convert; 2 Reward Points = 1 Qantas Point. After a successful redemption, Qantas Points land in your QBR account straight away.

8. **I redeemed but don't see Qantas Points.**  
   If redemption completed in our system, points are sent to Qantas straight away and should show in your QBR account. Check your QBR balance; for QBR or Qantas issues, contact Qantas on 13 74 78.

9. **Do points expire?**  
   Yes. After **18 months of inactivity** (no new points earned), they expire. We can't reinstate them. We may also forfeit points if your account closes or terms are breached.

10. **Can I get cash for my points?**  
    No. Redeem for Qantas Points (or other options we offer).

11. **Why were my points reversed?**  
    Refund, chargeback, or ineligible transaction—we may also adjust for errors or misuse. We don't compensate for reversed or forfeited points.

12. **Is there a fee to redeem?**  
    No. We don't charge to redeem. Partners may have their own fees or conditions.

13. **Can I transfer points to someone else?**  
    No. Points are non-transferable and linked to your Prospa Account (and ABN).

14. **Why didn't I earn points on my Pay By Card payment?**  
    Only if you had rewards on for that payment. No opt-in = service fee only, no Reward Points.

15. **What if I have a refund on a payment I earned points on?**  
    We may reverse or reduce the points. The reward fee isn't refunded for the points portion unless our terms say otherwise.

16. **Do I need a Qantas account to earn Reward Points?**  
    No. You only need Qantas Business Rewards (QBR) to **redeem** for Qantas Points.

17. **How do I join Qantas Business Rewards?**  
    Join through the Prospa redemption flow when we offer it (e.g. free with Prospa). Your ABN is your QBR membership number. Qantas' terms apply once you're a member.

18. **What's the conversion rate?**  
   **2 Reward Points = 1 Qantas Point.** So 2,000 Reward Points = 1,000 Qantas Points. Redeem in whole increments of 2.

19. **Are there blackout dates or limits on Qantas?**  
    Qantas' terms apply (availability, blackout dates). Once points are transferred, we're not responsible for Qantas' rules or availability.

20. **Who do I contact for points or redemption issues?**  
    Missing or incorrect points, or redemption not completing: contact Prospa support. For Qantas Points already in your QBR account: contact Qantas.

21. **What happens to my points if I close my Prospa account?**  
    All unused points are forfeited. We don't pay out or replace them.

22. **Can I earn points on bank transfers?**  
    Pay By Card is card-only (Visa, Mastercard, Amex debit or credit—no bank transfers), so this doesn't apply to Pay By Card. If we add other products that support bank transfer in future, we'll update the program rules.

23. **Why is my balance "pending"?**  
    Points may be pending until the transaction settles and we've finished verification. Then they're available. For Qantas, points land in your QBR account straight away after a successful conversion.

24. **Are there bonus or promotional points?**  
    We may run promos with bonus points—subject to the promo terms. Same expiry and forfeiture rules apply unless we say otherwise.

25. **What if I have a dispute on the original payment?**  
    If the payment is refunded or charged back, we'll reverse the points. For disputes about the payment itself, use the normal dispute process—points will be adjusted with the outcome.
