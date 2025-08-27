import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-4 md:gap-6 py-10 md:py-20 bg-gray-100 '>
      <h1 className='text-2xl md:text-4xl font-semibold ' >Never Miss The Blog!</h1>
        <p className='md:text-lg text-gray-500 pb-8'>Subscribe to get the latest blog,new tech and exclusive news</p>
        <form className='flex items-center justify-center  gap-2 max-w-2xl w-full md:h-13 h-12 '>
<input type="text" placeholder='Enter your email' className='px-4 border text-gray border-gray-500 w-full h-full  rounded-l-md outline-none'required/>
<button  type = "submit" className='cursor-pointer font-medium hover:bg-primary bg-primary/80 text-white rounded-xl w-25 h-8'>Subscribe</button>
        </form>

    </div>
  )
}

export default Newsletter
