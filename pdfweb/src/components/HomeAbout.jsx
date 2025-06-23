import { motion } from "framer-motion";
import { GraduationCap, BookOpenText, School2, Users } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f0f1a] via-[#1c1c2b] to-[#0f0f1a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4"
        >
          📘 About the GVPCE PDF Hub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto mb-10"
        >
          A centralized platform for students of <span className="text-blue-400 font-medium">GVPCE</span> to access and share
          PDFs across various branches and academic years. Created with ❤️ by Bongu Chandu, a CSD 1st-year student.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-[#1e1e2e]/80 border border-gray-700 rounded-xl shadow-md"
          >
            <School2 className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
            <h3 className="text-xl text-white font-semibold mb-1">Our College</h3>
            <p className="text-sm text-gray-400">GVP College of Engineering (Autonomous) — nurturing future engineers.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-[#1e1e2e]/80 border border-gray-700 rounded-xl shadow-md"
          >
            <GraduationCap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-xl text-white font-semibold mb-1">Years Covered</h3>
            <p className="text-sm text-gray-400">From 1st year to final year — all your academic resources in one place.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-[#1e1e2e]/80 border border-gray-700 rounded-xl shadow-md"
          >
            <BookOpenText className="w-8 h-8 text-green-400 mb-3 mx-auto" />
            <h3 className="text-xl text-white font-semibold mb-1">Subjects & Units</h3>
            <p className="text-sm text-gray-400">Access unit-wise PDFs for subjects like DBMS, CN, Chemistry & more.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-[#1e1e2e]/80 border border-gray-700 rounded-xl shadow-md"
          >
            <Users className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
            <h3 className="text-xl text-white font-semibold mb-1">Community Driven</h3>
            <p className="text-sm text-gray-400">Upload notes and help your juniors and peers succeed academically.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
