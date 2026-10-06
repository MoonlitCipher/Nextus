# Nextus — Parcel Delivery Management System (PDMS)

Nextus is a mobile-first web app for **sending parcels**. A customer books a pickup, sees the
fare before paying, pays, and then follows the parcel until it is delivered. The product is
designed around three kinds of users — **customers**, **delivery partners** and **admins** — and
the customer side is built today.

Brand colours: **yellow `#ffd21f`** and **red `#ed1c24`**.

---

## What a customer can do

| Step | Screen | Route | What happens |
|---|---|---|---|
| 0 | Landing | `/` | Full-screen animated hero (yellow/red dot-matrix globe) introducing Nextus, with Get Started / Track Parcel. |
| 1 | Login / Register | `/customer/login`, `/customer/register` | Mobile number + password sign-in; create-account form. |
| 2 | Home | `/customer` | Greeting, search, quick actions (Book, Track, Orders, Addresses), offers and the latest order. |
| 3 | Book Delivery | `/customer/book` | Enter pickup and destination, choose **Express** or **Standard**. (Step 1 of 3) |
| 4 | Package Details | `/customer/package` | What is inside, weight, special handling notes. (Step 2 of 3) |
| 5 | Fare Estimate | `/customer/fare` | Route + package summary and a fare breakdown with the total. |
| 6 | Payment | `/customer/payment` | Choose **UPI, Card or Cash on Delivery**, review the order summary. (Step 3 of 3) |
| 7 | Confirmation | `/customer/confirmation` | "Booking Confirmed!" with the delivery summary and shortcuts to Track / Orders / Home. |
| 8 | Track Delivery | `/customer/track` | Delivery partner details and a live status timeline. |
| 9 | My Orders | `/customer/orders` | Active delivery plus recent orders. |
| 10 | Order Details | `/customer/order/:id` | Full detail of one order, e.g. `PDMS-10246`. |
| 11 | Notifications | `/customer/notifications` | Updates grouped into Today / Yesterday / Earlier. |
| 12 | Profile | `/customer/profile` | Personal information, activity and settings & support. |

The booking flow is a clear 3-step journey: **Route → Package → Payment**, then Confirmation.

---

## Current status (honest overview)

- **Done:** the complete customer-facing UI, the landing page, routing, and the yellow/red design.
- **Sample data:** screens use hard-coded example data. There is **no backend/API yet**, so logging in,
  booking and paying are visual flows only (some buttons on the login/register screens don't navigate yet).
- **Placeholders:** the `pages/admin/*` and `pages/partner/*` folders, plus `Addresses`, `Invoice`,
  `Review`, `Support` and `PickupDestination`, are empty files reserving the planned structure.

### Planned (from the folder structure)
- **Delivery partner app:** KYC, delivery requests, pickup, active delivery, proof of delivery, earnings, history.
- **Admin panel:** dashboard, orders, customers, partners, assign delivery, live tracking, pricing,
  payments, settlements, reports, support tickets.
- **Customer extras:** saved addresses, invoices, reviews, support.

---

## Tech stack

- **React 19** + **Vite 8** (fast dev server, one-command build)
- **React Router 7** for page navigation
- **lucide-react** icons
- Plain CSS (`src/index.css`, one file per big feature) — no UI framework
- Landing hero: a looping video background with a yellow→red colour blend, plus a scoped `Landing.css`
- Inner pages: `ParticleBackground` — a lightweight canvas of glowing yellow/red particles

## Project structure

```
Nextus/
├── index.html                 # app shell + Plus Jakarta Sans font
├── package.json               # Vite scripts and dependencies
├── src/
│   ├── main.jsx               # React entry
│   ├── App.jsx                # all routes + particle backdrop
│   ├── index.css              # global + customer-app styles
│   ├── components/
│   │   └── ParticleBackground.jsx  # bright yellow/red particle canvas
│   └── pages/
│       ├── landing/           # hero landing page (Landing.jsx / Landing.css)
│       ├── auth/              # customer login and registration
│       ├── customer/          # customer journey pages
│       ├── partner/           # delivery partner pages
│       └── admin/             # admin panel pages
└── public/                    # static assets
```

## Run it

```bash
npm install
npm run dev      # open the printed local URL
npm run build    # production build -> dist/
npm run lint
```

> The frontend is intentionally located directly in the repository root so GitHub Pages can serve the app without requiring a nested frontend folder.

## Design notes

- **Landing page** is authored on a 1280×800 reference and scales from one CSS unit (`--u`), folding
  into a burger menu at 1160px and a phone layout at 552px. It respects *prefers-reduced-motion*.
- **Particles** pause when the tab is hidden, cap their count by screen size, nudge away from the
  pointer, and render a still frame for reduced-motion users.
- All landing styles use an `lp-` prefix so they never clash with the app's CSS.
