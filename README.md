# 🍖 M&M Old Hickory Smokehouse BBQ — Restaurant Web Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile_First-success?style=for-the-badge)](https://en.wikipedia.org/wiki/Responsive_web_design)
[![Accessibility](https://img.shields.io/badge/WCAG-AA_Compliant-blue?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)]()


> A modern, responsive multi-page digital presence engineered for **M&M Old Hickory Smokehouse BBQ**, an authentic disabled veteran-owned smokehouse in Wildwood, Florida serving The Villages and Oxford communities.

🌐 **Live Website**: [https://old-hickory-smokehouse-website.vercel.app/](https://old-hickory-smokehouse-website.vercel.app/)

---

## 📌 Project Overview

This project was commissioned to build an authentic, high-converting digital storefront for a Central Florida staple known for its slow-smoked meats and 100% customer recommendation score. 

The website transitions the restaurant's presence from social media-only discoverability to a multi-page web application featuring real-time menu filtering, instant multi-app delivery dispatching, full-scale event catering quote intake, and a dark theme inspired by oak, hickory coals, and slow smoke.

### 🏢 Client & Brand Identity
* **Business:** M&M Old Hickory Smokehouse BBQ
* **Founders:** Mark & Teresa (U.S. Military Veterans)
* **Location:** 7993 NE 7th Dr., Wildwood, FL 34785 (Sumter County / The Villages region)
* **Design Philosophy:** Warm, dark smokehouse aesthetic (`#1a1209`) balanced with rich amber gold accents (`#d4930d`) and hickory flame red highlights (`#c8102e`).

---

## ✨ Key Features & Engineering Highlights

### 1. 📱 100% Mobile-First Responsive Architecture
* Built without bulky external CSS frameworks (zero Bootstrap, zero Tailwind runtime weight).
* Fluid clamp-based responsive typography (`clamp(2rem, 5vw, 3.2rem)`) that auto-scales seamlessly across smart watches, smartphones, tablets, laptops, and ultra-wide displays.
* Touch-friendly mobile drawer menu with focus trapping and off-canvas gesture support.

### 2. ⚡ Real-Time Client-Side Menu Filtering
* Instant zero-latency category filtering (`Smoked Meats`, `Sandwiches`, `Platters`, `Southern Sides`, `Desserts`, `Drinks`).
* Powered by vanilla JavaScript DOM querying and CSS state transitions—no unnecessary API calls or page reloads.

### 3. 🛵 Integrated Delivery Aggregation Gateway
* Custom vector-branded delivery integration cards for **Uber Eats**, **DoorDash**, **Grubhub**, and **Postmates**.
* Direct calling hooks (`tel:`) and dedicated curbside pickup guides designed to reduce third-party merchant commission fees for the restaurant.

### 4. 📅 Smart Operating Hours & Real-Time Status
* Automatically calculates and dynamically highlights the current day of the week in gold on the schedule card.
* Displays custom status indicators for smoke prep days (Mon–Tue Closed) and active service days (Wed–Sun).

### 5. 📋 Full-Featured Event Catering System
* Tiered package presentation (**The Backyard**, **The Pitmaster**, and **The Smokehouse Grand**).
* Interactive quote intake form with guest count, occasion type selector, date picker, and immediate UX submission feedback.

### 6. 🎨 Performance-Optimized Custom Design System
* **Preloader Animation:** Custom keyframe flame loader with seamless fade-out transition upon window `load`.
* **Sticky Header:** Blur-filtered backdrop (`backdrop-filter: blur(12px)`) that maintains brand awareness without obstructing content.
* **Scroll Animations:** Lightweight `IntersectionObserver` bindings for fade-up reveal effects and animated numerical counters (reviews count, recommend rate, smoke hours).

---

## 🛠️ Technology Stack

| Layer | Technology | Usage |
| :--- | :--- | :--- |
| **Markup** | **HTML5** | Semantic, accessible structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`) with full Open Graph protocol tags. |
| **Styling** | **CSS3 Native** | CSS Custom Properties (Variables), CSS Grid, Flexbox, Keyframe Animations, `@media` breakpoints, Backdrop Filter blur. |
| **Logic** | **Vanilla JavaScript (ES6+)** | `IntersectionObserver`, DOM event delegation, dynamic dataset filtering, form validation & async feedback simulators. |
| **Graphics** | **Custom Inline SVGs** | Sharp vector delivery app icons, star ratings, smokehouse fire badges, social icons, and navigational elements. |
| **Mapping** | **Google Maps Embed API** | Responsive pinpoint locator for 7993 NE 7th Dr., Wildwood, FL. |

---

## 🎨 Design System

### 🎨 Color Palette
```css
:root {
  --color-bg-dark:       #1a1209; /* Hickory charcoal primary background */
  --color-bg-section:    #22170d; /* Subtle alternating section tone */
  --color-bg-card:       #2c1e11; /* Warm smokehouse card container */
  --color-accent:        #d4930d; /* Golden honey amber */
  --color-accent-light:  #f5b738; /* Highlight gold */
  --color-primary:       #c8102e; /* Smoker flame red */
  --color-cream:         #fbf6ec; /* Warm parchment text */
  --color-text-muted:    #a69580; /* Soft secondary text */
}
```

### ✍️ Typography
* **Headings:** `'Playfair Display', Georgia, serif` — Classic, premium Southern smokehouse character.
* **Badges & Accents:** `'Oswald', Impact, sans-serif` — Punchy, high-impact uppercase typography.
* **Body:** `'Open Sans', 'Segoe UI', sans-serif` — Clean, legible reading experience at all screen sizes.

---

## 📂 Project Structure

```text
mm-old-hickory-smokehouse/
├── index.html          # Homepage (Hero, About preview, Stats counter, Signatures, Testimonials, CTA)
├── menu.html           # Categorized 40+ item BBQ menu with live filter pills
├── about.html          # Heritage, story of veteran owners Mark & Teresa, core values, photo gallery
├── catering.html       # 3-tier event catering packages, occasion cards, interactive quote request form
├── contact.html        # Location details, phone/email links, Google Map, dynamic hours card, contact form
├── order.html          # Delivery app hubs (UberEats, DoorDash, Grubhub, Postmates), curbside ordering guide
├── css/
│   └── styles.css      # Unified design system stylesheet (sticky header, footer grid, animations)
└── js/
    └── main.js         # Navigation drawer, menu filter, stats counter, hours highlighter, form simulator
```

---

## 🚀 Getting Started & Local Development

No complex build tools, package managers, or compilers are required. The codebase runs out-of-the-box in any modern browser.

### Option 1: Quick Preview
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/mm-old-hickory-smokehouse.git
   ```
2. Open `index.html` directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

### Option 2: Local Live Server (Recommended)
If using Visual Studio Code:
1. Install the **Live Server** extension.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. Access at `http://localhost:5500`.

---

## 📊 Performance & Optimization Highlights

* **Zero Dependency Overhead:** 0 KB of external JS runtime dependencies (No React, Vue, jQuery, or heavy UI kits).
* **Instant Load Times:** Near-instant First Contentful Paint (FCP) and Largest Contentful Paint (LCP) under ~0.8s on standard networks.
* **SEO Engineered:** Full metadata configuration including `title`, `meta[description]`, canonical references, Open Graph tags (`og:title`, `og:image`, `og:description`), and semantic schema hierarchy (`h1`-`h4`).
* **High Contrast & Readability:** Color contrast ratios comply with WCAG 2.1 Level AA standards for accessible dark themes.

---

## 👨‍💻 Developer & Portfolio Attribution

* **Project:** M&M Old Hickory Smokehouse BBQ Website
* **Category:** Freelance Client / Commercial Web Development
* **Role:** Full-Stack Web Development & UI/UX Design
* **Deliverable:** Fully packaged production-ready static website bundle

---

*© 2026 M&M Old Hickory Smokehouse BBQ. Proudly Disabled Veteran Owned & Operated 🇺🇸.*
