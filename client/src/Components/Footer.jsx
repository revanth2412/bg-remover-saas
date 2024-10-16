import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between  gap-4 px-4 lg:px-44 py-3'>
      <img src={assets.logo} alt="" width={150}/>
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden'>All right reserved. Copyright @bg removal</p>
      <div className='flex gap-1'>
        <img src={assets.facebook_icon} alt="" className='cursor-pointer'/>
        <img src={assets.twitter_icon} alt="" className='cursor-pointer'/>
        <img src={assets.google_plus_icon} alt="" className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer
