# 📄 PDF Upload Portal (MERN Stack + Clerk Auth)

A full-stack web application to securely upload, preview, and manage PDF files using the **MERN Stack**, integrated with **Clerk** for authentication and **Cloudinary** for storage. Users can upload PDFs with metadata, view them in-browser, and organize them by subject for easy access.

![App Preview](https://github.com/user-attachments/assets/74863b09-7506-4350-8ec7-3808d2a52420)


---

## 🔗 Live Demo

👉 [Click here to view the live app](https://mydolpdfnew.vercel.app/)  
Hosted on **Vercel**

📌 Note: Currently available for **1st-year subjects** only. Support for more branches coming soon!  steps to done when you enter first sigin without account and then place your yr and branch then start uplaoding 


## 🧭 How to Use

Follow these steps to get started with the app:

1. 🔐 **Sign In**  
   - Click on **Sign In** at the top-right corner.  
   - If you don’t have an account, click **Sign Up** to register using Clerk authentication.

2. 🗂️ **Select Year & Branch**  
   - After signing in, you'll be prompted to select your **Year** (e.g., 1st Year) and your **Branch**.

3. 📄 **Upload PDFs**  
   - Use the upload form to add your PDFs with a **Title**, **Description**, and **Subject**.
   - Uploaded PDFs will be displayed in a searchable and filterable list.

4. 🔍 **View & Manage PDFs**  
   - You can view PDFs directly in the browser.
   - Use filters to find specific PDFs by subject.

📌 **Note:** The platform currently supports **1st Year subjects only**. Support for all branches and years is coming soon!


## ✅ Project Status

- ✔️ Fully functional: Upload, preview, and manage PDFs
- ✔️ Authentication secured via Clerk
- ✔️ Cloudinary integration tested and working
- ✔️ Clean and responsive UI
- 🚧 Currently available for **1st-year subjects only**
- 🔜 **Upcoming Update:** Will support subjects from **all branches and years**


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




### 🙋🏻‍♂️ Author
👨‍💻 Bongu Chandu
📧 bonguchandu7829@gmail.com
🌐 GitHub: bonguchandu123

