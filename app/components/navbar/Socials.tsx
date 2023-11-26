import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


function Socials() {
  return (
    <div className='flex space-x-6 sm:space-x-16 md:space-x-28 lg:space-x-16'>
        <div className='flex space-x-1'>
            < FaPhone size={18} />
            <p className='hidden lg:inline'>+91 7356740133</p>
        </div>
        <div className='flex space-x-1'>
            <MdEmail size={25} /> 
            <p className='hidden lg:inline'>contact@gmail.com</p>           
        </div>
        <div className='flex space-x-1'>
            <AiFillInstagram size={25} />
            <p className='hidden lg:inline'>instagram</p>            
        </div>
    </div>
  )
}

export default Socials