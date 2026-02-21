# 🛍️ Shoppy - Mini E-Commerce Frontend

Shoppy is a modern mini e-commerce frontend built using Next.js (App Router), React, and Tailwind CSS.
This project was developed as part of a Frontend Developer Intern technical assessment

---

## 🚀 Features

- 📦 Product Listing Page
  - Fetches products from FakeStore API
  - Displays image, title, price, and short description
  - Clean and responsive grid layout

- 🔍 Filtering
  - Filter by category
  - Filter by price range
  - Dynamic filtering without page reload

- 📄 Product Details Page
  - Dynamic routing using Next.js App Router
  - Full product information display
  - Loading skeleton state
  - Error handling support

- 📱 Fully Responsive
  - Mobile, tablet, and desktop optimized

- 📑 Pagination
  - Client-side pagination implemented

- 🎨 Modern UI
  - Built with Tailwind CSS
  - Dark mode support

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- FakeStore API

---

🧠 Architecture Overview

- App Router is used for routing and layout structure.
- Dynamic routes handle product details pages.
- API logic is separated inside the services folder.
- Filtering logic is isolated in utils for better reusability.
- UI components are modular and reusable.
- Skeleton components improve loading experience.
- Clean folder structure maintained for scalability.


## 📁 Project Structure

Shoppy/
├── public/                         # Static assets
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── about/
│   │   │   └── page.js
│   │   │
│   │   ├── products/
│   │   │   ├── [id]/               # Dynamic Product Details Route
│   │   │   │   └── page.js
│   │   │   └── page.js             # Product Listing Page
│   │   │
│   │   ├── error.js                # Global error handling UI
│   │   ├── loading.js              # Global loading state
│   │   ├── layout.js               # Root layout
│   │   ├── page.js                 # Home page
│   │   ├── globals.css             # Global styles
│   │   └── favicon.ico
│   │
│   ├── components/                 # Reusable UI Components
│   │
│   │   ├── filters/
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── PriceFilter.jsx
│   │   │   └── FilterSidebar.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── HeroSection.jsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductGrids.jsx
│   │   │
│   │   ├── Skeleton/
│   │   │   ├── DetailSkeleton.jsx
│   │   │   └── ProductSkeleton.jsx
│   │   │
│   │   └── ui/                     # Shared UI components
│   │       ├── ButtonFilled.jsx
│   │       ├── ButtonGradient.jsx
│   │       ├── Container.jsx
│   │       └── Logo.jsx
│   │
│   ├── services/                   # API service layer
│   │   └── productService.js
│   │
│   └── utils/                      # Utility functions
│       └── filterProducts.js
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md




## For Start The project

Clone the repository:

```bash
git clone https://github.com/MIAKASH19/Shoppy
cd shoppy

## Install dependencies:

npm install

##Run development server:

npm run dev

Open http://localhost:3000

in your browser.


🌍 Live Link:
Live URL: https://shoppy.vercel.app


👨‍💻 Author
Mazaharul Islam Akash 