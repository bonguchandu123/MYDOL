
import PDF from "../models/Pdf.js";
import User from "../models/User.js";
import {v2 as cloudinary} from 'cloudinary'

// export const uploadPdf = async (req, res) => {
//   try {
//      console.log(req.file.size)
//     const userId = req.auth.userId; // Clerk user ID
//     console.log("Incoming PDF Upload 🔽");
    

// if (req.file) {
//   console.log("✅ File received:");
//   console.log(JSON.stringify(req.file, null, 2)); // ✅ FIXED
// } else {
//   console.log("❌ No file received");
// }

// console.log("✅ Form Data:");
// console.log(JSON.stringify(req.body, null, 2)); // ✅ FIXED



//     // Fetch user from DB
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ success: false, message: "User not found" });

//     const { title, subject, unit } = req.body;

//     if (!title || !subject || !unit || !req.file) {
//       return res.status(400).json({ success: false, message: "Missing fields or file" });
//     }

//     const fileUrl = req.file.secure_url || req.file.url || req.file.path;
//  // Cloudinary URL from multer-storage-cloudinary

//     const newPdf = new PDF({
//       title,
//       year: user.year,
//       branch: user.branch,
//       subject,
//       unit,
//       fileUrl,
//       uploadedBy: {
//         _id: user._id,
//         name: user.name,
//         image: user.image, // store from Clerk webhook
//       },
//     });

//     await newPdf.save();

//     return res.status(201).json({ success: true, message: "PDF uploaded successfully", pdf: newPdf });
//   } 
// catch (err) {
//   console.log(err.message)
// }

  
// };

// export const uploadPdf = async (req, res) => {
//   try {
//     const userId = req.auth.userId;
//     console.log("📥 PDF Upload Received");

//     if (!req.file) {
//       console.log("❌ No file received");
//       return res.status(400).json({ success: false, message: "No file uploaded" });
//     }

//     const { title, subject, unit } = req.body;

//     if (!title || !subject || !unit) {
//       return res.status(400).json({ success: false, message: "Missing title, subject, or unit" });
//     }

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

//     const newPdf = new PDF({
//       title,
//       subject,
//       unit,
//       year: user.year,
//       branch: user.branch,
//       fileUrl,
//       uploadedBy: user._id, // Only Clerk user ID here
//     });

//     await newPdf.save();

//     res.status(201).json({ success: true, message: "PDF uploaded", pdf: newPdf });
//   } catch (err) {
//     console.error("❌ Upload Error:", err.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };


// import fs from "fs";

// export const uploadPdf = async (req, res) => {
//   try {
//     const userId = req.auth.userId;
//     console.log("📥 PDF Upload Received by:", userId);

//     if (!req.file) {
//       console.log("❌ No file received");
//       return res.status(400).json({ success: false, message: "No file uploaded" });
//     }

//     const { title, subject, unit } = req.body;

//     if (!title || !subject || !unit) {
//       return res.status(400).json({ success: false, message: "Missing title, subject, or unit" });
//     }

//     // Validate user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // ✅ Upload to Cloudinary (PDFs = raw)
//     const cloudRes = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: "auto",

//       folder: "gvpce-pdfs",
//       public_id: `${Date.now()}-${req.file.originalname.replace(/\s+/g, "-")}`,
//        type: "upload"
//     });

//     // ✅ Delete temp file after upload
//     fs.unlinkSync(req.file.path);

//     const newPdf = new PDF({
//       title,
//       subject,
//       unit,
//       year: user.year,
//       branch: user.branch,
//       fileUrl: cloudRes.secure_url,
//       uploadedBy: user._id,
//       cloudinaryId: cloudRes.public_id, // useful for deleting later
//     });

//     await newPdf.save();

//     res.status(201).json({
//       success: true,
//       message: "✅ PDF uploaded to Cloudinary",
//       pdf: newPdf,
//     });
//   } catch (err) {
//     console.error("❌ Upload Error:", err.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };



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

    // ✅ Validate user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // ✅ Upload PDF using stream + buffer (memoryStorage)
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

// controllers/pdfController.js
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
// controllers/pdfController.js
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

// controllers/pdfController.js

export const downloadPdf = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) return res.status(404).json({ message: "PDF not found" });

    const response = await axios.get(pdf.fileUrl, {
      responseType: "stream",
    });

    res.setHeader("Content-Disposition", `attachment; filename="${pdf.title}.pdf"`);
    response.data.pipe(res);
  } catch (err) {
    console.error("Download error:", err.message);
    res.status(500).json({ message: "Download failed" });
  }
};
