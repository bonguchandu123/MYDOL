import { useClerk, useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Lightbulb, Upload, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyStatePrompt() {
    const { openSignIn } = useClerk();

    const {user} = useUser()
  return (
    <section className="relative z-10 py-24 px-4 sm:px-10 lg:px-16 w-full mx-auto">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1e1e2e] via-[#25253a] to-[#1e1e2e] opacity-95" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium">
          <Lightbulb className="w-4 h-4" />
          GVPCE Student Guide
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-4">
          Welcome to the GVPCE Notes Hub
        </h2>

        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
          This platform lets students like you upload and access PDF notes
          easily. Start by signing in, and contribute to the community by sharing your materials!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {user?"":<button
            onClick={openSignIn}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
          >
            <FileText className="w-5 h-5" />
            
            Login to Access PDFs
          </button>}

          <Link
            to="/admin/upload"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 rounded-xl transition"
          >
            <Upload className="w-5 h-5" />
            Upload Your First PDF
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Note: This portal is intended for GVPCE 1st-year CSD students, but all branches are welcome to share notes!
        </p>
      </motion.div>
    </section>
  );
}
