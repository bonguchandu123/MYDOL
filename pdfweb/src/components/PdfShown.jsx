

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Link } from "react-router-dom";
import PdfCard from "./PdfCard";
import EmptyStatePrompt from "./EmptyStatePromt";

export default function HomePdfPreview() {
  const [loading,setLoading] = useState(true)
  const { getToken } = useAuth();
  const { user } = useUser();
  const [pdfs, setPdfs] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${backendUrl}/api/pdf/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPdfs(res.data.pdfs.slice(0, 6));
      } catch (err) {
        console.error("Failed to load PDFs:", err);
      }finally {
        setLoading(false); // NEW
      }
    };

    fetchPdfs();
  }, [pdfs]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      const token = await getToken();
      await axios.delete(`${backendUrl}/api/pdf/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPdfs((prev) => prev.filter((pdf) => pdf._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Not authorized or failed to delete PDF.");
    }
  };

  if (!loading && pdfs.length === 0) return <EmptyStatePrompt/>;

  return (
    <section className="relative z-10 py-20 px-4 sm:px-10 lg:px-16 w-full mx-auto">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1e1e2e] via-[#25253a] to-[#1e1e2e] opacity-95" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-10"
      >
        <h2 className="text-3xl font-bold text-white tracking-tight">
          📚 Recently Uploaded PDFs
        </h2>
        <Link
          to="/pdfs"
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          View All PDFs →
        </Link>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {
          pdfs.map((pdf, index) => (
            <PdfCard
              key={pdf._id}
              pdf={pdf}
              index={index}
              isUploader={pdf.uploadedBy?._id?.toString() === user?.id}
              isAdmin={user?.publicMetadata?.isAdmin}
              onDelete={handleDelete}
            />
      
        ))}
      </div>
    </section>
  );
}
