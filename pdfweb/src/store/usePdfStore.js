import { create } from 'zustand';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const usePdfStore = create((set, get) => ({
  pdfs: [],
  allPdfs: [],
  selPdfs:[],
  error:"",
  loading: false,
 subjectsMap: {
    "1": {
      "CSE": ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Probability and Statistics","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
      "CSIT": ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Workshop","Engineering Chemistry Lab","Communticative English Lab","It Essentials Lab","Ordinary differential Equations and Vector Calculus","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring Drawing","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
      "MECH": ["Calculus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Workshop","Engineering Chemistry Lab","Communticative English Lab","It Essentials Lab","Ordinary differential Equations and Vector Calculus","Applied Physics","Switching Theroy And Logic Design","Programming for Problem solving using C","Enginerring Drawing","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
      "CSD":  ["Multivariable calculus", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Differential Equations and Integral Transforms","Applied Physics","Digital Logic and Compouter design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
      "CSAI":  ["Multivariable calculus", "Enginerring Chemistry", "Communicative english", "Basic Electrical And Electronic Engineering","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","It Essentials and Python Programming Lab","Differential Equations and Integral Transforms","Applied Physics","Digital Logic and Compouter design","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Basic Electrical And Electronic Engineering Lab","Environimental Sceince"],
      "ECE":  ["CalCulus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Fluid Mechanics and Hydraulic Machines Lab","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","Fluid Mechanics and Hydraulic Machines","Ordinary Differential Equation and Vector Calculus","Applied Physics","Elecronic Devices and Circuits","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Electronic Devices and Circuits Lab","Environimental Sceince"],
      "EEE":  ["CalCulus and Linear Algebra", "Enginerring Chemistry", "Communicative english", "Fluid Mechanics and Hydraulic Machines Lab","Engineering Drawing","Engineering Chemistry Lab","Communticative English Lab","Fluid Mechanics and Hydraulic Machines","Ordinary Differential Equation and Vector Calculus","Applied Physics","Elecronic Devices and Circuits","Programming for Problem solving using C","Enginerring WorkShop","Applied Physics Lab","Programming for Problem Solving using C Lab","Electronic Devices and Circuits Lab","Environimental Sceince"],
      "CIVIL": ["CalCulus and Linear Algebra","Chemistry of Materials","Programming for Problem solving using C","Surveying and Geomatics","Enginerring WorkShop","Chemistry Lab","Programming for Problem Solving using C Lab","Surveying and Geomatics Lab","Ordinary differential Equations and Vector Calculus","Engineering Physics","Communticative English","Applied Mechanics","Engineering Drawing","Engineering Physics Lab","Communication English Lab","Engineering Geology Lab","Environimental Sceince"],
      "CHEM": ["CalCulus and Linear Algebra","Physical Chemistry","Programming for Problem solving using C","Basic Electrical and Electronics Engineering","Enginerring WorkShop","Physical Chemistry Lab","Programming for Problem Solving using C Lab","Industrial Chemical Analysis Lab","Ordinary differential Equations and Vector Calculus","Engineering Physics","Communticative English Lab","Applied Mechanics","Engineering Drawing","Engineering Physics Lab","Communication English Lab","Analysis of Organic Compounds Lab","Environimental Sceince"],
    },
    "2": {
      CSE: ["DS", "DBMS", "OOP", "COA"],
      CSD: ["SE", "DBMS", "OS"],
      CIVIL: ["BMC", "Surveying"],
    },
    "3": {
      CSE: ["CN", "AI", "TOC"],
      CSD: ["CN", "OS", "ML"],
    },
    "4": {
      CSE: ["Internship", "Project"],
    },
  },
  

  fetchPdfs: async (token) => {
    const alreadyFetched = get().pdfs.length > 0;
    if (alreadyFetched) return;

    set({ loading: true });
    try {
      const res = await axios.get(`${backendUrl}/api/pdf/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ pdfs: res.data.pdfs.slice(0, 6) });
    } catch (err) {
      console.error("Failed to fetch PDFs:", err);
    } finally {
      set({ loading: false });
    }
  },

  deletePdf: async (id, token) => {
    try {
      await axios.delete(`${backendUrl}/api/pdf/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set((state) => ({
        pdfs: state.pdfs.filter((pdf) => pdf._id !== id),
        allPdfs: state.allPdfs.filter((pdf) => pdf._id !== id),
      }));
    } catch (err) {
      console.error("Delete failed:", err);
      throw err;
    }
  },

  LoadPdfs: async (token) => {
    try {
      const res = await axios.get(`${backendUrl}/api/pdf/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ allPdfs: res.data.pdfs });
    } catch (err) {
      console.error("Error loading all PDFs:", err);
    }
  },
  SelectedPdf: async (token,selectedSubject) => {
      try {
           
            const res = await axios.get(`${backendUrl}/api/pdf/subject/${selectedSubject}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            set({selPdfs:res.data.pdfs});
            console.log(res.data.pdfs)
          } catch (err) {
            console.error("Error fetching subject PDFs:", err);
          } finally {
            set({loading:false});
          }
        



    
  },
  fetchPdfById: async (id, token) => {
    set({ loading: true });
    try {
      const res = await axios.get(`${backendUrl}/api/pdf/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ selectedPdf: res.data.pdf });
    } catch (err) {
      console.error("Failed to fetch PDF details:", err);
      set({ selectedPdf: null });
    } finally {
      set({ loading: false });
    }
  },
   uploadPdf: async (form, file, getToken, onSuccess) => {
    if (!file) return set({ msg: "Please select a file" });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", form.title);
    formData.append("subject", form.subject);
    formData.append("unit", form.unit);

    try {
      set({ loading: true, msg: "" });
      const token = await getToken();
      const res = await axios.post(`${backendUrl}/api/pdf/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        set({ msg: "✅ PDF uploaded successfully!" });
        if (onSuccess) onSuccess(); // callback to reset form
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      set({ msg: "❌ Upload failed" });
    } finally {
      set({ loading: false });
    }
  },
    setUp: async (form, token, navigate) => {
    try {
      set({ loading: true, error: "" });

      await axios.put(`${backendUrl}/api/user/setup`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/"); // Redirect on success
    } catch (err) {
      console.error("Setup error:", err.message);
      set({ error: "Failed to update details." });
    } finally {
      set({ loading: false });
    }
  },
}));
