# 🛒 Online Shop

A modern e-commerce frontend built with **React** and **Vite**, featuring product listing, cart management, wishlist, checkout, and dark/light theme toggle. This project is a complete practice project to learn React fundamentals, state management, API integration, routing, and responsive design.

---

## 🚀 Features

- **Home Page** – Banner, featured products, categories.
- **Product Listing Page** – Fetches products from a **Dummy Product API**, with filter, sort, search, and pagination.
- **Product Details Page** – View product images, descriptions, add to cart, and wishlist.
- **Cart Page** – Shows added products, remove items, and proceed to checkout.
- **Checkout Page** – Form for placing orders with validation and toast notifications.
- **Order Success Page** – Confirms order placement.
- **Wishlist** – Add/remove products to wishlist, move items to cart.
- **Dark/Light Theme Toggle** – Global theme switcher across all pages.
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop.
- **Styled with CSS + Bootstrap 5** – Modern, clean UI design.

---

## 🛠️ Tech Stack

- **React (Vite)** – Frontend framework for building fast, reactive UIs.
- **React Router DOM** – Handles routing between pages.
- **Bootstrap 5** – Responsive design, layout, and components.
- **Custom CSS** – For branding and theme customization.
- **Context API / useState** – State management for cart, wishlist, and theme toggle.
- **Dummy Product API** – Fetches real product data for practice and testing.

---

## 📂 Project Structure

Online-Shop/
├─ src/
│ ├─ components/ # Reusable UI components (Header, Footer, ProductCard, CartItem, WishlistItem, etc.)
│ ├─ context/ # Contexts for Cart, Wishlist, Orders, Theme
│ ├─ css/ # CSS files for each component/page + theme styles
│ ├─ pages/ # Pages (Home, ProductPage, ProductDetailsPage, CartPage, WishlistPage, CheckoutPage, OrderSuccessPage)
│ ├─ App.jsx # Main app routing
│ └─ main.jsx # App entry
├─ public/ # Static assets
└─ package.json


---

## 📌 Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/Sagarr315/React-Projects.git

2.Navigate to the Online-Shop folder:

 cd React-Projects/Online-Shop

3.Install dependencies:

 npm install

4.Start the development server:

 npm run dev

5.Open in browser:

 http://localhost:5173
