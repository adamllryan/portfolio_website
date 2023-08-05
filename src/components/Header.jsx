import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='w-screen max-w-4xl p-4 bg-slate-100 rounded-t-xl rounded-b-md shadow-xl border-slate-200 border-2'>
        {/* Title */}
        <div className='text-center text-xl underline decoration-indigo-400'>
            Adam Ryan
        </div>
        {/* Hyperinks */}
        <div className='flex justify-center items-center text-xs text-slate-600 py-4 gap-4'>
            
            <a className='group transition duration-200 font-semibold' href='mailto:adam@ry3.io'>
                <FontAwesomeIcon icon={faEnvelope} />
                <label className='ml-0.5'>
                    adam@ry3.io
                </label>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-slate-400"></span>
            </a>
            
            <a className='group transition duration-200 px-2' href='https://www.linkedin.com/in/adamllryan/'>
                <FontAwesomeIcon icon={ faLinkedinIn } />
                <label className='ml-0.5'>
                    LinkedIn
                </label>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-500"></span>
            </a>
            
            <a className='group transition duration-200 px-2' href='https://www.github.com/adamllryan'>
                <FontAwesomeIcon icon={faGithub}/>
                <label className='ml-0.5'>
                    GitHub
                </label>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-600"></span>
            </a>
            
            <a className='group transition duration-200 px-2' href='null'>
                <FontAwesomeIcon icon={faPaperclip} />
                <label className='ml-0.5'>
                    Resume
                </label>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-700"></span>
            </a>
        </div>
    </div>
  )
}

export default Header