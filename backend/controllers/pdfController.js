
import PDF from "../models/Pdf.js";
import User from "../models/User.js";
import {v2 as cloudinary} from 'cloudinary'
import streamifier from "streamifier";

export const uploadPdf = async (req, res) => {
  try {
    const userId = typeof req.auth === "function" ? req.auth().userId : req.auth.userId;
    console.log("📥 PDF Upload Received by:", userId);

    if (!req.file) {
      console.log("❌ No file received");
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const { title, subject, unit } = req.body;

    if (!title || !subject || !unit) {
      return res.status(400).json({ success: false, message: "Missing title, subject, or unit" });
    }

    // Validate user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }


    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw",
            folder: "gvpce-pdfs",
            public_id: `${Date.now()}-${req.file.originalname.replace(/\s+/g, "-")}`,
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const cloudRes = await streamUpload();

    const newPdf = new PDF({
      title,
      subject,
      unit,
      year: user.year,
      branch: user.branch,
      fileUrl: cloudRes.secure_url,
      uploadedBy: user._id,
      cloudinaryId: cloudRes.public_id,
    });

    await newPdf.save();

    return res.status(201).json({
      success: true,
      message: "✅ PDF uploaded to Cloudinary",
      pdf: newPdf,
    });
  } catch (err) {
    console.error("❌ Upload Error:", err.message);
    return res.status(500).json({ success: false, message: "Server Error", error: err.message });
  }
};

export const getPdfsByYearBranch = async (req, res) => {
  try {
    const userId = req.auth.userId;

    // Find the requesting user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Find PDFs for user's year and branch, and populate uploader info
    const pdfs = await PDF.find({ year: user.year, branch: user.branch })
      .populate("uploadedBy", "name image"); // only populate name & image

    res.status(200).json({ success: true, pdfs });
  } catch (err) {
    console.error("Error fetching PDFs:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getPdfsBySubject = async (req, res) => {
  try {
    const { subject } = req.params;
    const userId = req.auth.userId;
    const user = await User.findById(userId);

    const pdfs = await PDF.find({
      year: user.year,
      branch: user.branch,
      subject: { $regex: new RegExp(`^${subject}$`, "i") }, // 🔥 Case-insensitive match
    });

    res.status(200).json({ success: true, pdfs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


export const deletePdf = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.auth.userId;
    const user = await User.findById(userId);

    const pdf = await PDF.findById(id);
    if (!pdf) return res.status(404).json({ message: "PDF not found" });
    

    const isUploader = pdf.uploadedBy === userId;

    if (!user.isAdmin && !isUploader) {
      return res.status(403).json({ message: "Unauthorized to delete this PDF" });
    }

    await PDF.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "PDF deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



export const downloadPdf = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) return res.status(404).json({ message: "PDF not found" });

    const response = await axios.get(pdf.fileUrl, {
      responseType: "stream",
    });

    res.setHeader("Content-Disposition", `attachment; filename="${pdf.title}.pdf"`);
    res.setHeader("Content-Type", "application/pdf");
    response.data.pipe(res);
  } catch (err) {
    console.error("Download error:", err.message);
    res.status(500).json({ message: "Download failed" });
  }
};
