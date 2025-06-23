import express from "express"

import "dotenv/config"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks } from "./controllers/clerkWebhooks.js"
import router from "./routes/userRoute.js"
import Pdfrouter from "./routes/pdfRouter.js"
import path from "path";
import { fileURLToPath } from "url";
import connectCloudinary from "./config/cloudinary.js"

await connectDB()
await connectCloudinary()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express()


app.use(cors())
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));


app.use(clerkMiddleware())

app.use('/api/clerk',clerkWebhooks)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/user",router)
app.use("/api/pdf",Pdfrouter)
app.get('/',(req,res) => {
    res.send("APi is working pleas do you backednd job")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server is runing on port ${PORT}`)
})