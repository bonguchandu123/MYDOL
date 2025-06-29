
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

import { usePdfStore } from "../store/usePdfStore";

export default function PdfList() {
  const { getToken } = useAuth();
  const { user } = useUser();
   const { allPdfs, loading, LoadPdfs, deletePdf } = usePdfStore();

  useEffect(() => {
    const fetch = async () => {
      const token = await getToken();
      await LoadPdfs(token);
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    const token = await getToken();
    const success = await deletePdf(id, token);
    if (success) alert("Deleted successfully");
    else alert("Unauthorized or failed to delete");
  };

  if (loading) return <p>Loading...</p>;
  if (allPdfs.length === 0) return <p>No PDFs available for your year/branch.</p>;
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📚 All PDFs</h2>
      {allPdfs.map((pdf) => {
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
