# Pay By Card – Spec Sheet & FAQs

## 1. Product Overview

Pay By Card (also referred to as Prospa Pay in some materials) allows Prospa customers to pay billers (including the ATO and other suppliers who may not accept card directly) using their credit or debit card. Funds are transferred to the biller via the platform; the customer is charged a **service fee** (card-dependent) and may optionally pay a **reward fee** to earn Reward Points on the transaction ("double dip": card points + Reward Points).

## 2. Key Features

- **Pay billers** via Visa, Mastercard, or Amex debit and credit cards only. Australian-issued cards only; no international cards or bank transfers.
- **Service fee** varies by card type (see Pricing).
- **Optional Rewards:** When rewards are enabled, customers earn 1 Reward Point per $1 of eligible transaction value and pay an additional **reward fee** (1% + GST). They also keep their card's own reward points ("double dip").
- Fee calculation is shown before the customer confirms the payment.
- Payment requests are processed via the Live Payments partner; status updates (e.g. Completed, Failed, Pending) are received via webhooks and reflected in the platform.

## 3. How It Works (Step-by-Step)

1. **Onboarding:** Customer completes Pay By Card onboarding (payer creation with the partner). Once approved, they can add payment methods and billers.
2. **Add payment method:** Customer adds a Visa, Mastercard, or Amex card (Australian-issued debit or credit only; no international cards). Card verification may be required.
3. **Add biller (payee):** Customer adds a biller (e.g. ATO, supplier) with required details (e.g. BSB, account number, account name, reference). The biller may need to be verified (Approved / Rejected / Unverified).
4. **Create payment:** Customer enters amount, selects payment method and biller, and (if applicable) opts in to rewards. The system calculates and displays service fee and, when selected, reward fee (and GST). Total charge = bill amount + fees.
5. **Submit:** Customer submits the payment. The platform creates a payment request with the partner. The customer is charged the total amount (bill + fees) to their card.
6. **Settlement:** The partner processes the transfer to the biller. Status updates (e.g. Completed, Failed, Pending) are received via webhooks and stored. Points (if rewards were enabled) accrue on successful settlement per Rewards rules.

## 4. Eligibility & Requirements

