

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

import { Link } from "react-router-dom";
import PdfCard from "./PdfCard";
import EmptyStatePrompt from "./EmptyStatePromt";
import { usePdfStore } from "../store/usePdfStore";

export default function HomePdfPreview() {

  const { getToken } = useAuth();
  const { user } = useUser();
 const { pdfs, fetchPdfs, loading } = usePdfStore(); // ✅ Zustand values

  useEffect(() => {
    const load = async () => {
      const token = await getToken();
      await fetchPdfs(token); // Zustand handles loading internally
    };
    if (pdfs.length === 0) load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      const token = await getToken();
      await usePdfStore.getState().deletePdf(id, token); // ✅ Zustand delete
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Not authorized or failed to delete PDF.");
    }
  };

  if (!loading && pdfs.length === 0) return <EmptyStatePrompt />;
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
