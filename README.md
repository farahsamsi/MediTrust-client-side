# MediTrust

## Project Overview

**MediTrust** is a secure and user-friendly online medicine marketplace designed to simplify the process of purchasing medicines and managing pharmaceutical inventories. It provides a seamless experience for both sellers and buyers, ensuring a trustworthy platform for healthcare essentials.

---

## 🌐 Live URL

- **Deployed Website:** [https://github.com/farahsamsi/MediTrust-server-side](https://github.com/farahsamsi/MediTrust-server-side)

---

## 🗂 Server Side Repository Link

- **Server Side Repository:** [https://github.com/farahsamsi/mediTrust-server](https://github.com/farahsamsi/mediTrust-server)

---

## 🎯 Purpose

To revolutionize online medicine purchasing by providing a reliable, efficient, and accessible platform that bridges the gap between consumers and pharmaceutical sellers.

---

## ✨ Key Features

### 🔹 General Features

- **Responsive Design:** Fully functional across mobile, tablet, and desktop screens.
- **Secure Environment Variables:** Firebase config and MongoDB credentials are protected using `.env`.
- **Real-Time Inventory & Order Tracking:** Order and availability updates are immediate.
- **User-Centric Interface:** Clean layout, easy navigation, intuitive user interactions.

---

### 🔸 Pages and Functionalities

#### 🏠 Home Page

- Highlighted categories and featured medicines.
- CTA for users to explore or log in.

#### ➕ Add Medicine Page (Private - Seller)

- Fields: Medicine Name, Generic Name, Company, Description, Price, Category, Stock Quantity, etc.
- Auto-saves seller email and initializes booking count.
- Feedback with success toast or modal.

#### 📋 My Medicines Page (Private - Seller)

- Tabular view of all medicines added by the seller.
- **Update Button:** Opens modal to edit medicine info.
- **Delete Button:** Asks for confirmation before removal.
- Sorting Options: By Price, Quantity, or Date Added.
- Message prompt when list is empty.

#### 🛒 All Medicines Page

- Browse all available medicines.
- Search by medicine name or category.
- Grid/List toggle and sorting options.
- “See Details” to view individual product info.

#### 📄 Medicine Details Page

- Shows image, name, generic, description, price, quantity, seller info.
- **Book Now**: Booking modal to confirm order.

#### 🔐 Login & Registration

- **Login Page:**
  - Firebase Email/Password and Google Login.
  - Redirects to home after success.
- **Registration Page:**
  - Name, Email, Password, Photo URL.
  - Input validations and feedback.

#### 📦 My Orders Page (Private - Buyer)

- Lists all ordered medicines with:
  - Name, Seller, Quantity, Total Price, Date, Status.
- **Cancel Order:** Marks order as canceled.
- **Update Quantity/Address:** Modify order if not yet delivered.

#### 📊 Sales Report Page (Private - Admin)

- Aggregated data:
  - Medicine Name, Quantity Sold, Revenue, Seller Email, Buyer Email.
- Recharts for data visualization.

#### ❌ 404 Error Page

- Engaging UI and "Back to Home" button.

---

## 🛠 Core Technologies

### 🖥 Frontend

- HTML, CSS, JavaScript
- React.js
- Tailwind CSS
- DaisyUI
- React Router

### 🌐 Backend

- Node.js
- Express.js
- MongoDB

### 🔐 Authentication

- Firebase Authentication (Email/Password + Google OAuth)

---

## 🚀 Deployment

- **Frontend:** Deployed on Firebase.
- **Backend:** Deployed on Vercel.
- Seamless API integration between frontend and backend.

---

## 📦 NPM Packages Used

### Client-Side

- `react`
- `react-router-dom`
- `tailwindcss`
- `daisyui`
- `react-icons`
- `sweetalert2`
- `react-toastify`
- `firebase`
- `lottie-react`
- `recharts`

### Server-Side

- `express`
- `mongodb`
- `cors`
- `dotenv`
- `jsonwebtoken`

---

## 🔄 Real-Time Functionality

- Booking status reflects in seller and buyer dashboards.
- Admins can view consolidated sales reports.

---

## 📦 Installation and Setup

### 🔁 Clone the Repository

```bash
git clone https://github.com/farahsamsi/MediTrust-client-side.git
```

Navigate to Project Directory

```bash
cd mediTrust-client
```

Install Dependencies

```bash
npm install
```

### Set Environment Variables

Create a .env file in the client and server directories.

```bash
VITE_API_URL=your_backend_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Run the Application

```bash
npm run dev
```
