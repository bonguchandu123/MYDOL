import { motion } from "framer-motion";
import { GraduationCap, Upload, Users, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
    const aboutRef = useRef(null);

  // Scroll to About section when component mounts
  useEffect(() => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2f] to-[#0f0f1a] px-6 py-20 text-white">
      <motion.div
        ref={aboutRef} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-6">
          <Sparkles className="w-4 h-4" />
          Empowering Students through Notes
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
          About This Platform
        </h1>

        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Hi, I'm <span className="text-blue-400 font-semibold">Bongu Chandu</span> — a 1st year <span className="text-purple-400">CSD student</span> at <span className="text-green-400 font-semibold">GVPCE</span>.
          I built this platform to simplify and share study materials with fellow students who may not always have access to notes.
          It's free, community-driven, and made with 💙 for students, by a student.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#1a1a27]/80 border border-gray-700 backdrop-blur-md"
          >
            <Upload className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Upload Notes</h3>
              <p className="text-gray-400 text-sm">
                Share your PDFs with classmates or future juniors. A small upload can make a big difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#1a1a27]/80 border border-gray-700 backdrop-blur-md"
          >
            <Users className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Access Community Notes</h3>
              <p className="text-gray-400 text-sm">
                Browse and download notes uploaded by students across various subjects and units.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#1a1a27]/80 border border-gray-700 backdrop-blur-md"
          >
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Built by a Student</h3>
              <p className="text-gray-400 text-sm">
                I'm learning web development and applying real-world skills to help our academic journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#1a1a27]/80 border border-gray-700 backdrop-blur-md"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Made with Passion</h3>
              <p className="text-gray-400 text-sm">
                Designed with Tailwind CSS, Framer Motion & love for our CSD community.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
