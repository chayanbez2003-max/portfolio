import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
    </>
  )
}

export default App

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // Page Components
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Experience from "./pages/Experience";
// import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       {/* Add top padding to prevent content from hiding behind the fixed navbar */}
//       <div className="pt-20 text-5xl text-center">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;