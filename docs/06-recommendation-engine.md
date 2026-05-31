# Recommendation Engine

## Objective

Recommend the best credit card for a transaction based on the highest estimated reward value.

---

# Inputs

Transaction Details

* Amount
* Category
* Merchant (optional)
* Domestic / International

User Portfolio

* Credit Cards
* Reward Rates
* Cashback Rates
* Milestone Progress

---

# Recommendation Logic

For each card:

1. Identify applicable reward rate
2. Calculate expected reward value
3. Adjust for milestone benefits
4. Rank all cards

Highest value card becomes recommendation.

---

# Example

Transaction

* Amount: ₹20,000
* Category: Travel

Cards

### Axis Atlas

Travel Reward Rate: 4%

Estimated Reward

₹20,000 × 4%

= ₹800

---

### HDFC Diners

Travel Reward Rate: 3%

Estimated Reward

₹20,000 × 3%

= ₹600

---

### Amex Platinum Travel

Travel Reward Rate: 2%

Estimated Reward

₹20,000 × 2%

= ₹400

---

# Result

Recommended Card

Axis Atlas

Estimated Value

₹800

Reason

Highest reward value for travel category.

---

# Future Enhancements

* Merchant-specific offers
* Milestone acceleration
* Lounge benefit optimization
* International spend optimization
* AI-driven recommendations
