# Technical Architecture

## Overview

CardWise AI is a web-based fintech application that helps users identify the best credit card for a transaction based on reward value, cashback, category benefits, and future milestone logic.

---

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* App Router

### Backend

* Supabase

### Database

* PostgreSQL via Supabase

### Authentication

* Supabase Auth

### Hosting

* Vercel

---

## System Architecture

User
→ Next.js Frontend
→ Recommendation Engine
→ Supabase Database
→ Recommendation Result

---

## Core Modules

### 1. Landing Page

Purpose:
Introduce the product and drive users to start.

Route:

```text
/
```

---

### 2. Dashboard

Purpose:
Show saved cards, usage summary, and optimization activity.

Route:

```text
/dashboard
```

---

### 3. Card Management

Purpose:
Allow users to add and manage credit cards.

Routes:

```text
/cards
/cards/new
```

---

### 4. Transaction Optimizer

Purpose:
Capture transaction details and generate card recommendation.

Route:

```text
/optimize
```

---

### 5. Recommendation Result

Purpose:
Show best card, reward value, reason, and comparison.

Route:

```text
/recommendation
```

---

## Database Tables

### users

Stores user profile information.

### cards

Stores user credit card configurations.

### transactions

Stores optimization requests and recommendation results.

---

## Recommendation Engine Flow

1. User enters transaction details.
2. System fetches user's saved cards.
3. System identifies applicable reward rate by category.
4. System calculates estimated reward value for each card.
5. System ranks cards by reward value.
6. System returns the highest-value card.
7. System displays explanation and comparison.

---

## MVP Assumptions

* User manually adds credit card reward rates.
* Recommendation logic uses percentage-based reward values.
* Merchant-specific offers are out of scope for V1.
* AI explanation is optional for initial MVP.
* Authentication can be added after core flow works with mock data.

---

## Build Strategy

### Phase 1

Build frontend using mock data.

### Phase 2

Add recommendation logic.

### Phase 3

Connect Supabase database.

### Phase 4

Add authentication.

### Phase 5

Deploy publicly on Vercel.

---

## Future Enhancements

* Statement upload
* AI-powered spending insights
* Milestone tracking
* Annual fee recovery tracking
* Merchant-specific offers
* Bank account integrations
