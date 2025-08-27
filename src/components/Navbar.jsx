import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center  py-5  sm:mx-20 xl:mx-32  ' >
      <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32  sm:w-44 cursor-pointer ' />
      <button
        onClick={() => navigate('/admin')}
        className="  flex  items-center justify-center gap-2 rounded-full cursor-pointer bg-primary text-white px-10 py-2.5"
      >
      Admin Login
        <img
          src={assets.arrow}
          alt="login"
          className="w-3"
        />
      </button>




    </div>
  )
}

export default Navbar
