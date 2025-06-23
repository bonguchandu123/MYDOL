import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
// import { subjectsMap } from "../assets/assets";
 const subjectsMap = {
  "1": {
    CSE: ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Probability and Statistics","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
    CSIT: ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Workshop","Engineering Chemistry Lab","Communticative English Lab","It Essentials Lab","Ordinary differential Equations and Vector Calculus","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring Drawing","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
    MECH: ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Workshop","Engineering Chemistry Lab","Communticative English Lab","It Essentials Lab","Ordinary differential Equations and Vector Calculus","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring Drawing","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
    CSD:  ["Multivariable calculus", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Differential Equations and Integral Transforms","Applied Physics","Digital Logic and Compouter design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
    CSAI:  ["Multivariable calculus", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Differential Equations and Integral Transforms","Applied Physics","Digital Logic and Compouter design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
    ECE:  ["CalCulus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Fluid Mechanics and Hydraulic Machines Lab","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","Fluid Mechanics and Hydraulic Machines","Ordinary Differential Equation and Vector Calculus","Applied Physics","Elecronic Devices and Circuits","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Electronic Devices and Circuits Lab","Environimental Sceince"],
    EEE:  ["CalCulus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Fluid Mechanics and Hydraulic Machines Lab","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","Fluid Mechanics and Hydraulic Machines","Ordinary Differential Equation and Vector Calculus","Applied Physics","Elecronic Devices and Circuits","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Electronic Devices and Circuits Lab","Environimental Sceince"],
    CIVIL: ["CalCulus and Linear Algebra","Chemistry of Materials","Programming for Problem solving using C","Surveying and Geomatics","Enginerring WorkShop","Chemistry Lab","Programming for Problem Solving using C Lab","Surveying and Geomatics Lab","Ordinary differential Equations and Vector Calculus","Engineering Physics","Communticative English","Applied Mechanics","Engineering Drawing","Engineering Physics Lab","Communication English Lab","Engineering Geology Lab","Environimental Sceince"],
    CHEM: ["CalCulus and Linear Algebra","Physical Chemistry","Programming for Problem solving using C","Basic Electrical and Electronics Engineering","Enginerring WorkShop","Physical Chemistry Lab","Programming for Problem Solving using C Lab","Industrial Chemical Analysis Lab","Ordinary differential Equations and Vector Calculus","Engineering Physics","Communticative English Lab","Applied Mechanics","Engineering Drawing","Engineering Physics Lab","Communication English Lab","Analysis of Organic Compounds Lab","Environimental Sceince"],
  },
  "2": {
    CSE: ["DS", "DBMS", "OOP", "COA"],
    CSD: ["SE", "DBMS", "OS"],
    CIVIL: ["BMC", "Surveying"],
  },
  "3": {
    CSE: ["CN", "AI", "TOC"],
    CSD: ["CN", "OS", "ML"],
  },
  "4": {
    CSE: ["Internship", "Project"],
  },
};




export default function SubjectSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useUser();
  const navigate = useNavigate();

const year = user?.publicMetadata?.year;
const branch = user?.publicMetadata?.branch;
const subjects = (year && branch && subjectsMap[year]?.[branch]) || [];
console.log(subjects)


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
