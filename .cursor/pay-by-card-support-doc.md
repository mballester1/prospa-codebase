# Pay By Card – Spec Doc

## 1. Product Overview

* Pay By Card allows Prospa customers to pay billers (including the ATO and other suppliers who may not accept card directly) using their credit or debit card.
* Funds are transferred to the biller via the platform; the customer is charged a **service fee** (card-dependent) and may optionally pay a **reward fee** to earn Reward Points on the transaction ("double dip": card points + Reward Points).

## 2. Key Features

* **Pay billers** via Visa, Mastercard, or Amex debit and credit cards only. Australian-issued cards only; no international cards or bank transfers.
* **Service fee** varies by card type (see [Pricing & Fees](https://prospa.atlassian.net/wiki/spaces/PRODUCT/pages/4542464012/Pay+By+Card+Spec+Doc+FAQs#5.-Pricing-%26-Fees) below).
* **Optional Rewards:** When rewards are enabled, customers earn 1 Reward Point per $1 of eligible transaction value and pay an additional **reward fee** (1% + GST). They also keep their card's own reward points ("double dip").
* Fee calculation is shown before the customer confirms the payment.
* Payment requests are processed via the Live Payments partner and take around 2 business days to settle; the status updates (e.g. Processing, Declined, Paid) are received via webhooks and reflected in the platform.

## 3. How It Works (Step-by-Step)

1. **Onboarding:** Customer completes Pay By Card onboarding (payer creation with the partner). Once approved, they can add payment methods and billers.
2. **Add payment method:** Customer adds a Visa, Mastercard, or Amex card (Australian-issued debit or credit only; no international cards). Card verification is required and consists of placing two temporary transactions on the customer's account linked to the card. The customer must enter these amounts during the in-app verification flow.
3. **Add biller (payee):** Customer adds a biller (e.g. ATO, supplier) with required details (ABN, industry, BSB, account number, account name, description, and reference). BPAY billers become available in May.
4. **Create payment:** The customer enters the amount, selects the payment method and biller, and opts into rewards if applicable. The system calculates and displays the Platform fee, which includes the service fee and, if selected, the reward fee plus GST. The total charge equals the bill amount plus fees and GST.
5. **Submit:** Customer submits the payment. The platform creates a payment request with the partner. The customer is charged the total amount (bill + fees + GST) to their card.
6. **Settlement:** The partner processes the transfer to the biller. Status updates (e.g. Completed, Failed, Pending) are received via webhooks and stored. Points (if rewards were enabled) accrue on successful settlement per Rewards rules.

## 4. Eligibility & Requirements

* Customer must have an active Prospa relationship and complete Pay By Card onboarding.
* Valid Australian-issued Visa, Mastercard, or Amex debit or credit card (no international cards or bank transfers).
* Biller details (ABN, Industry, BSB, account number, account name, description and reference) must be provided; billers are verified on the spot. Billers with an inactive ABN or part of the **excluded industries** will prevent adding a biller.
* Rewards (Reward Points) are subject to Rewards program eligibility (e.g. active Prospa Account, rewards enabled).

## 5. Pricing & Fees

_Source:_ [_Competitor fees & Our goto market pricing_](https://prospa.atlassian.net/wiki/x/nICXCwE) _(Confluence). All rates below are **ex GST** unless stated._

| Card | Service fee (ex GST) | Reward fee (when rewards enabled) |
| --- | --- | --- |
| Visa | 1.2% | 1% (+ GST) |
| Mastercard | 1.2% | 1% (+ GST) |
| Amex | 2.1% | 1% (+ GST) |

* Fees are calculated on the **payment (bill) amount**. GST is applied to the fee amounts where applicable.
* The exact fee (and total charge) is shown to the customer before they confirm the payment. If the customer has opted into rewards, both service fee and reward fee (and GST) are included in the total.

## 6. Customer Value Proposition

* Pay billers that don't accept card directly (e.g. ATO, many B2B suppliers) using your card.
* **Double dip:** When rewards are enabled, earn both the card's own points and Reward Points (1 pt per $1; 2 Reward Points = 1 Qantas point when redeemed via Qantas Business Rewards).
* Cash flow: use the card's interest-free period while ensuring the biller is paid on time.
* Fees are transparent and shown before confirmation.

## 7. Process / Transaction Flow

* **Create payment:** Customer submits amount, payee (biller), payment method, and optional rewards. API calculates fees (service + optional reward), creates payment request with partner, stores payment request and fee breakdown (service fee, reward fee, GST, total charged).
* **Status flow:** Payment request status is **Processing** → **Paid** or **Declined**. Status updates are received via webhooks from the partner (e.g. payment result, transaction transfer status, refunds). Transaction types: Payment, Refund, Reversal, Sale.
* **Refunds:** Refund webhooks are processed; refunded amounts and any fee/points adjustments are handled per business rules (see Rewards spec for points reversal).

## 8. Edge Cases & Exceptions

* **Payment method not found:** Customer must ensure the selected card is still valid and linked.
* **Biller not found / not verified:** Custom biller must exist for that payer and payee; unverified or rejected billers may block payment. Ensure biller details and any required verification (e.g. industry code) are correct.
* **Failed payment:** Partner or card issuer may decline. Customer should check card, limits, and try again or use another card. No fee is charged for a failed payment.
* **Rewards opt-in:** Reward fee and points apply only when the customer has opted in to rewards for that transaction. If they did not opt in, they are charged only the service fee and do not earn Reward Points for that payment.

## 9. Common Issues + Agent Response Steps

* Use Posthog AI Chat to get a view of the customers activity.

    * Navigate to [Posthog AI](https://us.posthog.com/project/254419/ai) and start a new chat
    * Ask the question applicable to the customer issue.
    * Example, show me the last Pay By Card transaction for X (email) that declined and the reason why?

* Collect as much info as possible from the customer (transaction amount, biller, date of payments etc) before escalating to #sme-apps-support

| Issue | What to do |
| --- | --- |
| "I was charged but the biller didn't get the money." | Ask customer to look up the payment and transaction status. If status is Paid, confirm with the customer that the transfer was sent and to check with their biller. If issue persists, escalate to #sme-apps-support. If Processing, explain that it takes 2 business days from the day the payment was lodged. If Declined, explain no transfer was made and that funds will be returned to their account within 2 business days. |
| "My payment was declined." | Advise checking card funds, limits, and retrying or using another card. Confirm no fee is charged on failed payments and funds will be returned to customer's account within 2 business days. Escalate to #sme-apps-support if necessary. |
| "I don't see the reward fee / points." | Ask customer to look up the payment and transaction status as points accrue on settlement. If transaction status = Paid, reward fee appears on the individual transaction level. Points accrue on settlement (See above). Escalate to #sme-apps-support if transaction status = Paid but no funds show up. |
| "Wrong amount / duplicate charge." | Escalate to #sme-apps-support. |
| "Biller won't add / verification failed." | Ask the customer to share the in-app error message with sufficient detail to determine the next steps. Also, check that all required fields (ABN, Industry, BSB, account number, account name, description and reference) are correct. |

## 10. Known Limitations / Constraints

* Pay By Card is only available for Australian customers who have completed onboarding with the partner and have an active payer status.
* Only Australian-issued Visa, Mastercard, and Amex debit or credit cards are accepted; no international cards or bank transfers.
* Not all billers or transaction types may be eligible for rewards. Payments to **excluded industries (MCC)** are blocked in app and web app.

---

# Pay By Card – FAQs

## 1. Basics

1. **What is Pay By Card?**
   Pay By Card lets you pay **billers** (e.g. **ATO**, **suppliers**) with your **Visa**, **Mastercard**, or **Amex** card. You're charged a **service fee** — and a **reward fee** if you earn **Reward Points**.
2. **Which cards can I use?**
   **Visa**, **Mastercard**, or **Amex** **debit** or **credit cards** (**Australian‑issued only**). No **international cards** or **bank transfers**. **Fees** depend on **card type**.
3. **Does Pay By Card work with my Prospa loan?**
   Pay By Card is **separate**. You need to complete **Pay By Card onboarding** and have an **active account** to use it. **Loan eligibility** is separate.
4. **Do I have to have a Prospa Loan or Line of Credit to access Pay By Card?**
   No. Pay By Card is a stand-alone product and can be used without any Prospa credit product.

## 2. Fees & charges

5. **What are the fees?**
   Our **Platform fee** consists of the **Service fee**: **Visa and Mastercard 1.2%**, **Amex 2.1%** (**ex GST**), and the **Reward fee** — an additional **1% (+ GST)** if the customer opts to earn **Reward Points**.
6. **When am I charged?**
   We charge the **full amount** (**bill + fees + GST**) when you **submit**. You'll see the **breakdown** before you **confirm**.
7. **Why is Amex more expensive?**
   **Amex processing fees** are typically higher, so the **service fee** is at a competitive market rate of **2.1% (ex GST)**.
8. **Are fees tax‑deductible?**
   Depending on your circumstances our **Platform fee** might be **tax deductible**. This is **not financial advice**; please **consult an accountant**.

## 3. Rewards

9. **Do I earn Reward Points?**
   Only when you **turn rewards on** for that payment. You earn **1 point per $1 of eligible spend** and keep your **card points**. **Reward fee:** **1% + GST**.

## 4. Payments & limits

10. **Is there a minimum or maximum payment?**
    No **minimum** or **maximum payment amount**; only your **card limits** apply.
11. **Can I pay the ATO?**
    Yes. You can pay your BAS and other ATO‑related payments using Pay By Card, while earning Reward Points (if Prospa Rewards is turned on).
12. **What statuses can a payment have?**
    **Processing**, **Paid**, or **Declined**.
13. **Where can I find confirmation of my payment?**
    In the **app** or **portal** — use **transaction history** for your records.

## 5. Payment problems

14. **Why did my payment get declined?**
    Our payments partner LivePayments might decline payments if it suspects misuse of the platform.
15. **The biller didn't receive the payment.**
    Check the **status** in the **app**.

    * **Processing** = we're still **processing**.
    * **Paid** = we've sent the **transfer** (allow time for the **bank**).
    * **Declined** = no **transfer** went through.

16. **I was charged twice.**
    Contact **support** with the **payment reference(s)**. We'll check for **duplicates** and follow the **refund/reversal process** if needed.
17. **Can I get a refund?**
    No refunds.

## 6. Billers & setup

18. **Why can't I add my biller?**
    Enter **ABN**, **Industry**, **BSB**, **account number**, **account name** and **reference** correctly. Biller might be rejected if ABN is inactive or biller is on excluded industry list.
19. **What if my card expired or was replaced?**
    **Update** or **add a new payment method** in **Pay By Card settings**. **Old cards** can cause payments to **fail**.

## 7. Support

20. **Who do I contact for payment or fee errors?**
    Contact **Prospa support** with your **payment details**. We'll look it up and **guide you** through **next steps**.
