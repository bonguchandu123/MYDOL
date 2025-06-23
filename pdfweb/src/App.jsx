


import { Routes, Route, useLocation } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import HomePdfPreview from "./components/PdfShown";
import UploadForm from "./pages/PdfPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PdfLibraryPage from "./components/pdfs";
import SubjectPdfPage from "./components/SubjectList";
import PdfDetailsPage from "./components/GetById";
import AdminUploadPanel from "./pages/AdminPanel";
import About from "./pages/About";
import SetupPage from "./pages/Setup";
import ContactForm from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "lucide-react";
import HomeAboutSection from "./components/HomeAbout";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


 // Adjust path if needed

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Only show header + preview on home

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0f1a] via-[#151522] to-[#0f0f1a] text-gray-100">
      {/* Always visible */}
      <Navbar/>

      <main className="flex-grow">
        {/* Only show on Home route */}
        {isHome && (
          <>
            <PageHeader/>
            <HomePdfPreview/>
            <HomeAboutSection/>
          </>
        )}
<Routes>
  {/* Public Routes */}
  <Route path="/setup" element={<SetupPage />} />
  <Route path="/contact" element={<ContactForm />} />

  {/* Protected Routes */}
  <Route element={<ProtectedRoute />}>
    {/* <Route path="/pdf" element={<UploadForm />} /> */}
    <Route path="/pdfs" element={<PdfLibraryPage />} />
    <Route path="/subject/:selectedSubject" element={<SubjectPdfPage />} />
    <Route path="/pdf/:id" element={<PdfDetailsPage />} />
    <Route path="/admin/upload" element={<AdminUploadPanel />} />
    <Route path="/about" element={<About />} />
    <Route path="/support" element={<Support/>} />
    <Route path="/privacy" element={<Privacy/>} />
    <Route path="/terms" element={<Terms/>} />
  </Route>
</Routes>

      </main>

      {/* Always visible */}
      <Footer/>
    </div>
  );
}
