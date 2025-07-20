# 📄 PDF Upload Portal (MERN Stack + Clerk Auth)

A full-stack web application to securely upload, preview, and manage PDF files using the **MERN Stack**, integrated with **Clerk** for authentication and **Cloudinary** for storage. Users can upload PDFs with metadata, view them in-browser, and organize them by subject for easy access.

![App Preview](https://github.com/user-attachments/assets/74863b09-7506-4350-8ec7-3808d2a52420)

---

## 🚀 Features

- 🧾 Upload PDF files with title, description, and subject
- 🔐 Clerk-based user authentication (secure & modern)
- ☁️ Upload to Cloudinary (or local disk via Multer)
- 📖 Preview PDFs directly in the browser
- 🔎 Filter and search PDFs by subject
- 🧼 Clean, responsive UI using TailwindCSS
- ⚙️ Admin Panel for managing uploaded PDFs

---

## 🛠 Tech Stack

### **Frontend**
- React
- Vite
- TailwindCSS
- React-PDF / PDF.js
- Zustand (state management)
- Clerk (authentication)
- Vercel (deployment)

### **Backend**
- Node.js
- Express
- MongoDB + Mongoose
- Multer (file uploads)
- Cloudinary (PDF storage)

---

## 📁 Folder Structure
```
pdf-upload-portal/
├── frontend/ (pdfweb)
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── vite.config.js
│ ├── tailwind.config.js
│ ├── vercel.json
│ └── package.json
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── temp_uploads/
│ ├── uploads/
│ ├── server.js
│ └── package.json

```

## ⚙️ Environment Variables


```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret


```

### `.env` (Frontend)

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```



### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/pdf-upload-portal.git
cd pdf-upload-portal
```


###  Setup the Backend
```

cd backend
npm install
npm run dev

```

###  Setup the Frontend
```
cd ../frontend
npm install
npm run dev
```


###  Project Status
✔️ Fully Functional (Upload, View, Filter PDFs)

✔️ Auth secured via Clerk

✔️ Cloudinary integration tested

✔️ Responsive UI and clean UX

### 🙋🏻‍♂️ Author
👨‍💻 Bongu Chandu
📧 bonguchandu7829@gmail.com
🌐 GitHub: bonguchandu123

