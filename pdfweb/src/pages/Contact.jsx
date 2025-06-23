import { motion } from "framer-motion";
import { Mail, MapPin, Phone, SendHorizonal, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] px-6 py-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-400">
            Let's Connect! 🤝
          </h2>
          <p className="text-gray-400 text-lg">
            Whether you’re a GVPCE student looking for notes, or someone who wants to contribute study materials, I’d love to hear from you.
          </p>
          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>bonguchandu@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>GVPCE, Visakhapatnam, Andhra Pradesh</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-400">
              💡 Project Goal: Build a fully student-powered PDF sharing hub.
            </p>
            <p className="text-sm mt-2 text-green-400">
              Built with React, Clerk, MongoDB, Express & ❤️
            </p>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e1e2e] p-8 rounded-2xl border border-gray-700 shadow-xl space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("📬 Message sent!");
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="text-purple-400 w-5 h-5" />
            Contact Form
          </h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            <SendHorizonal className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
