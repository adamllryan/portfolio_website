import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import File from '../resume.pdf'
const Header = () => {
  return (
    <div className='header'>
        <img src='polygons.png' alt='polygons' className='header__img'/>
        <div className='header__title'>
            Adam Ryan
        </div>
        <div className='header__refs'>
            
            <a className='header__reflink' href='mailto:adam@ry3.io'>
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            
            <a className='header__reflink' href='https://www.linkedin.com/in/adamllryan/'>
                <FontAwesomeIcon icon={ faLinkedinIn } />
            </a>
            
            <a className='header__reflink' href='https://www.github.com/adamllryan'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            
            <a className='header__reflink' href={File}>
                <FontAwesomeIcon icon={faPaperclip} />
            </a>
        </div>
    </div>
  )
}

export default Header
