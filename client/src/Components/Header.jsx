import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

const Header = () => {

  const {removeBg} = useContext(AppContext)


  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* {left side} */}
      <div >
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
            AI powered <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent'>background </span>
              remover <br className='max-md:hidden'/>for free !.</h1>
        <p className='my-6 text-[15px] text-gray-500'>
            Instantly remove the background from any of the image using AI.<br className='max-sm:hidden'/> Simply signin and upload your image to remove the background.</p>
      <div>
        <input type="file"  id='upload1' accept='image/*' hidden onChange={ e => removeBg(e.target.files[0])}/>
        <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r  from-blue-800 to-blue-300  m-auto hover:scale-105 transition-all duration-700'>
            <img src={assets.upload_btn_icon} alt="" className='w-5'/>
            <p className='text-white text-sm'>Upload your image</p>
        </label>
      </div>
      </div>
      {/* {right side} */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
