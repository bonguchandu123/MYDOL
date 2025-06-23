// // components/SubjectPdfList.jsx
// import { useState, useEffect } from "react";
// import { useAuth } from "@clerk/clerk-react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function SubjectPdfList() {
//   const { selectedSubject } = useParams();
//   const { getToken } = useAuth();

//   const [pdfs, setPdfs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!selectedSubject) return;

//     const fetchPdfs = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const token = await getToken();

//         const res = await axios.get(
//           `http://localhost:5000/api/pdf/subject/${selectedSubject}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setPdfs(res.data.pdfs);
//       } catch (err) {
//         console.error("Failed to fetch PDFs:", err);
//         setError("Something went wrong while loading PDFs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfs();
//   }, [selectedSubject]);

//   if (!selectedSubject) return <p className="p-4">No subject selected</p>;

//   if (loading) return <p className="p-4">Loading PDFs for {selectedSubject}...</p>;

//   if (error) return <p className="p-4 text-red-600">{error}</p>;

//   if (pdfs.length === 0) return <p className="p-4">No PDFs found for {selectedSubject}.</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">
//         PDFs for Subject: {selectedSubject}
//       </h2>

//       <div className="space-y-4">
//         {pdfs.map((pdf) => (
//           <div key={pdf._id} className="border p-4 rounded shadow">
//             <h3 className="font-bold">{pdf.title}</h3>
//             <p>📘 {pdf.unit}</p>
//             <p className="text-sm text-gray-500">Uploaded by: {pdf.uploadedBy.name}</p>
//             <a
//               href={pdf.fileUrl.replace("/upload/", "/upload/fl_attachment/")} // ✅ Force download on Cloudinary
//               download
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//             >
//               ⬇️ Download
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// components/SubjectPdfList.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function SubjectPdfList() {
  const { selectedSubject } = useParams();
  const { getToken } = useAuth();
  const { user } = useUser();
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchPdfs = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const res = await axios.get(`${backendUrl}/api/pdf/subject/${selectedSubject}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPdfs(res.data.pdfs);
    } catch (err) {
      console.error(err);
      alert("Error loading subject PDFs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    try {
      const token = await getToken();
      await axios.delete(`http://localhost:5000/api/pdf/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPdfs(); // Refresh
    } catch {
      alert("Not authorized to delete this PDF.");
    }
  };

  useEffect(() => {
    if (selectedSubject) fetchPdfs();
  }, [selectedSubject]);

  if (loading) return <p>Loading...</p>;
  if (pdfs.length === 0) return <p>No PDFs found for subject: {selectedSubject}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📘 PDFs for {selectedSubject}</h2>
      {pdfs.map((pdf) => {
        const downloadUrl = pdf.fileUrl.replace("/upload/", "/upload/fl_attachment/");
        const isUploader = pdf.uploadedBy._id === user.id;
        const isAdmin = user?.publicMetadata?.isAdmin;

        return (
          <div key={pdf._id} className="border p-4 rounded mb-3 shadow">
            <h3 className="text-lg font-semibold">{pdf.title}</h3>
            <p>🗂️ {pdf.unit}</p>
            <p className="text-sm text-gray-500">Uploaded by: {pdf.uploadedBy.name}</p>

            <div className="flex gap-2 mt-2">
              <a href={downloadUrl} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded">
                Download
              </a>
              {(isUploader || isAdmin) && (
                <button onClick={() => handleDelete(pdf._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
