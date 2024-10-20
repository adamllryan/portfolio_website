import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import grad cap, briefcase, and code icons
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

const Bio = () => {
  return (
    <div className="bio">
        <div className="bio__content">
            <p>
                    <FontAwesomeIcon icon={faCode} className="bio__icon" />
                    As a software engineer, I bring a comprehensive background in computer science, specializing in <b>machine learning</b>, <b>full-stack</b> development, and automation. I also enjoy working in networking and <b>embedded</b> systems. 
            </p>
            <p>
                    <FontAwesomeIcon icon={faGraduationCap} className="bio__icon" />
                    Currently, I am a full-time student at The Ohio State University, pursuing a <b>Master's</b> degree in Computer Science & Engineering. I am involved in <b>research</b> in artificial intelligence in affiliation with Ohio State University and University of Illinois Urbana-Champagin. I am graduating in May, 2025.
            </p>
            <p>
                    <FontAwesomeIcon icon={faBriefcase} className="bio__icon" />
                    Upon graduation, I am returning to <b>Fidelity Investments</b> as an associate software engineer in Durham, North Carolina. 
            </p>
        </div>
    </div>
  )
}

export default Bio 
