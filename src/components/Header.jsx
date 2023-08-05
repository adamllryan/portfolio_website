import React from 'react'

const Header = () => {
  return (
    <div className='p-4 bg-slate-100 rounded-xl shadow-xl'>
        {/* Title */}
        <div className='text-center'>
            Adam Ryan
        </div>
        {/* Hyperinks */}
        <div className='flex justify-center items-center text-xs text-slate-600 py-4'>
            <a className='group transition duration-200 font-semibold' href='mailto:adam@ry3.io'>
                adam@ry3.io,
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-400"></span>
            
            </a>
            <a className='group transition duration-200 px-2' href='https://www.linkedin.com/in/adamllryan/'>
                LinkedIn
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-500"></span>
            </a>
            <a className='group transition duration-200 px-2' href='https://www.github.com/adamllryan'>
                GitHub<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-600"></span>
            
            </a>
            <a className='group transition duration-200 px-2' href='null'>
                
                Resume
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-700"></span>
            </a>
        </div>
    </div>
  )
}

export default Header