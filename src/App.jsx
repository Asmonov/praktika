import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './home/Home'
import About from './components/About'
import Footer from './footer/Footer'
import Interesting from './components/Interesting'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Interesting' element={<Interesting/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
     
    </div>
  )
}

export default App
