//rafce
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Bloglist from './components/Bloglist'
import BlogCard from './components/BlogCard'

const App = () => {
  
  return (
    <>
      <Routes>
  
        <Route path='/' element={ <Home />} />
        <Route path='/blog/:id' element={<Blog/>} />
        
      </Routes>
    </>
  )
}

export default App
