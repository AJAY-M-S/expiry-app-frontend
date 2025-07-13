# Expiry Alert Inventory App (Frontend)

A professional inventory management dashboard that allows store managers to scan product QR codes, automatically log inventory data, and receive real-time alerts for products that are **expiring soon** or **already expired**.

This frontend is built using **React.js** and designed with a clean, responsive interface that fits seamlessly into retail or warehouse environments.

---

## 🚀 Features

- 📸 **QR Code Scanning** – Instantly scans QR codes with product details
- 📅 **Expiry Alerts** – Flags products that are expired or expiring within 24 hours
- 📦 **Product Dashboard** – Displays all scanned products with full details
- 🧹 **Inventory Control** – Options to delete individual products or clear all
- 🎨 **Professional UI** – Clean layout styled with industry-ready aesthetics
- 🔄 **Auto Refresh** – Dashboard updates automatically on new scans

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **QR Code Reader:** `react-qr-reader` (or modern alternative)
- **HTTP Requests:** Axios
- **State Management:** useState / useEffect
- **Styling:** Custom CSS (clean, flat theme)

---

## 📂 Folder Structure
expiry-app-frontend/
├── public/
│ └── logo.png
├── src/
│ ├── components/
│ │ ├── Dashboard.js
│ │ └── QRUploader.js
│ ├── App.js
│ ├── styles.css
│ └── index.js
└── package.json
## 🔧 Setup & Run Locally
# Clone this repo
git clone https://github.com/AJAY-M-S/expiry-app-frontend.git
cd expiry-app-frontend

# Install dependencies
npm install

# Run the app
npm start
📄 QR Code Format
The app expects scanned QR codes to contain JSON like :
{
  "product_name": "aavin_milk",
  "product_id": 2342,
  "mfg_date": "2025-07-12",
  "exp_date": "2025-07-14"
}
🤝 Backend Repo
🔗 [ Backend Repository (Node.js + MongoDB)] (https://github.com/AJAY-M-S/expiry-app-backend)
📄 License
This project is intended for educational, demo, or small-scale commercial use.
