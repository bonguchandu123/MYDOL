// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Blocks, Code2, File, GraduationCap, Home, Info, Mail, PandaIcon, Sparkles, User } from "lucide-react";
// import { SignedIn, SignedOut, useClerk, UserButton, useUser } from '@clerk/clerk-react';
// import SubjectSelector from './SelectedSubject';

// export default function Navbar() {
 
//     const {openSignIn} = useClerk()
//     const {user} = useUser()
//     const year = user?.publicMetadata?.year
//     const branch = user?.publicMetadata?.branch
//   return (
    
//      <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/90 backdrop-blur-xl backdrop-saturate-150">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
//          <div className="max-w-7xl mx-auto px-4">
//             <div className=" relative h-16 flex items-center justify-between">
//                 <div className="flex items-center gap-8">
//             <Link to="/" className="flex items-center gap-3 group relative">
            
//               <div
//                 className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500/20 rounded-lg opacity-0 
//               group-hover:opacity-100 transition-all duration-500 blur-xl"
//               />

//               <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
//                 <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"/>
//               </div>

//               <div className="relative">
//                 <span
//                   className="block text-lg font-semibold bg-gradient-to-r
//                  from-red-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
//                 >
//                   Edu Valta
//                 </span>
//                               <span className="block text-xs text-blue-400/60 font-medium">
//                B-tech courses
//               </span>

//               </div>
//             </Link>
//             <Link
//               to='/pdf'
//               className="relative group hidden  sm:flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
//                 Notes Pdfs
//               </span>
//             </Link>
//             <Link
//               to='/'
//               className="relative group hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <Home className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
//                 Home
//               </span>
//             </Link>
//             <Link
//               to='/about'
//               className="relative hidden  group sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <Info className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
//                 About
//               </span>
//             </Link>
//             <Link
//               to='/contact'
//               className="relative hidden  group sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <Mail className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
//                 Contact
//               </span>
//             </Link>
//             <Link
//               to='/admin/upload'
//               className="relative hidden group sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <PandaIcon className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
//                 Admin Panel
//               </span>
//             </Link>
//             <SubjectSelector/>
//                 </div>
//                   <Link to="/" className="hidden sm:!flex items-center gap-3 group relative">
            
//               <div
//                 className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500/20 rounded-lg opacity-0 
//               group-hover:opacity-100 transition-all duration-500 blur-xl"
//               />

//               <div className="relative  bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
//                 <GraduationCap className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"/>
//               </div>

//               <div className="relative ">
//                 <span
//                   className="block text-lg font-semibold bg-gradient-to-r
//                  from-red-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
//                 >
//                  {year}st-year
//                 </span>
//                               <span className="block text-bold text-blue-400/60 font-medium">
//                branch:{branch}
//               </span>

//               </div>
//             </Link>
               
//                   <SignedIn>
//                     <div className='hidden sm:!block'>
//                           <UserButton/>


//                     </div>
//                     <div className='sm:!hidden block'>

//                     <UserButton>
//                         <UserButton.MenuItems>
//                              <UserButton.Link
//             label="Home"
//             labelIcon={<User className="size-4" />}
//             href="/"
//           />
//                         </UserButton.MenuItems>
                   
                    
//                         <UserButton.MenuItems>
//                              <UserButton.Link
//             label="About"
//             labelIcon={<Info className="size-4" />}
//             href="/about"
//           />
//                         </UserButton.MenuItems>
//                         <UserButton.MenuItems>
//                              <UserButton.Link
//             label="Contact"
//             labelIcon={<Mail className="size-4" />}
//             href="/contact"
//           />
//                         </UserButton.MenuItems>
//                         <UserButton.MenuItems>
//                              <UserButton.Link
//             label="Pdfs"
//             labelIcon={<File className="size-4" />}
//             href="/pdf"
//           />
                
//                         </UserButton.MenuItems>
                
//                     </UserButton>
//                   </div>
                 
    
                       
//                 </SignedIn>
//                 <SignedOut>
//                     <button onClick={openSignIn}>SignIn</button>
//                 </SignedOut>
                
              

                

                


//             </div>
            





//          </div>
         
      
//     </div>

 

    

    

    


//   )
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Blocks, Code2, File, GraduationCap, Home, Info, Mail, PandaIcon, User, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import SubjectSelector from './SelectedSubject';

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const year = user?.publicMetadata?.year;
  const branch = user?.publicMetadata?.branch;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/90 backdrop-blur-xl backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="relative">
                <span className="block text-lg font-semibold bg-gradient-to-r from-red-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">Edu Valta</span>
                <span className="block text-xs text-blue-400/60 font-medium">B-tech courses</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <Link to='/pdfs' className="relative group hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">Notes Pdfs</span>
            </Link>
            <Link to='/' className="relative group hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Home className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">Home</span>
            </Link>
            <Link to='/about' className="relative hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Info className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">About</span>
            </Link>
            <Link to='/contact' className="relative hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">Contact</span>
            </Link>
            <Link to='/admin/upload' className="relative hidden sm:!flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <PandaIcon className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">Admin Panel</span>
            </Link>

            <SubjectSelector />
            {year && branch && (
  <div className="hidden sm:!flex items-center gap-3 group relative">
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
      <GraduationCap className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
    </div>
    <div className="relative">
      <span className="block text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 text-transparent bg-clip-text">
        {year}st-Year
      </span>
      <span className="block text-xs text-blue-400/60 font-medium capitalize">Branch: {branch}</span>
    </div>
  </div>
)} {/* Restored SubjectSelector for all screens */}
          </div>

          {/* Year & Branch */}
          <Link to="/" className="hidden sm:flex items-center gap-3 group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <GraduationCap className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="relative">
              <span className="block text-lg font-semibold bg-gradient-to-r from-red-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">{year}st-year</span>
              <span className="block text-bold text-blue-400/60 font-medium">branch:{branch}</span>
            </div>
          </Link>

          {/* Right Side: User + Mobile Menu */}
          <div className="flex items-center gap-3">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <button onClick={openSignIn} className="text-white">SignIn</button>
            </SignedOut>

            <div className="sm:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
  <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="sm:!hidden mt-2 px-4 pb-4 flex flex-col gap-3 bg-gradient-to-b from-[#0f172a]/80 to-[#1e293b]/80 rounded-xl shadow-md backdrop-blur-xl py-4"
    >
      {year && branch && (
  <div className="flex items-center gap-3 group relative border border-gray-700 rounded-xl px-4 py-2 bg-gray-800/70">
    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10">
      <GraduationCap className="w-5 h-5 text-blue-400 transform -rotate-6" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 text-transparent bg-clip-text">
        {year}st-Year
      </span>
      <span className="text-xs text-blue-400/60 font-medium capitalize">Branch: {branch}</span>
    </div>
  </div>
)}

      {[
        { label: "🏠 Home", to: "/" },
        { label: "📄 Notes PDFs", to: "/pdfs" },
        { label: "ℹ️ About", to: "/about" },
        { label: "📬 Contact", to: "/contact" },
        { label: "🛠 Admin Panel", to: "/admin/upload" },
      ].map((item, i) => (
        <Link
          key={i}
          to={item.to}
          onClick={() => setMobileMenuOpen(false)}
          className="group relative overflow-hidden px-4 py-2 rounded-lg border border-gray-700 text-white bg-gray-800/70 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 active:scale-[0.97]"
        >
          <span className="relative z-10">{item.label}</span>
          {/* Gradient Hover Overlay */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg blur-sm" />
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>


      </div>
    </div>
  );
}
