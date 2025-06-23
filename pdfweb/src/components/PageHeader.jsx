import { motion } from "framer-motion";

export default function PageHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-gray-200 py-14 px-6 border-b border-gray-800 shadow-md">
      {/* Soft Gradient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-transparent blur-2xl opacity-30 pointer-events-none"
      />

      {/* Main Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          📘 B.Tech Study Materials 
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Upload, manage, and access your subject-wise PDFs — organized by year and branch. A simple solution built for every engineering student.
        </p>
      </motion.div>
    </div>
  );
}
