# Database Schema

## Cards Table

| Field                  | Type    |
| ---------------------- | ------- |
| card_id                | UUID    |
| card_name              | String  |
| issuer                 | String  |
| annual_fee             | Number  |
| reward_type            | String  |
| base_reward_rate       | Decimal |
| travel_reward_rate     | Decimal |
| dining_reward_rate     | Decimal |
| grocery_reward_rate    | Decimal |
| fuel_reward_rate       | Decimal |
| online_reward_rate     | Decimal |
| milestone_amount       | Number  |
| milestone_reward_value | Number  |

---

## Transactions Table

| Field            | Type      |
| ---------------- | --------- |
| transaction_id   | UUID      |
| amount           | Number    |
| category         | String    |
| merchant         | String    |
| recommended_card | String    |
| reward_value     | Number    |
| created_at       | Timestamp |

---

## Users Table

| Field      | Type      |
| ---------- | --------- |
| user_id    | UUID      |
| email      | String    |
| created_at | Timestamp |
