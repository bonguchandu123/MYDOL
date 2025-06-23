import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { subjectsMap } from "../assets/assets";



export default function SubjectSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useUser();
  const navigate = useNavigate();

const year = user?.publicMetadata?.year;
const branch = user?.publicMetadata?.branch;
const subjects = (year && branch && subjectsMap[year]?.[branch]) || [];


  useEffect(() => {
    setMounted(true);
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubjectClick = (subject) => {
    navigate(`/subject/${subject}`);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-2 bg-[#1e1e2e]/80 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
      >
        <span className="text-sm font-medium text-white">Subjects</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-52 bg-[#1e1e2e]/95 backdrop-blur-xl rounded-xl border border-[#313244] shadow-xl py-2 z-50"
          >
            <div className="px-4 pb-2 border-b border-gray-700">
              <p className="text-xs text-gray-400">Your Subjects</p>
            </div>

            {subjects.length > 0 ? (
             <div className="py-1 max-h-60 overflow-y-auto scroll-thin scroll-thumb-gray-700 scroll-track-transparent">
  {subjects.map((subj, idx) => (
    <motion.button
      key={subj}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.05 }}
      onClick={() => handleSubjectClick(subj)}
      className="w-full text-left px-4 py-2 hover:bg-[#262637] text-sm text-gray-300 hover:text-white transition-all flex items-center justify-between"
    >
      {subj}
      <Sparkles className="w-4 h-4 text-purple-400" />
    </motion.button>
  ))}
</div>

            ) : (
              <p className="text-sm text-center text-gray-500 px-4 py-3">No subjects found</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
