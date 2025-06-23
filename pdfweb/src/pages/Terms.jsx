import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto mt-20 bg-gray-900/70 p-10 rounded-2xl border border-gray-700 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Terms & Conditions
          </h1>
        </div>

        <div className="text-gray-300 space-y-6 text-base leading-relaxed">
          <p>
            These Terms & Conditions govern your use of Edu Valta. By accessing our platform, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">1. Use of Service</h2>
          <p>
            You agree to use the platform only for lawful academic and personal purposes. Misuse or abuse of the service may result in account suspension.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">3. Intellectual Property</h2>
          <p>
            All content, including PDFs, notes, and branding, is protected and may not be copied or redistributed without permission.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">4. Modifications</h2>
          <p>
            Edu Valta reserves the right to update or modify these terms at any time. Changes will be communicated via the platform.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">5. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these terms or engage in harmful activities.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">6. Disclaimer</h2>
          <p>
            Edu Valta does not guarantee the accuracy or availability of all resources. Use is at your own risk.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">7. Contact</h2>
          <p>
            For any questions, email us at{" "}
            <a className="text-purple-400 underline" href="mailto:support@eduvalta.com">
              support@eduvalta.com
            </a>.
          </p>

          <p className="text-sm text-gray-500 pt-4 border-t border-gray-700 mt-6">
            Last updated: June 22, 2025
          </p>
        </div>
      </motion.div>
    </div>
  );
}
