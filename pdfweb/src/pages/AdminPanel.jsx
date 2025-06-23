import { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { motion } from "framer-motion";
import { subjectsMap } from "../assets/assets";


export default function AdminUploadPanel() {
  const { getToken } = useAuth();
  const { user } = useUser();

  const [form, setForm] = useState({
    title: "",
    subject: "",
    unit: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const year = user?.publicMetadata?.year || "1";
  const branch = user?.publicMetadata?.branch || "CSE";

  useEffect(() => {
    const options = subjectsMap[year]?.[branch] || [];
    setSubjectOptions(options);
  }, [year, branch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setMsg("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", form.title);
    formData.append("subject", form.subject);
    formData.append("unit", form.unit);

    try {
      setLoading(true);
      setMsg("");
      const token = await getToken();

      const res = await axios.post(`${backendUrl}/api/pdf/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(res.data.success){
        console.log(res.data)
      }

      setMsg("✅ PDF uploaded successfully!");
      setForm({ title: "", subject: "", unit: "" });
      setFile(null);
    } catch (err) {
      setMsg("❌ Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1b1b2e] to-[#0f0f1a] py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-[#1f1f2e]/80 border border-gray-700 p-8 rounded-2xl shadow-xl backdrop-blur-md"
      >
       <div className="mb-6 text-center">
  <h2 className="text-3xl font-bold text-blue-400">
    🛠 Admin PDF Upload
  </h2>
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mt-2 text-sm text-gray-300 max-w-md mx-auto"
  >
    This panel allows admins to upload subject-wise PDF notes categorized by year, branch, and unit. Make sure to fill all fields and upload only valid PDF files. Where PDF size must be below 10mb
  </motion.p>
</div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600"
              placeholder="Enter PDF title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600"
              required
            >
              <option value="">Select subject</option>
              {subjectOptions.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Unit</label>
            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600"
              required
            >
              <option value="">Select unit</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={`Unit-${n}`}>
                  Unit-{n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30 transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Uploading..." : "Upload PDF"}
          </button>

          {msg && <p className="text-center text-sm text-gray-300 mt-4">{msg}</p>}
        </form>
      </motion.div>
    </div>
  );
}
