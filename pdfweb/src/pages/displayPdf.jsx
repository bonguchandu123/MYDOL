// import { useEffect, useState } from "react";
// import { useAuth } from "@clerk/clerk-react";
// import axios from "axios";

// export default function PdfList() {
//   const { getToken } = useAuth();
//   const [pdfs, setPdfs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfs = async () => {
//       try {
//         const token = await getToken();
//         const res = await axios.get("http://localhost:5000/api/pdf/my", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setPdfs(res.data.pdfs);
//       } catch (err) {
//         console.error("Failed to load PDFs:", err);
//         alert("Could not fetch PDFs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfs();
//   }, []);

//   if (loading) return <p className="p-4">Loading PDFs...</p>;

//   if (pdfs.length === 0) return <p className="p-4">No PDFs uploaded for your year & branch.</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">📚 PDFs for Your Branch & Year</h2>
//       <div className="space-y-4">
//         {pdfs.map((pdf) => {
//           // Force download via Cloudinary fl_attachment
//           const downloadUrl = pdf.fileUrl.replace("/upload/", "/upload/fl_attachment/");

//           return (
//             <div key={pdf._id} className="border p-4 rounded shadow">
//               <div className="mb-2">
//                 <h3 className="text-lg font-semibold">{pdf.title}</h3>
//                 <p>📘 {pdf.subject} - {pdf.unit}</p>
//                 <p className="text-sm text-gray-600">Uploaded by: {pdf.uploadedBy.name}</p>
//               </div>
//               <div>
//                 <a
//                   href={downloadUrl}
//                   download
//                   className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                 >
//                   ⬇️ Download
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// components/PdfList.jsx
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function PdfList() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl)

  const fetchPdfs = async () => {
    try {
      const token = await getToken();
      const res = await axios.get(`${backendUrl}/api/pdf/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPdfs(res.data.pdfs);
    } catch (err) {
      alert("Error fetching PDFs");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      const token = await getToken();
      await axios.delete(`${backendUrl}/api/pdf/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Deleted successfully");
      fetchPdfs(); // Refresh list
    } catch (err) {
      alert("Unauthorized or failed to delete");
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (pdfs.length === 0) return <p>No PDFs available for your year/branch.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📚 All PDFs</h2>
      {pdfs.map((pdf) => {
        const downloadUrl = pdf.fileUrl.replace("/upload/", "/upload/fl_attachment/");
      const isUploader = pdf.uploadedBy === user.id;


        const isAdmin = user?.publicMetadata?.isAdmin;

        return (
          <div key={pdf._id} className="border p-4 rounded mb-3 shadow">
            <h3 className="text-lg font-semibold">{pdf.title}</h3>
            <p>📘 {pdf.subject} - {pdf.unit}</p>
            <p className="text-sm text-gray-500">Uploaded by: {pdf.uploadedBy.name}</p>

            <div className="flex gap-2 mt-2">
              <a href={downloadUrl} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded">
                ⬇️ Download
              </a>
              {(isUploader || isAdmin) && (
                <button onClick={() => handleDelete(pdf._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                  🗑️ Delete
                </button>
                )} 
            </div>
          </div>
        );
      })}
    </div>
  );
}
