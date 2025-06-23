


// import multer from "multer";
// import fs from "fs";
// import path from "path";

// const tempDir = "temp_uploads";
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir);
//   },
//   filename: (req, file, cb) => {
//     const filename = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });
// export default upload;


// config/multer.js
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });
export default upload;
