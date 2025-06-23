import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { motion } from "framer-motion";

export default function SetupPage() {
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ year: "", branch: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const years = ["1", "2", "3", "4"];
  const branches = ["CSE", "CSD", "CIVIL", "CHE", "EEE", "MECH", "ECE"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.year || !form.branch) {
      return setError("Please select both year and branch.");
    }

    try {
      setLoading(true);
      const token = await getToken();
      await axios.put(`${backendUrl}/api/user/setup`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/"); // or /dashboard
    } catch (err) {
      setError("Failed to update details.");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1b1b2e] to-[#0f0f1a] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-[#1f1f2e]/80 border border-gray-700 p-8 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">👋 Welcome!</h2>
        <p className="text-gray-400 text-center mb-6">Please select your year and branch to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Select Year</label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600 focus:outline-none"
              required
            >
              <option value="">-- Choose Year --</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year} Year
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Select Branch</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a2a3d] text-white border border-gray-600 focus:outline-none"
              required
            >
              <option value="">-- Choose Branch --</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
