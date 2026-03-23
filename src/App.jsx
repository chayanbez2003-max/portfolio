import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Project from './components/Project'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#060912] text-gray-200">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#e2e8f0',
            border: '1px solid rgba(124,58,237,0.3)',
          },
        }}
      />
    </>
  )
}

export default App
