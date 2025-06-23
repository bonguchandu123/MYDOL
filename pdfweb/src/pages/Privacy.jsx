
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto mt-20 bg-gray-900/70 p-10 rounded-2xl border border-gray-700 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Privacy Policy
          </h1>
        </div>

        <div className="text-gray-300 space-y-6 text-base leading-relaxed">
          <p>
            At Edu Valta, your privacy is very important to us. This privacy policy explains what information we collect, how we use it, and your rights regarding your personal data.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, academic year, and branch through registration or usage of the platform. We also gather usage statistics and browser data to improve user experience.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">2. How We Use Your Data</h2>
          <p>
            Your information is used to personalize your experience, send important updates, and maintain the platform’s performance and security.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">3. Data Protection</h2>
          <p>
            We use standard encryption and secure servers to protect your data. We never sell your data to third parties.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">4. Cookies</h2>
          <p>
            Cookies help us improve your experience by remembering preferences and tracking site activity.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">5. Your Rights</h2>
          <p>
            You can access, update, or request deletion of your data at any time by contacting us. We comply with global data protection regulations.
          </p>

          <h2 className="text-xl text-blue-400 font-semibold">6. Contact</h2>
          <p>
            If you have questions about our privacy practices, feel free to email us at{" "}
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

