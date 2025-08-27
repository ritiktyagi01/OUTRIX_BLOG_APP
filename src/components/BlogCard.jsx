import React from 'react'
import {  useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, description, image, category, _id } = blog;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-105 hover:shadow-primary/25 duration-300 transition-all cursor-pointer'>
      <img src={image} alt='image' className='aspect-video' />
      <span className='mt-4 ml-5 px-3 py-1 inline-block bg-primary/20 text-medium text-primary rounded-full'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
     <p
  className='mb-3 font-xs text-gry-600'
  dangerouslySetInnerHTML={{
    __html: (() => {
      const parts = description.split('.');
      if (parts.length > 1) {
        return parts.slice(0, 1).join('.') + '.';
      }
      return description;
    })()
  }}
></p>
      </div>


    </div>
  )
}

export default BlogCard

