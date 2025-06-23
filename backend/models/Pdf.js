import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  subject: { type: String, required: true },
  branch: { type: String, required: true },
  unit: { type: String, required: true },
  fileUrl: { type: String, required: true },

  // Clerk user ID is a string like "user_abc123", not ObjectId
  uploadedBy: {
    type: String, // 🔥 NOT ObjectId
    required: true,
    ref: "User",  // optional: only if you're manually joining Clerk users
  },
   cloudinaryId: { type: String },
}, { timestamps: true });

const PDF = mongoose.models.PDF || mongoose.model("PDF", pdfSchema);
export default PDF;
