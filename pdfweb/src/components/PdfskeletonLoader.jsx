import { motion } from "framer-motion";

export default function PdfCardSkeleton({ count = 1 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.08 }}
          className="animate-pulse relative group overflow-hidden border border-gray-700 rounded-2xl bg-[#1a1a27]/80 backdrop-blur-lg shadow-xl p-6 sm:p-8 space-y-4"
        >
          {/* Glowing Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 transition duration-500 blur-xl z-0" />

          {/* Meta */}
          <div className="flex justify-between text-sm">
            <div className="h-4 w-32 bg-gray-700 rounded-md" />
            <div className="h-4 w-16 bg-gray-700 rounded-md" />
          </div>

          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-700 rounded-md" />

          {/* Uploader */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-700" />
            <div className="h-4 w-32 bg-gray-700 rounded-md" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <div className="h-10 w-28 bg-gray-700 rounded-xl" />
            <div className="h-10 w-20 bg-gray-700 rounded-xl" />
          </div>
        </motion.div>
      ))}
    </>
  );
}
