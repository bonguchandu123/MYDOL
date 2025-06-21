import express from "express"

import "dotenv/config"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks } from "./controllers/clerkWebhooks.js"
connectDB()

const app = express()


app.use(cors())

app.use(express.json())
app.use(clerkMiddleware())

app.use('/api/clerk',clerkWebhooks)
app.get('/',(req,res) => {
    res.send("APi is working pleas do you backednd job")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server is runing on port ${PORT}`)
})