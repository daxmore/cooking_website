import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Resipies from './pages/Resipies'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resipies' element={<Resipies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App