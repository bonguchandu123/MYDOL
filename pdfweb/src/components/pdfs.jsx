

import { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Grid,
  Layers,
  Search,
  Tag,
  X,
} from "lucide-react";
import PdfCard from "../components/PdfCard";

import { usePdfStore } from "../store/usePdfStore";

// Subject Map based on user year & branch


export default function PdfLibraryPage() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const pdfSectionRef = useRef(null);
 
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [view, setView] = useState("grid");
  const {
    allPdfs,
  
    LoadPdfs,
    subjectsMap,
  } = usePdfStore();

  useEffect(() => {
    const loadPdfs = async () => {
      const token = await getToken();
      await LoadPdfs(token);
    };

    if (allPdfs.length === 0 && user) {
      loadPdfs();
    }
  }, [user]);

  useEffect(() => {
  if (searchQuery || selectedSubject) {
    // Delay to wait for DOM render
    setTimeout(() => {
      pdfSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}, [searchQuery, selectedSubject]);





 


  const userSubjects = subjectsMap[user?.publicMetadata?.year]?.[user?.publicMetadata?.branch] || [];

  const filteredPdfs = allPdfs.filter((pdf) => {
    const matchesSubject = !selectedSubject || pdf.subject === selectedSubject;
    const matchesSearch =
      pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.uploadedBy?.name?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-4"
        >
          <BookOpen className="w-4 h-4" />
          Student PDF Repository
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
        >
          Browse All Uploaded PDFs
        </motion.h1>
      </div>

      {/* Search */}
      <div className="max-w-5xl mx-auto mb-8 space-y-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative flex items-center">
            <Search className="absolute left-5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PDFs by title, unit, or uploader..."
              className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 text-white rounded-xl border border-[#313244] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        {/* Subject Filter */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-2 ring-gray-800 text-sm text-gray-400">
            <Tag className="w-4 h-4" />
            Subjects:
          </div>

          {userSubjects.map((subj) => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj === selectedSubject ? null : subj)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                selectedSubject === subj
                  ? "text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50"
                  : "text-gray-400 hover:text-white bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800"
              }`}
            >
              {subj}
            </button>
          ))}

          {selectedSubject && (
            <button
              onClick={() => setSelectedSubject(null)}
              className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* View toggle */}
      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <div className="flex items-center gap-2 bg-[#1e1e2e] p-1 rounded-lg ring-1 ring-gray-800">
          <button 
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${
              view === "grid"
                ? "bg-blue-500/20 text-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${
              view === "list"
                ? "bg-blue-500/20 text-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PDF Cards */}
      <motion.div
       ref={pdfSectionRef}
        layout
        className={`grid gap-6 ${
          view === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 max-w-2xl mx-auto"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filteredPdfs.map((pdf, index) => (
            <PdfCard
              key={pdf._id}
              pdf={pdf}
              index={index}
              isUploader={pdf.uploadedBy?._id === user?.id}
              isAdmin={user?.publicMetadata?.isAdmin}
              onDelete={() => {}} // Optional: implement delete if needed
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredPdfs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center text-gray-500"
        >
          <p>No PDFs found for this filter.</p>
        </motion.div>
      )}
    </div>
  );
}
