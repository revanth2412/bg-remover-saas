import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-30 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>
      <br />
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
        <div className='cursor-pointer flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500 '>
            <img src={assets.upload_icon} alt="" className='max-w-9'/>
            <div><p className='text-xl font-medium'>Upload image</p>
            <p className='text-sm text-neutral-500'>Sign in and uplaod the image first <br />click on upload image</p></div>
        </div>
        <div className='cursor-pointer flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500'>
            <img src={assets.remove_bg_icon} alt="" className='max-w-9'/>
            <div><p className='text-xl font-medium'>Remove background</p>
            <p className='text-sm text-neutral-500'>Instantly remove the background from the image <br />using AI powered backend</p></div>
        </div>
        <div className='cursor-pointer flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500'>
            <img src={assets.download_icon} alt="" className='max-w-9'/>
            <div><p className='text-xl font-medium'>Download image</p>
            <p className='text-sm text-neutral-500'>Download the background removed image  <br />Downlaod  high quality image</p></div>
        </div>
      </div>
    </div>
  )
}

export default Steps
