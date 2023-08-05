import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <div className='w-screen max-w-4xl p-4 bg-slate-100 rounded-t-xl rounded-b-md shadow-xl border-slate-200 border-2'>
        {/* Title */}
        <div className='text-center underline decoration-indigo-400'>
            Adam Ryan
        </div>
        {/* Hyperinks */}
        <div className='flex justify-center items-center text-xs text-slate-600 py-4'>
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
            <a className='group transition duration-200 font-semibold' href='mailto:adam@ry3.io'>
                adam@ry3.io
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-400"></span>
            </a>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <a className='group transition duration-200 px-2' href='https://www.linkedin.com/in/adamllryan/'>
            
                LinkedIn
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-500"></span>
            </a>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <a className='group transition duration-200 px-2' href='https://www.github.com/adamllryan'>
                GitHub<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-600"></span>
            
            </a>
            <FontAwesomeIcon icon="fa-solid fa-paperclip" />
            <a className='group transition duration-200 px-2' href='null'>
                
                Resume
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-700"></span>
            </a>
        </div>
    </div>
  )
}

export default Header