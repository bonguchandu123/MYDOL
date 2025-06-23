// UploadForm.jsx
import { useUser, useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import SubjectList from "../components/SubjectList";

export default function UploadForm() {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [selectedSubject, setSelectedSubject] = useState(""); // <-- moved here
  const [unit, setUnit] = useState("Unit-1");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log(file)

  const handleUpload = async () => {
    if (!selectedSubject || !unit || !title || !file) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("subject", selectedSubject);
    formData.append("unit", unit);

    try {
      setLoading(true);
      const token = await getToken();

      const res = await axios.post(`${backendUrl}/api/pdf/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("📄 PDF uploaded successfully!");
      console.log(res.data);

      // Reset form
      setTitle("");
      setUnit("Unit-1");
      setFile(null);
      setSelectedSubject("");

    } catch (err) {
      console.error("Upload failed:", err.message);
      alert("❌ Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border mt-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">📤 Upload PDF</h2>

      <SubjectList selected={selectedSubject} setSelected={setSelectedSubject} />

      <input
        type="text"
        placeholder="Unit (e.g. Unit-1)"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="block my-2 border p-2 w-full rounded"
      />

      <input
        type="text"
        placeholder="Title (e.g. Basics of Chemistry)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block my-2 border p-2 w-full rounded"
      />

  <input
  type="file"
  accept=".pdf,.docx,.pptx,.txt,.xlsx,.zip,.rar"
  onChange={(e) => setFile(e.target.files[0])}
/>


      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>
    </div>
  );
}
