import React from "react";
import { motion } from "framer-motion";
import { Mail, HelpCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto mt-20 bg-gray-900/70 p-8 rounded-2xl border border-gray-700 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Need Help? We're Here for You.
          </h1>
        </div>

        <p className="text-gray-300 mb-8">
          If you're facing any issues, have questions, or want to provide feedback, please don't hesitate to reach out. Our team will get back to you as soon as possible.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Support request submitted!");
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Describe your issue or question..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all duration-300 shadow-lg hover:from-blue-600 hover:to-purple-700"
          >
            <Mail className="w-5 h-5" />
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
