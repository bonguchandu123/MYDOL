import { useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

import { motion } from "framer-motion";
import { Clock, FileText, User } from "lucide-react";
import { usePdfStore } from "../store/usePdfStore";

export default function PdfDetailsPage() {
  const { id } = useParams();
  const { getToken } = useAuth();

 


const { selectedPdf: pdf, fetchPdfById, loading } = usePdfStore();

  useEffect(() => {
    const loadPdf = async () => {
      const token = await getToken();
      await fetchPdfById(id, token);
    };
    loadPdf();
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-gray-400">Loading PDF details...</div>;

  if (!pdf)
    return <div className="text-center py-20 text-red-400">PDF not found</div>;

  const downloadUrl = pdf.fileUrl.replace("/upload/", "/upload/fl_attachment/");

  return (
    <div className="min-h-screen px-6 py-16 bg-[#0a0a0f] text-white max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a1a27]/80 border border-gray-700 rounded-2xl p-10 shadow-xl backdrop-blur-md"
      >
        <h1 className="text-3xl font-bold text-blue-400 mb-6">{pdf.title}</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="text-gray-400 space-y-3 text-base">
            <p><FileText className="inline mr-2 text-blue-400" /> Subject: <span className="text-white">{pdf.subject}</span></p>
            <p>Unit: <span className="text-white">{pdf.unit}</span></p>
            <p>Year: <span className="text-white">{pdf.year}</span></p>
            <p>Branch: <span className="text-white">{pdf.branch}</span></p>
            <p><Clock className="inline w-4 h-4 mr-2 text-blue-400" /> Uploaded on: {new Date(pdf.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="text-gray-400 text-base">
            <p><User className="inline w-5 h-5 mr-2 text-white" /> Uploaded by: <span className="text-white font-medium">{pdf.uploadedBy?.name || "Anonymous"}</span></p>
            <img
              src={pdf.uploadedBy?.image}
              alt="Uploader"
              className="mt-4 w-20 h-20 object-cover rounded-full border border-blue-500"
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 transition"
          >
            ⬇️ Download PDF
          </a>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-white underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