- Customer must have an active Prospa relationship and complete Pay By Card onboarding.
- Valid Australian-issued Visa, Mastercard, or Amex debit or credit card (no international cards or bank transfers).
- Biller details (BSB, account number, account name, reference) must be provided; some billers require verification (e.g. industry code). Invalid or missing industry code can prevent adding a biller.
- Rewards (Reward Points) are subject to Rewards program eligibility (e.g. active Prospa Account, rewards enabled). **Excluded industries:** Payments to billers in certain industries (by MCC) are not permitted in our digital channels—see [Excluded industries (MCC)](#excluded-industries-mcc) below. Customers cannot submit a payment to those billers in the app or web app (hard stop).

## Excluded industries (MCC)

Payments to billers in the following merchant category codes (MCCs) are **not permitted** in Prospa's digital channels (app and customer portal). Customers **cannot submit** a payment to these billers—the flow is blocked before submission (hard stop). This list is maintained by Prospa; support should not guess. For the authoritative list, refer to the internal MCC / excluded industries source.

| MCC code | Description (summary) |
|----------|------------------------|
| *Full table to be inserted from approved internal source (e.g. excluded industries list).* | |

## 5. Pricing & Fees

*Source: [Competitor fees & Our goto market pricing](https://prospa.atlassian.net/wiki/x/nICXCwE) (Confluence). All rates below are **ex GST** unless stated.*

| Card       | Service fee (ex GST) | Reward fee (when rewards enabled) |
|------------|----------------------|------------------------------------|
| Visa       | 1.2%                 | 1% (+ GST)                         |
| Mastercard | 1.2%                 | 1% (+ GST)                         |
| Amex       | 2.1%                 | 1% (+ GST)                         |

- Fees are calculated on the **payment (bill) amount**. GST is applied to the fee amounts where applicable.
- The exact fee (and total charge) is shown to the customer before they confirm the payment. If the customer has opted into rewards, both service fee and reward fee (and GST) are included in the total.

## 6. Customer Value Proposition

- Pay billers that don't accept card directly (e.g. ATO, many B2B suppliers) using your card.
- **Double dip:** When rewards are enabled, earn both the card's own points and Reward Points (1 pt per $1; 2 Reward Points = 1 Qantas point when redeemed via Qantas Business Rewards).
- Cash flow: use the card's interest-free period while ensuring the biller is paid on time.
- Fees are transparent and shown before confirmation.

## 7. Process / Transaction Flow

- **Create payment:** Customer submits amount, payee (biller), payment method, and optional rewards. API calculates fees (service + optional reward), creates payment request with partner, stores payment request and fee breakdown (service fee, reward fee, GST, total charged).
- **Status flow:** Payment request status is **Pending** → **Completed** or **Failed**. Status updates are received via webhooks from the partner (e.g. payment result, transaction transfer status, refunds). Transaction types: Payment, Refund, Reversal, Sale.
- **Refunds:** Refund webhooks are processed; refunded amounts and any fee/points adjustments are handled per business rules (see Rewards spec for points reversal).

## 8. Edge Cases & Exceptions

- **Payment method not found:** Customer must ensure the selected card is still valid and linked.
- **Biller not found / not verified:** Custom biller must exist for that payer and payee; unverified or rejected billers may block payment. Ensure biller details and any required verification (e.g. industry code) are correct.
- **Failed payment:** Partner or card issuer may decline. Customer should check card, limits, and try again or use another card. No fee is charged for a failed payment.
- **Rewards opt-in:** Reward fee and points apply only when the customer has opted in to rewards for that transaction. If they did not opt in, they are charged only the service fee and do not earn Reward Points for that payment.

## 9. Common Issues + Agent Response Steps

| Issue | What to do |
|-------|------------|
| "I was charged but the biller didn't get the money." | Look up the payment request and transaction status. If status is Completed, confirm with the partner that the transfer was sent; allow for bank processing time. If Pending, explain timing. If Failed, explain no transfer was made and that refunds (if any) follow the usual process. |
| "My payment failed." | Confirm failure reason if visible (e.g. decline). Advise checking card, limits, and retrying or using another card. Confirm no fee is charged on failed payments. |
| "I don't see the reward fee / points." | Confirm whether the customer had rewards enabled for that payment. If they did, reward fee appears in the fee breakdown and points accrue on settlement (see Rewards spec). If they didn't opt in, only service fee applies and no Reward Points for that payment. |
| "Wrong amount / duplicate charge." | Look up the transaction(s). If duplicate, escalate for refund/reversal per internal process. |
| "Biller won't add / verification failed." | Check that all required fields (BSB, account number, account name, reference, industry code where required) are correct. Unverified or rejected billers cannot be used until resolved. |

## 10. Known Limitations / Constraints

- Service and reward fee rates are set per environment and may differ from the go-to-market table in specific configurations; the in-app fee at time of payment is the binding amount.
- Pay By Card is only available for customers who have completed onboarding with the partner and have an active payer status.
- Only Australian-issued Visa, Mastercard, and Amex debit or credit cards are accepted; no international cards or bank transfers.
- Not all billers or transaction types may be eligible for rewards. Payments to excluded industries (MCC) are blocked in app and web app; see [Excluded industries (MCC)](#excluded-industries-mcc) above and Rewards spec.
- Refunds and reversals may affect points (see Rewards spec).

---

# Pay By Card – FAQs

1. **What is Pay By Card?**  
   Pay By Card lets you pay billers (e.g. ATO, suppliers) with your Visa, Mastercard, or Amex card. You're charged a service fee—and a reward fee if you earn Reward Points.

2. **Which cards can I use?**  
   Visa, Mastercard, or Amex debit or credit cards (Australian-issued only). No international cards or bank transfers. Fees depend on card type.

3. **What are the fees?**  
   Service fee: Visa and Mastercard 1.2%, Amex 2.1% (ex GST). Turn rewards on and an extra 1% (+ GST) lets you earn Reward Points too.

4. **When am I charged?**  
   We charge the full amount (bill + fees + GST) when you submit. You'll see the breakdown before you confirm.

5. **Do I earn Reward Points?**  
   Only when you turn rewards on for that payment. You earn 1 point per $1 of eligible spend and keep your card points. Reward fee: 1% + GST.

6. **Why did my payment fail?**  
   The card or issuer may have declined (e.g. limit or fraud check). No fee is charged. Try another card or contact your card issuer.

7. **The biller didn't receive the payment.**  
   Check the status in the app. Completed = we've sent the transfer (allow time for the bank). Pending = we're still processing. Failed = no transfer went through.

8. **Can I get a refund?**  
   We handle refunds under our and the partner's terms. Send us the payment details and we'll look it up and explain. Reward Points earned may be reversed (see Rewards FAQs).

9. **Why can't I add my biller?**  
   Enter BSB, account number, account name and reference correctly. Some billers need verification (e.g. industry code). If it fails, fix the details and try again.

10. **Is there a minimum or maximum payment?**  
    No minimum or maximum payment amount; only your card limits apply. Fees are on the payment amount.

11. **Why don't I see the reward fee?**  
    Only when you opt in for that payment. No opt-in = service fee only.

12. **I was charged twice.**  
    Contact support with the payment reference(s). We'll check for duplicates and follow the refund/reversal process if needed.

13. **What statuses can a payment have?**  
    Pending (processing), Completed (transfer sent), or Failed. Refunds may show as separate transactions.

14. **Does Pay By Card work with my Prospa loan?**  
    Pay By Card is separate. Complete onboarding and have an active account to use it. Loan eligibility is separate.

15. **Where is my receipt or confirmation?**  
    In the app or portal—use transaction history for your records.

16. **What if my card expired or was replaced?**  
    Update or add a new payment method in Pay By Card settings. Old cards can cause payments to fail.

17. **Are fees tax-deductible?**  
    We don't give tax advice. Businesses may be able to claim fees—check with your accountant.

18. **Why is Amex more expensive?**  
    Amex costs are typically higher, so the service fee is 2.1% (ex GST).

19. **Can I pay the ATO?**  
    Yes, if ATO is available in your region and you've added it with the correct details. You'll see the fee before you confirm.

20. **Who do I contact for payment or fee errors?**  
    Contact Prospa support with your payment reference. We'll look it up and guide you through next steps.
