import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import PdfCard from "../components/PdfCard"; // Your existing styled PDF card component

export default function SubjectPdfPage() {
  const { selectedSubject } = useParams();
  const { getToken } = useAuth();
  const { user } = useUser();
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${backendUrl}/api/pdf/subject/${selectedSubject}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPdfs(res.data.pdfs);
        console.log(res.data.pdfs)
      } catch (err) {
        console.error("Error fetching subject PDFs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, [selectedSubject]);

  return (
    <div className="min-h-screen px-4 py-12 bg-[#0a0a0f]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-4">
          {selectedSubject} PDFs
        </h1>
        <p className="text-gray-400 text-lg">
          Showing all uploaded PDFs for <strong>{selectedSubject}</strong> (organized by unit)
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence mode="popLayout">
          {pdfs.map((pdf, index) => (
            <PdfCard key={pdf._id} pdf={pdf} index={index} user={user} getToken={getToken} />
          ))}
        </AnimatePresence>
      </motion.div>

      {pdfs.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-16"
        >
          <p>No PDFs found for {selectedSubject}</p>
        </motion.div>
      )}
    </div>
  );
}
