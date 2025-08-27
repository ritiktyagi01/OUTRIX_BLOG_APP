import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
      < div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
    <div className='flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-gray-300/50 '>
<div>
  <a href="#"> 
   <img src = {assets.logo} alt ="logo" className='w-32 sm:w-44 cursor-pointer ' />  </a> 
   
    <p className='max-w-[410px] mt-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptatum? Deleniti nostrum eum ratione, recusandae quia aut eaque voluptate at et quo quis asperiores, id facere officiis explicabo optio laudantium.</p>
</div>
<div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
  {
    footer_data.map((item, index) => (
      <div key={index} className='min-w-[120px]'>
        <h3 className='font-semibold text-lg mb-4'>{item.title}</h3>
        <ul className='flex flex-col gap-2'>
          {
            item.links.map((link, linkIndex) => (
              <li key={linkIndex} className='text-gray-600 hover:text-gray-800 cursor-pointer'><a className='hover:underline' href="#">{link}</a> </li>
            ))
          }
        </ul>
      </div>
    ))
  }
</div>
   
</div>
        
      <p className='py-4 text-center md:text-base text-gray-500'>CopyRight 2025 @RITIK All Right Reserved.</p>
    </div>
  )
}

export default Footer
