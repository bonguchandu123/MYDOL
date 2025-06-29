import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

import { AnimatePresence, motion } from "framer-motion";
import PdfCard from "../components/PdfCard"; // Your existing styled PDF card component
import { usePdfStore } from "../store/usePdfStore";

export default function SubjectPdfPage() {
  const { selectedSubject } = useParams();
  const { getToken } = useAuth();
  const { user } = useUser();
 const { selPdfs, loading, SelectedPdf } = usePdfStore();

 
 useEffect(() => {
  const loadSubjectPdfs = async () => {
    const token = await getToken();
    await SelectedPdf(token, selectedSubject);
  };

  loadSubjectPdfs();
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
          {selPdfs.map((pdf, index) => (
            <PdfCard key={pdf._id} pdf={pdf} index={index} user={user} getToken={getToken} />
          ))}
        </AnimatePresence>
      </motion.div>

      {selPdfs.length === 0 && !loading && (
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
