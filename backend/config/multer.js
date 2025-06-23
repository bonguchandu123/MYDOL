// config/multer.js
import multer from "multer";

const storage = multer.memoryStorage(); // store in memory

const upload = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024, // Max 15MB
  },
});

export default upload;
