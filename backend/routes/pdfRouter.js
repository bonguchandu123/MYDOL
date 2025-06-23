import express from "express";
import { requireAuth } from "@clerk/express";
import upload from "../config/multer.js"; // cloudinary multer setup
import { deletePdf, downloadPdf, getPdfsBySubject, getPdfsByYearBranch, uploadPdf } from "../controllers/pdfController.js";


const Pdfrouter = express.Router();

Pdfrouter.post("/upload", requireAuth(), upload.single("file"), uploadPdf);
// routes/pdfRoutes.js
Pdfrouter.get("/my", requireAuth(), getPdfsByYearBranch);
Pdfrouter.get("/subject/:subject", requireAuth(), getPdfsBySubject);
Pdfrouter.delete("/delete/:id", requireAuth(), deletePdf);
Pdfrouter.get("/download/:id", requireAuth(), downloadPdf);

// Pdfrouter.get("/:id", requireAuth, getPdfById);

export default Pdfrouter;
