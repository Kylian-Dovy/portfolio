import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projets from './pages/projets'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projets" element={<Projets/>}/>
      </Routes>
    </Router>
  )
}

export default App
