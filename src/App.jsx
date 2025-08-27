//rafce
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const App = () => {
  
  return (
    <>
      <Routes>
  
        <Route path='/' element={ <Home />} />
        <Route path='/Blog' element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App
