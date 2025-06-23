

// import { motion } from "framer-motion";
// import { Clock, FileText, User, Trash2 } from "lucide-react";

// // Helper to safely generate a download URL with filename
// const getDownloadUrl = (url, title) => {
//   const cleanTitle = title?.replace(/\s+/g, "-").toLowerCase() || "download";
//   return url.replace("/upload/", `/upload/fl_attachment:${cleanTitle}.pdf/`);
// };

// export default function PdfCard({ pdf, index, isUploader, isAdmin, onDelete }) {
//   const downloadUrl = getDownloadUrl(pdf.fileUrl, pdf.title);

//   return (
//     <motion.div
//       key={pdf._id}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: index * 0.08, duration: 0.4 }}
//       whileHover={{ y: -6 }}
//       className="relative group overflow-hidden border border-gray-700 rounded-2xl bg-[#1a1a27]/80 backdrop-blur-lg shadow-xl hover:shadow-blue-600/20 transition-all duration-300"
//     >
//       {/* Glowing Hover Effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0" />

//       <div className="relative z-10 p-6 sm:p-8 space-y-4">
//         {/* Meta */}
//         <div className="flex justify-between text-sm text-gray-400">
//           <div className="flex items-center gap-2 text-base font-medium">
//             <FileText className="w-5 h-5 text-blue-400" />
//             {pdf.subject} • {pdf.unit}
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <Clock className="w-4 h-4" />
//             {new Date(pdf.createdAt).toLocaleDateString()}
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-white text-2xl font-semibold leading-tight group-hover:text-blue-400 transition">
//           {pdf.title}
//         </h3>

//         {/* Uploader Info */}
//         <div className="flex items-center gap-2 text-gray-400">
//           <div className="p-1.5 rounded-lg bg-gray-800/60">
//             <User className="w-5 h-5 text-white" />
//           </div>
//           <span className="text-base font-medium text-white">
//             {pdf.uploadedBy?.name || "Anonymous"}
//           </span>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mt-4">
//           <a
//             href={downloadUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 py-2 text-base font-medium text-blue-400 hover:text-white border border-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-300"
//           >
//             ⬇️ Download PDF
//           </a>

//           {(isUploader || isAdmin) && (
//             <button
//               onClick={() => onDelete(pdf._id)}
//               className="px-5 py-2 text-base font-medium text-red-400 hover:text-white border border-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300"
//             >
//               <Trash2 className="inline w-4 h-4 mr-1" />
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// import { motion } from "framer-motion";
// import { Clock, FileText, User, Trash2 } from "lucide-react";

// // Helper to safely generate a download URL with filename

// // Replace old helper with this
// const getDownloadUrl = (url, title) => {
//   const filename = title?.replace(/\s+/g, "-").toLowerCase() || "download";
//   return `${url}?fl_attachment=${filename}.pdf`;
// };






// export default function PdfCard({ pdf, index, isUploader, isAdmin, onDelete }) {
//   // const downloadUrl = getDownloadUrl(pdf.fileUrl);
//   // const downloadUrl = getDownloadUrl(pdf.fileUrl, pdf.title);


//   return (
//     <motion.div
//       key={pdf._id}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: index * 0.08, duration: 0.4 }}
//       whileHover={{ y: -6 }}
//       className="relative group overflow-hidden border border-gray-700 rounded-2xl bg-[#1a1a27]/80 backdrop-blur-lg shadow-xl hover:shadow-blue-600/20 transition-all duration-300"
//     >
//       {/* Glowing Hover Effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0" />

//       <div className="relative z-10 p-6 sm:p-8 space-y-4">
//         {/* Meta */}
//         <div className="flex justify-between text-sm text-gray-400">
//           <div className="flex items-center gap-2 text-base font-medium">
//             <FileText className="w-5 h-5 text-blue-400" />
//             {pdf.subject} • {pdf.unit}
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <Clock className="w-4 h-4" />
//             {new Date(pdf.createdAt).toLocaleDateString()}
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-white text-2xl font-semibold leading-tight group-hover:text-blue-400 transition">
//           {pdf.title}
//         </h3>

//         {/* Uploader Info */}
//         <div className="flex items-center gap-2 text-gray-400">
//           <div className="p-1.5 rounded-lg bg-gray-800/60">
//             <User className="w-5 h-5 text-white" />
//           </div>
//           <span className="text-base font-medium text-white">
//             {pdf.uploadedBy?.name || "Anonymous"}
//           </span>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mt-4">
          
// <a
//   href={getDownloadUrl(pdf.fileUrl, pdf.title)}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="px-5 py-2 text-base font-medium text-blue-400 hover:text-white border border-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-300"
// >
//   ⬇️ Download PDF
// </a>


//           {(isUploader || isAdmin) && (
//             <button
//               onClick={() => onDelete(pdf._id)}
//               className="px-5 py-2 text-base font-medium text-red-400 hover:text-white border border-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300"
//             >
//               <Trash2 className="inline w-4 h-4 mr-1" />
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { Clock, FileText, User, Trash2 } from "lucide-react";

// Helper to safely generate a download URL with filename
const getDownloadUrl = (url, title) => {
  const filename = title?.replace(/\s+/g, "-").toLowerCase() || "download";
  return `${url}?fl_attachment=${filename}.pdf`;
};

export default function PdfCard({ pdf, index, isUploader, isAdmin, onDelete }) {
  return (
    <motion.div
      key={pdf._id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="relative group overflow-hidden border border-gray-700 rounded-2xl bg-[#1a1a27]/80 backdrop-blur-lg shadow-xl hover:shadow-blue-600/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0" />

      <div className="relative z-10 p-6 sm:p-8 space-y-4">
        {/* Meta Info */}
        <div className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2 text-base font-medium">
            <FileText className="w-5 h-5 text-blue-400" />
            {pdf.subject} • {pdf.unit}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            {new Date(pdf.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-semibold leading-tight group-hover:text-blue-400 transition">
          {pdf.title}
        </h3>

        {/* Uploader Info */}
        <div className="flex items-center gap-2 text-gray-400">
          <div className="p-1.5 rounded-lg bg-gray-800/60">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-base font-medium text-white">
            {pdf.uploadedBy?.name || "Anonymous"}
          </span>
        </div>

        {/* PDF Preview */}
        <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-700">
          <iframe
            src={pdf.fileUrl}
            title={pdf.title}
            className="w-full h-full"
            frameBorder="0"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={getDownloadUrl(pdf.fileUrl, pdf.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-base font-medium text-blue-400 hover:text-white border border-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-300"
          >
            ⬇️ Download PDF
          </a>

          {(isUploader || isAdmin) && (
            <button
              onClick={() => onDelete(pdf._id)}
              className="px-5 py-2 text-base font-medium text-red-400 hover:text-white border border-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300"
            >
              <Trash2 className="inline w-4 h-4 mr-1" />
              Delete
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
